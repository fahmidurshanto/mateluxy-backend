import express from "express";
import { properties } from "../controllers/properties.controller.js";

const router = express.Router();

router.get("/properties",properties);

export default router;