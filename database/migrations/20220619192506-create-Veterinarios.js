"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Veterinarios", {
      id_veterinario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: Sequelize.STRING,
      senha: Sequelize.INTEGER,
      cpf: Sequelize.INTEGER,
      email: Sequelize.STRING,
      sexo: Sequelize.STRING,
      crmv: Sequelize.STRING,
      telefone: Sequelize.INTEGER,
      senha: Sequelize.STRING,
      nascimento: Sequelize.DATE,
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
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Veterinarios");
  },
};
