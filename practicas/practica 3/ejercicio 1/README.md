# COM600 TAREA 3

## IMAGEN DOCKER DE CALCULADORA WEB

Esta imagen empaqueta una calculadora web sencilla, con las operaciones de sumar, restar, multiplicar y dividir

### Iniciar el Proyecto

Ejecuta el siguiente comando para construir la imagen docker:

```bash
 docker build -t p3-ejercicio1-com600 .
```

### Variables de Entorno para la imagen

- **PORT**: Puerto en el que se ejecutará el servidor de la app.

### Ejecutar el contenedor de la imagen

Ejecuta el siguiente comando para hacer correr la imagen docker, junto con las variables de entorno:

```bash
 docker run -d `
  -p 8080:8080 `
  -e PORT=8080 `
  --name p3-ej1 `
  p3-ejercicio1-com600
```

### Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **Node.js**: Para el entorno de ejecución del servidor.
- **Express**: Como framework para la creación de la API REST.
- **EJS**: Motor de plantillas para renderizar vistas dinámicas.
- **Docker**: Plataforma abierta para desarrollar, empaquetar, distribuir y ejecutar aplicaciones utilizando contenedores..
