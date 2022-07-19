module.exports = (sequelize, DataTypes) => {
  const Consulta = sequelize.define(
    "Consulta",
    {
      id_consulta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      data: {
        type: DataTypes.DATE,
        allownull: false,
      },
      diagnostico: {
        type: DataTypes.TEXT,
      },
      horario_consulta: DataTypes.TIME,
    },
    {
      tableName: "Consulta",
    }
  );
  Consulta.associate = function (models) {
    Consulta.belongsTo(models.Veterinario),
      {
        as: "Veterinario",
      };
  };
  {
    Consulta.associate = function (models) {
      Consulta.belongsTo(models.Pet),
        {
          as: "Pets",
          foreingKey: "id_cliente",
        };
    };
  }
  return Consulta;
};
