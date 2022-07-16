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
  cadastroPet: (req, res) => {
    res.render("CadastroPet");
  },
  post: (req, res) => {},
};

module.exports = cadastroPetsController;
