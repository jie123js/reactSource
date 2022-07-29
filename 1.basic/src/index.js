import React from "./react";
import ReactDOM from "./react-dom";
import { updateQueue } from "./Component";
//todo 😀普通元素
/* let element = (
  <h1 className="box" style={{ color: "red" }}>
    <span className="box-son">你好</span>
    <span>123</span>
    111
  </h1>
); */

//todo 🤣函数组件

/* function FunctionComponent(props) {
  return (
    <div style={{ color: "red" }}>
      {props.name}:13{props.children[1]}
      {props.children[0]}
    </div>
  );
} */
/* console.log(
  <FunctionComponent name="gigi">
    <div className="slot-box">+321</div>
  </FunctionComponent>
); */
/* ReactDOM.render(
  <FunctionComponent name="gigi">
    <div className="slot-box">+321</div>
    <div className="slot-box2">-321</div>
  </FunctionComponent>,
  document.getElementById("root")
); */

//todo 🥰类组件
class ClassMyComponent extends React.Component {
  constructor(props) {
    super(props); //todo 🥶类似于 执行父类this指向子类React.Component.call(this)  子类就继承了父类的方法和属性了
    this.state = {
      num: 0,
    };
    // console.log(this);
  }

  /*
 没写合成事件的时候是这样写的
 change = () => {
    updateQueue.isBatchingUpdate = true;
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 3 });
    updateQueue.batchUpdate();
  }; */
  //☠️写个合成事件就不需要写上面那些了 合成事件里面写了已经
  change = () => {
    // updateQueue.isBatchingUpdate = true;
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 3 });
    console.log("我是父亲");
    // updateQueue.batchUpdate();
  };
  btnChange = (event) => {
    /*  🐮这个event拿到的不是原生事件  是react处理后的event
    好处是可以处理浏览器兼容性 因为组织冒泡各个浏览方法不一样 */
    console.log("我是子");
    event.stopPropagation();
  };
  render() {
    return (
      <div style={{ color: "orange" }} onClick={this.change}>
        {" "}
        {this.state.num}我是类组件{this.props.name}
        {this.props.children[0]}
        <button onClick={this.change}>点击</button>
      </div>
    );
  }
}
console.log(typeof ClassMyComponent);
ReactDOM.render(
  <ClassMyComponent name="gigi">
    <div className="slot-box">+321</div>
    <div className="slot-box2">-321</div>
  </ClassMyComponent>,
  document.getElementById("root")
);
/**
 * 如何获取 最新的state
 */
