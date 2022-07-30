const express = require("express");
const router = express.Router();
const Consulta = require("../database/models/Consulta");
const cadastroPetsController = require("../controllers/cadastroPetController");
const { Cliente } = require("../database/models/Cliente");
const Veterinario = require("../database/models/Veterinario");

router.get("/", cadastroPetsController.index);
router.get("/cadastroPet", cadastroPetsController.cadastroPet);
router.delete("/:id/deletar", cadastroPetsController.destroy);
router.post("/", cadastroPetsController.createConsulta);

module.exports = router;
