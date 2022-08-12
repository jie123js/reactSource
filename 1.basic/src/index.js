/*
 * @Author: louweizhen
 * @Date: 2022-07-21 17:19:54
 * @LastEditors: louweizhen
 * @LastEditTime: 2022-08-02 10:06:30
 * @Description: file content
 * @FilePath: \reactSource\1.basic\src\index.js
 */
import React from "./react";
import ReactDOM from "./react-dom";

class ClassMyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("count 1.constructor");
  }
  state = {
    number: 0,
  };

  change = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  UNSAFE_componentWillMount() {
    console.log("count 2.UNSAFE_componentWillMount");
  }
  componentDidMount() {
    console.log("count 4.componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("count 5.shouldComponentUpdate");

    return nextState.number % 2 == 0;
  }
  UNSAFE_componentWillUpdate() {
    console.log("count 6.UNSAFE_componentWillUpdate");
  }
  componentDidUpdate(newProps, nextState) {
    console.log("count 7.componentDidUpdate");
  }
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    console.log("count 3.render");
    return (
      <div>
        <p>{this.state.number}</p>
        {this.state.number === 4 ? null : (
          <ChildCounter count={this.state.number} />
        )}
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
class ChildCounter extends React.Component {
  UNSAFE_componentWillMount() {
    console.log("ChildCounter 1.componentWillMount");
  }
  componentDidMount() {
    console.log("ChildCounter 3.componentDidMount");
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("ChildCounter 4.UNSAFE_componentWillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ChildCounter 5.shouldComponentUpdate");
    return nextProps.count % 3 === 0;
  }
  render() {
    console.log("ChildCounter 2.render ");
    return <div>{this.props.count}</div>;
  }
  componentWillUnmount() {
    console.log("ChildCounter 6.componentWillUnmount ");
  }
}
ReactDOM.render(
  <ClassMyComponent name="gigi"></ClassMyComponent>,
  document.getElementById("root")
);
