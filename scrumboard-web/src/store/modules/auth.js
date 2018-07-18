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
  register ({ commit, dispatch }, details) {
    commit(types.AUTH_UPDATE_LOADING, true)
    return axios.post('http://localhost/api/auth/register', details)
      .then(response => {
        commit(types.AUTH_UPDATE_TOKEN, response.data.token)
        dispatch('loadUser')
        commit(types.AUTH_UPDATE_LOADING, false)
      })
      .catch(e => {
        commit(types.AUTH_UPDATE_ERROR, 'Something went wrong')
        commit(types.AUTH_UPDATE_LOADING, false)
      })
  },
  login ({ commit, dispatch }, credentials) {
    commit(types.AUTH_UPDATE_LOADING, true)
    return axios.post('http://localhost/api/auth/login', credentials)
      .then(response => {
        commit(types.AUTH_UPDATE_TOKEN, response.data.token)
        dispatch('loadUser')
        commit(types.AUTH_UPDATE_LOADING, false)
      })
      .catch(e => {
        commit(types.AUTH_UPDATE_ERROR, 'Credentials not found')
        commit(types.AUTH_UPDATE_LOADING, false)
      })
  },
  loadUser ({ commit, state }) {
    return axios.get('http://localhost/api/auth/user', {headers: {'Authorization': 'Bearer ' + state.token}})
      .then(response => {
        console.log(response)
        commit(types.AUTH_UPDATE_USER, response.data)
      })
  }
}

const mutations = {
  [types.AUTH_UPDATE_TOKEN] (state, token) {
    state.token = token
  },
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
