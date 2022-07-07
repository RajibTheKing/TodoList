import {
  httpClient
} from '@/middlewares/httpClient'

export const URL_PATH = 'localhost:3000'

const FetchTasks = () => httpClient
  .get('/gettasks')

const CreateTask = (title : string, statusText: string) => httpClient
  .post('/create', { title, statusText })

export {
  FetchTasks,
  CreateTask
}
