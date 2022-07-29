import Home from './components/Home';
import User from './components/User';
import UserAdd from './components/UserAdd';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import Profile from './components/Profile';
import Protected from './components/Protected';
import Login from './components/Login';
import NotFound from './components/NotFound';
const routes = [
  { path: '/', index: true, element: <Home /> },
  { path: '/profile', element: <Profile /> },
  {
    path: '/user', element: <User />,
    children: [
      { path: 'list', element: <UserList /> },
      { path: 'add', element: <UserAdd /> },
      { path: 'detail', element: <UserDetail /> }
    ]
  },
  { path: '/profile', element: <Protected component={Profile} path="/profile" /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <NotFound /> }
]
export default routes;