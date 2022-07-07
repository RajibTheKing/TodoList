import { ActionTree } from 'vuex'
import { OK } from '@/middlewares/httpClient'
import { Task, TodoState, RootState } from '@/model/model'

import {
  FetchTasks,
  CreateTask,
  UpdateTask,
  DeleteTask
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

  async createTask ({ commit, dispatch }, { title, statusText }): Promise<any> {
    let task : Task
    await CreateTask(title, statusText)
      .then(({ status, data }) => {
        if (status === OK) {
          task = data
          console.log('Create Task ... data from server: ', task)
          commit('MUTATE_CREATE_TASK', task)
        }
      })
      .catch((e : any) => {
        console.log(e)
      })
  },

  async updateTask ({ commit, dispatch }, { id, statusText }): Promise<any> {
    let task : Task
    await UpdateTask(id, statusText)
      .then(({ status, data }) => {
        if (status === OK) {
          task = data
          console.log('Create Task ... data from server: ', task)
          commit('MUTATE_UPDATE_TASK', task)
        }
      })
      .catch((e : any) => {
        console.log(e)
      })
  },

  async deleteTask ({ commit, dispatch }, { id }): Promise<any> {
    let task : Task
    await DeleteTask(id)
      .then(({ status, data }) => {
        if (status === OK) {
          task = data
          console.log('Delete Task ... data from server: ', task)
          commit('MUTATE_DELETE_TASK', task)
        }
      })
      .catch((e : any) => {
        console.log(e)
      })
  }

}
