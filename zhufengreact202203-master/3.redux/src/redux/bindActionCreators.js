/**
 * 绑定action创建者和仓库的dispatch派发动作的方法
 * 返回的对应的签名和原来的是一样的，只是会自动派发原来的动作
 * @param {*} actionCreators 
 * @param {*} dispatch 
 */
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
  }
  return boundActionCreators;
}
/**
 * 把actionCreator和dispatch方法进行绑定，返回一个新的actionCreator
 * @param {*} actionCreator 老的actionCreator
 * @param {*} dispatch 派发的方法
 */
function bindActionCreator(actionCreator, dispatch) {
  return function (...args) {
    return dispatch(actionCreator.apply(this, args));
  }
}

export default bindActionCreators;