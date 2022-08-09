module.exports = (sequelize, DataTypes) => {
  const Consulta = sequelize.define(
    "Consulta",
    {
      id_consulta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_veterinario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Veterinario", key: "id_veterinario" },
      },
      id_pet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Pet", key: "id_pet" },
      },

      data: DataTypes.DATE,

      diagnostico: DataTypes.TEXT,

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
          foreignKey: "id_cliente",
        };
    };
  }
  return Consulta;
};
