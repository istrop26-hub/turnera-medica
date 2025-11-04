import {Router} from 'express'

const router = Router();

// "Base de datos" en memoria
let medicos = [];

// 🔹 CREATE (POST) - Crear un médico
router.post('/medicos', (req, res) => {
  const { nombre, especialidad, matricula } = req.body;

  if (!nombre || !especialidad || !matricula) {
    return res.status(400).json({ error: 'Faltan datos del médico' });
  }

  const nuevoMedico = {
    id: medicos.length + 1,
    nombre,
    especialidad,
    matricula
  };

  medicos.push(nuevoMedico);
  res.status(201).json({ mensaje: 'Médico creado', medico: nuevoMedico });
});

// 🔹 READ ALL (GET) - Listar todos los médicos
router.get('/medicos', (req, res) => {
  res.json(medicos);
});

// 🔹 READ ONE (GET) - Obtener un médico por ID
router.get('/medicos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const medico = medicos.find(m => m.id === id);

  if (!medico) return res.status(404).json({ error: 'Médico no encontrado' });

  res.json(medico);
});

// 🔹 UPDATE (PUT) - Modificar un médico
router.put('/medicos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const medico = medicos.find(m => m.id === id);

  if (!medico) return res.status(404).json({ error: 'Médico no encontrado' });

  const { nombre, especialidad, matricula } = req.body;

  if (nombre) medico.nombre = nombre;
  if (especialidad) medico.especialidad = especialidad;
  if (matricula) medico.matricula = matricula;

  res.json({ mensaje: 'Médico actualizado', medico });
});

// 🔹 DELETE (DELETE) - Eliminar un médico
router.delete('/medicos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = medicos.findIndex(m => m.id === id);

  if (indice === -1) return res.status(404).json({ error: 'Médico no encontrado' });

  medicos.splice(indice, 1);
  res.json({ mensaje: 'Médico eliminado correctamente' });
});


export default router;