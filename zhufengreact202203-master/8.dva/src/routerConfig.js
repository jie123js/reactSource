export default [
  {
    path: '/',
    component: () => import('./routes/IndexPage'),
    routes: [
      {
        path: '/home',
        redirect: true,
        models: [() => import('./models/home')],
        component: () => import('./routes/Home')
      },
      {
        path: '/user',
        component: () => import('./routes/User')
      },
      {
        path: '/profile',
        component: () => import('./routes/Profile')
      },
      {
        path: '/login',
        component: () => import('./routes/Login')
      },
      {
        path: '/register',
        component: () => import('./routes/Register')
      }
    ]
  }
]
//V5 子路由是routes
//V6 子路由是children