const express = require("express");
const { agents } = require("../controllers/agents.controller.js");

const router = express.Router();

router.get("/agents", agents);

module.exports = router;