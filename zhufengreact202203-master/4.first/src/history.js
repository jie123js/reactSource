import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from './redux-first-history';
const history = createBrowserHistory();
const { routerReducer, routerMiddleware, createReduxHistory } = createReduxHistoryContext({ history });
export {
  routerReducer,//这是一个将要被 合并的reducer,未来 将用来把路径信息放入仓库中
  routerMiddleware,//中间件，是用来接收动作，跳转路径的
  createReduxHistory//创建历史对象的
}