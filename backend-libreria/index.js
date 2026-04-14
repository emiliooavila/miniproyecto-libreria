const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'libreria_db'
});

app.get('/', (req, res) => {
    res.send('¡Servidor de la librería funcionando correctamente!');
});

app.get('/api/productos', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM productos');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
        console.error('Este es el error real:', error);
    }
});

app.post('/api/productos', async (req, res) => {
    try {
        const { nombre, categoria, marca, precio, stock, imagen, descripcion } = req.body;
        const [result] = await db.query(
            'INSERT INTO productos (nombre, categoria, marca, precio, stock, imagen, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nombre, categoria, marca, precio, stock, imagen, descripcion]
        );
        res.status(201).json({ id: result.insertId, mensaje: 'Libro agregado al catálogo' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el libro' });
    }
});

app.post('/api/mensajes', async (req, res) => {
    try {
        const { nombre, correo, asunto, mensaje } = req.body;
        const [result] = await db.query(
            'INSERT INTO mensajes (nombre, correo, asunto, mensaje) VALUES (?, ?, ?, ?)',
            [nombre, correo, asunto, mensaje]
        );
        res.status(201).json({ id: result.insertId, mensaje: 'Mensaje de contacto guardado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el mensaje' });
    }
});

// Obtener un solo objeto libro por ID 
app.get('/api/productos/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM productos WHERE id = ?', [req.params.id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
});