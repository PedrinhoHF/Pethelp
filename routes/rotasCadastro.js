const express = require("express");
const router = express.Router();

const cadastroController = require("../controllers/cadastroController");
router.get("/", cadastroController.index);
router.get("/:id", cadastroController.readCliente);
router.post("/", cadastroController.store);
router.delete("/:id", cadastroController.erase);

module.exports = router;
