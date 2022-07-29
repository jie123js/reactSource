function wrapPromise({ getState, dispatch }) {
  return function (next) {
    //此处的传的action就是promise
    return function (action) {//它就是我们最终改造后的dispatch
      if (action.then && typeof action.then === 'function') {
        next(action);
        return action;
      } else {
        let promise = Promise.resolve(action);
        next(promise);
        return promise;
      }
    }
  }
}
export default wrapPromise;