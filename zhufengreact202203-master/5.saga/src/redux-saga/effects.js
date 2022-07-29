
import { TAKE, PUT, FORK, CALL, CPS, ALL, CANCEL } from './effectTypes';
export function take(actionType) {
  //等待有人向仓库派发actionType这个类型的动作，派发后才会让当前的saga继续执行，否则 就卡在这不动了
  return { type: TAKE, actionType };
}
export function put(action) {
  return { type: PUT, action };
}
export function fork(saga) {
  return { type: FORK, saga };
}
export function takeEvery(actionType, saga) {
  function* takeEveryHelper() {
    while (true) {
      yield take(actionType);
      yield fork(saga);
    }
  }
  return fork(takeEveryHelper);
}
export function call(fn, ...args) {
  return { type: CALL, fn, args };
}
export function cps(fn, ...args) {
  return { type: CPS, fn, args };
}
export function all(iterators) {//迭代器数组 [it1,it2]
  return { type: ALL, iterators };
}
function delayFn(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}
export function delay(...args) {
  return call(delayFn, ...args);
}
export function cancel(task) {//迭代器数组 [it1,it2]
  return { type: CANCEL, task };
}