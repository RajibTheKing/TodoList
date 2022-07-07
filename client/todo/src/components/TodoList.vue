<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in taskList" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'TodoList',
  data () {
    return {
      selectedItem: {}
    }
  },

  created () {
    this.$store.dispatch('fetchTasks')
    console.log('TheKing--> ', this.taskList.length)
  },

  computed: {
    ...mapGetters({
      taskList: 'getTaskList'
    }),

    ...mapActions({
      fetchTasks: 'fetchTasks'
    })
  },

  methods: {
  }

})
</script>
