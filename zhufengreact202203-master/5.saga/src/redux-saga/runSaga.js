import { TAKE, PUT, FORK, CALL, CPS, ALL, CANCEL } from './effectTypes';
const CANCEL_TASK = 'CANCEL_TASK';
function runSaga(env, saga, callback) {
  const task = { cancel: () => next(CANCEL_TASK) };
  const { channel, dispatch, getState } = env;
  //如果saga是生成器，执行一下得到迭代器，如果已经是迭代器了，就直接用就可以了
  let it = typeof saga === 'function' ? saga() : saga;
  function next(value, isError) {
    let result;
    if (isError) {
      result = it.throw(value);
    } else if (value === CANCEL_TASK) {
      result = it.return(value);
    } else {
      result = it.next(value);
    }
    let { done, value: effect } = result;
    if (!done) {
      //如果value或者说effect是一个迭代器的话
      if (typeof effect[Symbol.iterator] === 'function') {
        runSaga(env, effect);
        next();
      } else if (effect instanceof Promise) {
        effect.then(next);
      } else {
        switch (effect.type) {
          case TAKE:
            //订阅actionType这个事件，回调就是next  channel eventEmitter实例
            channel.once(effect.actionType, next)
            //有些指令不会自动向下执行next,比如说take
            break;
          case PUT:
            dispatch(effect.action);
            next();//有些指令不会阻塞 ，会继续向下执行，比如put
            break;
          case FORK:
            let forkTask = runSaga(env, effect.saga)
            next(forkTask)
            break;
          case CALL:
            effect.fn(...effect.args).then(next);
            break;
          case CPS:
            effect.fn(...effect.args, (err, data) => {
              if (err) {
                next(err, true);
              } else {
                next(data);
              }
            })
            break;
          case ALL:
            const { iterators } = effect;
            let result = [];
            let count = 0;
            iterators.forEach((iterator, index) => {
              //每当你完成一个 saga后会执行回调
              runSaga(env, iterator, (data) => {
                result[index] = data;
                if (++count === iterators.length) {
                  next(result);
                }
              });
            });
            break;
          case CANCEL:
            effect.task.cancel();
            next();
            break;
          default:
            break;
        }
      }
    } else {
      callback && callback(effect);
    }
  }
  next();
  return task;
}
export default runSaga;