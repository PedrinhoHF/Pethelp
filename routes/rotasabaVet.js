const express = require('express')
const router = express.Router();

const abaVetController = require("../controllers/abaVetController")

router.get('/',abaVetController.index)
router.get('/abaVeterinario',abaVetController.abaVet)

module.exports = router;