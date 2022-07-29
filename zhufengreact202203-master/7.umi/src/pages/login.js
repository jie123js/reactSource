
import { history } from 'umi';
function Login(props) {
  const login = () => {
    localStorage.setItem('login', 'true');
    if (props.location.state && props.location.state.from) {
      history.push(props.location.state.from);
    }
  }
  return (
    <div>
      <button onClick={login}>登录</button>
    </div>
  )
}
export default Login;