import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/user.vue'
import types from '@/views/nav1/type'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import feature from './views/feature'

let routes = [{
    path: '/login',
    component: Login,
    name: 'login',
    hidden: true
  }, {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  //{ path: '/main', component: Main },
  {
    path: '/',
    component: Home,
    name: '基金管理',
    iconCls: 'el-icon-message', //图标样式class
    children: [{
      path: '/main',
      component: Main,
      name: 'home',
      hidden: true
    }, {
      path: '/table',
      component: Table,
      name: '基金列表'
    }, {
      path: '/fundTypes',
      component: types,
      name: '基金类型管理'
    } ]
  }, {
  //   path: '/',
  //   component: Home,
  //   name: '客户管理',
  //   iconCls: 'fa fa-id-card-o',
  //   children: [{
  //     path: '/page4',
  //     component: Page4,
  //     name: '页面4'
  //   }, {
  //     path: '/page5',
  //     component: Page5,
  //     name: '页面5'
  //   }]
  // }, {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-address-card',
    leaf: true, //只有一个节点
    children: [{
      path: '/user',
      component: user,
      name: '客户管理'
    }]
  }, {
    path: '/',
    component: Home,
    name: 'Charts',
    iconCls: 'fa fa-bar-chart',
    children: [{
      path: '/echarts',
      component: echarts,
      name: 'echarts'
    }]
  }, {
    path: '*',
    hidden: true,
    redirect: {
      path: '/404'
    }
  }, {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-database',
    leaf: true,
    children: [{
      path: '/advertisment',
      component: feature,
      name: '广告管理'
    }]
  }
];

export default routes;
