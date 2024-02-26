import { combineReducers } from 'redux';

// Import Reducers
import searchReducer from './searchResults.reducer';

// Combine Reducers
const rootReducer = combineReducers({
  searchReducer,
});

export default rootReducer;
