module.exports = (sequelize, DataTypes) =>  { const Cliente = sequelize.define("Cliente",{
 id:{
  type: sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true
 },
 nome:{
  type:DataTypes.STRING,
  allowNull: false
  },

  cpf:{
  type:DataTypes.INTEGER,
  allowNull: false
  },

  email:{
  type:DataTypes.VARCHAR,
  allowNull: false
  },

  telefone:{
  type:DataTypes.INTEGER,
  allowNull: false
  },

  senha:{
    type:DataTypes.VARCHAR,
    allowNull:false
  },

  nascimento:{
    type:DataTypes.DATE
  },
  sexo:DataTypes.VARCHAR,

  rua:{
    type:DataTypes.VARCHAR
  },
  bairro:{
    type:DataTypes.VARCHAR
  },
  cidade:{
    type:DataTypes.VARCHAR
  },
  cep:{
    type:DataTypes.INTEGER
  },
  
createdAt: {
 type: DataTypes.DATE,
 allowNull: false,
},

updateAt:{
  type:DataTypes.DATE,
  allowNull: false,
}
},{
  tableName: "clientes",
  timestamps: true
});

Cliente.associate = function(models){
  Cliente.hasMany(models.Pet),{
    as:"Pets",
    foreingKey:"id_cliente"
  }
}

return Cliente;

}