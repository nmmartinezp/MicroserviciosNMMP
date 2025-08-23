# COM600 TAREA 3

## IMAGEN DOCKER DE CRUD NODEJS CON MONGODB

Esta imagen solo empaqueta el servicio de express, mas no el servicio mongodb.

### Iniciar el Proyecto

Ejecuta el siguiente comando para construir la imagen docker:

```bash
 docker build -t crud-agenda-mongodb .
```

### Variables de Entorno para la imagen

- **PORT**: Puerto en el que se ejecutará el servidor de la app.
- **DB_HOST**: Dirección del host de la base de datos.
- **DB_NAME**: Nombre de la base de datos.
- **DB_PORT**: Puerto de conexión a la base de datos.

**Nota**: para del DB_HOST se utilizara host.docker.internal para acceder al host de la maquina local

### Ejecutar el contenedor de la imagen

Ejecuta el siguiente comando para hacer correr la imagen docker, junto con las variables de entorno:

```bash
 docker run -d `
  -p 3000:3000 `
  -e PORT=3000 `
  -e DB_HOST=host.docker.internal `
  -e DB_PORT=27017 `
  -e DB_NAME=Tarea2 `
  --name agenda_app `
  crud-agenda-mongodb
```

### Configuración de la Collection

Crea una coleccion llamada `agenda` con los siguientes campos:

```javascript
nombres: { type: String, required: true },
apellidos: { type: String, required: true },
fecha_nacimiento: { type: Date, required: true },
direccion: { type: String },
celular: { type: Number },
correo: { type: String }
```

Puedes exportar el archivo `agenda.json` a la coleccion utilizando la herramienta de tu preferencia. El archivo `agenda.json` estará ubicado en el directorio `lib` del proyecto.

### Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **Node.js**: Para el entorno de ejecución del servidor.
- **Express**: Como framework para la creación de la API REST.
- **MongoDB**: Base de datos NoSQL para almacenar la información.
- **Mongoose**: ODM para interactuar con MongoDB.
- **EJS**: Motor de plantillas para renderizar vistas dinámicas.
- **Docker**: Plataforma abierta para desarrollar, empaquetar, distribuir y ejecutar aplicaciones utilizando contenedores..
