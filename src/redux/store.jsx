// Import Libraries/Modules
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Import reducers
import rootReducer from './reducers/_root.reducer';

import { watcherSaga } from './sagas/sagas';

// SAGA
const sagaMiddleware = createSagaMiddleware();

// Create the store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(watcherSaga);

export default store;
