import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function User() {
  return (
    <>
      <ul>
        <li><Link to="/user/add">添加用户</Link></li>
        <li><Link to="/user/list">用户列表</Link></li>
      </ul>
      <Outlet />
    </>
  )
}
export default User;