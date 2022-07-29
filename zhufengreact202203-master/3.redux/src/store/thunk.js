//源码里store是不能派发函数的
function thunk({ getState, dispatch }) {
  return function (next) {
    return function (action) {//它就是我们最终改造后的dispatch
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      return next(action);
    }
  }
}
export default thunk;