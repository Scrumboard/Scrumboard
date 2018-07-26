<template>
  <div>

    <TheHeader/>

    <div class="container bg-dark">
      <div class="row flex-nowrap">

        <div v-for="lane in lanes" :key="lane.id" :id="'lane-'+lane.id"
          @drop.prevent @dragover.prevent="dragoverLane($event, lane)"
          class="col-6 col-md-4 col-lg-3 border border-success"
        >

          <h3 class="text-center text-success">{{ lane.title }}</h3>

          <div v-for="task in getTasksByLane(lane)" :key="task.id" draggable="true" :id="'task-'+task.id"
            @dragstart="dragstart($event, task)" @dragend="dragend($event, task)" @dragover="dragoverTask($event, task, lane)"
            class="card m-2 rounded-0" :class="{ selected: taskActive === task }"
          >
            <div class="card-body pb-0">
              <p class="card-text">{{ task.title }}</p>

              <div class="card-options float-right">
                <i class="fas fa-edit" @click="setTaskActive(task)" data-toggle="modal" data-target="#editTitleModal"></i>
                <i class="fas fa-trash" @click="deleteTask(task)"></i>
                <i class="fas fa-exchange-alt" @click="setTaskActive(task)" data-toggle="modal" data-target="#changeLaneModal"></i>
              </div>
            </div>
          </div>

          <div class="d-flex">
            <i class="fas fa-plus-circle mx-auto text-light pb-2" @click="createTask(lane)"></i>
          </div>

        </div>

      </div>
    </div>

    <ChangeLaneModal />
    <EditTitleModal />

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import TheHeader from '../shared/TheHeader'
import ChangeLaneModal from './modals/ChangeLaneModal'
import EditTitleModal from './modals/EditTitleModal'

export default {
  created () {
    this.loadBoard()
  },
  computed: {
    ...mapGetters('board', [
      'taskActive',
      'getTasksByLane',
      'lanes',
      'getLaneByTask'
    ])
  },
  methods: {
    dragstart (event, task) {
      event.dataTransfer.setData('text/plain', '')
      this.setTaskActive(task)
    },
    dragend (event, task) {
      this.saveLane(this.getLaneByTask(this.taskActive))
      this.clearTaskActive()
    },
    dragoverTask (event, task, lane) {
      if (task === this.taskActive) {
        return
      }

      // get the correct clientHeight if hovering over a child element
      let target = event.target
      while (target && target.id.indexOf('task-') === -1) {
        target = target.parentElement
      }
      let offset = (event.layerY / target.clientHeight) > 0.5 ? 1 : 0

      const index = this.getLaneByTask(task).tasks.indexOf(task) + offset
      this.moveTask({
        task: this.taskActive,
        lane: lane,
        index: index
      })
    },
    dragoverLane (event, lane) {
      // only if dragging over an empty part of the lane
      if (event.target.id.indexOf('lane-') === -1) {
        return
      }

      this.moveTask({
        task: this.taskActive,
        lane: lane,
        index: 999
      })
    },

    ...mapActions('board', [
      'loadBoard',
      'saveLane',
      'moveTask',
      'createTask',
      'deleteTask'
    ]),
    ...mapMutations('board', [
      'setTaskActive',
      'clearTaskActive'
    ])
  },
  components: {
    TheHeader,
    ChangeLaneModal,
    EditTitleModal
  }
}
</script>

<style scoped>
  .container {
    overflow-x: scroll;
  }

  .card-options {
    color: #888888;
  }
  .card:hover .card-options {
    color: #000000;
  }

  .selected {
    color: #888888;
  }
  .selected > * {
    background-color: rgba(187, 187, 187, 0.5)
  }
</style>
