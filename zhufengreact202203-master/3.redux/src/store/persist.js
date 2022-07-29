function persist({ getState, dispatch }) {
  //现在只考虑仓库只有一个中间件的情况，那么这个next指的就是store原生的或者说原始的那个dispatch方法
  return function (next) {//这个是为了后面级联用的，我们可以同时使用多个中间件
    return function (action) {//这个才是我们真正改造后新的dispatch方法
      next(action);
      let nextState = getState();
      localStorage.setItem('counter', JSON.stringify(nextState));
      return action;
    }
  }
}
export default persist;