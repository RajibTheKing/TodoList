<template>
  <todo-list />
</template>

<script lang="ts">
import Vue from 'vue'
// import HelloWorld from '../components/HelloWorld.vue'
import TodoList from '../components/TodoList.vue'

export default Vue.extend({
  name: 'HomeView',

  components: {
    TodoList
  }
})
</script>
