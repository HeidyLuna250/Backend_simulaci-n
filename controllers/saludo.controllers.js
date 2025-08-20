// Controlador de saludos
export const saludar = (req, res) => {
  const { nombre } = req.query;
  res.send(`Bienvenido, ${nombre || "invitado"}`);
};