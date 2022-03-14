const express = require('express');
const router = express.Router();

const ClientesController = require('../controllers/ClientesController');

router.get('/',ClientesController.index);
router.get('/cadastroPets',ClientesController.cadastroPets);


module.exports = router;