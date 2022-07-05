const express = require('express');
const router = express.Router();

cadastroPetsController = require('../controllers/CadastroPetController')


router.get('/',cadastroPetsController.index)
router.get('/CadastroPet'.index)


module.exports = cadastroPetsController