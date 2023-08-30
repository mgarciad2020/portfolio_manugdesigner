const express = require('express');
const path = require('path'); // Agrega esta línea para importar el módulo path
const app = express();
const port = 6500;

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/proyectos', (req, res) => {
  res.sendFile(__dirname + '/public/proyectos.html');
});

app.get('/contacto', (req, res) => {
  res.sendFile(__dirname + '/public/contacto.html');
});

app.listen(port, () => {
  console.log(`Servidor abierto en el puerto ${port}`);
});
