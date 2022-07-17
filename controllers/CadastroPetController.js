const path = require("path");
const fs = require("fs");
const Consulta = require("../database/models/Consulta");

const cadastroPetsController = {
  index: async (request, response) => {
    const { id_cliente } = request.session;
    const consultas = await database.Consulta.findAll({
      where: {
        id_cliente: id_cliente,
      },
      include: [
        {
          model: Pet,
          as: Pet,
        },
      ],
    });
    return response.render("cadastroPet", {
      consultas,
    });
  },
  cadastroPet: (request, response) => {
    if (request.session.id_cliente) {
      response.render("CadastroPet");
    } else {
      response.redirect("/login");
    }
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const resultado = await Consulta.destroy({
      where: {
        id_cliente: id,
      },
    });
    res.redirect("/abaVeterinario");
  },
};

module.exports = cadastroPetsController;
