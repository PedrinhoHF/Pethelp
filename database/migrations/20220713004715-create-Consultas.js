"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Consultas", {
      id_consulta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_pet: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Pets",
          key: "id_pet",
        },
      },
      id_veterinario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Veterinarios",
          key: "id_veterinario",
        },
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      diagnostico: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      horario_consulta: {
        type: Sequelize.TIME,
        allowNull: false,
      },
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
    await queryInterface.dropTable("Consultas");
  },
};
