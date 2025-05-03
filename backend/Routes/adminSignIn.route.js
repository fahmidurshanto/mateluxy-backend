const express = require("express");
const { adminSignIn } = require("../controllers/adminSignIn.controller.js");

const router = express.Router();

router.post("/admin-login", adminSignIn);

module.exports = router;