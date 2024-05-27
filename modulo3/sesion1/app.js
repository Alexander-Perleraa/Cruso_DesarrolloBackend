const express = require(`express`)
const app = express()
const port = 4000
const cors = require(`cors`)

app.use(cors())

app.use(express.json())

let tasks = []
let id = []

app.get(`/tasks`, (req, res) => {
    res.json(tasks)
})
app.post(`/tasks`, (req, res) => {
    if (!req.body.title) {
        response.status(400)
    }
    const newtasks = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    }
    tasks.push(newtasks);
    res.status(201).json(newtasks);
})

app.get(`/tasks` / id, (req, res) => {
    const taskid = parseInt(req.params.id)
    const tasks = tasks.find(t = t.id === taskid)
    if (task) {
        res.json(task)
    } else {
        res.status(404).send(`no se enocntro la tarea`)
    }


})


app.put("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id)
    const task = tasks.find(task => task.id === taskId)

    if (task) {
        task.title = req.body.title || task.title,
            task.completed = req.body.completed ?? task.completed

        res.json(task)

    } else {
        res.status(404).send("No se actualizó la tarea")
    }
})

app.delete("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id)
    const taskIndex = tasks.findIndex(task => task.id === taskId)

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1)

        res.status(204).send("Tarea eliminada")

    } else {
        res.status(404).send("No se actualizó la tarea")
    }
})



app.listen(port, () => {
    console.log(`Servidor corriendo en la url http://localhost:${port}`)
})