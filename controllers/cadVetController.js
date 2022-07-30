const database = require("../database/models");
const Veterinario = require("../database/models/Veterinario");
const cadVetController = {
  index: (req, res) => {
    res.render("cadVet");
  },
  cadVet: (req, res) => {
    res.send("Cadastro de Veterinário");
  },
  cadastroVet: async (req, res) => {
    try {
      const {
        nome,
        cpf,
        email,
        telefone,
        senha,
        nascimento,
        sexo,
        crmv,
        rua,
        bairro,
        cidade,
        cep,
      } = req.body;

      const veterinario = await database.Veterinario.create({
        nome,
        cpf,
        email,
        telefone,
        senha,
        nascimento,
        sexo,
        crmv,
        rua,
        bairro,
        cidade,
        cep,
      });
      return res.redirect("/login");
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

module.exports = cadVetController;
