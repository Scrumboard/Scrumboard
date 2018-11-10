<template>

  <div>
    <TheHeader />

    <div class="container">
      <div class="row">
        <div class="col-12">

          <div class="card my-3">
            <div class="card-body">
              <h5 class="card-title">My Boards</h5>
            </div>
            <ul class="list-group list-group-flush">
              <router-link
                v-for="board in boards" :key="board.id"
                :to="{ name: 'board', params: { id: 1 } }"
                tag="li" class="list-group-item">
                <i class="fas fa-fw fa-arrow-right"></i> Board #{{ board.id }}
              </router-link>
            </ul>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TheHeader from './shared/TheHeader'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Overview',
  components: {
    TheHeader
  },
  created () {
    this.loadBoards()
  },
  computed: {
    ...mapState('overview', [
      'boards'
    ])
  },
  methods: {
    ...mapActions('overview', [
      'loadBoards'
    ])
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.list-group-item {
  cursor: pointer;
}
</style>
