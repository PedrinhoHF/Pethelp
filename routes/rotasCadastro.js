const express = require("express");
const router = express.Router();

const cadastroController = require("../controllers/cadastroController");
const { Cliente } = require("../database/models/Cliente");

router.get("/:id", cadastroController.readCliente);
router.post("/", cadastroController.store);
router.delete("/:id", cadastroController.erase);

module.exports = router;
