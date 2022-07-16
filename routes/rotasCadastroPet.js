const express = require("express");
const router = express.Router();

cadastroPetsController = require("../controllers/cadastroPetController");



router.get('/',cadastroPetsController.index)
// router.get('/cadastroPet',cadastroPetsController.cadastroPet)
router.get('/cadastroPet', (request, response) => {
    if(request.session.id_cliente){
        response.render('CadastroPet');
    }else {
        response.redirect('/login');
    }
})


module.exports = router

