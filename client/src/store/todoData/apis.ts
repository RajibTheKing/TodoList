import {
  httpClient
} from '@/middlewares/httpClient'

export const URL_PATH = 'localhost:3000'

const FetchTasks = () => httpClient
  .get('/gettasks')

const CreateTask = (title : string, statusText: string) => httpClient
  .post('/create', { title, statusText })

const UpdateTask = (id : string, statusText: string) => httpClient
  .post('/update', { id, statusText })

const DeleteTask = (id: string) => httpClient
  .delete('/delete/' + id)

export {
  FetchTasks,
  CreateTask,
  UpdateTask,
  DeleteTask
}
