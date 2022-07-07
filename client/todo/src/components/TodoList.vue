<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-text-field
      label="Regular"
      v-model="newTask"
      placeholder="Enter a new Task"
      @keyup.enter="createNewTask()"
    ></v-text-field>
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
      selectedItem: {},
      newTask: ''
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
      fetchTasks: 'fetchTasks',
      createTask: 'createTask'
    })
  },

  methods: {
    createNewTask () {
      this.$store.dispatch('createTask', { title: this.newTask, statusText: 'PENDING' })
    }
  }

})
</script>
