const User = require("../database/models/Cliente");
const cadastroController = {
  index: (req, res) => {
    res.render("cadastro");
  },
  cadastro: (req, res) => {
    res.send("Cadastro de usuario");
  },
  //async createUser(req, res) {
  //const {name , email} = req.body
  // const user = await User.create({name, email})
  // res.json({user})

  //}
};

module.exports = cadastroController;
