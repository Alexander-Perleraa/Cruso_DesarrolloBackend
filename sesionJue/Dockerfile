FROM node:latest

# Establece el directorio de trabajo en /home/app
WORKDIR /home/app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que la aplicación escucha
EXPOSE 3000

# Define el comando por defecto para ejecutar tu aplicación
CMD ["npm", "start"]