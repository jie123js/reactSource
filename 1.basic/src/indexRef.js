/*
 * @Author: J
 * @Date: 2022-08-1
 * @LastEditors: louweizhen
 * @Description:  ref  生命周期
 * @FilePath: \reactSource\1.basic\src\index.js
 */
import React from "./react";
import ReactDOM from "./react-dom";
import { updateQueue } from "./Component";

//todo 🥰类组件
class ClassMyComponent extends React.Component {
  constructor(props) {
    super(props); //todo
    this.a = React.createRef(); //{current:null}
    this.b = React.createRef();
    this.result = React.createRef();
  }
  state = {
    number: 0,
  };
  change = () => {
    this.setState(
      (state) => ({
        number: state.number + 1,
      }),
      () => {
        console.log(this.state.number);
      }
    );

    this.result.current.value =
      Number(this.a.current.value) + Number(this.b.current.value);
  };
  render() {
    return (
      <>
        <input ref={this.a} />+<input ref={this.b} />{" "}
        <button onClick={this.change}>=</button>
        <input ref={this.result}></input>
      </>
    );
  }
}
console.log(typeof ClassMyComponent);
ReactDOM.render(
  <ClassMyComponent name="gigi"></ClassMyComponent>,
  document.getElementById("root")
);
