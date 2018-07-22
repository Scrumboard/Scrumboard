<template>
  <div>

    <TheHeader/>

    <div class="container">

      <div class="row flex-nowrap bg-dark" id="test">
        <div v-for="lane in activeBoard.lanes" :key="lane.id" :id="'lane-'+lane.id" @drop.prevent @dragover.prevent="insertLane($event, lane)"  class="col-6 col-md-4 col-lg-3 bg-dark border border-success">

          <!-- title -->
          <div class="row" >
            <div class="col-12">
              <h3 class="text-center text-success">{{ lane.title }}</h3>
            </div>
          </div>

          <!-- tasks -->
          <div draggable="true"
            @dragstart="dragstart($event, task)" @dragend="dragend"
            @dragover="dragover($event, lane, taskIndex)"
            :class="{selected:(task == activeTask)}"
            v-for="(task, taskIndex) in lane.tasks" :key="task.id"
            :id="task.id">

            <div class="card m-2 rounded-0">
              <div class="card-body pb-0">
                <p class="card-text">{{task.title}}</p>

                <p class="card-text float-right task-options">
                  <span @click="deleteTask(task)">
                    <i class="fas fa-trash"></i>
                  </span>
                  <span @click="setActiveTask(task)" data-toggle="modal" data-target="#changeLaneModal">
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

    <ChangeLaneModal :task="activeTask" :lanes="activeBoard.lanes" />

  </div>
</template>

<script>
import * as types from '../store/mutation-types'
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
import TheHeader from './shared/TheHeader'
import ChangeLaneModal from './modals/ChangeLaneModal'

export default {
  created () {
    this.findLanes()
  },
  computed: {
    ...mapState('board', [
      'activeTask',
      'activeBoard'
    ]),
    ...mapGetters('board', [
      'getLaneByTask'
    ])
  },
  methods: {
    dragstart (event, task) {
      this.setActiveTask(task)
      event.dataTransfer.setData('text/plain', '')
    },
    dragend (event) {
      let lane = this.getLaneByTask(this.activeTask)
      this.updateLane(lane)
      this.setActiveTask(null)
    },
    dragover (event, lane, taskIndex) {
      this.removeTask(this.activeTask)
      let index = event.layerY / event.target.clientHeight < 0.5 ? taskIndex : taskIndex + 1
      lane.tasks.splice(index, 0, this.activeTask)
    },

    ...mapActions('board', [
      'findLanes',
      'createTask',
      'deleteTask',
      'updateLane'
    ]),
    ...mapMutations('board', {
      'setActiveTask': types.SET_ACTIVE_TASK
    }),

    insertLane (event, lane) {
      if (event.target.id.indexOf('lane-') === -1) {
        return
      }
      this.removeTask(this.activeTask)
      lane.tasks.push(this.activeTask)
    },
    removeTask (task) {
      let lane = this.getLaneByTask(task)
      lane.tasks.splice(lane.tasks.indexOf(task), 1)
    }
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
