const express = require(`express`)
const app= express()
const PORT=3000

app.get (`/`, (req,res) =>
    {
        res .send(`Este es un servidor basico de prueba`)
    })
    app.listen(PORT, () => 
        {
            console.log(`server iniciado http://localhost:${PORT}`)
        })