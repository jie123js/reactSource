import { createStore, applyMiddleware } from 'redux';
import combinedReducer from './reducers';
import { routerMiddleware, createReduxHistory } from '../history';
export const store = applyMiddleware(routerMiddleware)(createStore)(combinedReducer);
window.store = store;
export const history = createReduxHistory(store);