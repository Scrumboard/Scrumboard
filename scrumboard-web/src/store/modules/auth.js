import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  token: '',
  user: null,

  loading: false,
  error: ''
}

const getters = {
}

const actions = {
  login ({ commit }, credentials) {
    commit(types.AUTH_UPDATE_LOADING, true)
    return axios.post('http://localhost/api/auth/login', credentials)
      .then(response => {
        commit(types.AUTH_UPDATE_TOKEN, response.token)
        commit(types.AUTH_UPDATE_USER, {})
        commit(types.AUTH_UPDATE_LOADING, false)
      })
      .catch(e => {
        commit(types.AUTH_UPDATE_ERROR, 'Credentials not found')
        commit(types.AUTH_UPDATE_LOADING, false)
      })
  }
}

const mutations = {
  [types.AUTH_UPDATE_USER] (state, user) {
    state.user = user
  },
  [types.AUTH_UPDATE_LOADING] (state, loading) {
    state.loading = loading
  },
  [types.AUTH_UPDATE_ERROR] (state, error) {
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
