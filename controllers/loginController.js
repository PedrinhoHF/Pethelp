database = require("../database/models");
const loginController = {
  index: (req, res) => {
    res.render("login");
  },
  cadastro: (req, res) => {
    res.send("Login");
  },
  // login: async (request, response) => {
  //   const { email, password } = request.body;

  //   const cliente = await database.Cliente.findOne({
  //     where: {
  //       email: email,
  //       senha: password,
  //     },
  //   });

  //   if (!cliente) {
  //     const veterinario = await database.Veterinario.findOne({
  //       where: {
  //         email: email,
  //       },
  //     });
  //     if (!veterinario) {
  //       return response.render("/login", {
  //         loginFail: true,
  //       });
  //       // } else {
  //       //   if (!veterinario.checkPassword(senha)) {
  //       //     return response.render("/login", {
  //       //       loginFail: true,
  //       //     });
  //     } else {
  //       request.session.id_veterinario = cliente.id_veterinario;
  //       return response.redirect("/abaVet");
  //     }

  //     // } else {
  //     //   if (!cliente.checkPassword(password)) {
  //     //     return response.render("/login", {
  //     //       loginFail: true,
  //     //     });
  //   } else {
  //     request.session.id_cliente = cliente.id_cliente;
  //     return response.redirect("/cadastroPet");
  //   }
  // },
};

module.exports = loginController;
