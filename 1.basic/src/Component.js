import { findDOM, compareTwoVdom } from "./react-dom";

export let updateQueue = {
  isBatchingUpdate: false, //当前是否处于批量更新
  updaters: new Set(), //保存updaters实例,重复的不会添加
  batchUpdate() {
    console.log(this.isBatchingUpdate);
    //批量更新的方法
    updateQueue.isBatchingUpdate = false;
    for (let update of updateQueue.updaters) {
      update.updateComponent();
    }
    //set的清楚方法
    updateQueue.updaters.clear();
  },
};

class Updater {
  constructor(classInstance) {
    this.classInstance = classInstance;
    this.pendingState = [];
  }
  addState(partialState) {
    this.pendingState.push(partialState);
    this.emitUpdate();
  }
  emitUpdate() {
    if (updateQueue.isBatchingUpdate) {
      //如果处于批量更新模式,只添加,不更新
      updateQueue.updaters.add(this);
    } else {
      this.updateComponent();
    }
  }
  updateComponent() {
    let { classInstance, pendingState } = this;
    if (pendingState.length > 0) {
      shouldUpdate(classInstance, this.getState());
    }
  }
  getState() {
    let { classInstance, pendingState } = this;
    let { state } = classInstance;
    pendingState.forEach((nextState) => {
      state = { ...state, ...nextState };
    });
    pendingState.length = 0;
    return state;
  }
}
function shouldUpdate(classInstance, nextState) {
  classInstance.state = nextState;
  classInstance.forceUpdate();
}
export class Component {
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {};

    //todo 👿 理解这个this传进去的意思   supper继承的时候会把父类的constructor也执行一遍 自己有的保留没有的增加 执行的时候这个this就是子类的this了
    this.updater = new Updater(this);
  }
  setState(partialState) {
    this.updater.addState(partialState);
  }
  forceUpdate() {
    let oldRenderVdom = this.oldRenderVdom;
    debugger;
    let oldDOM = findDOM(oldRenderVdom);
    console.log("forceUpdate");
    let newRenderVdom = this.render();

    compareTwoVdom(oldDOM.parentNode, oldDOM, newRenderVdom);
    this.oldRenderVdom = newRenderVdom;
  }
}
