import express from "express";
import { calcularCompra } from "../controllers/compra.controllers.js";
const router = express.Router();
router.post("/compra", calcularCompra);
export default router;