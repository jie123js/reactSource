import { ADD, ASYNC_ADD, MINUS, ASYNC_MINUS, STOP } from './action-types';
import { take, put, fork, takeEvery, call, cps, all, delay, cancel } from '../redux-saga/effects';//指令对象

function* add() {
  while (true) {
    yield delay(1000);
    yield put({ type: ADD });
  }
}
function* addWatcher() {
  const task = yield fork(add);
  yield take(STOP);
  yield cancel(task);
}
function* rootSaga() {
  yield addWatcher();

}
export default rootSaga;