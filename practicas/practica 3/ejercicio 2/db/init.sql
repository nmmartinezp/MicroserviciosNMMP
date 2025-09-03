CREATE DATABASE IF NOT EXISTS DBPRACTICA3;

USE DBPRACTICA3;

CREATE TABLE USER (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOMBRES VARCHAR(50) NOT NULL,
    CORREO VARCHAR(100),
    FECHA_REGISTRO DATETIME DEFAULT NOW()
) ENGINE=InnoDB AUTO_INCREMENT=1001;

INSERT INTO USER (NOMBRES, CORREO) VALUES
('Juan Perez', 'juan.perez@example.com'),
('María Gomez', 'maria.gomez@example.com'),
('Carlos Rodriguez', 'carlos.rodriguez@example.com'),
('Ana Martinez', 'ana.martinez@example.com');