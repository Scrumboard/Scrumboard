import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  lanes: [],
  tasks: []
}

const getters = {
  tasksOrdered: (state) => {
    return state.tasks.sort((a, b) => a.lane_order > b.lane_order)
  }
}

const actions = {
  findBoard ({commit}) {
    axios.get(`/api/board/1`).then(board => {
      commit(types.SET_ACTIVE_BOARD, board)
    })
  },
  moveTask ({dispatch, state}, {task, laneId}) {
    let tasks = state.tasks.filter(task => task.lane_id === laneId).map(task => task.id)
    tasks.push(task.id)
    dispatch('persistLaneTasks', {laneId, tasks})
  },
  createTask ({commit}, lane) {
    axios.post(`/api/board/1/lane/${lane.id}/tasks`).then(board => {
      commit(types.SET_ACTIVE_BOARD, board)
    })
  },
  updateLane ({dispatch, state}, laneId) {
    let tasks = state.tasks.filter(task => task.lane_id === laneId).map(task => task.id)
    dispatch('persistLaneTasks', {laneId, tasks})
  },
  persistLaneTasks ({commit}, {laneId, tasks}) {
    axios.put(`/api/board/1/lane/${laneId}/tasks`, {tasks}).then(board => {
      commit(types.SET_ACTIVE_BOARD, board)
    })
  },
  deleteTask ({commit}, task) {
    axios.delete(`/api/board/1/task/${task.id}`).then(board => {
      commit(types.SET_ACTIVE_BOARD, board)
    })
  },
  updateTaskTitle ({commit}, task) {
    axios.put(`/api/board/1/task/${task.id}`, task).then(board => {
      commit(types.SET_ACTIVE_BOARD, board)
    })
  }
}

const mutations = {
  [types.SET_ACTIVE_BOARD] (state, board) {
    state.lanes = board.lanes
    state.tasks = board.tasks
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
