import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = () => (
  createStore(rootReducer)
);

export default configureStore;
