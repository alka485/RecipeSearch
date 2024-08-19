# Recipe Search Website

A responsive web application that allows users to search for recipes by ingredients or dish names. The app fetches data from the Edamam Recipe API and displays a list of recipes that match the user's search query.

## Table of Contents

* Demo
* Features
* Technologies Used
* Getting Started
* Usage
* Project Structure
* API Reference

### Demo

* Github Link [Github](https://github.com/alka485/RecipeSearch.git).

* Deployed Link [live demo](https://recipesearch-1.onrender.com)

### Features

* Search for recipes by ingredient or dish name

* View recipe details, including ingredients and preparation instructions

* Responsive design, works on both desktop and mobile devices

* Debounced search input to optimize API calls

* Error handling for API requests

### Technologies Used

* React: JavaScript library for building user interfaces

* Styled Components: For styling React components

* Axios: Promise-based HTTP client for making API requests

* Vite: Fast front-end build tool

### Installation

* Clone the repository:
` git clone https://github.com/alka485/RecipeSearch.git
  cd recipe-search-website`

* Install dependencies:
`npm install`

* Set up environment variables:

Create a .env file in the root of the project.
Add your Edamam API credentials to the .env file as follows:
`
VITE_APPID=your_app_id
VITE_APPKEY=your_app_key
`

* Start the development server:
`npm run dev
Open your browser and visit http://localhost:5173.
`




