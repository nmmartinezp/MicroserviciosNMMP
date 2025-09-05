# COM600 TAREA 4

## Api de ventas

### Iniciar el Proyecto

Ejecuta el siguiente comando para ejecutar los servicio con docker compose:

```bash
 docker compose up -d --build
```

para detener eliminando todas las instancias creadas por compose:

```bash
 docker compose down -v --rmi local
```

### Variables de Entorno para la imagen

- **DB_HOST**: Dirección del host de la base de datos.
- **DB_USER**: Nombre del usuario de la base de datos.
- **DB_PASSWORD**: Contraseña del usuario de la base de datos.
- **DB_NAME**: Nombre de la base de datos.
- **DB_PORT**: Puerto de conexión a la base de datos.

**Nota**: Puedes ver el archivo .env.example

### Revisar las documentacion swagger de la api

Ingresa a la ruta de la api `/api-docs` para poder revisar los endpoints de la api de ventas.

### Datos iniciales

El proyecto cuenta con datos iniciales creado en el archivo `/db/init.sql`, puedes modificar el archivo de inicio para que no tenga datos al iniciar o agregar mas.

### Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **Node.js**: Para el entorno de ejecución del servidor.
- **Express**: Como framework para la creación de la API REST.
- **Mysql**: Base de datos para almacenar la información.
- **Sequelize**: ORM para interactuar con la base de datos sin usar sql.
- **Docker**: Plataforma abierta para desarrollar, empaquetar, distribuir y ejecutar aplicaciones utilizando contenedores.
- **Hapi/Boom**: Una biblioteca del ecosistema de Hapi, un framework para Node.js, que permite crear objetos de error fáciles de usar y compatibles con códigos de estado HTTP.
- **Morgan**: Middleware (un programa que se ejecuta en el proceso de manejo de una solicitud) que se usa para registrar las solicitudes HTTP entrantes en una aplicación.
- **Swagger**: Conjunto de herramientas de código abierto para diseñar, construir, documentar y usar APIs REST, usando una especificación independiente del lenguaje para describirlas.
