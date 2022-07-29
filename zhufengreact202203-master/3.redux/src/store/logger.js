

/**
 * 真正的redux中间件是有固定格式的
 * getState 获取仓库中的状态
 * dispatch是原来重新派发动作
 */
function logger({ getState, dispatch }) {
  //现在只考虑仓库只有一个中间件的情况，那么这个next指的就是store原生的或者说原始的那个dispatch方法
  return function (next) {//这个是为了后面级联用的，我们可以同时使用多个中间件
    return function (action) {//这个才是我们真正改造后新的dispatch方法
      console.log('prev state', getState());
      next(action);
      console.log('next state', getState());
      return action;
    }
  }
}
export default logger;