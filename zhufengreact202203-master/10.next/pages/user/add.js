import React from 'react';
import Layout from './index';
import request from '@/utils/request';
import router from 'next/router';
function UserList(props) {
  const nameRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const user = { name, password };
    const response = await request.post('/api/register', user).then(response => response.data)
    if (response.success) {
      router.push('/user/list');
    } else {
      alert('用户注册失败!');
    }
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <p>用户名<input ref={nameRef}/></p>
        <p>密码<input ref={passwordRef}/></p>
        <button type="submit">注册</button>
      </form>
    </Layout>
  )
}
export default UserList;