<template>
  <div>

    <TheHeader/>

    <div class="container">
      <div class="row flex-nowrap">

        <div v-for="lane in lanes" :key="lane.title" class="col-6 p-2 bg-light border border-success">

          <div class="row">
            <div class="col-12">
              <h3>{{ lane.title }}</h3>
            </div>
            <div v-for="item in lane.items" :key="item" class="col-12">
              <div class="card m-2">
                <div class="card-body">
                  {{ item }}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import TheHeader from './shared/TheHeader'

export default {
  data () {
    return {
      lanes: [
        {
          title: 'Todo',
          items: [
            'item 1',
            'item 2',
            'item 7'
          ]
        },
        {
          title: 'Progress',
          items: [
            'item 3',
            'item 4'
          ]
        },
        {
          title: 'Testing',
          items: [
            'item 5'
          ]
        },
        {
          title: 'Done',
          items: [
            'item 6',
            'item 8'
          ]
        }
      ]
    }
  },
  components: {
    TheHeader
  }
}
</script>

<style lang="scss" scoped>
  .row {
    overflow-x: scroll;
  }
</style>
