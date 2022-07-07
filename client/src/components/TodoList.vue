<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-text-field
      v-model="newTask"
      placeholder="Enter a new Task"
      @keyup.enter="createNewTask()"
      dense
    ></v-text-field>
    <v-list>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in taskList" :key="i">
          <v-list-item-content>
            <v-list-item-title
              v-text="item.title"
              :class="item.status === 'PENDING' ? '' : 'customText'"
            >
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon v-if="item.status !== 'DONE'">
            <v-icon
              large
              color="green darken-2"
              @click="updateStatus(item.id)"
            >
              mdi-check
            </v-icon>
          </v-list-item-icon>
          <v-list-item-icon>
            <v-icon
              large
              color="red darken-2"
              @click="deleteCurrentTask(item.id)"
            >
              mdi-delete
            </v-icon>
          </v-list-item-icon>
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
      createTask: 'createTask',
      updateTask: 'updateTask',
      deleteTask: 'deleteTask'
    })
  },

  methods: {
    createNewTask () {
      this.$store.dispatch('createTask', { title: this.newTask, statusText: 'PENDING' })
      this.newTask = ''
    },

    updateStatus (id : string) {
      this.$store.dispatch('updateTask', { id, statusText: 'DONE' })
    },

    deleteCurrentTask (id: string) {
      this.$store.dispatch('deleteTask', { id })
    }
  }

})
</script>

<style scoped>
.customText {
  text-decoration: line-through;
}
</style>
