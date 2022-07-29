/* eslint-disable jsx-a11y/anchor-is-valid */
import { createHashHistory, createBrowserHistory } from '../history';
import React from 'react';
import { Router, useLocation, useNavigate } from '../react-router';
export * from '../react-router'
export function HashRouter({ children }) {
  let historyRef = React.useRef();
  //history对象只会在刚开始的时候创建一次，后面就不不再变了，它就是单 例的
  if (!historyRef.current) {
    historyRef.current = createHashHistory()
  }
  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action, //跳转到当前路径的动作类型  pushState=>PUSH, go back forward=> POP
    location: history.location //当前的路径 window.location.pathname
  });
  //history是不会变的。但是它的属性会变啊
  //history.push('/user');
  //监听history中的路径变化，当历史对象中的路径发生改变后执行setState
  //此回调只会执行一次，只会监听 一次，但路径发生改变的时候没有浅比较 ，肯定 会执行
  React.useLayoutEffect(() => history.listen(({ action, location }) => {
    setState({ action, location });
  }), [history]);
  return (
    <Router
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}
export function BrowserRouter({ children }) {
  let historyRef = React.useRef();
  if (!historyRef.current) {
    historyRef.current = createBrowserHistory()
  }
  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action, //跳转到当前路径的动作类型  pushState=>PUSH, go back forward=> POP
    location: history.location //当前的路径 window.location.pathname
  });
  React.useLayoutEffect(() => history.listen((state) => {
    setState(state);
  }), [history]);
  return (
    <Router
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}
export function Link(props) {
  let navigate = useNavigate();
  const { to, children, ...rest } = props;
  return <a onClick={() => navigate(to)} {...rest}>{children}</a>
}
/**
 * 
 * @param {*} className 类名 可以是固定的字符串，也可以是一个函数，函数的参数是isActive
 * @param {*} end 是否结束
 * @param {*} style 行内样式 可以是固定的字符串，也可以是一个函数，函数的参数是isActive
 * @param {*} to 点击导航跳转的路径
 * @param {*} children 子组件
 */
export function NavLink({ className: classNameProp = '', end = false, style: styleProp = {}, to, children, ...rest }) {
  let location = useLocation();
  let path = { pathname: to };
  let locationPathname = location.pathname;//当前的路径
  let toPathname = path.pathname;//当前导航想要跳转的路径
  //如果路径一样，或者 不结束，并且当前的路径是以to开头的，并且下一个字符/，也就是路径路径分隔符
  let isActive = locationPathname === toPathname
    || (!end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === '/')
  let className;
  if (typeof classNameProp === 'function') {
    className = classNameProp({
      isActive
    });
  }
  let style;
  if (typeof styleProp === 'function') {
    style = styleProp({
      isActive
    });
  }
  return (
    <Link {...rest} to={to} className={className} style={style}>{children}</Link>
  )
}