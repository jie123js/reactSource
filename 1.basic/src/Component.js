import { findDOM, compareTwoVdom } from "./react-dom";

export let updateQueue = {
  isBatchingUpdate: false, //当前是否处于批量更新
  updaters: new Set(), //保存updaters实例,重复的不会添加
  batchUpdate() {
    //批量更新的方法
    updateQueue.isBatchingUpdate = false;
    for (let update of updateQueue.updaters) {
      update.updateComponent();
    }
    //set的清除方法
    updateQueue.updaters.clear();
  },
};

class Updater {
  constructor(classInstance) {
    this.classInstance = classInstance;
    this.pendingState = [];
    this.callbacks = [];
  }
  addState(partialState, callback) {
    this.pendingState.push(partialState);
    if (callback) {
      this.callbacks.push(callback);
    }

    this.emitUpdate();
  }
  emitUpdate(nextProps) {
    /*    
    todo react18
    updateQueue.updaters.add(this);
    todo 🥳queueMicrotask  原生的微任务
    queueMicrotask(updateQueue.batchUpdate); */
    this.nextProps = nextProps;
    if (updateQueue.isBatchingUpdate) {
      //如果处于批量更新模式,只添加,不更新
      updateQueue.updaters.add(this);
    } else {
      this.updateComponent();
    }
  }
  updateComponent() {
    let { classInstance, pendingState, nextProps, callbacks } = this;

    if (nextProps || pendingState.length > 0) {
      //新属性或者新状态更新
      shouldUpdate(classInstance, nextProps, this.getState());
    }

    // queueMicrotask(() => {
    //   callbacks.forEach((i) => i.call(this));
    //   callbacks.length = 0;
    // });
  }
  getState() {
    let { classInstance, pendingState } = this;
    let { state } = classInstance;
    pendingState.forEach((nextState) => {
      //todo 😐传值也可以是函数
      if (typeof nextState == "function") {
        nextState = nextState(state);
      }
      state = { ...state, ...nextState };
    });
    pendingState.length = 0;
    return state;
  }
}
function shouldUpdate(classInstance, nextProps, nextState) {
  //表示是否要更新
  let willUpdate = true;
  //有方法且为false,表示不更新
  if (
    classInstance.shouldComponentUpdate &&
    !classInstance.shouldComponentUpdate(nextProps, nextState)
  ) {
    willUpdate = false;
  }
  if (willUpdate && classInstance.UNSAFE_componentWillUpdate) {
    classInstance.UNSAFE_componentWillUpdate();
  }
  if (nextProps) {
    classInstance.props = nextProps;
  }
  //🙃不管页面更新不更新,类的实例的state都会更改
  classInstance.state = nextState;
  if (willUpdate) classInstance.forceUpdate();
  //😏下面的代码是生命周期前的
  // classInstance.state = nextState;
  // classInstance.forceUpdate();
}
export class Component {
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {};

    //todo 👿 理解这个this传进去的意思   supper继承的时候会把父类的constructor也执行一遍 自己有的保留没有的增加 执行的时候这个this就是子类的this了
    this.updater = new Updater(this);
  }
  setState(partialState, callback) {
    this.updater.addState(partialState, callback);
  }
  forceUpdate() {
    let oldRenderVdom = this.oldRenderVdom;

    let oldDOM = findDOM(oldRenderVdom);

    let newRenderVdom = this.render();

    // compareTwoVdom(oldDOM.parentNode, oldDOM, newRenderVdom);
    compareTwoVdom(oldDOM, oldDOM.parentNode, oldRenderVdom, newRenderVdom);
    this.oldRenderVdom = newRenderVdom;
    if (this.componentDidUpdate) {
      this.componentDidUpdate(this.props, this.state);
    }
  }
}
