import express from "express";
import { medicos } from "./medicos.routes.js";
import { consultorios } from "./consultorios.routes.js";

const router = express.Router();

// Todos los médicos con su consultorio asignado
router.get("/medicos-consultorios", (req, res) => {
  const resultado = medicos.map((m) => {
    const consultorio = consultorios.find((c) => c.medicoIds.includes(m.id));
    return {
      medico: m.nombre,
      especialidad: m.especialidad,
      consultorio: consultorio
        ? `N° ${consultorio.numero}`
        : "Sin asignar",
    };
  });
  res.json(resultado);
});

//Médicos asignados a un consultorio (por número)
router.get("/medicos-por-consultorio", (req, res) => {
  const { numero } = req.query;
  const consultorio = consultorios.find((c) => c.numero.toString() === numero.toString());
  if (!consultorio)
    return res
      .status(404)
      .json({ error: `Consultorio N° ${numero} no encontrado.` });

  const medicosAsignados = medicos.filter((m) =>
    consultorio.medicoIds.includes(m.id)
  );

  res.json({
    consultorio: `N° ${consultorio.numero} `,
    medicos: medicosAsignados.map((m) => ({
      nombre: m.nombre,
      especialidad: m.especialidad,
    })),
  });
});

//Consultorios donde atiende un médico
router.get("/consultorios-por-medico", (req, res) => {
  const { id } = req.query;
  const medico = medicos.find((m) => m.id === parseInt(id));

  if (!medico)
    return res.status(404).json({ error: "Médico no encontrado." });

  const consultoriosAsignados = consultorios.filter((c) =>
    c.medicoIds.includes(medico.id)
  );

  res.json({
    medico: medico.nombre,
    especialidad: medico.especialidad,
    consultorios: consultoriosAsignados.map((c) => ({
      numero: c.numero,
      piso: c.piso,
    })),
  });
});

export default router;
