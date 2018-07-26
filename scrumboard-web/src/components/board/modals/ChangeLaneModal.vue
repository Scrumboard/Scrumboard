<template>
  <div class="modal fade" id="changeLaneModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content" v-if="taskActive">
        <div class="modal-header">
          <h5 class="modal-title">{{ taskActive.title }}</h5>
          <button type="button" class="close" data-dismiss="modal" @click="clearTaskActive()">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="list-group">
            <a v-for="lane in lanes" :key="lane.id" @click="moveTask(lane)" :class="{active: isOnLane(taskActive, lane)}" class="list-group-item list-group-item-action" data-dismiss="modal">{{ lane.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters('board', [
      'taskActive',
      'lanes'
    ])
  },
  methods: {
    ...mapActions('board', [
      'saveLane'
    ]),
    ...mapActions('board', {
      innerMoveTask: 'moveTask'
    }),
    ...mapMutations('board', [
      'clearTaskActive'
    ]),
    moveTask (lane) {
      if (lane.tasks.indexOf(this.taskActive) > -1) {
        return
      }
      this.innerMoveTask({task: this.taskActive, lane, index: 999})
      this.saveLane(lane)
      this.clearTaskActive()
    },
    isOnLane (task, lane) {
      return lane.tasks.indexOf(task) > -1
    }
  }
}
</script>

<style scoped>
</style>
