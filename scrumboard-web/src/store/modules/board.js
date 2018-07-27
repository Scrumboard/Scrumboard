import axios from 'axios'

const state = {
  taskActive: null,
  lanes: []
}

const getters = {
  lanes: (state) => {
    return state.lanes
  },
  getLaneById: (state) => (id) => {
    return state.lanes.find(lane => lane.id === id)
  },
  getTasksByLane: (state) => (lane) => {
    return lane.tasks
  },
  getLaneByTask: (state) => (task) => {
    return state.lanes.find(lane => lane.tasks.indexOf(task) > -1)
  },
  taskActive: (state) => {
    return state.taskActive
  }
}

const actions = {
  loadBoard ({ commit }) {
    axios.get(`/api/board/1`).then(board => {
      commit('setBoard', board)
    })
  },
  saveLane ({ commit }, lane) {
    axios.put(`/api/lane/${lane.id}`, lane)
  },
  saveTask ({ commit }, task) {
    axios.put(`/api/task/${task.id}`, task)
  },
  moveTask ({ commit, getters }, { task, lane, index }) {
    commit('removeTask', {
      task,
      lane: getters.getLaneByTask(task)
    })
    commit('insertTask', {
      task,
      lane,
      index
    })
  },
  createTask ({ commit }, lane) {
    axios.post(`/api/lane/${lane.id}/task`, {
      title: 'new title y'
    }).then(task => {
      commit('insertTask', {
        task,
        lane,
        index: 999
      })
    })
  },
  deleteTask ({ commit, getters }, task) {
    axios.delete(`/api/task/${task.id}`).then(() => {
      commit('removeTask', {
        task: task,
        lane: getters.getLaneByTask(task)
      })
    })
  }
}

const mutations = {
  setBoard (state, board) {
    state.lanes = board.lanes
  },
  setTaskActive (state, task) {
    state.taskActive = task
  },
  clearTaskActive (state) {
    state.taskActive = null
  },
  removeTask (state, { task, lane }) {
    const index = lane.tasks.indexOf(task)
    lane.tasks.splice(index, 1)
  },
  insertTask (state, { task, lane, index }) {
    lane.tasks.splice(index, 0, task)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
