CREATE DATABASE IF NOT EXISTS libreria_db;
USE libreria_db;

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

CREATE TABLE mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    asunto VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO productos (nombre, isbn, categoria, marca, precio, stock, imagen, descripcion, disponible) VALUES
('Harry Potter', '9780545582889', 'Fantasia', 'Penguin Random House', 349.00, 15, '', 'Una historia de magia y aventuras', TRUE),
('Dune Messiah', '9780441172696', 'Ciencia Ficcion', 'SciFi Classics', 299.00, 8, '', 'Una novela de politica, elegidos y traiciones', TRUE),
('Alas de Sangre', '9786073901802', 'Fantasia', 'Editorial Planeta', 449.00, 35, '', 'Una historia entre fantasia y amores prohibidos', TRUE),
('IT (Eso)', '9780451159274', 'Terror', 'Debolsillo', 299.00, 100, '', 'Una novela de terror y amistad', TRUE),
('1984', '0198185219', 'Ciencia Ficcion', 'Debolsillo', 369.00, 68, '', 'Una distopia política', TRUE),
('Fahrenheit 451', '9789863442790', 'Ciencia Ficcion', 'VRYA', 1249.00, 0, '', 'Una distopia', FALSE),
('The Hunger Games', '9781407135397', 'Ciencia Ficcion', 'Penguin Random House', 449.00, 43, '', 'Ciencia ficcion distopica', TRUE),
('The Hobbit', '9780395520215', 'Fantasia', 'Editoriales Blanquita', 349.00, 18, '', 'Clasico de la fantasia sobre poder y maldad', TRUE),
('Star Wars III', '0345428838', 'Ciencia Ficcion', 'Penguin Random House', 549.00, 90, '', 'La tercera parte de la trilogia', TRUE),
('La historia de tu vida', '9788498891010', 'Ciencia Ficcion', 'VRYA', 399.00, 1, '', 'Una ciencia ficción sobre tiempo y lenguajes', TRUE),
('Project Hail Mary', '9780593395561', 'Ciencia Ficcion', 'Penguin Random House', 599.00, 40, '', 'Una ciencia ficción de supervivencia', TRUE),
('2001: A Space Odyssey', '9780451166753', 'Ciencia Ficcion', 'VRYA', 429.00, 0, '', 'Una ciencia ficción que te volará la cabeza ', FALSE);