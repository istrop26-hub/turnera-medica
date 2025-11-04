import express from "express";
const router = express.Router();

// Datos en memoria
const consultorios = [
  { id: 1, numero: "101", medicoIds: [1, 4] },
  { id: 2, numero: "202", medicoIds: [2] },
  { id: 3, numero: "303", medicoIds: [3] }
];

// Endpoint para listar todos los consultorios
router.get("/", (req, res) => {
  res.json(consultorios);
});


export { consultorios };
export default router;
