const express = require("express");
const router = express.Router();

cadastroPetsController = require("../controllers/cadastroPetController");

router.get("/", cadastroPetsController.index);
router.get("/cadastroPet", cadastroPetsController.cadastroPet);
router.delete("/:id/deletar", cadastroPetsController.destroy);
module.exports = router;
