import { REACT_ELEMENT } from "./element";
import { wrapToVdomJ } from "./utils";
import { Component } from "./Component";
function createElement(type, config, children) {
  let key;
  let ref;
  if (config) {
    delete config.__source;
    delete config.__self;
    ref = config.ref;
    delete config.ref;
    key = config.key;
    delete config.key;
  }
  let props = { ...config };
  //todo🧸 如果长度大于3就变成数组
  if (arguments.length > 3) {
    props.children = Array.prototype.slice.call(arguments, 2).map(wrapToVdomJ);
  } else {
    props.children = wrapToVdomJ(children);
  }

  return {
    $$typeof: REACT_ELEMENT,
    type, //todo 😱如果是类组件或者是函数组件   这个type就是函数或者类
    props,
    ref,
    key,
  };
}

const React = {
  createElement,
  Component,
};

export default React;
