import {useDispatch} from 'react-redux';
import React from 'react';
import request from '@/utils/request';
import { SET_USER_INFO} from '@/store/action-types';
import router from 'next/router';
function Login(){
    const dispatch = useDispatch();
    const nameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        const user = { name, password };
        const response = await request.post('/api/login', user).then(response => response.data)
        if (response.success) {
            //当我登录成功之后需要把用户信息保存在redux的仓库中
            dispatch({ type: SET_USER_INFO, payload: response.data});
            router.push('/');
        } else {
            alert('用户登录失败!');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>用户名<input ref={nameRef} /></p>
            <p>密码<input ref={passwordRef} /></p>
            <button type="submit">登录</button>
        </form>
    )
}
export default Login;