<template>
  <div class="modal fade" id="changeLaneModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content" v-if="activeTask">
        <div class="modal-header">
          <h5 class="modal-title">{{activeTask.title}}</h5>
          <button type="button" class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="list-group">
            <a v-for="lane in lanes" :key="lane.id" @click="moveTask(activeTask, lane)" :class="{active: isOnLane(activeTask, lane)}" class="list-group-item list-group-item-action" data-dismiss="modal">{{lane.title}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['activeTask'],
  computed: {
    ...mapGetters('board', [
      'lanes'
    ])
  },
  methods: {
    ...mapActions('board', [
      'saveLane'
    ]),
    moveTask (task, lane) {
      if (task.lane_id === lane.id) {
        return
      }
      lane.tasks.push(task.id)
      this.saveLane(lane)
    },
    isOnLane (task, lane) {
      return task.lane_id === lane.id
    }
  }
}
</script>

<style scoped>
</style>
