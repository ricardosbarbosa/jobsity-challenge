import { createStore, applyMiddleware , compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import initSagas from '../sagas/index';
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

initSagas(sagaMiddleware);
export default store