require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'libreria_db'
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

const validarProducto = (req, res, next) => {
    const { nombre, isbn, categoria, precio, stock, descripcion } = req.body;
    
    // Validacion de campos que no esten en blanco
    if (!nombre || !isbn || !categoria || !descripcion) {
        return res.status(400).json({ error: 'Faltan campos requeridos o están en blanco' });
    }
    // Validacion matematica del precio y stock
    if (precio <= 0) {
        return res.status(400).json({ error: 'El precio debe ser un número positivo mayor a 0' });
    }
    if (stock < 0) {
        return res.status(400).json({ error: 'El stock no puede ser un número negativo' });
    }
    
    next();
};

app.post('/api/productos', validarProducto, async (req, res) => {
    try {
        const { nombre, isbn, categoria, marca, precio, stock, imagen, descripcion, disponible } = req.body;
        
        // Conversiones por seguridad para el FrontEnd
        const esDisponible = disponible !== undefined ? disponible : true;
        const img = imagen || '';
        const mrc = marca || '';

        const [result] = await db.query(
            'INSERT INTO productos (nombre, isbn, categoria, marca, precio, stock, imagen, descripcion, disponible) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [nombre, isbn, categoria, mrc, precio, stock, img, descripcion, esDisponible]
        );
        res.status(201).json({ id: result.insertId, mensaje: 'Libro agregado al catálogo' });
    } catch (error) {
        console.error('Error insertando libro:', error);
        res.status(500).json({ error: 'Error al guardar el libro en la base de datos' });
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