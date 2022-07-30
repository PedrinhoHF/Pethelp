const express = require("express");
const router = express.Router();

const cadVetController = require("../controllers/cadVetController");

router.get("/", cadVetController.index);
router.get("/cadVet", cadVetController.cadVet);
router.post("/", cadVetController.cadastroVet);

module.exports = router;
