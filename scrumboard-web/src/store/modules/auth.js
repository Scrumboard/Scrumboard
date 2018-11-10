import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  auth: null,
  error: ''
}

const getters = {
}

const actions = {
  register ({ commit }, details) {
    return axios.post('/api/auth/register', details).then(
      auth => commit(types.AUTH_SET_AUTH, auth),
      () => commit(types.AUTH_SET_ERROR, 'Something went wrong')
    )
  },
  login ({ commit }, credentials) {
    return axios.post('/api/auth/login', credentials).then(
      auth => commit(types.AUTH_SET_AUTH, auth),
      () => commit(types.AUTH_SET_ERROR, 'Credentials not found')
    )
  },
  logout ({ commit }) {
    return axios.get('/api/auth/logout').then(
      () => commit(types.AUTH_CLEAR_AUTH))
  },
  hideError ({ commit }) {
    commit(types.AUTH_SET_ERROR, '')
  }
}

const mutations = {
  [types.AUTH_CLEAR_AUTH] (state) {
    delete axios.defaults.headers.common['Authorization']
    state.auth = null
  },
  [types.AUTH_SET_AUTH] (state, auth) {
    state.auth = auth.type + ' ' + auth.token
    axios.defaults.headers.common['Authorization'] = state.auth
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
