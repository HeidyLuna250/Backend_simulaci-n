import express from "express";
// Importar rutas
import userRoutes from "./routes/usuario.routes.js";
import compraRoutes from "./routes/compra.routes.js";
import saludoRoutes from "./routes/saludo.routes.js";

const app = express();
// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas
app.use(userRoutes);
app.use(compraRoutes);
app.use(saludoRoutes);

// Middleware para rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({
    message: "Ruta no registrada."
  });
});
export default app;