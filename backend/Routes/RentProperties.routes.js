const express = require("express");
const { rent } = require("../controllers/rent.controller.js");

const router = express.Router();

router.get("/rent", rent);

module.exports = router;