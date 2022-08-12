/*
 * @Author: J
 * @Date: 2022-08-1
 * @LastEditors: louweizhen
 * @Description:  ref  生命周期
 * @FilePath: \react自己打\reactSource\1.basic\src\index.js
 */
import React from "./react";
import ReactDOM from "./react-dom";
import { updateQueue } from "./Component";

//todo 🥰类组件
class ClassMyComponent extends React.Component {
  constructor(props) {
    super(props); //todo 🥶类似于 执行父类this指向子类React.Component.call(this)  子类就继承了父类的方法和属性了
    this.state = {
      num: 0,
    };
  }

  change = () => {
    //todo 😷react18以前有问题这个数据 结果是 0 0 4 7 因为setTimeout已经是合成事件外面了 那个true已经被改了 updateQueue.isBatchingUpdate = true;
    //todo 18版本改成了微任务就好了

    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num); //0
    this.setState({ num: this.state.num + 3 });
    console.log(this.state.num); //0
    setTimeout(() => {
      // 😇老版走到这里已经不是批量更新了  因为isBatchingUpdate已经是false了 下面变成同步了
      console.log(this.state.num); //3
      this.setState({ num: this.state.num + 1 });
      console.log(this.state.num); //4
      this.setState({ num: this.state.num + 3 });
      console.log(this.state.num); //7
    }, 1000);
  };

  render() {
    return (
      <div style={{ color: "orange" }}>
        {this.state.num}我是类组件{this.props.name}
        <button onClick={this.change}>点击</button>
      </div>
    );
  }
}
console.log(typeof ClassMyComponent);
ReactDOM.render(
  <ClassMyComponent name="gigi"></ClassMyComponent>,
  document.getElementById("root")
);
