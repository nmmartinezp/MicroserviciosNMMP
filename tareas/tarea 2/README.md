# COM600 TAREA 2

## CRUD NODEJS CON MONGODB

### Iniciar el Proyecto

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

### Configuración de Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=#defecto 3000
# Database configuration
DB_HOST=#defecto 127.0.0.1
DB_NAME=#basededatos
DB_PORT=#defecto 27017
```

- **PORT**: Puerto en el que se ejecutará el servidor.
- **DB_HOST**: Dirección del host de la base de datos.
- **DB_NAME**: Nombre de la base de datos.
- **DB_PORT**: Puerto de conexión a la base de datos.

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
