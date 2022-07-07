import { ActionTree } from 'vuex'
import { OK } from '@/middlewares/httpClient'
import { Task, TodoState, RootState } from '@/model/model'

import {
  FetchTasks
} from './apis'

export const actions: ActionTree<TodoState, RootState> = {

  async fetchTasks ({ commit, dispatch }): Promise<any> {
    let taskList: Task[] = []
    await FetchTasks()
      .then(({ status, data }) => {
        if (status === OK) {
          taskList = data
          console.log('Fetch Data from server: ', taskList)
          commit('MUTATE_FETCH_TASKS', taskList)
        }
      })
      .catch((e : any) => {
        console.log(e)
      })
  },

  async createTask ({ commit, dispatch }, { name, workspaceId }): Promise<any> {
    // let flowObject: any = {}
    // await PostFlow(name, workspaceId)
    //   .then(({ status, data }) => {
    //     if (status === OK) {
    //       flowObject = data
    //       commit(types.MUTATE_FLOW_CREATED, flowObject)
    //     }
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  }

}
