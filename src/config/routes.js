const routes = [
    {
      path: '/',
      name: 'layout',
      icon: 'el-icon-location',
      component: r => require.ensure([], () => r(require('../components/layout/layout')), 'demo'),
      children: [
        {
          path: '/one',
          name: 'one',
          component: r => require.ensure([], () => r(require('../view/one')), 'demo'),
        },
        {
          path: '/two',
          name: 'two',
          component: r => require.ensure([], () => r(require('../view/two')), 'demo')
        },
        { path:'', redirect:"/login"},
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: r => require.ensure([], () => r(require('../view/login/login')), 'login'),
    },
    { path:'*', redirect:"/login"},
  ]

export default routes