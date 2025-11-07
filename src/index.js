import express from 'express'
import medicosRoutes from "./routes/medicos.routes.js"
import joinearRoutes  from "./routes/joinear.routes.js"
import consultoriosRoutes  from "./routes/consultorios.routes.js"
import turnosRoutes  from "./routes/turnos.routes.js"

const app = express()

app.use(express.json());

app.use("/medicos", medicosRoutes);
app.use("/joinear", joinearRoutes);
app.use("/consultorios", consultoriosRoutes);
app.use("/turnos", turnosRoutes);


app.listen(3000)
console.log('Server on port', 3000)



