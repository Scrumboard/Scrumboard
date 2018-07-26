<template>
  <div class="modal fade" id="editTitleModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content" v-if="task">
        <div class="modal-header">
          <h5 class="modal-title">Edit title</h5>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input type="text" class="form-control" id="title" v-model="title">
          </div>
          <button type="button" class="btn btn-success" @click="updateTaskTitle({task, title})" data-dismiss="modal">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: ''
    }
  },
  computed: {
    ...mapGetters('board', {
      task: 'activeTask'
    })
  },
  watch: {
    task (val) {
      this.title = val ? val.title : ''
    }
  },
  methods: mapActions('board', [
    'updateTaskTitle'
  ])
}
</script>

<style scoped>
</style>
