import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createRoot } from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import prefixNamespace from './prefixNamespace';
import createSagaMiddleware from 'redux-saga';
import *  as sagaEffects from 'redux-saga/effects';
import { HistoryRouter } from 'redux-first-history/rr6';
import { createReduxHistoryContext, push } from 'redux-first-history';
import { createBrowserHistory, createHashHistory } from 'history';

export { connect, push }
function dva({ history = createHashHistory(), initialState, onAction }) {
  const app = {
    _models: [],
    model,
    _router: null,
    router,
    start,
    getActionCreators
  }
  const {
    routerReducer,
    routerMiddleware,
    createReduxHistory
  } = createReduxHistoryContext({ history });
  const initialReducers = { router: routerReducer };
  function model(model) {
    const prefixedModel = prefixNamespace(model);
    app._models.push(model);
    return prefixedModel;
  }
  function router(router) {
    app._router = router;
  }
  function getActionCreators() {
    let actionCreators = {};
    for (const model of app._models) {
      let { reducers, effects } = model;
      let reducerActionCreators = Object.keys(reducers).reduce((memo, key) => {
        memo[key.split('/')[1]] = (...args) => ({ type: key, payload: args })
        return memo;
      }, {});
      let effectsActionCreators = Object.keys(effects).reduce((memo, key) => {
        memo[key.split('/')[1]] = (...args) => ({ type: key, payload: args })
        return memo;
      }, {});
      actionCreators[model.namespace] = {
        ...reducerActionCreators, ...effectsActionCreators
      };
    }
    return actionCreators;
  }
  function start(selector) {
    for (const model of app._models) {
      initialReducers[model.namespace] = getReducer(model);
    }
    const combinedReducer = createReducer();
    const sagas = getSagas(app);
    //const store = createStore(combinedReducer);
    const sagaMiddleware = createSagaMiddleware();
    const store = applyMiddleware(sagaMiddleware, routerMiddleware, onAction)(createStore)(combinedReducer, initialState);
    sagas.forEach(saga => sagaMiddleware.run(saga));
    const reduxHistory = createReduxHistory(store)
    createRoot(document.querySelector(selector))
      .render(
        <Provider store={store}>
          <HistoryRouter history={reduxHistory}>
            {app._router()}
          </HistoryRouter>
        </Provider>
      );
    function createReducer() {
      return combineReducers(initialReducers);
    }
    function getReducer(model) {
      let { reducers, state: initialState } = model;
      let reducer = (state = initialState, action) => {
        //用动作类型去匹配reducer函数，如果能匹配上，就用此reducer函数计算新的状态
        let reducer = reducers[action.type];
        if (reducer) {
          return reducer(state, action);
        }
        //如果没有匹配上，就直接返回老状态
        return state;
      }
      return reducer;
    }
    function getSagas(app) {
      const sagas = [];
      for (const model of app._models) {
        sagas.push(getSaga(model));
      }
      return sagas;
    }
    function getSaga(model) {
      const { effects } = model;
      return function* () {
        for (const key in effects) {
          yield sagaEffects.takeEvery(key, function* (action) {
            yield effects[key](action, sagaEffects);
          });
        }
      }
    }
  }
  return app;
}
export default dva;