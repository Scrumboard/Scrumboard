import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'
import Logout from '@/components/auth/Logout'
import Board from '@/components/Board'
import Landing from '@/components/Landing'

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
      path: '/test',
      name: 'test',
      component: Board
    },
    {
      path: '/',
      name: 'Landing',
      component: Landing
    }
  ]
})
