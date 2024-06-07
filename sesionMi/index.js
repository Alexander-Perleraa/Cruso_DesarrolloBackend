const express = require('express')
const app = express()
const port = 3000

const pregunta=(req, res, netx)=>{
    console.log(`${req.method} ${req.url}`)
    netx
}

app.use(pregunta)
app.get('/', (req, res) => 
    res.send('Get funcionando'))

app.post('/', function (req, res) {
  res.send('POST funcionando')
})


app.put(function(req, res) {
  res.send(`PuT funcionando`);
});

app.delete('/', function (req, res) {
    res.send('delete funcionando')
  })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))