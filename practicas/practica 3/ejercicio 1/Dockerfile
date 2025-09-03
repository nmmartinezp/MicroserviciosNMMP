# Imagen base de Node.js
FROM node:24-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar solo lo necesario para instalar dependencias
COPY package*.json ./

# Instalar dependencias (sin devDependencies)
RUN npm install --production

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa Express
EXPOSE 8080

# Comando de inicio
CMD ["npm", "start"]