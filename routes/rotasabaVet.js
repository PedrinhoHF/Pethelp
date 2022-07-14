const express = require('express')
const router = express.Router();

const abaVetController = require("../controllers/abaVetController")

router.get('/', abaVetController.index)
// router.get('/abaVeterinario',abaVetController.abaVet)
router.get('/abaVeterinario', (request, response) => {
    if(request.session.id_veterinario){
        response.render('abaVet');
    }else {
        response.redirect('/login');
    }
})

module.exports = router;