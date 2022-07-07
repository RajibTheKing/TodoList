
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3010

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gettasks', (req, res) => {
  console.log("TheKing--> inside /gettasks")
  const taskList = [
    {
      id: '1',
      title: 'Task 1 server',
      status: 'PENDING'
    },
    {
      id: '2',
      title: 'Task 2 server',
      status: 'DONE'
    },
    {
      id: '3',
      title: 'Task 3 server',
      status: 'PENDING'
    }
  ];

  res.send(taskList)
})

app.post('/create', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
