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

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      raca: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      pelagem: {
        type: Sequelize.STRING,
      },
      sexo: Sequelize.STRING,

      nascimento: Sequelize.STRING,

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updateAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pet");
  },
};
