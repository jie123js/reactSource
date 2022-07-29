let dispatch;
//希望我在调用middlewareAPI.dispatch的时候 能访问到新的改造后dispatch
const middlewareAPI = {
  dispatch: (action) => dispatch(action)  //store.dispatch
}
dispatch = () => console.log('新的dispatch');

middlewareAPI.dispatch({ type: "ADD" });