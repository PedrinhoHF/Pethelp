const path = require('path');
const fs = require('fs');

const consultasFilePath = path.join(__dirname, '../data/consultasDataBase.json');
const agendaFilePath = path.join(__dirname, '../data/agendaDataBase.json');
const petsFilePath = path.join(__dirname, '../data/petsDataBase.json');


const consultas = JSON.parse(fs.readFileSync(consultasFilePath,'utf-8'));
const agenda = JSON.parse(fs.readFileSync(agendaFilePath,'utf-8'));
const pets = JSON.parse(fs.readFileSync(petsFilePath,'utf-8'));
// const Veterinario = require("../database/models/Veterinario");
// const Consulta = require("../database/models/Consulta");
// database = require("../database/models");
const abaVetController = {
  index: (req, res)=>{
    res.render('abaVet',{agenda,consultas,pets});
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
    const resultado = await Consulta.destroy({
      where: {
        id_cliente: id,
      },
    });
    res.redirect("/abaVeterinario");
  },
};

module.exports = abaVetController;
