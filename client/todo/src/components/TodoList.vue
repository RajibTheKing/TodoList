<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list> </v-list>
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
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'TodoList',
  data () {
    return {
      selectedItem: {}
    }
  },

  computed: {
    ...mapGetters({
      taskList: 'getTaskList'
    })
  },

  methods: {
    created () {
      console.log('TheKing--> ', this.taskList.length())
    }
  }

})
</script>
