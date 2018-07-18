import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Logout from '@/components/Logout'

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
      path: '/',
      name: 'Landing',
      component: Landing
    }
  ]
})
