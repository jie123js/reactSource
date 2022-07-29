
import runSaga from './runSaga';
import EventEmitter from 'events';
function createSagaMiddleware() {
  //用来处理发布订阅的
  const channel = new EventEmitter();
  let boundRunSaga;
  function sagaMiddleware({ getState, dispatch }) {
    boundRunSaga = runSaga.bind(null, { channel, dispatch, getState });
    return function (next) {
      return function (action) {//这个方法就是我们这个中间件改造后的dispatch方法
        const result = next(action);
        //发布或者说触发事件，事件类型就是动作类型，传给回调的参数是action动作
        channel.emit(action.type, action);
        return result;
      }
    }
  }
  sagaMiddleware.run = (saga) => boundRunSaga(saga)
  return sagaMiddleware;
}
export default createSagaMiddleware