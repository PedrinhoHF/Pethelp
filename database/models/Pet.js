const Cliente = require("./Cliente");
const Consulta = require("./Consulta");

module.exports = (sequelize, DataTypes) => {
  const Pet = sequelise.define("Pet",{
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, 
    nome:{
      type:DataTypes.VARCHAR,
      allowNull: false
    },
    raca:{
      type:DataTypes.VARCHAR,
      allowNull: false
    },
    pelagem:{
      type:DataTypes.VARCHAR
    },
    sexo:{
      type:DataTypes.VARCHAR
    },
    nascimento:{
      type:DataTypes.DATE
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
     },
     
     updateAt:{
       type:DataTypes.DATE,
       allowNull: false,
     },
     
    
  },{
    tableName: 'Pets',
    timestamps: true,
  });
  Pet.associate = function(models){
    Pet.belongsTo(models.Cliente),{
      as:"Clientes",
      foreingKey:"id_cliente"
    }
  Pet.associate = function(models){
    Pet.hasMany(models.Consulta),{
      as:"Consultas",
      foreingKey:"id_pet",
      otherKey: "id_veterinario"
    }
  }
  }
}