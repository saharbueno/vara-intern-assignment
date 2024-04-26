// import all required libraries/mods
import './config.mjs';
import express from 'express';
import path from 'path';
import { google } from 'googleapis';
import { fileURLToPath } from 'url';

// start express application
const app = express();

// set the view engine
app.set('view engine', 'hbs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set the public directory as the location for static files
app.use(express.static(path.join(__dirname, 'public')));

// middleware to use req.body
app.use(express.urlencoded({extended: false}));

// authorization for google sheets api
const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_KEY_FILE || './google.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

// function to read google sheet
async function readSheet() {
    // set up to access necessary sheet
    const sheets = google.sheets({version: 'v4', auth});
    const spreadsheetId = '1xYtvMLc8LhBFOgovS8RLCQa2yso7C0ViuyFgXZdt6Z4';
    const range = 'Location-1!A1:M8';
    try {
        // await response
        const res = await sheets.spreadsheets.values.get({
            spreadsheetId, range
        });
        // get the rows of data
        const rows = res.data.values;
        // return the data
        return rows;
    } catch(e) {
        // log out the error
        console.log(e + `: ${e.message}`);
    }
}

// function to dynamically get chart data for a specific chart
async function getChartData(chart) {
    const incomingData = await readSheet();
    // get labels
    const dateLabels = incomingData[0].slice(1);
    // get dataset
    const datasetArr = [];
    // define color palette
    let colorPalette = ["#e2d3ea", "#fccadb", "#383b63", "#6e77fc", "#A7C4C2", "#81D2C7", "#BBE5ED", "#03B5AA", "#DDFFF7"];
    // get index of needed chart
    const index = incomingData.findIndex(item => item[0] === chart);
    // parse all strings in the array into numbers
    const incomingDataCopy = incomingData[index].slice(1);
    const newData = incomingDataCopy.map((d) => {
        return +d;
    });
    const colorIndex = index % colorPalette.length;
    // create data
    const temp = {
        label: incomingData[index][0],
        backgroundColor: colorPalette[colorIndex + 1],
        borderColor: colorPalette[colorIndex],
        data: newData,
        fill: false
    };
    datasetArr.push(temp);

    // create data
    const data = {
        labels: dateLabels,
        datasets: datasetArr
    };

    // return data
    return data;
}

// initialize all variables to store data 
let waterConsData;
let gasData;
let gridData;
let steamData;
let foodData;
let solarData;
let waterRecData;

// route for getting all charts
app.get('/dashboard', async (req, res) => {
    const incomingData = await readSheet();
    // get labels
    const dateLabels = incomingData[0].slice(1);
    // get datasets
    const datasetArr = [];

    // define color palette
    const colorPalette = ["#e2d3ea", "#fccadb", "#383b63", "#6e77fc", "#A7C4C2", "#81D2C7", "#BBE5ED", "#03B5AA", "#DDFFF7"];

    for (let i = 1; i < incomingData.length; i++) {
        // parse all strings in the array into numbers
        const newData = incomingData[i].splice(1).map((d) => {
            return +d;
        });
        const colorIndex = i % colorPalette.length;
        // create data
        const temp = {
            label: incomingData[i][0],
            backgroundColor: colorPalette[colorIndex + 1],
            borderColor: colorPalette[colorIndex],
            data: newData,
            fill: false
        };
        datasetArr.push(temp);
    }

    // create data object
    const data = {
        labels: dateLabels,
        datasets: datasetArr
    };

    // generate all charts
    waterConsData = JSON.stringify(await getChartData('Water consumption (m3)'));
    gasData = JSON.stringify(await getChartData('Natural gas consumption (m3)'));
    gridData = JSON.stringify(await getChartData('Grid Electricity Consumption (KWh)'));
    steamData = JSON.stringify(await getChartData('Steam Consumption (Tons)'));
    foodData = JSON.stringify(await getChartData('Food waste (Kg)'));
    solarData = JSON.stringify(await getChartData('Solar KWh'));
    waterRecData = JSON.stringify(await getChartData('Water Reycled (m3)'));
    const allJsonData = JSON.stringify(data);

    // render home page with all data
    res.render('home', {allJsonData, waterConsData, gasData, gridData, steamData, foodData, solarData, waterRecData});
});

// listen for port
app.listen(process.env.PORT || 3000);
