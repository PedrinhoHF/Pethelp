const express = require('express');
const router = express.Router();

const ClientesController = require('../controllers/ClientesController');

router.get('/',ClientesController.index);
router.get('/cadastropets',ClientesController.cadastroPets);
router.get('/cadastrocliente', ClientesController.cadastroCliente);

module.exports = router;