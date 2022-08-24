module.exports = (sequelize, DataTypes) => {
  const Pets = sequelize.define("Pets", {
    id_pet: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Clientes", key: "id_cliente" },
    },
    nome: DataTypes.STRING,
    raca: DataTypes.STRING,
    pelagem: DataTypes.STRING,
    sexo: DataTypes.STRING,
    nascimento: DataTypes.DATE,
  },
    {
      tableName: "Pets",
      timestamps: true,
    }
  );
  Pets.associate = function (models) {
    Pets.belongsTo(models.Clientes,
      {
        as: "Clientes",
        foreignKey: "id_cliente",
      }),
    Pets.hasMany(models.Consultas,
      {
        as: "Consultas",
        foreignKey: "id_pet",
        otherKey: "id_veterinario",
      });
  };
  return Pets;
};
