import 'core-js/stable'; // Polyfilling everything
import 'regenerator-runtime/runtime'; // Polyfilling async/await
import * as model from './model.js'; // Importing the model
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js'; // Importing the search
import resultsView from './views/resultsView.js'; // Importing the results view
import paginationView from './views/paginationView.js'; // Importing the pagination view

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // 2) Loading recipe
    await model.loadRecipe(id);

    // 3) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner(); // render the spinner
    const query = searchView.getQuery(); // get the query from the search view
    if (!query) return; // if there is no query, return

    await model.loadSearchResults(query); // load the search results
    //console.log(model.state.search.results); // log the search results

    resultsView.render(model.getSearchResultsPage()); // render the search results

    paginationView.render(model.state.search); // render the pagination
  } catch (err) {
    console.log(err); // log the error
  }
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked)
    model.addBookmark(model.state.recipe); // Add bookmark
  else if (model.state.recipe.bookmarked)
    model.deleteBookmark(model.state.recipe.id); // Delete bookmark
  recipeView.update(model.state.recipe); // Update recipe view
};

const controlPagination = function (goToPage) {
  console.log(goToPage); // log the page number
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes); // add the event listener to the recipe view
  recipeView.addHandlerUpdateServings(controlServings); // call the controlServings function
  recipeView.addHandlerAddBookmark(controlAddBookmark); // add the event listener to the recipe view
  searchView.addHandlerSearch(controlSearchResults);

  paginationView.addHandlerClick(controlPagination); // add the event listener to the pagination view
};

init(); // initialize the app
