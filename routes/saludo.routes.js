import express from "express";
import { saludar } from "../controllers/saludo.controllers.js";
const router = express.Router();
router.get("/saludo", saludar);
export default router;