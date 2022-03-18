
const express = require('express');
const router = express.Router();

const CadastroController = require('../controllers/CadastroController');

router.get('/cadastro',CadastroController.index);




module.exports = router;