/*
 * @Author: louweizhen
 * @Date: 2022-07-21 17:19:54
 * @LastEditors: louweizhen
 * @LastEditTime: 2022-08-01 19:38:04
 * @Description: file content
 * @FilePath: \reactSource\1.basic\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import { updateQueue } from "./Component";
function Func(props, forwardRef) {
  return <div ref={forwardRef}>fucRef</div>;
}
const ForwaedFunc1 = React.forwardRef(Func);
console.log(<Func />);
console.log(ForwaedFunc1);

//todo 🥰类组件
class ClassMyComponent extends React.Component {
  constructor(props) {
    super(props); //todo
    this.a = React.createRef(); //{current:null}
    this.b = React.createRef();
    this.result = React.createRef();
    console.log(<ForwaedFunc1 ref={this.a}></ForwaedFunc1>);
  }
  state = {
    number: 0,
  };

  change = () => {
    console.log(11);
    console.log(this.a);
  };

  render() {
    return (
      <>
        <ForwaedFunc1 ref={this.a} onClick={this.change}></ForwaedFunc1>
        <button onClick={this.change}>{this.state.number}</button>
      </>
    );
  }
}
console.log(typeof ClassMyComponent);
ReactDOM.render(
  <ClassMyComponent name="gigi"></ClassMyComponent>,
  document.getElementById("root")
);
