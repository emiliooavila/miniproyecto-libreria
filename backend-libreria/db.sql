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
('Harry Potter', '9780545582889', 'Fantasia', 'Penguin Random House', 349.00, 15, '', 'Un nino huerfano descubre que es un mago famoso y asiste a una escuela de magia. Alli hara amigos inseparables y enfrentara al mago tenebroso que asesino a sus padres.', TRUE),
('Dune Messiah', '9780441172696', 'Ciencia Ficcion', 'SciFi Classics', 299.00, 8, '', 'Paul Atreides gobierna el universo, pero el poder absoluto trae enemigos ocultos. Enfrentara conspiraciones religiosas y politicas mientras intenta salvar a su familia y evitar la ruina de su imperio galactico.', TRUE),
('Alas de Sangre', '9786073901802', 'Fantasia', 'Editorial Planeta', 449.00, 35, '', 'Violet entra a un colegio militar para jinetes de dragones donde la supervivencia es el unico objetivo. Entre alianzas mortales y una pasion ardiente, tendra que luchar para no ser eliminada.', TRUE),
('IT (Eso)', '9780451159274', 'Terror', 'Debolsillo', 299.00, 100, '', 'En el tranquilo pueblo de Derry, un grupo de amigos marginados debe unirse para enfrentar a un antiguo monstruo que cambia de forma y se alimenta de los miedos de los ninos.', TRUE),
('1984', '0198185219', 'Ciencia Ficcion', 'Debolsillo', 369.00, 68, '', 'En un regimen totalitario donde el Gran Hermano vigila cada movimiento, un hombre intenta rebelarse pensando por si mismo y buscando el amor, arriesgando su vida ante la policia del pensamiento.', TRUE),
('Fahrenheit 451', '9789863442790', 'Ciencia Ficcion', 'VRYA', 1249.00, 0, '', 'En un futuro opresivo, los bomberos no apagan incendios, sino que queman libros para evitar que la gente piense. Un bombero comienza a cuestionar su trabajo y busca la libertad intelectual.', FALSE),
('The Hunger Games', '9781407135397', 'Ciencia Ficcion', 'Penguin Random House', 449.00, 43, '', 'En una nacion dividida en distritos, los jovenes son obligados a luchar a muerte en un espectaculo televisivo. Katniss se ofrece como voluntaria para salvar a su hermana e inicia una rebelion.', TRUE),
('The Hobbit', '9780395520215', 'Fantasia', 'Editoriales Blanquita', 349.00, 18, '', 'Un tranquilo hobbit es arrastrado a una aventura epica por un mago y un grupo de enanos para recuperar un tesoro robado por un temible dragon en la Montana Solitaria.', TRUE),
('Star Wars III', '0345428838', 'Ciencia Ficcion', 'Penguin Random House', 549.00, 90, '', 'El caballero jedi Anakin Skywalker es seducido por el lado oscuro de la fuerza en medio de una guerra galactica, traicionando a su orden y transformandose en el temido Darth Vader.', TRUE),
('La historia de tu vida', '9788498891010', 'Ciencia Ficcion', 'VRYA', 399.00, 1, '', 'Una linguista es contratada para comunicarse con alienigenas recien llegados. Mientras aprende su complejo idioma, su percepcion del tiempo cambia radicalmente, revelando el inicio y el final de su propia historia.', TRUE),
('Project Hail Mary', '9780593395561', 'Ciencia Ficcion', 'Penguin Random House', 599.00, 40, '', 'Un cientifico despierta solo en una nave espacial sin recordar quien es. Pronto descubre que es la unica esperanza de la humanidad y debe usar su ingenio para salvar la Tierra.', TRUE),
('2001: A Space Odyssey', '9780451166753', 'Ciencia Ficcion', 'VRYA', 429.00, 0, '', 'Una expedicion espacial viaja hacia los confines del sistema solar guiada por una inteligencia artificial que comienza a mostrar un comportamiento letal, explorando el origen y el destino de la evolucion humana.', FALSE);