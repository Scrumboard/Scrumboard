import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  user: null,

  loading: false,
  error: ''
}

const getters = {
}

const actions = {
  login ({ commit }, body) {
    commit('updateLoading', true)
    return axios.post('http://localhost/api/true', { body })
      .then(response => {
        commit(types.AUTH_UPDATE_USER, {})
        commit(types.AUTH_UPDATE_LOADING, false)
      })
      .catch(e => {
        commit(types.AUTH_UPDATE_LOADING, false)
        commit(types.AUTH_UPDATE_ERROR, 'Credentials not found')
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
