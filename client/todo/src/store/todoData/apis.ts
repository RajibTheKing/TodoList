import {
  httpClient
} from '@/middlewares/httpClient'

export const URL_PATH = 'localhost:3000'

const FetchTasks = () => httpClient
  .get('/gettasks')

export {
  FetchTasks
}
