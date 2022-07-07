import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
// import { mutations } from './mutations';
import { TodoState, initialState, RootState } from '../../model/model'

export const state: TodoState = {
  loading: false,
  items: initialState.items
}

export const todoData: Module<TodoState, RootState> = {
  state,
  getters,
  actions,
  mutations
}
