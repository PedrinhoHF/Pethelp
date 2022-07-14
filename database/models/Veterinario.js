module.exports = (sequelize, DataTypes) =>  { const Veterinario = sequelize.define("Veterinarios",{
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
   sexo:DataTypes.VARCHAR,

   crmv:{
    type: DataTypes.VARCHAR,
    allowNull:false
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
   tableName: "Veterinario",
   timestamps: true
 });
 
 Veterinario.associate = function(models){
  Veterinario.hasMany(models.Consulta),{
     as:"consulta",
     foreingKey:"id_veterinario",
     otherKey: "id_pet"
   }
 }
 
 return Veterinario;
 
 }