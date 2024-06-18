const express = require (`express`)
const authRoutes = require (`./routes/authRoutes`)
const protectedRoutes= require(`./routes/protectedRoutes`)
const {port} = require (`./config`)

const app = express()

app.use(express.json())
app.use(`/api`, authRoutes)
app.use(`/api`,protectedRoutes)

app.listen(port, () => 
    {
        console.log(`http://localhost:${port}`)
    })