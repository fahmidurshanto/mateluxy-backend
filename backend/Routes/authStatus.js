// backend/routes/auth.js
const express = require('express');
const { verifyToken } = require('../utils/verifyToken.js');

const router = express.Router();

router.get("/check-auth", verifyToken, (req, res) => {
  res.status(200).json({ success: true, message: "Authorized" });
});

module.exports = router;
