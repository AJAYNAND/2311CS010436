const express = require("express");
const router = express.Router();

const { createLog } = require("../controllers/logController");

router.get("/log", createLog);

module.exports = router;