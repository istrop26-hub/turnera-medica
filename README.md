# 🏥 Sistema de Turnos Médicos

Proyecto desarrollado con **Node.js** y **Express**, que permite gestionar médicos en una turnera médica.  
Actualmente, los datos se almacenan **en memoria** (sin base de datos).

---

## 🚀 Características principales

- ✅ CRUD completo de médicos (crear, listar, modificar, eliminar).
- 🧠 Estructura simple y clara.
- ⚡ Basado en Express, sin dependencias externas de base de datos.
- Viene con 4 médicos cargados en memoria y 3 consultorios. Con estos podés probar:

/medicos → listar todos

/medicos?especialidad=Pediatría → filtrar por especialidad

/joinear/medicos-por-consultorio?numero=101 → ver qué médicos están en el consultorio 101

/joinear/medicos-consultorios → ver todos los médicos con su consultorio asignado

/joinear/consultorios-por-medico?id=1 → Ver el consultorio que tiene el médico con matrícula 1

---

## 🧩 Estructura del proyecto

turnera-medica/
│
├── src/
│

│ ├── routes/
│

│ │ └── consultorios.routes.js # Consultorios cargados en memoria
│

│ │ └── joinear.routes.js # Rutas extras de relación entre tablas
│

│ │ └── medicos.routes.js # Rutas CRUD de médicos
│

├ ── index.js # Archivo principal del servidor
│

├── .gitignore
│

├── package-lock.json
│

├── package.json
│

└── README.md


---

## ⚙️ Requisitos previos

Antes de ejecutar el proyecto, asegurate de tener instalado:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) (v8 o superior)

---

## 🧠 Instalación y ejecución

1. Cloná el repositorio:
  
git clone https://github.com/istrop26-hub/turnera-medica.git

Entrá en la carpeta del proyecto: cd turnera-medica

Instalá las dependencias: npm install

Ejecutá el servidor: node src/index.js

---------------------------------------

El servidor quedará disponible en:
http://localhost:3000

--------------------------------------

📡 Endpoints disponibles (CRUD de Médicos)

POST	/medicos	Crear un nuevo médico

GET	/medicos	Listar todos los médicos

GET	/medicos/:id	Obtener un médico por ID

PUT	/medicos/:id	Actualizar un médico existente

DELETE	/medicos/:id	Eliminar un médico

🧾 Ejemplo de creación (POST /medicos)

Body (JSON):

{
  "nombre": "Dra. Pérez",
  
  "especialidad": "Cardiología",
  
  "matricula": "MP-1234"
}


🛠️ Tecnologías utilizadas
- Node.js
- Express
- JavaScript

✨ Próximas mejoras
 
 Persistencia con base de datos (MongoDB o MySQL)

 Interfaz web (HTML + JS o React)

👨‍💻 Autor
@istrop26-hub
Proyecto académico – Arquitectura Web
📅 Año: 2025
