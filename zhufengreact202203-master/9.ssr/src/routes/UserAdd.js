import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionCreators from '@/store/actionCreators/user';
function UserAdd() {
  const nameRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    //添加用户
    dispatch(actionCreators.addUser({ id: Date.now(), name }));
    //跳转到用户列表页
    navigate('/user/list');
  }
  return (
    <form onSubmit={handleSubmit}>
      用户名 <input ref={nameRef} />
      <input type="submit"></input>
    </form>
  )
}
export default UserAdd;