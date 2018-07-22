<template>
  <div class="modal fade" id="changeLaneModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content" v-if="task">
        <div class="modal-header">
          <h5 class="modal-title">{{task.title}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="list-group">
            <a v-for="lane in lanes" :key="lane.id" @click="moveTask({task, lane})" :class="{active: lane.tasks.indexOf(task) > -1}" class="list-group-item list-group-item-action" data-dismiss="modal">{{lane.title}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'lanes'],
  methods: mapActions('board', [
    'moveTask'
  ])
}
</script>

<style scoped>
</style>
