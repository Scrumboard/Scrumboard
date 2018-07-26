import axios from 'axios'

const state = {
  tasks: [],
  lanes: []
}

const getters = {
  lanes: (state) => {
    return state.lanes
  },
  getTaskById: (state) => (id) => {
    return state.tasks.find(task => task.id === id)
  },
  getTasksByLane: (state) => (lane) => {
    return state.tasks.filter(task => task.lane_id === lane.id)
  }
}

const actions = {
  loadBoard ({ commit }) {
    axios.get(`/api/board/1`).then(board => {
      commit('setTasks', board.tasks)
      commit('setLanes', board.lanes)
    })
  },
  createTask ({ commit }, lane) {
    axios.post(`/api/board/1/lane/${lane.id}/tasks`, {
      title: 'new task'
    }).then(data => {
      commit('addTask', data.task)
      commit('setLanes', data.lanes)
    })
  },
  deleteTask ({ commit }, task) {
    axios.delete(`/api/board/1/lane/${task.lane_id}/task/${task.id}`).then(lanes => {
      commit('removeTask', task)
      commit('setLanes', lanes)
    })
  },
  saveLane ({ commit }, lane) {
    axios.put(`/api/board/1/lane/${lane.id}`, lane).then(lanes => {
      commit('setLanes', lanes)
    })
  }
}

const mutations = {
  setTasks (state, tasks) {
    state.tasks = tasks
  },
  setLanes (state, lanes) {
    state.lanes = lanes
  },
  addTask (state, task) {
    state.tasks.push(task)
  },
  removeTask (state, task) {
    const index = state.tasks.map(task => task.id).indexOf(task.id)
    state.tasks.splice(index, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
