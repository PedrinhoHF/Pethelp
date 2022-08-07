const express = require("express");
const { criarPet } = require("../controllers/cadastroController");
const router = express.Router();

const cadastroPetsController = require("../controllers/cadastroPetController");

router.get("/", cadastroPetsController.index);
router.get("/cadastroPet", cadastroPetsController.cadastroPet);
router.delete("/:id/deletar", cadastroPetsController.destroy);
router.post("/createConsulta", cadastroPetsController.createConsulta);
router.post("/createPet", cadastroPetsController.criarPet);

module.exports = router;
