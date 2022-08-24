module.exports = (sequelize, DataTypes) => {
  const Consultas = sequelize.define(
    "Consultas",
    {
      id_consulta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_veterinario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Veterinarios", key: "id_veterinario" },
      },
      id_pet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Pets", key: "id_pet" },
      },

      data: DataTypes.DATE,

      diagnostico: DataTypes.TEXT,

      horario_consulta: DataTypes.TIME,
    },
    {
      tableName: "Consultas",
    }
  );
  Consultas.associate = function (models) {
    Consultas.belongsTo(models.Veterinario),
      {
        as: "Veterinarios",
      };
  };
  {
    Consultas.associate = function (models) {
      Consultas.belongsTo(models.Pets, {
        as: "Pets",
        foreignKey: "id_cliente",
      });
    };
  }
  return Consultas;
};
