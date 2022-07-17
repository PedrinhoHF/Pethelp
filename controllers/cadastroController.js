const Cliente = require("../database/models/Cliente");
// const { validatorResult } = require("express-validator");

// const { check } = require("express-validator");
// const validateRegister = [
//   check("email")
//     .notEmpty()
//     .withMessage("Deve preencher o nome")
//     .bail()
//     .isEmail()
//     .withMessage("Deve ser um e-mail valido"),
//   check("password")
//     .notEmpty()
//     .withMessage("Deve preencher a Senha")
//     .bail()
//     .isLength({ min: 8 })
//     .withMessage("Deve ter pelo menos 8 caracteres")
//     .withMessage("Deve ser um e-mail valido"),
// ];

const cadastroController = {
  index: (req, res) => {
    res.render("cadastro");
  },
  cadastro: (req, res) => {
    res.send("Cadastro de usuario");
  },
  store: async (req, res) => {
    try {
      const {
        nome,
        cpf,
        email,
        telefone,
        senha,
        nascimento,
        sexo,
        rua,
        bairro,
        cidade,
        cep,
      } = req.body;

      const cliente = await Cliente.create({
        nome,
        cpf,
        email,
        telefone,
        senha,
        nascimento,
        sexo,
        rua,
        bairro,
        cidade,
        cep,
      });
      return res.status(200).json({ cliente });
    } catch (error) {
      res.status(400).json({ error });
    }
    res.redirect("/login");
  },
  // register: (req, res) => {
  //   const error = validatorResult(req);
  //   if (error.isEmpty()) {
  //   } else {
  //     res.render("register", { error: error.mapped(), old: req.body });
  //   }
  // },
};

module.exports = cadastroController;
