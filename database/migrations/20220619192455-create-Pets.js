'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Pet', { 
    id:{ 
    type:Sequelize.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement: true
  },

  id_cliente:{
    type:sequelize.INTEGER,
    allowNull:false,
    foreignKey:true,
    autoIncrement: true,
    references:{
      model:"Cliente",
      key:"id"
    }
    
  },

  nome:{
    type:Sequelize.VARCHAR,
    allowNull: false
  },

  raca:{
    type:Sequelize.VARCHAR,
    allowNull: false
  },

  pelagem:{
    type:Sequelize.VARCHAR
  },
  sexo:Sequelize.VARCHAR,

  nascimento:Sequelize.DATE,

  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
   },
  updateAt:{
  type:Sequelize.DATE,
   allowNull: false,
   },
});

  },

  async down (queryInterface, Sequelize) {
 await queryInterface.dropTable('Pet');

  }
};
