const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Para poder leer JSON en el body de las peticiones

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Servidor de la librería funcionando correctamente!');
});

// Arrancar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
});