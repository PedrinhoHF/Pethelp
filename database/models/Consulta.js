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
 },
 horario_consulta:{
  type: DataTypes.TIME
 }

 
  },
  {
    tableName: 'Consultas_veterinario'
  }
  );
Consulta.associate = function(models){
Consulta.belongsTo(models.Veterinario),{
    as:"Veterinario",
    
  }
  {
    Consulta.associate = function(models){
    Consulta.belongsTo(models.Pet),{
      as:"Pets",
      foreingKey:"id_cliente"
    }
    }
  }
}
return Consulta;
}
