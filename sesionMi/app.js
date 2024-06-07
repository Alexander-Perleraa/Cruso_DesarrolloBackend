const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use((req, res, next) =>
{
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/ejemplo', (req, res) => res.send('Hello World!'));

app.post("/ejemplo", (req, res) => 
{
    res.send(`Datos Recibidos: ${JSON.stringify(req.body)}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));