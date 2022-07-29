import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import actionCreators from '@/store/actionCreators/auth';
function Login() {
  const nameRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const user = { name }
    dispatch(actionCreators.login(user));
  }
  return (
    <form onSubmit={handleSubmit}>
      用户名<input ref={nameRef} />
      <input type="submit"></input>
    </form>
  )
}
export default Login;