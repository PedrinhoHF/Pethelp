const path = require("path");
const fs = require("fs");
const Veterinarios = require("../database/models/Veterinarios");
const Consultas = require("../database/models/Consultas");
const database = require("../database/models");
const abaVetController = {
  index: async (req, res) => {
    res.render("abaVet");
  },
  // readVeterinario: async (request, response) => {
  //   const { id_veterinario } = request.session;
  //   const consultas = await database.Consulta.findAll({
  //     where: {
  //       id_Veterinario: id_veterinario,
  //     },
  //     include: [
  //       {
  //         model: Pet,
  //         as: Pet,
  //       },
  //     ],
  //   });
  //   return response.render("abaVeterinario", {
  //     consultas,
  //   });
  // },
  // abaVet: (request, response) => {
  //   if (request.session.id_veterinario) {
  //     response.render("abaVet");
  //   } else {
  //     response.redirect("/login");
  //   }
  // },
  destroy: async (req, res) => {
    const { id } = req.params;
    const resultado = await Consultas.destroy({
      where: {
        id_cliente: id,
      },
    });
    res.redirect("/abaVeterinario");
  },
};

module.exports = abaVetController;
