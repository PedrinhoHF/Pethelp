const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const database = require("../database/models");

router.get("/", loginController.index);
router.get("/login", loginController.cadastro);
router.post("/", loginController.login);

module.exports = router;
