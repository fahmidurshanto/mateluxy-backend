import express from "express";
import { agents, getAgentById } from "../controllers/agents.controller.js";

const router = express.Router();

router.get("/agents",agents);

router.get("/agents/:id", getAgentById);

export default router;