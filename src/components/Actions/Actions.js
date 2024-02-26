// Action Types
export const REQUEST_GIPHY_SEARCH = 'REQUEST_GIPHY_SEARCH';
export const GIPHY_SEARCH_SUCCESS = 'GIPHY_SEARCH_SUCCESS';
export const GIPHY_SEARCH_FAILURE = 'GIPHY_SEARCH_FAILURE';

// Action Creators
export const requestGiphySearch = (searchString) => ({
  type: REQUEST_GIPHY_SEARCH,
  searchString,
});

export const giphySearchSuccess = (giphyResults) => ({
  type: GIPHY_SEARCH_SUCCESS,
  giphyResults,
});

export const giphySearchFailure = (error) => ({
  type: GIPHY_SEARCH_FAILURE,
  error,
});
