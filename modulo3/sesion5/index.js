const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Todos');
});

// Ruta para obtener todos los datos
app.get('/todos', async (req, res) => {
    try {
        const response = await axios.get(TODOS_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

// Ruta para obtener  por id y solo mostrar el title
app.get('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`${TODOS_URL}/${id}`);
        const { title } = response.data;
        res.status(200).json({ title });
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

// Ruta para obtener  por title y devolver todos los campos
app.get('/todos/title/:title', async (req, res) => {
    const { title } = req.params;
    try {
        const response = await axios.get(TODOS_URL);
        const todos = response.data;
        const filteredTodos = todos.filter(todo => todo.title.toLowerCase() === title.toLowerCase());
        if (filteredTodos.length === 0) {
            res.status(404).json({ error: 'error' });
        } else {
            res.json(filteredTodos);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

// Ruta para obtener solamente 5 documentos
app.get('/todos/limit/5', async (req, res) => {
    try {
        const response = await axios.get(TODOS_URL);
        res.json(response.data.slice(0, 5));
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});


app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en  http://localhost:${PORT}`);
});