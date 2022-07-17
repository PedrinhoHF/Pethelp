"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cliente", {
      id_cliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      telefone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      rua: Sequelize.STRING,

      bairro: Sequelize.STRING,

      cidade: Sequelize.STRING,

      cep: Sequelize.STRING,

      nascimento: Sequelize.STRING,

      sexo: Sequelize.STRING,

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cliente");
  },
};
