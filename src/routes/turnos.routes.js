import express from "express";
const router = express.Router();



let turnos = [
  {
    id: 1,
    medico: "Dra. Laura Pérez",
    fecha: "11/11/2025",
    hora: "14:30",
    paciente: "Juan Pérez",
  },
];

// CREATE (POST) - Crear un turno
router.post('/', (req, res) => {
  const { medico, fecha, hora, paciente } = req.body;

  if (!medico || !fecha || !hora || !paciente) {
    return res.status(400).json({ error: 'Faltan datos del turno' });
  }

  const nuevoTurno = {
    id: turnos.length + 1,
    medico,
    fecha,
    hora,
    paciente
  };

  turnos.push(nuevoTurno);
  res.status(201).json({ mensaje: 'Turno creado', turno: nuevoTurno });
});


// Normalizar texto
const normalizar = (texto) =>
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();


// READ ALL (GET) - Listar todos los turnos
router.get('/', (req, res) => {

  const { medico, fecha, hora, paciente } = req.query;
  let resultado = turnos;


  if (!medico && !fecha && !hora && !paciente) {
    return res.json(turnos);
  }

  if (medico) {
    resultado = resultado.filter(m =>
      normalizar(m.medico) === normalizar(medico)
    );
  }
    
  if (fecha) {
    resultado = resultado.filter(m => m.fecha === fecha);
}

  if (hora) {
    resultado = resultado.filter(m => m.hora === hora);
}

  if (paciente) {
    resultado = resultado.filter(m => 
      normalizar(m.paciente).includes(normalizar(paciente))
    );
  }

  res.json(resultado);
});

// READ ONE (GET) - Obtener un turno por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const turno = turnos.find(m => m.id === id);

  if (!turno) return res.status(404).json({ error: 'Turno no encontrado' });

  res.json(turno);
});

// UPDATE (PUT) - Modificar un turno
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const turno = turnos.find(m => m.id === id);

  if (!turno) return res.status(404).json({ error: 'Turno no encontrado' });

  const { medico, fecha, hora, paciente } = req.body;

  if (medico) turno.medico = medico;
  if (fecha) turno.fecha = fecha;
  if (hora) turno.hora = hora;
  if (paciente) turno.paciente = paciente;

  res.json({ mensaje: 'Turno actualizado', turno });
});

// DELETE (DELETE) - Eliminar un turno
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = turnos.findIndex(m => m.id === id);

  if (indice === -1) return res.status(404).json({ error: 'Turno no encontrado' });

  turnos.splice(indice, 1);
  res.json({ mensaje: 'Turno eliminado correctamente' });
});

export { turnos };
export default router;