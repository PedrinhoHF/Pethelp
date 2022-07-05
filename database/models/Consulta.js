module.exports = (sequelize, DataTypes) => {
  const Consulta = sequelize.define ("Consultas",{
  id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
 },

 data:{
  type: DataTypes.DATE,
  allownull:false
 },
 diagnostico:{
  type: DataTypes.TEXT
 }

 
  },
  {
    tableName: 'Consultas_veterinario'
  }
  );
Consulta.associate = function(models){
<<<<<<< HEAD
Consulta.belongsTo(models.Veterinario),{
    as:"Veterinario",
=======
  Consulta.belongsTo(models.Veterinario),{
    as:"",
>>>>>>> f0df6af50708c6a0bd0521cfd4d01426fd73408f
    foreingKey:""
  }
  {
    Consulta.associate = function(models){
    Consulta.belongsTo(models.Pet),{
<<<<<<< HEAD
      as:"Pets",
=======
      as:"",
>>>>>>> f0df6af50708c6a0bd0521cfd4d01426fd73408f
      foreingKey:""
    }
    }
  }
}
return Consulta;
}
