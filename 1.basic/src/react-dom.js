import { REACT_FORWARD_REF } from "./element";
import { addEvent } from "./event";
import { REACT_TEXT } from "./utils";

function render(vdom, container) {
  mount(vdom, container);
}

export function mount(vdom, container) {
  let newDOM = createDOM(vdom);
  container.appendChild(newDOM);
  if (newDOM.componentDidMount) {
    newDOM.componentDidMount();
  }
}

//todo🤠  不管函数组件还是类组件其实归根内部都是div最终都是得走createDOM来完成渲染的
function createDOM(vdom) {
  let { type, props, ref } = vdom;
  let dom;
  if (type && type.$$typeof === REACT_FORWARD_REF) {
    return mountForwardComponent(vdom);
  } else if (type === REACT_TEXT) {
    dom = document.createTextNode(props);
  } else if (typeof type === "function") {
    //! 🌤️类typeof type也是函数
    if (type.isReactComponent) {
      return mountClassComponent(vdom);
    } else {
      return mountFunctionComponent(vdom);
    }
  } else {
    dom = document.createElement(type);
  }
  if (typeof props == "object") {
    //这个==object 可写可不写
    updateProps(dom, {}, props);

    //只有一个孩子的情况
    if (typeof props.children == "object" && props.children.type) {
      mount(props.children, dom);
      //这个数组判断必须写  不然儿子是文本的情况 进入这个if语句直接报错了
    } else if (Array.isArray(props.children)) {
      reconcileChildren(props.children, dom);
    }
  }
  //虚拟DOM创建好真实DOM以后赋值
  vdom.dom = dom;
  if (ref) {
    ref.current = dom;
  }
  return dom;
}

//根据虚拟DOM返回真实DOM
export function findDOM(vdom) {
  if (!vdom) return null;
  if (vdom.dom) {
    //指的是原生组件的情况
    return vdom.dom;
  } else {
    //todo 2种写法如果在updateClassComponent中加上newVdom.oldRenderVdom=oldVdom.oldRenderVdom
    // vdom = vdom.oldRenderVdom;
    // 🤣没加就在这手动加  这个好理解点
    if (vdom.classInstance) {
      //类组件
      vdom = vdom.classInstance.oldRenderVdom;
    } else {
      //函数组件
      vdom = vdom.oldRenderVdom;
    }

    //防止套中套函数   🙃不理解也无所谓 就记住就好
    return findDOM(vdom);
  }
}
//👋更新
export function compareTwoVdom(oldDOM, parentDOM, oldVdom, newVdom) {
  if (!oldVdom && !newVdom) {
    return;
  } else if (oldVdom && !newVdom) {
    debugger;
    //老节点有 新节点没有 删除老的
    unMountVdom(oldVdom);
  } else if (!oldVdom && newVdom) {
    //老的没有,新的有
    let newDOM = createDOM(newVdom);
    parentDOM.appendChild(newDOM); //BUG
    if (newDOM.componentDidMount) {
      //⭐这个生命周期是有挂载在真实DOM上的
      newDOM.componentDidMount();
    }
  } else if (oldVdom && newVdom && oldVdom.type !== newVdom.type) {
    //老的有新的也有 但是类型不一样
    unMountVdom(oldVdom);
    let newDOM = createDOM(newVdom);
    parentDOM.appendChild(newDOM); //BUG
    if (newDOM.componentDidMount) {
      //⭐这个生命周期是有挂载在真实DOM上的
      newDOM.componentDidMount();
    }
  } else {
    //老节点有值,新节点有值,且类型相同,复用DOM更新props

    updateElement(parentDOM, oldVdom, newVdom);
  }
}

function updateElement(parentDOM, oldVdom, newVdom) {
  if (oldVdom.type === REACT_TEXT) {
    //文本节点是{type: Symbol(react.text), props: '1111', dom: text}
    let currentDOM = (newVdom.dom = findDOM(oldVdom));
    if (oldVdom.props !== newVdom.props) {
      currentDOM.textContent = newVdom.props;
    }
  } else if (typeof oldVdom.type === "string") {
    //div p 这种原生节点
    let currentDOM = (newVdom.dom = findDOM(oldVdom));
    updateProps(currentDOM, oldVdom.props, newVdom.props);
    updateChildren(currentDOM, oldVdom.props.children, newVdom.props.children);
  } else if (typeof oldVdom.type === "function") {
    //函数或者类的更新

    if (oldVdom.type.isReactComponent) {
      updateClassComponent(oldVdom, newVdom);
    } else {
      updateFunctionComponent(oldVdom, newVdom);
    }
  }
}
function updateFunctionComponent(oldVdom, newVdom) {
  let currentDOM = findDOM(oldVdom);
  if (!currentDOM) return;
  let { type, props } = newVdom;
  let newRenderVdom = type(props);
  compareTwoVdom(
    currentDOM,
    currentDOM.parentNode,
    oldVdom.oldRenderVdom,
    newRenderVdom
  );
  newVdom.oldRenderVdom = newRenderVdom;
}
function updateClassComponent(oldVdom, newVdom) {
  const classInstance = (newVdom.classInstance = oldVdom.classInstance);
  //newVdom.oldRenderVdom = oldVdom.oldRenderVdom;
  if (classInstance.UNSAFE_componentWillReceiveProps) {
    classInstance.UNSAFE_componentWillReceiveProps();
  }
  classInstance.updater.emitUpdate(newVdom.props);
}

