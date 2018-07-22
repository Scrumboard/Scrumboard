import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  activeTask: null,
  activeBoard: {
    lanes: []
  }
}

const getters = {
  getLaneByTask: (state) => (task) => {
    return state.activeBoard.lanes.find(lane => lane.tasks.indexOf(task) > -1)
  }
}

const actions = {
  findLanes ({commit}) {
    axios.get(`/api/board`).then(board => {
      commit(types.SET_ACTIVE_BOARD, board)
    })
  },
  moveTask ({dispatch}, {task, lane}) {
    let tasks = lane.tasks.map(task => task.id)
    tasks.push(task.id)
    dispatch('persistLaneTasks', {lane, tasks})
  },
  createTask ({commit}, lane) {
    axios.get(`/api/board/lane/${lane.id}/create`).then(board => {
      commit(types.SET_ACTIVE_BOARD, board)
    })
  },
  updateLane ({dispatch}, lane) {
    let tasks = lane.tasks.map(task => task.id)
    dispatch('persistLaneTasks', {lane, tasks})
  },
  persistLaneTasks ({commit}, {lane, tasks}) {
    axios.put(`/api/board/lane/${lane.id}/tasks`, {tasks}).then(board => {
      commit(types.SET_ACTIVE_BOARD, board)
    })
  },
  deleteTask ({commit}, task) {
    axios.delete(`/api/board/task/${task.id}`).then(board => {
      commit(types.SET_ACTIVE_BOARD, board)
    })
  }
}

const mutations = {
  [types.SET_ACTIVE_BOARD] (state, board) {
    state.activeBoard = board
  },
  [types.SET_ACTIVE_TASK] (state, task) {
    state.activeTask = task
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
