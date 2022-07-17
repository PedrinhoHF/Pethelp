const { check } = require("express-validator");
let validateRegister = [
  check("email")
    .notEmpty()
    .withMessage("Deve preencher o nome")
    .isEmail()
    .withMessage("Deve ser um e-mail valido"),
  check("password")
    .notEmpty()
    .withMessage("Deve preencher a Senha")
    .isLength({ min: 8 })
    .withMessage("Deve ter pelo menos 8 caracteres")
    .withMessage("Deve ser um e-mail valido"),
];

const loginController = {
  index: (req, res) => {
    res.render("login");
  },
  cadastro: (req, res) => {
    res.send("Login");
  },
  login: async (request, response) => {
    const { email, senha } = request.body;
    const cliente = await database.Cliente.findOne({
      where: {
        email: email,
      },
    });

    if (!cliente) {
      const veterinario = await database.Veterinario.findOne({
        where: {
          email: email,
        },
      });
      if (!veterinario) {
        return response.render("/login", {
          loginFail: true,
        });
      } else {
        if (!veterinario.checkPassword(senha)) {
          return response.render("/login", {
            loginFail: true,
          });
        } else {
          request.session.id_veterinario = cliente.id_veterinario;
          return response.redirect("/abaVet");
        }
      }
    } else {
      if (!cliente.checkPassword(senha)) {
        return response.render("/login", {
          loginFail: true,
        });
      } else {
        request.session.id_cliente = cliente.id_cliente;
        return response.redirect("/cadastroPet");
      }
    }
  },
};

module.exports = loginController;
