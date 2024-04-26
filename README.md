# Vara Environmental Data Dashboard 🐻🌸

*** 

## Description
A full-stack web application that imports environmental data from Google Sheets of a small-scale food processing plant and generates interactive charts in the frontend. The dashboard will showcase the current environmental metrics of the plant, providing insights into various aspects of its operations.

*** 

## Built With
<p align="center">
♡ HTML ♡ CSS ♡ JavaScript ♡ Tailwind CSS ♡ Bootstrap Icons ♡ Chart.js ♡ Google Sheets API ♡ Node.js ♡ Express.js ♡ Font Awesome ♡ OAuth 2.0 ♡
</p>

***

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

***

## Install & Run
```
git clone https://github.com/saharbueno/vara-intern-assignment.git // go to project directory
npm install
cd src
node app.mjs
```