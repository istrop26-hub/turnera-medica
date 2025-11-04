import {Router} from 'express'

const router = Router();

// Lista de médicos de ejemplo (datos precargados para probar el sistema)
// Podes modificar, agregar o eliminar médicos fácilmente.

let medicos = [
  {
    id: 1,
    nombre: "Dra. Laura Pérez",
    especialidad: "Cardiología",
    matricula: "MP-1001",
  },
  {
    id: 2,
    nombre: "Dr. Martín López",
    especialidad: "Pediatría",
    matricula: "MP-1002",
  },
  {
    id: 3,
    nombre: "Dr. Javier Fernández",
    especialidad: "Clínico",
    matricula: "MP-1003",
  },
  {
    id: 4,
    nombre: "Dra. Paula Gómez",
    especialidad: "Dermatología",
    matricula: "MP-1004",
  }
];

// CREATE (POST) - Crear un médico
router.post('/', (req, res) => {
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


// Normalizar texto
const normalizar = (texto) =>
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// READ ALL (GET) - Listar todos los médicos
router.get('/', (req, res) => {

  const { especialidad, nombre, matricula } = req.query;
  let resultado = medicos;

  console.log("Query recibida:", especialidad);

  if (!especialidad && !nombre && !matricula) {
    return res.json(medicos);
  }

  if (especialidad) {
    resultado = resultado.filter(m =>
      normalizar(m.especialidad) === normalizar(especialidad)
    );
    console.log("Paso2");
  }
    
  if (nombre) {
    resultado = resultado.filter(m => 
      normalizar(m.nombre).includes(normalizar(nombre))
    );
  }

  if (matricula) {
    resultado = resultado.filter(m => 
      normalizar(m.matricula).includes(normalizar(matricula))
    );
  }

  res.json(resultado);
});

// READ ONE (GET) - Obtener un médico por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const medico = medicos.find(m => m.id === id);

  if (!medico) return res.status(404).json({ error: 'Médico no encontrado' });

  res.json(medico);
});

// UPDATE (PUT) - Modificar un médico
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const medico = medicos.find(m => m.id === id);

  if (!medico) return res.status(404).json({ error: 'Médico no encontrado' });

  const { nombre, especialidad, matricula } = req.body;

  if (nombre) medico.nombre = nombre;
  if (especialidad) medico.especialidad = especialidad;
  if (matricula) medico.matricula = matricula;

  res.json({ mensaje: 'Médico actualizado', medico });
});

// DELETE (DELETE) - Eliminar un médico
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = medicos.findIndex(m => m.id === id);

  if (indice === -1) return res.status(404).json({ error: 'Médico no encontrado' });

  medicos.splice(indice, 1);
  res.json({ mensaje: 'Médico eliminado correctamente' });
});

export { medicos };
export default router;