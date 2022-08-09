const Pet = require("../database/models/Pets");
const Cliente = require("../database/models/Clientes");
const database = require("../database/models");
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

      const cliente = await database.Clientes.create({
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
      console.log({ cliente });
      return res.redirect("/login");
    } catch (error) {
      console.log(error)
      res.status(400).json({ error });
    }
  },
  // register: (req, res) => {
  //   const error = validatorResult(req);
  //   if (error.isEmpty()) {
  //   } else {
  //     res.render("register", { error: error.mapped(), old: req.body });
  //   }
  // }
  erase: async (req, res) => {
    const { id } = req.params;

    const resultado = await database.Cliente.destroy({
      where: {
        id_cliente: id,
      },
    });

    return res.status(200).json({ resultado });
  },
  readCliente: async (req, res) => {
    const { id } = req.params;
    const teste = await database.Cliente.findOne({
      where: {
        id_cliente: id,
      },
    });
    return res.status(200).json({ teste });
  },
  update: async (req, res) => {
    const { id } = req.params;
  },
};

module.exports = cadastroController;
