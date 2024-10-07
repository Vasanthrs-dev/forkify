import * as model from './model.js';
import { MODEL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    // Loading Recipe
    recipeView.renderSpinner();
    // Update result view to mark selected search result
    resultsView.update(model.getSearchResultsPerPage());
    bookmarkView.update(model.state.bookmarks);

    await model.loadRecipe(id);

    // Rendering Recipe
    recipeView.render(model.state.recipe);

    // recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  resultsView.renderSpinner();
  const query = searchView.getQuery();
  if (!query) return;

  await model.loadSearchResults(query);
  // Render Results
  resultsView.render(model.getSearchResultsPerPage());

  // Render Pagination
  paginationView.render(model.state.search);
};

const controlPagination = function (goTo) {
  // Render NEW Results
  resultsView.render(model.getSearchResultsPerPage(goTo));

  // Render NEW Pagination
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  model.increaseServings(newServings);

  // Rendering Recipe
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookMark = function () {
  // 1) Add remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookMark(model.state.recipe);
  else model.removeBookMark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render Bookmarks
  bookmarkView.render(model.state.bookmarks);
};

const controlBookMark = function () {
  bookmarkView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render Recipe
    recipeView.render(model.state.recipe);

    // Success Message
    addRecipeView.renderMessage();

    // Render Bookmark
    bookmarkView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState('null', '', `#${model.state.recipe.id}`);
    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODEL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarkView.addHandlerRender(controlBookMark);
  recipeView.addHandlerRender(controlRecipes);
  searchView.addSearchHandler(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookMark(controlAddBookMark);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
