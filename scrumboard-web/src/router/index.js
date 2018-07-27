import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'
import Logout from '@/components/auth/Logout'
import Board from '@/components/board/Board'
import Landing from '@/components/Landing'
import Overview from '@/components/Overview'

Vue.use(Router)

export default new Router({
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
      path: '/board/:id',
      name: 'board',
      component: Board
    },
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    }
  ]
})
