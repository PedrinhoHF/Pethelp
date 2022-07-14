
const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.get('/',loginController.index);
router.get('/login',loginController.cadastro);
router.post('/', async (request, response) => {
    const { email, senha } = request.body;
    const cliente = await database.Cliente.findOne({
        where: {
            email: email
        }
    });
  
    if (!cliente) {
        const veterinario = await database.Veterinario.findOne({
            where: {
                email: email
            }
        });
        if (!veterinario) {
            return response.render("/login", {
                loginFail: true
            });
        } else {
            if(!veterinario.checkPassword(senha)) {
                return response.render("/login", {
                    loginFail: true
                });
            }else {
                request.session.id_veterinario = cliente.id_veterinario;
                return response.redirect("/abaVet")
            }
        }
    }else {
        if(!cliente.checkPassword(senha)) {
            return response.render("/login", {
                loginFail: true
            });
        }else {
            request.session.id_cliente = cliente.id_cliente;
            return response.redirect("/cadastroPet")
        }
    }
  })



module.exports = router;