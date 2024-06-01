const express = require(`express`)
const dotenv = require(`dotenv`)
const geocodificar = require(`./geocodificar`)
const obtenerclima = require(`./obtenerclima`)
const axios = require(`axios`)

dotenv.config()

const app = express()
const puerto = process.env.PORT || 3000

app.use(express.static(`public`))
app.use(express.json())

app.get(`/`, (req, res) => {
    res.sendFile(__dirname + `/public/index.html`)
})

app.post(`/clima`, async (req, res) => {
    const ubicacion = req.body.ubicacion
    try {
        const { latitud, longitud } = await geocodificar(ubicacion)
        const clima = await obtenerclima(latitud, longitud)
        res.send({ ...clima, latitud, longitud })
    } catch (error) {
        res.status(500).send({ error: error.mensage })
    }
})

app.listen(puerto, () => {
    console.log(`Servidor en puerto http://localhost:${puerto}`)
})
