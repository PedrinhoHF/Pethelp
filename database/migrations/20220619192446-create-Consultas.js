'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.createTable('Consulta', { 
  id_consulta:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  id_pet:{
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull:false,
    autoIncrement: true,
    references:{
      model:"Pet",
      key:"id"
    }
  },
  id_veterinario:{
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull:false,
    references:{
      model:"Veterinario",
      key: "id"
    }
  },
  data:{
    type:Sequelize.DATE,
    allowNull:false,
  },
  diagnostico:{
    type:Sequelize.TEXT,
    allowNull:false
  },

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

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Consulta');

  }
};
