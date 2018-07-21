import axios from 'axios'

const state = {
  selected: null,
  lanes: [],
  loading: false
}

const getters = {
}

const actions = {
  findLanes ({ commit }) {
    commit('updateLoading', true)
    axios.get('/api/board').then(board => {
      commit('updateBoard', board)
      commit('updateLoading', false)
    })
  },
  moveTask ({ commit }, { selected, lane }) {
    commit('updateLoading', true)
    let tasks = lane.tasks.map(task => task.id)
    tasks.push(selected.id)
    axios.post('/api/board/lane/' + lane.id, {tasks}).then(board => {
      commit('updateBoard', board)
      commit('updateLoading', false)
    })
  },
  createTask ({ commit }, lane) {
    commit('updateLoading', true)
    axios.get('/api/board/lane/' + lane.id + '/create').then(board => {
      commit('updateBoard', board)
      commit('updateLoading', false)
    })
  },
  updateLane ({ commit }, lane) {
    commit('updateLoading', true)
    let tasks = lane.tasks.map(task => task.id)
    axios.post('/api/board/lane/' + lane.id, {tasks}).then(board => {
      commit('updateBoard', board)
      commit('updateLoading', false)
    })
  },
  deleteTask ({ commit }, task) {
    commit('updateLoading', true)
    axios.delete('/api/board/task/' + task.id).then(board => {
      commit('updateBoard', board)
      commit('updateLoading', false)
    })
  }
}

const mutations = {
  updateLoading (state, loading) {
    state.loading = loading
  },
  updateBoard (state, board) {
    state.lanes = board.lanes
  },
  updateSelected (state, selected) {
    state.selected = selected
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
