<template>
  <div class="row flex-nowrap bg-dark bbbbb" id="test">
    <div v-for="lane in lanes" :key="lane.id" :id="'lane-'+lane.id" @drop.prevent="" @dragover.prevent="insertLane($event, lane)"  class="col-6 col-md-4 col-lg-3 bg-dark border border-success">

      <div draggable="true"
        @dragstart="dragstart($event, task)" @dragend="dragend"
        @dragover="dragover($event, lane, taskIndex)"
        :class="{selected:(task == selected)}"
        v-for="(task, taskIndex) in lane.tasks" :key="task.id"
        :id="task.id">

        <slot name="drag-item" :task="task"></slot>

      </div>
    </div>


      <div class="bbbbc" v-if="loading">
        <p class="text-center">loading..</p>
      </div>
  </div>
</template>task

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  props: ['lanes'],
  data () {
    return {
      selected: null
    }
  },
  computed: mapState('board', [
    'loading'
  ]),
  methods: {
    dragstart (event, task) {
      this.selected = task
      event.dataTransfer.setData('text/plain', '')
    },
    dragend (event) {
      for (let lane of this.lanes) {
        if (lane.tasks.indexOf(this.selected) > -1) {
          this.updateLane(lane)
        }
      }
      this.selected = null
    },
    dragover (event, lane, taskIndex) {
      this.removeTask(this.selected)
      let index = event.layerY / event.target.clientHeight < 0.5 ? taskIndex : taskIndex + 1
      lane.tasks.splice(index, 0, this.selected)
    },

    insertLane (event, lane) {
      if (event.target.id.indexOf('lane-') === -1) {
        return
      }
      this.removeTask(this.selected)
      lane.tasks.push(this.selected)
    },
    removeTask (task) {
      for (let lane of this.lanes) {
        const index = lane.tasks.indexOf(task)
        if (index > -1) {
          lane.tasks.splice(index, 1)
        }
      }
    },
    ...mapActions('board', [
      'updateLane',
      'moveTask'
    ]),
  }
}
</script>

<style scoped>
  .selected  {
    color: #888888;
  }

  .selected > * {
    background-color: rgba(187, 187, 187, 0.5)
  }
  
  .bbbbb {
    position: relative;
  }

  .bbbbc {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(187, 187, 187, 0.3);
  }
</style>
