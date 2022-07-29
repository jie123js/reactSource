

function combineReducers(reducers) {
  //返回一个根reducer,也就redux应用的唯一的一个reducer
  return function (state = {}, action) {
    const { namespace } = action;
    let nextState = {
      ...state
    };
    if (namespace) {
      let reducerForKey = reducers[namespace];
      let prevStateForKey = state[namespace];
      nextState[namespace] = reducerForKey(prevStateForKey, action);
    } else {
      for (let key in reducers) {
        //此key的老状态
        let nextStateForKey = state[key];
        //此key的reducer函数
        let reducerForKey = reducers[key];
        //把这个key老的状态和动作传给这个key对应的reducer函数，计算出新状态，然后赋值给nextState的这个key属性
        nextState[key] = reducerForKey(nextStateForKey, action);
      }
    }
    return nextState;
  }
}
export default combineReducers;

/**
let reducers = {
  counter1:counter1Reducer,
  counter2:counter2Reducer
}
let nextState = {
  counter1: { number: 0 },
  counter2: { number: 0 }
}

这样for循环不是所有 的reducer都会执行一次么？ 
是的
就是这样的设计的
因为作为派发者甚至仓库本身根本不知道到底谁需要监听此动作，或者说响应此动作
 */