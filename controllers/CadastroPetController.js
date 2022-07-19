// const path = require("path");
// const fs = require("fs");
// const Consulta = require("../database/models/Consulta");
// const database = require("../database/models");
// const Pet = require("../database/models/Pet");

// const consultasFilePath = path.join(
//   __dirname,
//   "../data/consultasDataBase.json"
// );
// const petsFilePath = path.join(__dirname, "../data/petsDataBase.json");

// const consultas = JSON.parse(fs.readFileSync(consultasFilePath, "utf-8"));
// const pets = JSON.parse(fs.readFileSync(petsFilePath, "utf-8"));
const path = require("path");
const fs = require("fs");

const consultasFilePath = path.join(
  __dirname,
  "../data/consultasDataBase.json"
);
const agendaFilePath = path.join(__dirname, "../data/agendaDataBase.json");
const petsFilePath = path.join(__dirname, "../data/petsDataBase.json");
const agenda = JSON.parse(fs.readFileSync(agendaFilePath, "utf-8"));
const consultas = JSON.parse(fs.readFileSync(consultasFilePath, "utf-8"));
const pets = JSON.parse(fs.readFileSync(petsFilePath, "utf-8"));

const cadastroPetsController = {
  index: (req, res) => {
    res.render("CadastroPet", { consultas, pets, agenda });
  },
  // index: async (request, response) => {
  //   //   const { id } = request.params;
  //   //   const consultas = await database.Consulta.findAll({
  //   //     where: {
  //   //       id_cliente: id,
  //   //     },
  //   //   });
  //   return response.render("cadastroPet", {
  //     //     consultas,
  //   });

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
