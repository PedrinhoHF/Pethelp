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
Consulta.belongsTo(models.Veterinario),{
    as:"Veterinario",
    foreingKey:""
  }
  {
    Consulta.associate = function(models){
    Consulta.belongsTo(models.Pet),{
      as:"Pets",
      foreingKey:""
    }
    }
  }
}
return Consulta;
}
