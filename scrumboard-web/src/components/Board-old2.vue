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
            class="card m-2 rounded-0" :class="{ selected: activeTask === task }"
          >
            <div class="card-body pb-0">
              <p class="card-text">{{ task.title }}</p>

              <div class="card-options float-right">
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash" @click="deleteTask(task)"></i>
                <i class="fas fa-exchange-alt"></i>
              </div>
            </div>
          </div>

          <div class="d-flex">
            <i class="fas fa-plus-circle mx-auto text-light pb-2" @click="createTask(lane)"></i>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TheHeader from './shared/TheHeader'
import ChangeLaneModal from './modals/ChangeLaneModal'
import EditTitleModal from './modals/EditTitleModal'

export default {
  created () {
    this.loadBoard()
  },
  data () {
    return {
      activeTask: null,
      lanes: [] // cached version for temporary modifications without affecting global state
    }
  },
  computed: {
    ...mapGetters('board', [
      'getTaskById',
      'getTasksByLane'
    ]),
    ...mapGetters('board', {
      innerLanes: 'lanes'
    })
  },
  watch: {
    innerLanes (val) {
      this.lanes = JSON.parse(JSON.stringify(val)) // deep clone
    }
  },
  methods: {
    dragstart (event, task) {
      event.dataTransfer.setData('text/plain', '')
      this.activeTask = task
    },
    dragend (event, task) {
      this.saveLane(this.lanes.find(lane => lane.id === this.activeTask.lane_id))
      this.activeTask = null
    },
    dragoverTask (event, task, lane) {
      if (this.activeTask.id === task.id) {
        return
      }

      // get the correct clientHeight if hovering over a child element
      let target = event.target
      while (target && target.id.indexOf('task-') === -1) {
        target = target.parentElement
      }
      let offset = (event.layerY / target.clientHeight) > 0.5 ? 1 : 0

      // move task
      this.removeTask(this.activeTask)
      this.insertTaskRel(lane, this.activeTask, task, offset)
    },
    dragoverLane (event, lane) {
      // only if dragging over an empty part of the lane
      if (event.target.id.indexOf('lane-') === -1) {
        return
      }

      // move task
      this.removeTask(this.activeTask)
      this.insertTaskAbs(lane, this.activeTask)
    },

    removeTask (task) {
      let lane = this.lanes.find(lane => lane.id === task.lane_id)
      let index = lane.tasks.indexOf(task.id)
      lane.tasks.splice(index, 1)
    },
    insertTaskAbs (lane, task) {
      lane.tasks.push(task.id)
      task.lane_id = lane.id
    },
    insertTaskRel (lane, task, ref, offset) {
      let index = lane.tasks.indexOf(ref.id) + offset
      lane.tasks.splice(index, 0, task.id)
      task.lane_id = lane.id
    },

    ...mapActions('board', [
      'loadBoard',
      'createTask',
      'deleteTask',
      'moveTaskBefore',
      'saveLane'
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
