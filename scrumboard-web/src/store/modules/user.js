import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  user: null
}

const getters = {
}

const actions = {
  loadUser ({ commit }) {
    return axios.get('/api/user').then(
      user => commit(types.AUTH_SET_USER, user)
    )
  }
}

const mutations = {
  [types.AUTH_SET_USER] (state, user) {
    state.user = user
    console.log(user)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
