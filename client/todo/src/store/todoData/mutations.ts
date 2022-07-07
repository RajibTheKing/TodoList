import { Task, TodoState } from '@/model/model'
import { MutationTree } from 'vuex'

export const mutations: MutationTree<TodoState> = {
  MUTATE_FETCH_TASKS (state, payload: Task[]) {
    state.items = payload
  },

  MUTATE_CREATE_TASK (state, payload: Task) {
    state.items.push(payload)
    console.log('After push: ', state.items)
  }
}
