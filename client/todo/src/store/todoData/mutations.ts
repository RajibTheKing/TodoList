import { Task, TodoState } from '@/model/model'
import { MutationTree } from 'vuex'

export const mutations: MutationTree<TodoState> = {
  MUTATE_FETCH_TASKS (state, payload: Task[]) {
    state.items = payload
  },

  MUTATE_CREATE_TASK (state, payload: Task) {
    state.items.push(payload)
    console.log('After push: ', state.items)
  },

  MUTATE_UPDATE_TASK (state, payload: Task) {
    const objIndex = state.items.findIndex((obj) => obj.id === payload.id)
    state.items[objIndex].status = payload.status
    console.log('After update: ', state.items)
  },

  MUTATE_DELETE_TASK (state, payload: Task) {
    state.items = state.items.filter((x) => x.id !== payload.id)
    console.log('After Delete: ', state.items)
  }

}
