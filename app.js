const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Ruta para la página de "About"
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

let visitCount = 0;

app.get('/', (req, res) => {
    visitCount++;
    res.sendFile(__dirname + '/views/index.html');
    console.log(`Número de visitas: ${visitCount}`);
});
