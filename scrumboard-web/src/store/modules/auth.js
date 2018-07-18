import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  user: null,
  error: ''
}

const getters = {
}

const actions = {
  register ({ commit }, details) {
    return axios.post('/api/auth/register', details).then(
      response => {
        commit(types.AUTH_SET_AUTH, response.auth)
        commit(types.AUTH_SET_USER, response.user)
      },
      () => {
        commit(types.AUTH_SET_ERROR, 'Something went wrong')
      }
    )
  },
  login ({ commit }, credentials) {
    return axios.post('/api/auth/login', credentials).then(
      response => {
        commit(types.AUTH_SET_AUTH, response.auth)
        commit(types.AUTH_SET_USER, response.user)
      },
      () => {
        commit(types.AUTH_SET_ERROR, 'Credentials not found')
      }
    )
  },
  logout ({ commit }) {
    return axios.get('/api/auth/logout').then(
      response => {
        commit(types.AUTH_CLEAR_AUTH)
        commit(types.AUTH_SET_USER, null)
      })
  },
  hideError ({ commit }) {
    commit(types.AUTH_SET_ERROR, '')
  }
}

const mutations = {
  [types.AUTH_CLEAR_AUTH] (state) {
    delete axios.defaults.headers.common['Authorization']
  },
  [types.AUTH_SET_AUTH] (state, auth) {
    axios.defaults.headers.common['Authorization'] = auth.type + ' ' + auth.token
  },
  [types.AUTH_SET_USER] (state, user) {
    state.user = user
  },
  [types.AUTH_SET_ERROR] (state, error) {
    state.error = error
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
