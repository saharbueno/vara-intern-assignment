# Vara Environmental Data Dashboard 🐻🌸

### [Want to get started and install right away? Click here!](#install-run)

## Description
A full-stack web application that imports environmental data from Google Sheets of a small-scale food processing plant and generates interactive charts in the frontend. The dashboard will showcase the current environmental metrics of the plant, providing insights into various aspects of its operations.

## Built With
<p align="center">
♡ HTML ❀ CSS ❀ JavaScript ❀ Tailwind CSS ❀ Bootstrap Icons ❀ Chart.js ❀ Google Sheets API ❀ Node.js ❀ Express.js ❀ Font Awesome ❀ OAuth 2.0 ♡
</p>

## Features
**♡** Interactive Sidebar
* Allows users to open and close the sidebar by clicking on an icon.
* Displays various environmental data categories as clickable links for easy navigation.

**♡** Search Functionality
* Provides a search bar to filter and scroll to specific environmental data categories. 
* Smoothly scrolls to the selected category upon entering a search query.

**♡** Dynamic Charts
* Utilizes Chart.js library to dynamically generate charts for different environmental data categories.
* Supports both line and bar chart types.
* Displays charts for water consumption, natural gas consumption, grid electricity consumption, steam consumption, food waste, solar KWh, and water recycled.

**♡** Chart Type Switching
* Allows users to switch between line and bar chart views for each data category.
* Toggles the display of line and bar charts with a button click.
* Updates the button text and icon based on the currently displayed chart type.

**♡** Responsive Design & Styling
* Ensures the dashboard layout is responsive across various screen sizes.
* Utilizes media queries to adjust the layout and size of elements for optimal viewing.
* Implements a visually appealing design with gradient backgrounds and iconography from Bootstrap Icons library.
* Uses custom fonts and colors to enhance the aesthetic appeal of the dashboard.

**♡** Data Fetching from Google Sheets
* Utilizes Google Sheets API for fetching environmental data from a specified spreadsheet.
* Reads data from the spreadsheet and populates the charts dynamically based on the retrieved data.

**♡** Server-side Configuration
* Implements a server-side component using Express.js.
* Configures the server to serve static files from a public directory.
* Handles URL encoding and sets the view engine to handle rendering of dynamic content.

**♡** Modular Code Structure
* Organizes code into separate HTML, CSS, JavaScript, and configuration files for better maintainability and readability.
*  Utilizes ES6 modules for importing and exporting functionalities across files.

## <a name="install-run">Install & Run</a>

*note: you will either need to use my google.json file or create your own using Google's API service -> [see info here](https://console.cloud.google.com/apis/library)*

```
git clone https://github.com/saharbueno/vara-intern-assignment.git // go to project directory
npm install
cd src
node app.mjs
```

## Thank You!
<p align="center">I would like to thank the co-founder of Vara who assigned this project to me. I learned so much throughout the process of creating this project-- I solidified my skills in Tailwind, learned how to use the Google Sheets API, and learned to make something more visually appealing with colors and design. I hope to continue to get better at being a full-stack developer and continue my career growth journey ໒꒰ྀི´ ˘ ` ꒱ྀིა!</p>

<p align="center">
  <i>˚ʚ♡ɞ˚ Thanks for visiting! ˚ʚ♡ɞ˚</i>
</p>