/**
 * @description:对比儿子
 * @param {*} parentDOM 父亲真实DOM
 * @param {*} oldVchildren 老儿子的虚拟DOM数组
 * @param {*} newVchildren 新儿子虚拟DOM数组
 * @return {*}
 */
function updateChildren(parentDOM, oldVChildren, newVChildren) {
  oldVChildren = Array.isArray(oldVChildren) ? oldVChildren : [oldVChildren];
  newVChildren = Array.isArray(newVChildren) ? newVChildren : [newVChildren];
  //找到2个数组长的那个进行循环对比
  const maxLength = Math.max(oldVChildren.length, newVChildren.length);
  for (let i = 0; i < maxLength; i++) {
    compareTwoVdom(
      findDOM(oldVChildren[i]),
      parentDOM,
      oldVChildren[i],
      newVChildren[i]
    );
  }
}

/**
 * @description: 删除卸载老节点
 * @param {*} vdom 老节点的虚拟DOM
 */
function unMountVdom(vdom) {
  let { props, ref, classInstance } = vdom;
  let currentDOM = findDOM(vdom);
  if (classInstance && classInstance.UNSAFE_componentWillMount) {
    classInstance.UNSAFE_componentWillMount();
  }
  if (ref) {
    ref.current = null;
  }
  if (props.children) {
    let children = Array.isArray(props.children)
      ? props.children
      : [props, children];
    children.forEach(unMountVdom);
  }
  //😂removeChild,remove原生删除元素的方法 都可以
  //if (currentDOM) currentDOM.parentNode.removeChild(currentDOM);
  if (currentDOM) currentDOM.remove();
}

//🙂 forwardRef的渲染
function mountForwardComponent(vdom) {
  let { type, props, ref } = vdom;

  let renderVdom = type.render(props, ref);
  vdom.oldRenderVdom = renderVdom;
  return createDOM(renderVdom);
}

//🤑类组件的渲染
function mountClassComponent(vdom) {
  let { type: ClassVdom, props, ref } = vdom;
  const classInstance = new ClassVdom(props);
  vdom.classInstance = classInstance;
  //组件将要挂载
  if (classInstance.UNSAFE_componentWillMount) {
    classInstance.UNSAFE_componentWillMount();
  }
  //todo 😻 这2个都是由babel转换然后通过createElement返回的虚拟DOM
  //😱vdom如果是类组件只是描述类组件的还不是可以直接生成的div
  //😂这个renderVdom就是类组件里面的div
  if (ref) ref.current = classInstance;
  let renderVdom = classInstance.render();

  //😀把类组件渲染的虚拟DOM放到类的实例上
  classInstance.oldRenderVdom = vdom.oldRenderVdom = renderVdom;
  //🙃 console.log(vdom);  描述类组件的虚拟DOM
  //🚀 console.log(renderVdom);  描述类组件render函数里面的虚拟DOM

  //🤠组件的生命周期之componentDidMount是在元素挂载后 在这里不合适 所以需要把下面代码改一下
  //return createDOM(renderVdom);
  let dom = createDOM(renderVdom);
  if (classInstance.componentDidMount) {
    dom.componentDidMount = classInstance.componentDidMount.bind(classInstance);
  }
  return dom;
}

//😙函数组件的渲染
function mountFunctionComponent(vdom) {
  let { type: FunctionVdom, props } = vdom;
  //todo 😍 把props传入函数执行  然后浏览器会把这个JSX函数转换成createElement类型虚拟DOM的语法
  let renderVdom = FunctionVdom(props);
  //把函数组件渲染的虚拟DOM放在函数组件自己的虚拟DOM上
  vdom.oldRenderVdom = renderVdom;
  // console.log(vdom);
  return createDOM(renderVdom);
}

function updateProps(dom, oldProps = {}, newProps = {}) {
  for (let key in newProps) {
    //😮‍💨儿子不在这处理
    if (key === "children") continue;
    else if (key === "style") {
      let styleObj = newProps[key];
      for (let sty in styleObj) {
        dom.style[sty] = styleObj[sty];
      }
    } else if (/^on[A-Z].*/.test(key)) {
      //需要用合成事件实现批量更新
      //dom[key.toLowerCase()] = newProps[key];
      addEvent(dom, key.toLowerCase(), newProps[key]);
    } else {
      dom[key] = newProps[key];
    }
  }

  //😎循环老的 新的没有就删除
  for (let oldkey in oldProps) {
    if (!newProps.hasOwnProperty(oldkey)) {
      dom[oldkey] = null;
    }
  }
}

function reconcileChildren(childrenVdom, dom) {
  childrenVdom.forEach((vdom) => {
    mount(vdom, dom);
  });
}
const ReactDOM = {
  render,
};

export default ReactDOM;
