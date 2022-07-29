import { addEvent } from "./event";
import { REACT_TEXT } from "./utils";

function render(vdom, container) {
  console.log(vdom);
  debugger;
  mount(vdom, container);
}

export function mount(vdom, container) {
  let newDOM = createDOM(vdom);
  container.appendChild(newDOM);
}

//todo🤠  不管函数组件还是类组件其实归根内部都是div最终都是得走createDOM来完成渲染的
function createDOM(vdom) {
  let { type, props } = vdom;
  let dom;
  if (type === REACT_TEXT) {
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
  if (props) {
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
  return dom;
}

//根据虚拟DOM返回真实DOM
export function findDOM(vdom) {
  if (!vdom) return null;
  if (vdom.dom) {
    return vdom.dom;
  } else {
    //防止套中套函数   🙃不理解也无所谓 就记住就好
    let renderVdom = vdom.oldRenderVdom;
    return findDOM(renderVdom);
  }
}
//👋更新
export function compareTwoVdom(parentDOM, oldDOM, newVdom) {
  let newDOM = createDOM(newVdom);
  parentDOM.replaceChild(newDOM, oldDOM);
}

//🤑类组件的渲染
function mountClassComponent(vdom) {
  let { type: ClassVdom, props } = vdom;
  const classInstance = new ClassVdom(props);
  //todo 😻 这2个都是由babel转换然后通过createElement返回的虚拟DOM
  //😱vdom如果是类组件只是描述类组件的还不是可以直接生成的div
  //😂这个renderVdom就是类组件里面的div

  let renderVdom = classInstance.render();
  //😀把类组件渲染的虚拟DOM放到类的实例上
  classInstance.oldRenderVdom = vdom.oldRenderVdom = renderVdom;
  //🙃 console.log(vdom);  描述类组件的虚拟DOM
  //🚀 console.log(renderVdom);  描述类组件render函数里面的虚拟DOM
  return createDOM(renderVdom);
}

//😙函数组件的渲染
function mountFunctionComponent(vdom) {
  let { type: FunctionVdom, props } = vdom;
  //todo 😍 把props传入函数执行  然后浏览器会把这个JSX函数转换成createElement类型虚拟DOM的语法
  let renderVdom = FunctionVdom(props);
  //把函数组件渲染的虚拟DOM放在函数组件自己的虚拟DOM上
  vdom.oldRenderVdom = renderVdom;
  console.log(vdom);
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
