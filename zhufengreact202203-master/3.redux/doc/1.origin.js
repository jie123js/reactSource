import { createStore } from './redux';
//获取DOM
const counterValue = document.getElementById('counterValue')
const addBtn = document.getElementById('addBtn')
const minusBtn = document.getElementById('minusBtn')
//定义了二个动作类型
const ADD = 'ADD';
const MINUS = 'MINUS';
/**
 * 处理器，或者新状态的计算函数
 * @param {*} state 老状态或者说上一个状态
 * @param {*} action 动作，派发给仓库的动作
 * @returns 
 */
function reducer(state = { number: 0 }, action) {
  switch (action.type) {
    case ADD:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
//创建一个仓库
const store = createStore(reducer);
//计算 把仓库中的状态取出来放在页面上
function render() {
  counterValue.innerHTML = store.getState().number;
}
//订阅仓库的状态变化事件，当仓库状态发生变化后重新执行render方法，获取最新的状态
store.subscribe(render);
render()
addBtn.addEventListener('click', () => {
  //向仓库派发一个动作，仓库会调用reducer函数，传入老状态和action,计算新状态
  const action = { type: ADD }
  store.dispatch(action);
});
minusBtn.addEventListener('click', () => {
  store.dispatch({ type: MINUS });
});