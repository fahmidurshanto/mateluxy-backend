import express from "express";
import {addProperties} from "../controllers/addProperties.controller.js";

const router = express.Router();

router.post("/add-property",addProperties);

export default router;