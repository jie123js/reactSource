import React from "./react";
import ReactDOM from "./react-dom";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    //组件里可以定义状态对象
    this.state = { number: 0 };
  }
  handleClick = () => {
    //调用setState可以修改状态，并且让组件刷新
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <div id="counter">
        <p>{this.props.title}</p>
        <p>number:{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
ReactDOM.render(<Counter title="计数器" />, document.getElementById("root"));

//React17 fiber
//React18 加入优先级调度 并发执行

// class Polygon {
//   constructor(height, width) {
//     this.name = 'Rectangle';
//     this.height = height;
//     this.width = width;
//     this.state ={}
//     console.log(this);
//     this.sayName()
//   }
//   sayName() {
//     console.log(this);
//     console.log('Hi, I am a ', this.name + '.');
//   }
//   get area() {
//     return this.height * this.width;
//   }
//   set area(value) {
//     this._area = value;
//   }
// }

// class Square extends Polygon {
//   constructor(length) {
//    // this.height; // ReferenceError，super 需要先被调用！

//     // 这里，它调用父类的构造函数的，
//     // 作为 Polygon 的 height, width
//     super(length, length);
// this.state=123
//     // 注意：在派生的类中，在你可以使用'this'之前，必须先调用 super()。
//     // 忽略这，这将导致引用错误。
//     this.name = 'Square';
//   }
// }

// let demo = new Square
// demo.sayName()
