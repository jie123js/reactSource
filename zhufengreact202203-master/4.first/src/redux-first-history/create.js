import { createRouterMiddleware } from './middleware';
import { push, locationChangeAction } from './actions';
import { createRouterReducer } from './reducer';
/**
 * 创建redux版本的history 上下文
 * @param {*} history 原始的history对象  
 */
export function createReduxHistoryContext({ history }) {
  const routerMiddleware = createRouterMiddleware(history);
  const routerReducer = createRouterReducer(history);
  function createReduxHistory(store) {
    store.dispatch(locationChangeAction(history.location, history.action));
    //订阅路径变化事件，当路径发生变化后重新添发动作给仓库，重新保存路径
    history.listen(({ location, action }) => {
      store.dispatch(locationChangeAction(location, action));
    });
    return history;
  }
  return {
    routerMiddleware,
    createReduxHistory,
    routerReducer
  }
}