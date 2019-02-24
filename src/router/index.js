import Vue from 'vue';
import Router from 'vue-router';
import Tip404 from '@/pages/error/404'
import MainLayout from '@/layout/mainLayout';
import ApiLayout from '@/layout/apiLayout';
import Login from '@/pages/login/index';
import load from '@/components/load'
const Home = () => ({
  component: import('@/pages/home/index'),
  loading: load
});

import AllApi from '@/pages/api/allApi'
import Publish from '@/pages/api/publish'
import Export from '@/pages/api/export'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [{
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/api',
        component: ApiLayout ,
        children: [{
            path: 'all',
            name: 'all',
            component: AllApi
          },
          {
            path: 'publish',
            name: 'publish',
            component: Publish,
          },
          {
            path: 'export',
            name: 'export',
            component: Export,
          }
        ]
      }
        ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/404',
      name: 'tip404',
      component: Tip404
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
