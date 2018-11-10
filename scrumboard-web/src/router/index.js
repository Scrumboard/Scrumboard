import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'
import Logout from '@/components/auth/Logout'
import Settings from '@/components/Settings'
import Board from '@/components/board/Board'
import Landing from '@/components/Landing'
import Overview from '@/components/Overview'

import store from '@/store/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/board/:id',
      name: 'board',
      component: Board
    },
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.getters['auth/loggedin']) {
    if (['login', 'register'].indexOf(to.name) === -1) {
      next()
    } else {
      next({ name: 'overview' })
    }
  } else {
    if (['landing', 'login', 'register'].indexOf(to.name) === -1) {
      next({ name: 'login' })
    } else {
      next()
    }
  }
})

export default router
