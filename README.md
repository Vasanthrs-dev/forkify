# Forkify - Recipe App

Welcome to Forkify, a JavaScript-based recipe application that allows users to search for, view, and manage recipes efficiently. This project is designed to demonstrate asynchronous operations, event handling, and state management using JavaScript. The application interacts with an API to fetch recipes and supports bookmarking and customizing servings.

## Features

- **Search Recipes**: Users can search for recipes using keywords. The results are fetched asynchronously from the API and rendered on the UI.
- **Pagination**: Navigate through search results using pagination buttons.
- **View Recipes**: Click on any recipe from the search results to view its details. The application loads and displays the recipe asynchronously based on the recipe ID.
- **Bookmark Recipes**: Users can bookmark their favorite recipes. Bookmarks are stored in local storage and persist even after the app is closed.
- **Update Servings**: Customize the servings for any recipe. The UI updates dynamically based on the selected servings.
- **Add New Recipe**: Users can add their own recipes, which are then uploaded to the API asynchronously.

## Screenshot

![1 edit](https://github.com/user-attachments/assets/670b85c8-def3-4e74-b5f3-44514ad5058b)
![2 edit](https://github.com/user-attachments/assets/51b148fd-9732-4c6b-8613-ddce5e02020f)
![3 edit](https://github.com/user-attachments/assets/5ac57e93-1246-4248-8cdc-bf92c77b41b1)

## Live Demo

Check out the live version of the project: [Live Demo](https://forkify-rs.netlify.app/)

## Flow Diagram

![Flow Diagram](https://github.com/user-attachments/assets/c14e87d8-48c9-48e8-ac07-5977cb6d3432)

This flow diagram illustrates the interaction between various components of the application:

1. **User Searches**: Users initiate a search, triggering an asynchronous API call to fetch and render search results.
2. **User Selects Recipe**: Clicking a recipe loads its details based on the recipe ID, and the bookmarks are loaded from local storage.
3. **User Updates Servings**: Users can adjust the servings, which dynamically updates the displayed recipe.
4. **Bookmark Management**: Users can bookmark or unbookmark recipes. Bookmarks are stored and retrieved from local storage.
5. **Add Recipe**: Users can click the "add recipe" button to open a recipe editor. Once the user creates a new recipe, it is uploaded asynchronously to the API.

## Technologies Used

- **JavaScript**: Core language for building the application logic.
- **HTML/SCSS**: Structuring and styling the user interface.
- **Local Storage**: Storing bookmarks locally for persistence.
- **API Integration**: Fetching and uploading recipes via API calls.
