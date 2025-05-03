const express = require("express");
const { addAgents } = require("../controllers/addAgents.controller.js");

const router = express.Router();

router.post("/add-agents", addAgents);

module.exports = router;