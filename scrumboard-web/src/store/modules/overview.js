import axios from 'axios'

const state = {
  boards: []
}

const getters = {
  boards: (state) => state.boards
}

const actions = {
  loadBoards ({commit, state}) {
    axios.get(`/api/boards`).then(boards => {
      commit('setBoards', boards)
    })
  }
}

const mutations = {
  setBoards (state, boards) {
    state.boards = boards
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
