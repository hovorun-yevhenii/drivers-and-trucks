import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './components/LoginPage';
import DashBoard from './components/DashBoard';
import DriversPage from './components/DriversPage';
import TrucksPage from './components/TrucksPage';
import NotFound from './components/NotFound';

Vue.use(Router);

const isAuth = () => localStorage.getItem('truckInToken');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      beforeEnter: (to, from, next) => {
        isAuth() ? next('/') : next();
      },
    },
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard,
      redirect: '/drivers',
      beforeEnter: (to, from, next) => {
        isAuth() ? next() : next('/login');
      },
      children: [
        {
          path: '/drivers',
          name: 'DriversPage',
          component: DriversPage
        },
        {
          path: '/trucks',
          name: 'TrucksPage',
          component: TrucksPage
        }
      ]
    },
    {
      path: '*',
      redirect: '/404',
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
