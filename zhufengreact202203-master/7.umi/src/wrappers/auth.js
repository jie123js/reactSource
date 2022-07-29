
import { Redirect } from 'umi';
export default (props) => {
  const isLogin = localStorage.getItem('login');
  if (isLogin) {
    return props.children;
  } else {
    return <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />
  }
}