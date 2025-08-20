// Controlador de compras
export const calcularCompra = (req, res) => {
  const { productos } = req.body;
  if (!productos || !Array.isArray(productos)) {
    return res.status(400).send("Debes enviar un arreglo.");
  }
  const total = productos.reduce((ac, precio) => ac + precio, 0);
  res.send(`El total de la compra es: C$${total}`);
};