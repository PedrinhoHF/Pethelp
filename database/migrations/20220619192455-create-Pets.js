"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pet", {
      id_pet: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: "Cliente",
          key: "id_cliente",
        },
      },

      nome: Sequelize.STRING,

      raca: Sequelize.STRING,

      pelagem: Sequelize.STRING,

      sexo: Sequelize.STRING,

      nascimento: Sequelize.DATE,

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
    await queryInterface.dropTable("Pet");
  },
};
