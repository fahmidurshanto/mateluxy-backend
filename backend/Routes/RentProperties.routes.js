import express from "express";
import { rent } from "../controllers/rent.controller.js";

const router = express.Router();

router.get("/rent",rent);

export default router;