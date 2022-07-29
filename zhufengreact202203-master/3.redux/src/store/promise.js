function promise({ getState, dispatch }) {
  return function (next) {
    //此处的传的action就是promise
    return function (action) {//它就是我们最终改造后的dispatch
      if (action.then && typeof action.then === 'function') {
        action.then(next);
        return action;
      } else {
        next(action);
        return Promise.resolve(action);
      }

    }
  }
}
export default promise;