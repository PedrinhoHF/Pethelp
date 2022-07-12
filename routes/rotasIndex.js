
const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');
const IndexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/',IndexController.index);
//router.get('/cadastroPets',IndexController.cadastroPets);
router.get('/contato',contatoController.contato)


//router.get('/', function(req, res, next) {
//  res.send("Pagina Inicial ")
//});

module.exports = router;
