import { combineReducers } from 'redux';

// Import Reducers
import searchReducer from './searchReducer.reducer';

// Combine Reducers
const rootReducer = combineReducers({
  searchReducer,
});

export default rootReducer;
