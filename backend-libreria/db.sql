-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS libreria_db;
USE libreria_db;

-- Tabla principal de productos 
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    marca VARCHAR(100),
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    imagen VARCHAR(255),
    descripcion TEXT,
    disponible BOOLEAN DEFAULT TRUE
);

-- Tabla de mensajes de contacto 
CREATE TABLE mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    asunto VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar algunos libros de ciencia ficción de prueba
INSERT INTO productos (nombre, categoria, marca, precio, stock, imagen, descripcion, disponible) VALUES
('Realidad Disruptiva', 'Coming of Age', 'Amazon independent', 350.00, 15, 'https://ruta-imagen.com/materia.jpg', 'Un thriller fascinante sobre realidades paralelas', TRUE),
('El Fin de la Eternidad', 'Viajes en el tiempo', 'SciFi Classics', 280.50, 8, 'https://ruta-imagen.com/eternidad.jpg', 'Los Eternos vigilan y modifican la historia humana, hasta que un técnico descubre el verdadero costo de la perfección temporal.', TRUE);
