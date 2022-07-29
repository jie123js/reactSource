import React from 'react';
import dva, { connect, push } from './dva';
import { Routes, Route, Link } from './dva/router';
import { createBrowserHistory } from 'history'
import createLogger from 'redux-logger';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const app = dva({
  history: createBrowserHistory(),
  initialState: { counter1: { number: 5 }, counter2: { number: 10 } },
  onAction: createLogger
});
//添加模型
app.model({
  namespace: 'counter1',
  state: { number: 0 },
  reducers: {
    add(state) {
      return { number: state.number + 1 };
    }
  },
  effects: {
    //监听派发给仓库的动作 counter1/asyncAdd 执行此saga
    *asyncAdd(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'counter1/add' });
    },
    *goto({ payload: [to] }, { put }) {
      yield put(push(to));
    }
  }
});
app.model({
  namespace: 'counter2',
  state: { number: 0 },
  reducers: {
    add(state) {
      return { number: state.number + 1 };
    }
  },
  effects: {
    //监听派发给仓库的动作 counter1/asyncAdd 执行此saga
    *asyncAdd(action, { call, put }) {

      yield call(delay, 1000);
      yield put({ type: 'counter2/add' });
    }
  }
});
const { counter1, counter2 } = app.getActionCreators();
function Counter1({ number, add, asyncAdd, goto }) {
  return (
    <div>
      <p>{number}</p>
      <button onClick={add}>+</button>
      <button onClick={asyncAdd}>asyncAdd</button>
      <button onClick={() => goto('/counter2')}>跳转到/counter2</button>
    </div>
  )
}
const ConnectedCounter1 = connect(
  state => state.counter1, counter1
)(Counter1);
function Counter2({ number, add, asyncAdd }) {
  return (
    <div>
      <p>{number}</p>
      <button onClick={add}>+</button>
      <button onClick={asyncAdd}>asyncAdd</button>
    </div>
  )
}
const ConnectedCounter2 = connect(
  state => state.counter2, counter2
)(Counter2);
const Home = () => <div>Home</div>
app.router(() => (
  <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/counter1">Counter1</Link></li>
      <li><Link to="/counter2">Counter2</Link></li>
    </ul>
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/counter1" element={<ConnectedCounter1 />} />
      <Route path="/counter2" element={<ConnectedCounter2 />} />
    </Routes>
  </>
));
app.start('#root');