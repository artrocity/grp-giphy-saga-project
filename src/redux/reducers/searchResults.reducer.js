import {
  REQUEST_GIPHY_SEARCH,
  GIPHY_SEARCH_SUCCESS,
  GIPHY_SEARCH_FAILURE,
} from '../../components/Actions/Actions';

const initialState = {
  giphyResults: [],
  loading: false,
  error: null,
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIPHY_SEARCH:
      return { ...state, loading: true, error: null };
    case GIPHY_SEARCH_SUCCESS:
      return { ...state, loading: false, giphyResults: action.giphyResults };
    case GIPHY_SEARCH_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default searchReducer;
