import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  user: null
}

const getters = {
}

const actions = {
  login ({ commit }, body) {
    return axios.post('http://localhost/api/true', { body })
      .then(response => {
        commit(types.UPDATE_USER, response.body)
      })
  }
}

const mutations = {
  [types.UPDATE_USER] (state, user) {
    state.user = user
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
