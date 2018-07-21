
const state = {
  selected: null,
  lanes: [
    {
      id: 1,
      title: 'Todo',
      items: [
        { id: 1, title: 'item 1' },
        { id: 2, title: 'item 2' },
        { id: 3, title: 'item 3' }
      ]
    },
    {
      id: 2,
      title: 'Progress',
      items: [
        { id: 4, title: 'item 4' },
        { id: 5, title: 'item 5' }
      ]
    },
    {
      id: 3,
      title: 'Testing',
      items: [
        { id: 6, title: 'item 6' }
      ]
    },
    {
      id: 4,
      title: 'Done',
      items: [
        { id: 7, title: 'item 7' },
        { id: 8, title: 'item 8' }
      ]
    }
  ]
}

const getters = {
}

const actions = {
  moveItem ({ commit }, { selected, lane }) {
    commit('removeItem', selected)
    commit('addItem', {lane, selected})
  }
}

const mutations = {
  removeItem (state, item) {
    for (let lane of state.lanes) {
      let index = lane.items.indexOf(item)
      if (index > -1) {
        lane.items.splice(index, 1)
      }
    }
  },
  addItem (state, {lane, selected}) {
    lane.items.push(selected)
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
