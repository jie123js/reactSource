/**
 * saga其实是采用Generator生成器函数来产出effect对象的
 * yield 后面跟的就是一个指令对象，我们称为effect对象
 * 指令是一个指令描述器，描述我们想让saga执行器帮我们做的事情
 */

function* rootSaga() {
  yield { type: 'PUT', action: { type: 'ADD' } }
  yield new Promise(resolve => setTimeout(resolve, 3000));
  yield { type: 'PUT', action: { type: "MINUS" } }
}
//redux-saga工作原理和co库是基本一样的
function runSaga(saga) {
  //先执行生成器，返回它的迭代器
  const it = saga();
  function next() {
    const { done, value: effect } = it.next();
    //如果此 saga没有结束
    if (!done) {
      if (effect instanceof Promise) {
        effect.then(next)
      } else if (effect.type === 'PUT') {
        console.log(`向仓库派发一个动作${JSON.stringify(effect.action)}`);
        next();
      } else {
        next();
      }
    }
  }
  next();
}
runSaga(rootSaga);