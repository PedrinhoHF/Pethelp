'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Cliente', { 
id_cliente: {
type:Sequelize.INTEGER,
primaryKey: true,
autoIncrement: true,
allowNull:false
},
nome: {
  type: Sequelize.STRING,
  allowNull: false
},
cpf:{
  type: Sequelize.INTEGER,
  allowNull: false
},
email:{
  type: Sequelize.VARCHAR,
  allowNull: false
},

telefone:{
  type:Sequelize.INTEGER,
  allowNull: false
},

senha:{
  type:Sequelize.VARCHAR,
  allowNull: false
},

rua:Sequelize.VARCHAR,

bairro:Sequelize.VARCHAR,

cidade:Sequelize.VARCHAR,

cep:Sequelize.INTEGER,

nascimento:Sequelize.DATE,

sexo: Sequelize.VARCHAR,

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
    await queryInterface.dropTable('Cliente');
  }
};
