import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, NavLink, Navigate, useRoutes } from './react-router-dom';
import routesConfig from './routesConfig';
const activeStyle = { backgroundColor: 'green' };
const activeClassName = 'active';
const activeNavProps = {
  style: ({ isActive }) => isActive ? activeStyle : {},
  className: ({ isActive }) => isActive ? activeClassName : ''
}
const LazyFoo = React.lazy(() => import('./components/Foo'));
function App() {
  let [routes, setRoutes] = React.useState(routesConfig);
  const addRoute = () => {
    setRoutes([
      ...routes,
      {
        path: '/foo',
        element: (
          <React.Suspense fallback={<div>loading</div>}>
            <LazyFoo />
          </React.Suspense>
        )
      },
    ]);
  }
  return (
    <>
      {useRoutes(routes)}
      <button onClick={addRoute}>添加路由</button>
    </>
  )
}
ReactDOM.render(
  <BrowserRouter>
    <ul>
      <li><NavLink end={true} to="/" {...activeNavProps}>首页</NavLink></li>
      <li><NavLink to="/user/list" {...activeNavProps}>用户管理</NavLink></li>
      <li><NavLink to="/profile" {...activeNavProps}>个人中心</NavLink></li>
      <li><NavLink to="/foo" {...activeNavProps}>foo</NavLink></li>
    </ul>
    <App />
  </BrowserRouter >,
  document.getElementById('root')
);
/**
router-view
/user/* params.*=add
/user   params = {}
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/user/*" element={<User />} >
    <Route path="add" element={<UserAdd />} />
    <Route path="list" element={<UserList />} />
    <Route path="detail/:id" element={<UserDetail />} />
  </Route>
  <Route path="/profile" element={<Profile />} />
</Routes> 
 */