import { GetterTree } from 'vuex'
import { TodoState, Task, RootState } from '../../model/model'

export const getters: GetterTree<TodoState, RootState> = {
  getTaskList (state) : Task[] {
    return state.items
  }
}
