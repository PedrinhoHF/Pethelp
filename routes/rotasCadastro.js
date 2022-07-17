const express = require("express");
const router = express.Router();

const cadastroController = require("../controllers/cadastroController");
const { Cliente } = require("../database/models/Cliente");

router.get("/", cadastroController.index);
router.post("/", cadastroController.store);

module.exports = router;
