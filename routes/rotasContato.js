
const express = require('express');
const router = express.Router();

const contatoController = require('../controllers/contatoController');
const PromoController = require('../controllers/PromoController');

router.get('/',contatoController.index);
router.get('/contato',contatoController.contato);
router.get('/contato', PromoController.contato)


module.exports = router;