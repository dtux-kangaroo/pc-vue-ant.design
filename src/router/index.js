import Vue from 'vue';
import Router from 'vue-router';
import Tip404 from '@/pages/error/404'
import MainLayout from '@/layout/mainLayout';
import Login from '@/pages/login/index';
import load from '@/components/load'
const Home = () => ({
  component: import('@/pages/home/index'),
  loading: load
});
const Line = () => ({
  component: import('@/pages/line/index'),
  loading: load
});
const Bar = () => ({
  component: import('@/pages/bar/index'),
  loading: load
});
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
      },{
        path: '/line',
        name: 'line',
        component: Line
      },{
        path: '/bar',
        name: 'bar',
        component: Bar
      }]
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
