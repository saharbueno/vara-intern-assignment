# Vara Environmental Data Dashboard 🐻🌸

### [Want to get started and install right away? Click here!](#install-run)

## Description
A full-stack web application that imports environmental data from Google Sheets of a small-scale food processing plant and generates interactive charts in the frontend. The dashboard will showcase the current environmental metrics of the plant, providing insights into various aspects of its operations.

## Built With
<p align="center">
❀ HTML ❀ CSS ❀ JavaScript ❀ Tailwind CSS ❀ Bootstrap Icons ❀ Chart.js ❀ Google Sheets API ❀ Node.js ❀ Express.js ❀ Font Awesome ❀ OAuth 2.0 ❀
</p>

## Features
**♡ Interactive Sidebar**
* Allows users to open and close the sidebar by clicking on an icon.
* Displays various environmental data categories as clickable links for easy navigation.

**♡ Search Functionality**
* Provides a search bar to filter and scroll to specific environmental data categories. 
* Smoothly scrolls to the selected category upon entering a search query.

**♡ Dynamic Charts**
* Utilizes Chart.js library to dynamically generate charts for different environmental data categories.
* Supports both line and bar chart types.
* Displays charts for water consumption, natural gas consumption, grid electricity consumption, steam consumption, food waste, solar KWh, and water recycled.

**♡ Chart Type Switching**
* Allows users to switch between line and bar chart views for each data category.
* Toggles the display of line and bar charts with a button click.
* Updates the button text and icon based on the currently displayed chart type.

**♡ Responsive Design & Styling**
* Ensures the dashboard layout is responsive across various screen sizes.
* Utilizes media queries to adjust the layout and size of elements for optimal viewing.
* Implements a visually appealing design with gradient backgrounds and iconography from Bootstrap Icons library.
* Uses custom fonts and colors to enhance the aesthetic appeal of the dashboard.

**♡ Data Fetching from Google Sheets**
* Utilizes Google Sheets API for fetching environmental data from a specified spreadsheet.
* Reads data from the spreadsheet and populates the charts dynamically based on the retrieved data.

**♡ Server-side Configuration**
* Implements a server-side component using Express.js.
* Configures the server to serve static files from a public directory.
* Handles URL encoding and sets the view engine to handle rendering of dynamic content.

**♡ Modular Code Structure**
* Organizes code into separate HTML, CSS, JavaScript, and configuration files for better maintainability and readability.
*  Utilizes ES6 modules for importing and exporting functionalities across files.

## Visuals
<p align="center">
  <img width="547" alt="Screenshot 2024-04-26 at 2 29 34 AM" src="https://github.com/saharbueno/vara-intern-assignment/assets/69322388/658eb260-2167-481a-97cb-2c54b95afe41">
</p>
<p align="center">
  <img width="564" alt="Screenshot 2024-04-26 at 2 29 42 AM" src="https://github.com/saharbueno/vara-intern-assignment/assets/69322388/7195a848-03fa-49e3-b134-f0dc3049f229">
</p>
<p align="center">
  <img width="545" alt="Screenshot 2024-04-26 at 2 29 52 AM" src="https://github.com/saharbueno/vara-intern-assignment/assets/69322388/a1582fc9-d706-4f73-9ecf-27f9996307ab">
</p>

## <a name="install-run">Install & Run</a>

*note: you will either need to use my google.json file or create your own using Google's API service -> [see info here](https://console.cloud.google.com/apis/library)*

```
git clone https://github.com/saharbueno/vara-intern-assignment.git // go to project directory, ex: cd vara-intern-assignment
npm install
cd src
node app.mjs
```

**OR**

```
git clone https://github.com/saharbueno/vara-intern-assignment.git // go to project directory, ex: cd vara-intern-assignment
npm install
npm start
```

**OR**

[Visit my deployed site here!](https://vara-intern-assignment-7b10492b6031.herokuapp.com/)


## Thank You!
I would like to thank the **co-founder of Vara** who assigned this project to me. I learned so much throughout the process of creating this project-- I solidified my skills in Tailwind, learned how to use the Google Sheets API, and learned to make something more visually appealing with colors and design. I hope to continue to get better at being a full-stack developer and continue my career growth journey ໒꒰ྀི´ ˘ ` ꒱ྀིა!</p>

<p align="center">
  <a href="https://vara-intern-assignment-7b10492b6031.herokuapp.com/"><i>Visit my site!</i></a>
</p>

<p align="center">
  <i>˚ʚ♡ɞ˚ Thanks for visiting! ˚ʚ♡ɞ˚</i>
</p>

<p align="center">
  <img src="https://64.media.tumblr.com/af92d08e4b1d6b1299f07bb56cbcdabc/tumblr_nahffyXzlB1tgtx3jo1_1280.gifv" alt="Happy">
</p>
