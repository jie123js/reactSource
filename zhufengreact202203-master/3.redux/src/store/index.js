import { createStore, applyMiddleware } from '../redux';
import combinedReducer from './reducers';
import logger from './logger';
import promise from './promise';
import thunk from './thunk';
import persist from './persist';
const preloadState = JSON.parse(localStorage.getItem('counter'));
const store = applyMiddleware(promise, thunk, persist, logger)(createStore)(combinedReducer, preloadState)
export default store;




/**
 * 中间件的核心原理就是劫持原来老的dispatch方法
 * 在原来老的方法之前和之后做一些事情
 */

/*
const store = createStore(combinedReducer);

let dispatch = store.dispatch;
 store.dispatch = function (action) {
  console.log('prev state', store.getState());
  dispatch(action);
  console.log('next state', store.getState());
} */
/* store.dispatch = function (action) {
  setTimeout(() => {
    dispatch(action);
  }, 1000);
} */