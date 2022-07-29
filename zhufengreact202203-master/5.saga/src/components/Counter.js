import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD, ASYNC_ADD, MINUS, ASYNC_MINUS, STOP } from '../store/action-types';
function Counter() {
  const number = useSelector(state => state.number);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{number}</p>
      <button onClick={() => dispatch({ type: ADD })}>ADD</button>
      <button onClick={() => dispatch({ type: ASYNC_ADD })}>ASYNC_ADD</button>
      <button onClick={() => dispatch({ type: STOP })}>STOP</button>
    </div>
  )
}
export default Counter;