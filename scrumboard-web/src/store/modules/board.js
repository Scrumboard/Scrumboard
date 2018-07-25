import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  activeTaskId: null,
  lanes: [],
  tasks: []
}

const getters = {
  getTaskById: (state) => (id) => {
    return state.tasks.find(task => task.id === id)
  },
  getTaskByLaneOrdered: (state) => (laneId) => {
    return state.tasks.filter(task => task.lane_id === laneId).sort((a, b) => a.lane_order > b.lane_order)
  },
  activeTask: (state) => {
    return state.tasks.find(task => task.id === state.activeTaskId)
  }
}

const actions = {
  findBoard ({commit}) {
    axios.get(`/api/board/1`).then(board => {
      commit(types.SET_ACTIVE_BOARD, board)
    })
  },
  moveTask ({commit, dispatch, getters}, {task, laneId}) {
    let tasks = getters.getTaskByLaneOrdered(laneId)
    commit('updateTaskLane', {
      id: task.id,
      laneId: laneId,
      laneOrder: tasks[tasks.length - 1].lane_order + 1
    })
    dispatch('persistTasks', {
      tasks: getters.getTaskByLaneOrdered(laneId)
    })
  },
  createTask ({commit, getters}, lane) {
    let tasks = getters.getTaskByLaneOrdered(lane.id)
    const task = {
      title: 'new task',
      lane_id: lane.id,
      lane_order: tasks[tasks.length - 1].lane_order + 1
    }
    axios.post(`/api/tasks`, task).then(task => {
      commit('addTask', task)
    })
  },
  updateLane ({dispatch, getters}, laneId) {
    let tasks = getters.getTaskByLaneOrdered(laneId)
    dispatch('persistTasks', {tasks})
  },
  persistTasks ({commit}, {tasks}) {
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].lane_order = i
    }
    axios.put(`/api/tasks`, {tasks})
  },
  deleteTask ({commit}, task) {
    axios.delete(`/api/tasks/${task.id}`).then(() => {
      commit('removeTask', task)
    })
  },
  saveTask ({commit}, task) {
    axios.put(`/api/tasks/${task.id}`, task)
  }
}

const mutations = {
  [types.SET_ACTIVE_BOARD] (state, board) {
    state.lanes = board.lanes
    state.tasks = board.tasks
  },
  addTask (state, task) {
    state.tasks.push(task)
  },
  removeTask (state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  setActiveTask (state, id) {
    state.activeTaskId = id
  },
  updateTaskLane (state, {id, laneId, laneOrder}) {
    let task = state.tasks.find(task => task.id === id)
    task.lane_id = laneId
    task.lane_order = laneOrder
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
