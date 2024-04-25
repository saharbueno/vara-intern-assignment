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
// testing . . . :3
app.get('/', async (req, res) => {
    const incomingData = await readSheet();
    // get labels
    const dateLabels = incomingData[0].slice(1);
    // get datasets
    const datasetArr = [];
    for (let i = 1; i < incomingData.length; i++) {
        // parse all strings in the array into numbers
        const newData = incomingData[i].splice(1).map((d) => {
            return +d;
        });
        const temp = {
            label: incomingData[i][0],
            backgroundColor: "#fccadb",
            borderColor: "#e2d3ea",
            data: newData,
            fill: false
        }
        datasetArr.push(temp);
    }
    const data = {
        labels: dateLabels,
        datasets: datasetArr
    };
    const jsonData = JSON.stringify(data);
    res.render('home', { chartData: jsonData });
});

// listen for port
app.listen(process.env.PORT || 3000);
