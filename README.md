# 🏥 Sistema de Turnos Médicos

Proyecto desarrollado con **Node.js** y **Express**, que permite gestionar médicos en una turnera médica.  
Actualmente, los datos se almacenan **en memoria** (sin base de datos).

---

## 🚀 Características principales

- ✅ CRUD completo de médicos (crear, listar, modificar, eliminar)
- 📅 Preparado para futura gestión de pacientes y turnos
- 🧠 Estructura simple y clara (rutas, controladores, servidor)
- ⚡ Basado en Express, sin dependencias externas de base de datos

---

## 🧩 Estructura del proyecto

turnera-medica/
│
├── src/
│ ├── routes/
│ │ └── medicos.routes.js # Rutas CRUD de médicos
│ ├── server.js # Archivo principal del servidor
│
├── package.json
└── README.md

yaml
Copiar código

---

## ⚙️ Requisitos previos

Antes de ejecutar el proyecto, asegurate de tener instalado:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) (v8 o superior)

---

## 🧠 Instalación y ejecución

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/istrop26-hub/turnera-medica.git
Entrá en la carpeta del proyecto:

bash
Copiar código
cd turnera-medica
Instalá las dependencias:

bash
Copiar código
npm install
Ejecutá el servidor:

bash
Copiar código
node src/server.js
El servidor quedará disponible en:

arduino
Copiar código
http://localhost:3000
📡 Endpoints disponibles (CRUD de Médicos)
Método	Endpoint	Descripción
POST	/medicos	Crear un nuevo médico
GET	/medicos	Listar todos los médicos
GET	/medicos/:id	Obtener un médico por ID
PUT	/medicos/:id	Actualizar un médico existente
DELETE	/medicos/:id	Eliminar un médico

🧾 Ejemplo de creación (POST /medicos)
Body (JSON):

json
Copiar código
{
  "nombre": "Dra. Pérez",
  "especialidad": "Cardiología",
  "matricula": "MP-1234"
}
🛠️ Tecnologías utilizadas
Node.js

Express

JavaScript

✨ Próximas mejoras
 Implementar CRUD de pacientes

 Asignación de turnos por médico

 Persistencia con base de datos (MongoDB o MySQL)

 Interfaz web (HTML + JS o React)

👨‍💻 Autor
@istrop26-hub
Proyecto académico – Arquitectura Web
📅 Año: 2025
