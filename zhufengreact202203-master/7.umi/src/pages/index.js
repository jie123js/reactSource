import React from 'react';
import { Link } from 'umi';

export default function Page() {
  return (
    <div>
      <h1 >首页</h1>
      <Link to="/profile">个人中心</Link>
    </div>
  );
}
