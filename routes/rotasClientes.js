<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const ClientesController = require('../controllers/ClientesController');

router.get('/',ClientesController.index);
router.get('/cadastroPets',ClientesController.cadastroPets);


=======
const express = require('express');
const router = express.Router();

const ClientesController = require('../controllers/ClientesController');

router.get('/',ClientesController.index);
router.get('/cadastroPets',ClientesController.cadastroPets);


>>>>>>> 33016e8ee8766cffd362a7381a16ea2c08f9046f
module.exports = router;