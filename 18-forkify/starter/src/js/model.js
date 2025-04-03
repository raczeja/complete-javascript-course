import { getJSON } from './helpers';
import { API_URL } from './config'; // for API URL
import { RES_PER_PAGE } from './config'; // for results per page
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(
      `${API_URL}${id}?key=40e71c78-262a-45a0-b445-8e754cb0fbdd`
    );
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(state.recipe);
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err; // Rethrow the error so that it can be caught in the controller
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query; // set the query in the state object

    const data = await getJSON(
      `${API_URL}?search=${query}&key=40e71c78-262a-45a0-b445-8e754cb0fbdd`
    );
    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err; // Rethrow the error so that it can be caught in the controller
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page; // set the current page in the state object

  const start = (page - 1) * state.search.resultsPerPage; // calculate the start index
  const end = page * state.search.resultsPerPage; // calculate the end index

  return state.search.results.slice(start, end); // return the results for the current page
};
