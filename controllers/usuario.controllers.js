// Controlador de usuarios
export const registrarUsuario = (req, res) => {
const { nombre, correo } = req.body;
res.send(`Usuario registrado: ${nombre} (${correo})`);
};