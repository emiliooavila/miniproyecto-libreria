# Sistema de Gestión de Librería Web

Aplicación web Fullstack para la gestión, visualización y venta de libros en una librería. Este proyecto utiliza una arquitectura dividida entre cliente y servidor, soportada por contenedores para la base de datos. Desarrollado por Jorge Emilio Avila Valadez y Diego Abraham Delgado Rodriguez como segundo mini proyecto de la materia Tecnologías Web para la Universidad Autónoma de Aguascalientes.

##  Tecnologías e Infraestructura

* **Frontend:** Angular (Standalone Components, Reactive Forms).
* **Backend:** Node.js con el framework Express.
* **Base de Datos:** MySQL.
* **Infraestructura y Despliegue:** Docker y Docker Compose para la contenerización del motor de base de datos.
* **Estilos y UX:** CSS Nativo y alertas interactivas con SweetAlert2.

##  Guía de Instalación y Ejecución

Para correr este proyecto en tu entorno local, necesitarás utilizar **dos terminales independientes** (una para el servidor y otra para la interfaz). Asegúrate de tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/) y [Node.js](https://nodejs.org/).

### 1. Clonar el repositorio
Abre tu terminal y ejecuta:
```bash
git clone [https://github.com/emiliooavila/miniproyecto-libreria.git]
cd miniproyecto-libreria
```

### 2. Inicializar Backend (Terminal 1)
```bash
cd backend-libreria
docker compose up -d
npm install
npm run dev
```

### 3. Inicializar Frontend (Terminal 2)
```bash
cd frontend-libreria
npm install
ng serve -o
