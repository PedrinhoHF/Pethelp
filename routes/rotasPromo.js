const express = require('express');
const router = express.Router();

const ClientesController = require('../controllers/ClientesController');
const PromoController = require('../controllers/PromoController')

router.get('/',PromoController.index)
router.get('/contato',PromoController.contato)
router.get('/cliente_cadastro')
router.get('/cadastrocliente', ClientesController.cadastroCliente);

module.exports = router;