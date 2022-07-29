import { updateQueue } from "./Component";
/* 
  dom 真实DOM
  eventType 事件名称
  handler 事件内容

*/
export function addEvent(dom, eventType, handler) {
  //给真实DOM添加一个自定义属性
  let store = dom._store_ || (dom._store_ = {});
  //store.onclick = handlerFnclcik(函数内容)
  store[eventType] = handler;
  if (!document[eventType]) {
    //✍️这个是浏览器doucment绑定事件 冒泡的最外层  document.onclick
    document[eventType] = dispatchEvent;
  }

  //冒泡委托给document
  function dispatchEvent(e) {
    //事件名称 click和事件源就是被点击的对象
    //type,target是原生自带的  一个是类型click  一个是被点击的DOM
    let { type, target } = e;
    console.log(e);
    console.log(target);
    eventType = `on${type}`;
    updateQueue.isBatchingUpdate = true;
    //创建一个合成事件
    let syntheticEvent = createSyntheticEvent(e);
    let currentTarget = target;
    while (currentTarget) {
      //区分target(是不会变的点的谁就是谁) currentTarget(会变的因为会冒泡查找)
      syntheticEvent.currentTarget = currentTarget;
      //-store_就是你点击的那个真实DOM
      let { _store_ } = currentTarget;

      let handler = _store_ && _store_[eventType];
      handler && handler(syntheticEvent);
      if (syntheticEvent.isPropagationStopped) {
        break;
      }
      currentTarget = currentTarget.parentNode;
    }

    updateQueue.batchUpdate();

    function createSyntheticEvent(nativeEvent) {
      let syntheticEvent = {};
      //拷贝原生事件到合成事件
      for (let key in nativeEvent) {
        let value = nativeEvent[key];
        if (typeof value === "function") {
          syntheticEvent[key] = value.bind(nativeEvent);
        } else {
          syntheticEvent[key] = nativeEvent[key];
        }
      }
      //给合成事件添加新的属性
      syntheticEvent.nativeEvent = nativeEvent;
      syntheticEvent.isPropagationStopped = false; //是否已经阻止冒泡
      syntheticEvent.isDefaultPrevented = false; //是否阻止默认行为
      syntheticEvent.preventDefault = preventDefault;
      syntheticEvent.stopPropagation = stopPropagation;
      return syntheticEvent;
    }
    function preventDefault() {
      this.isDefaultPrevented = true;
      let event = this.nativeEvent;
      //浏览器兼容处理ie和非ie
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    }
    function stopPropagation() {
      this.isPropagationStopped = true;
      let event = this.nativeEvent;
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = false;
      }
    }
  }
}
