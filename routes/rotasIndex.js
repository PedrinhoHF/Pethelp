
const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/',IndexController.index);
//router.get('/cadastroPets',IndexController.cadastroPets);



//router.get('/', function(req, res, next) {
//  res.send("Pagina Inicial ")
//});

module.exports = router;
