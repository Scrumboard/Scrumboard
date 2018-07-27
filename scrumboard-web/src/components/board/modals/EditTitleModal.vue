<template>
  <div class="modal fade" id="editTitleModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content" v-if="taskActive">
        <div class="modal-header">
          <h5 class="modal-title">Edit title</h5>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input type="text" class="form-control" id="title" v-model="taskActive.title">
          </div>
          <button type="button" class="btn btn-success" @click="saveTask(taskActive)" data-dismiss="modal">Save</button>
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
      'taskActive'
    ]),
    ...mapMutations('board', [
      'clearTaskActive'
    ])
  },
  methods: {
    ...mapActions('board', {
      innerSaveTask: 'saveTask'
    }),
    saveTask (task) {
      this.innerSaveTask(task)
      this.clearTaskActive()
    }
  }
}
</script>

<style scoped>
</style>
