import React from 'react';
import { connect } from '../react-redux';
import actionCreators from '../store/actionCreators/counter1';
class Counter1 extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
        <button onClick={this.props.thunkAdd}>thunkAdd</button>
        <button onClick={this.props.promiseAdd}>promiseAdd</button>
        <button onClick={this.props.thunkPromise}>thunkPromise</button>
      </div>
    )
  }
}
//connect是用来连接 组件和仓库的
//输入 把仓库的状态输入到组件中
//输出 把dispatch方法在组件是可以派发
const mapStateToProps = state => state.counter1;
const mapDispatchToProps = actionCreators;
/* const mapDispatchToProps = (dispatch) => (
  {
    add() {
      dispatch({ type: 'ADD1' });
    },
    minus() {
      dispatch({ type: 'MINUS1' });
    }
  }
) */
export default connect(
  mapStateToProps, mapDispatchToProps
)(Counter1);