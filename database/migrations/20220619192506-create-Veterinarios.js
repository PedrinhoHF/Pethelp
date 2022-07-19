"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Veterinario", {
      id_veterinario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      senha: {
        type: Sequelize.INTEGER,
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

      sexo: Sequelize.STRING,

      crmv: {
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
      nascimento: Sequelize.STRING,

      rua: Sequelize.STRING,

      bairro: Sequelize.STRING,

      cidade: Sequelize.STRING,

      cep: Sequelize.INTEGER,

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
    await queryInterface.dropTable("Veterinario");
  },
};
