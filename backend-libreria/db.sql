-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS libreria_db;
USE libreria_db;

-- Tabla principal de productos 
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    isbn VARCHAR(20),
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
INSERT INTO productos (nombre, isbn, categoria, marca, precio, stock, imagen, descripcion, disponible) VALUES
('Harry Potter', '9780545582889', 'Fantasia', 'Penguin Random House', 349.00, 15, '', 'Una historia de magia y aventuras', TRUE),
('Dune Messiah', '9780441172696', 'Ciencia Ficcion', 'SciFi Classics', 299.00, 8, '', 'Una novela de politica, elegidos y traiciones', TRUE);
