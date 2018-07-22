<template>
  <div>

    <TheHeader/>

    <div class="container">

      <div class="row flex-nowrap bg-dark" id="test">
        <div v-for="lane in lanes" :key="lane.id" :id="'lane-'+lane.id" @drop.prevent @dragover.prevent="dragoverLane($event, lane)"  class="col-6 col-md-4 col-lg-3 bg-dark border border-success">

          <!-- title -->
          <div class="row" >
            <div class="col-12">
              <h3 class="text-center text-success">{{ lane.title }}</h3>
            </div>
          </div>

          <!-- tasks -->
          <div draggable="true"
            @dragstart="dragstart($event, task)" @dragend="dragend"
            @dragover="dragoverTask($event, lane, task)"
            :class="{selected:(task == activeTask)}"
            v-for="task in tasksOrdered" v-if="task.lane_id === lane.id" :key="task.id"
            :id="'task-'+task.id">

            <div class="card m-2 rounded-0">
              <div class="card-body pb-0">
                <p class="card-text">{{task.title}}</p>

                <p class="card-text float-right task-options">
                  <span @click="deleteTask(task)">
                    <i class="fas fa-trash"></i>
                  </span>
                  <span @click="activeTask = task" data-toggle="modal" data-target="#changeLaneModal">
                    <i class="fas fa-exchange-alt"></i>
                  </span>
                </p>
              </div>
            </div>

          </div>

          <!-- new task -->
          <div class="row" >
            <i class="fas fa-plus-circle text-light mx-auto pb-2" @click="createTask(lane)"></i>
          </div>

        </div>

      </div>

    </div>

    <ChangeLaneModal :task="activeTask" :lanes="lanes" />

  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import TheHeader from './shared/TheHeader'
import ChangeLaneModal from './modals/ChangeLaneModal'

export default {
  created () {
    this.findBoard()
  },
  data () {
    return {
      activeTask: null
    }
  },
  computed: {
    ...mapState('board', [
      'lanes',
      'tasks'
    ]),
    ...mapGetters('board', [
      'tasksOrdered'
    ])
  },
  methods: {
    dragstart (event, task) {
      this.activeTask = task
      event.dataTransfer.setData('text/plain', '')
    },
    dragend (event) {
      this.updateLane(this.activeTask.lane_id)
      this.activeTask = null
    },
    dragoverTask (event, lane, task) {
      if (this.activeTask.id === task.id) {
        return
      }
      let target = event.target
      while (target && target.id.indexOf('task-') === -1) {
        target = target.parentElement
      }
      if (!target) {
        return
      }
      this.activeTask.lane_id = lane.id
      this.activeTask.lane_order = task.lane_order + (event.layerY / target.clientHeight) - 0.5
    },
    dragoverLane (event, lane) {
      if (event.target.id.indexOf('lane-') > -1) {
        this.activeTask.lane_id = lane.id
      }
    },

    ...mapActions('board', [
      'findBoard',
      'createTask',
      'deleteTask',
      'updateLane'
    ])
  },
  components: {
    TheHeader,
    ChangeLaneModal
  }
}
</script>

<style lang="scss" scoped>
  .container {
    overflow-x: scroll;
  }

  .selected  {
    color: #888888;
    &> * {
      background-color: rgba(187, 187, 187, 0.5)
    }
  }

  .card {
    .task-options {
      color: #6c757d;
    }
    &:hover {
      .task-options {
        color: #000000;
      }
    }
  }
</style>
