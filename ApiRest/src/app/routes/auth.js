const express = require("express");

const router = express.Router();
const controller = require("../controllers/auth");

router.post("/register", controller.register);
router.post("/authenticate", controller.authenticate);

module.exports = router;