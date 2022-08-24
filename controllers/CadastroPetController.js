const Consultas = require("../database/models/Consultas");
const database = require("../database/models");
const Pets = require("../database/models/Pets");
const Veterinarios = require("../database/models/Veterinarios");
const Clientes = require("../database/models/Clientes");
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
// const pets = JSON.parse(fs.readFileSync(petsFilePath, "utf-8"));

const cadastroPetsController = {
  index: async (req, res) => {
    try {
      const pets = await database.Pets.findAll({});
      console.log(pets);
      res.render("CadastroPet", { consultas, pets, agenda });
    } catch (error) {
      console.log(error);
    }
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
    const resultado = await Consultas.destroy({
      where: {
        id_cliente: id,
      },
    });
    res.redirect("/abaVeterinario");
  },

  createConsulta: async (req, res) => {
    const { nome, data, horario_consulta } = req.body;
    if (nome && data && horario_consulta) {
      try {
        const petConsulta = await database.Pets.findOne({
          where: {
            nome: nome,
          },
        });
        const criarConsulta = await database.Consultas.create(
          {
            nome,
            data,
            horario_consulta,
          },
          {
            include: [
              {
                model: Pet,
                as: Pet,
              },
              {
                model: Veterinario,
                as: Veterinario,
              },
              {
                model: Cliente,
                as: Cliente,
              },
            ],
          }
        );
        console.log({ criarConsulta });
        return res.status(200).json({ criarConsulta });
      } catch (error) {
        res.status(400).json({ error });
      }
    }
  },
  deleteConsulta: async (req, res) => {
    try {
      const { id } = req.params;
      const deletarConsulta = await database.Consulta.destroy({
        where: {
          id_consulta: id,
        },
      });
      return res.status(200).json({ deletarConsulta });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  criarPet: async (req, res) => {
    try {
      const { nome, raca, pelagem, sexo, nascimento } = req.body;
      console.log(nome);
      const id_cliente = 1;
      const pet = await database.Pets.create({
        nome,
        raca,
        pelagem,
        sexo,
        nascimento,
        id_cliente,
      });
      console.log(pet);
      return res.redirect("/cadastroPet");
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = cadastroPetsController;
