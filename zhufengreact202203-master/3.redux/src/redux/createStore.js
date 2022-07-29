function createStore(reducer, preloadedState) {
  debugger
  let state = preloadedState;
  let listeners = [];
  function getState() {
    return state;
  }
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(l => l());
    return action;
  }
  dispatch({ type: '@@REDUX/INIT' });
  //store仓库就是一个普通JS对象，但是它会引用闭包的变量
  return {
    getState,
    dispatch,
    subscribe
  }
}
export default createStore;