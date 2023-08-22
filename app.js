const express = require('express')
const app = express()
const port = 3000

// Servir archivos estáticos desde la carpeta "public"
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
})

app.get('/proyectos', (req, res) => {
  res.sendFile(__dirname + '/public/proyectos.html');
})

app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + '/public/contacto.html');
})

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})