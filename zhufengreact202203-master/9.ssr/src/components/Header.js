import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/user/list">User</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/logout">Logout</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  )
}
export default Header;