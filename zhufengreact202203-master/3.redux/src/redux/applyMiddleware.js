import compose from "./compose";

function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, preloadState) {
      const store = createStore(reducer, preloadState)
      let dispatch;
      //为什么不直接用store,而是创建一个新的middlewareAPI
      //最终目标是因为我们希望在中间件里拿 到的dispatch方法是改造后dispatch,而非改造前的dispatch
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action)  //store.dispatch
      }
      let chain = middlewares.map(middleware => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch
      };
    }
  }
}
export default applyMiddleware;