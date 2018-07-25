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
            <a v-for="lane in lanes" :key="lane.id" @click="moveTask({task: activeTask, laneId: lane.id})" :class="{active: isOnLane(activeTask, lane)}" class="list-group-item list-group-item-action" data-dismiss="modal">{{lane.title}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters('board', [
      'activeTask',
    ]),
    ...mapState('board', [
      'lanes'
    ])
  },
  methods: {
    ...mapActions('board', [
      'moveTask'
    ]),
    isOnLane(task, lane) {
      return task.lane_id === lane.id
    }
  }
}
</script>

<style scoped>
</style>
