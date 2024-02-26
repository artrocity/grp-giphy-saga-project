// Import Libraries/Modules
import { create } from '@mui/material/styles/createTransitions';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Import reducers

// SAGA
const sagaMiddleware = createSagaMiddleware();

// Create the store
const store = createStore(
  // rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
