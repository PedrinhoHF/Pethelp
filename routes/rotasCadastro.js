
const express = require('express');
const router = express.Router();

const cadastroController = require('../controllers/cadastroController');

router.get('/',cadastroController.index);
router.get('/cadastro',cadastroController.cadastro);



module.exports = router;