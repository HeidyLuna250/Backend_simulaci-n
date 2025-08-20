import express from "express";
import { registrarUsuario } from "../controllers/usuario.controllers.js";
const router = express.Router();
router.post("/usuario", registrarUsuario);
export default router;