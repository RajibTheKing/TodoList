
const express = require('express')
var cors = require('cors')
const bodyParser = require("body-parser")

const app = express()
const port = 3010
var idCounter = 3;

var taskList = [
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


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gettasks', (req, res) => {
  console.log("TheKing--> inside GET /gettasks")
  

  res.send(taskList)
})

app.post('/create', (req, res) => {
  console.log("req.body: ", req.body);
    var taskTitle = req.body.title;
    var statusText = req.body.statusText;
    console.log("TheKing--> inside POST /create: ", taskTitle, statusText)
    idCounter+=1;
    const newTask = {
      id: idCounter.toString(),
      title: taskTitle,
      status: statusText
    };

    taskList.push(newTask);
    
    res.send(newTask);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
