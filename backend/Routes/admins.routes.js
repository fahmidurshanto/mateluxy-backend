const express = require("express");
const { admins } = require("../controllers/admins.controller.js");

const router = express.Router();

router.get("/admins", admins);

module.exports = router;