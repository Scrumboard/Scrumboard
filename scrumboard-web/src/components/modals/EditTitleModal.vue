<template>
  <div class="modal fade" id="editTitleModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content" v-if="task">
        <div class="modal-header">
          <h5 class="modal-title">Edit title</h5>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input type="text" class="form-control" id="title" v-model="task.title">
          </div>
          <button type="button" class="btn btn-success" @click="updateTaskTitle(task)" data-dismiss="modal">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task'],
  methods: mapActions('board', [
    'updateTaskTitle'
  ])
}
</script>

<style scoped>
</style>
