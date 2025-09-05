CREATE DATABASE IF NOT EXISTS VENTAS;
USE VENTAS;

-- Tabla de productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    marca VARCHAR(50),
    stock INT NOT NULL DEFAULT 0
);

-- Tabla de clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ci VARCHAR(20) UNIQUE NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    sexo ENUM('M','F','O') NOT NULL
);

-- Tabla de facturas
CREATE TABLE facturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    cliente_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- Tabla de detalles (relación facturas-productos)
CREATE TABLE detalles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    factura_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (factura_id) REFERENCES facturas(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- ---------------------
-- Tabla: productos
-- ---------------------
INSERT INTO productos (nombre, descripcion, marca, stock) VALUES
('Paracetamol', 'Tabletas de 500mg', 'Bayer', 100),
('Ibuprofeno', 'Cápsulas de 200mg', 'Pfizer', 50),
('Aspirina', 'Tabletas de 100mg', 'Bayer', 200),
('Amoxicilina', 'Cápsulas de 500mg', 'GlaxoSmithKline', 75),
('Vitamina C', 'Tabletas de 1000mg', 'Nature', 150);

-- ---------------------
-- Tabla: clientes
-- ---------------------
INSERT INTO clientes (ci, nombres, apellidos, sexo) VALUES
('12345678', 'Juan', 'Pérez', 'M'),
('87654321', 'María', 'Gómez', 'F'),
('11223344', 'Luis', 'Martínez', 'M'),
('44332211', 'Ana', 'Rodríguez', 'F');

-- ---------------------
-- Tabla: facturas
-- ---------------------
INSERT INTO facturas (fecha, cliente_id) VALUES
('2025-09-01', 1),
('2025-09-02', 2),
('2025-09-02', 1),
('2025-09-03', 3);

-- ---------------------
-- Tabla: detalles
-- ---------------------
INSERT INTO detalles (factura_id, producto_id, cantidad, precio) VALUES
(1, 1, 2, 5.50),
(1, 3, 1, 3.20),
(2, 2, 3, 4.10),
(2, 5, 2, 6.00),
(3, 1, 1, 5.50),
(3, 4, 2, 12.00),
(4, 3, 5, 3.20),
(4, 5, 1, 6.00);