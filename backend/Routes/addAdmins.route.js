const express = require("express");
const { addAdmins } = require("../controllers/addAdmins.controller.js");

const router = express.Router();

router.post("/add-admins", addAdmins);

module.exports = router;