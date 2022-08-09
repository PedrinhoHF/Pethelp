module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      id_pet: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Cliente", key: "id_cliente" },
      },
      nome: DataTypes.STRING,

      raca: DataTypes.STRING,

      pelagem: DataTypes.STRING,

      sexo: DataTypes.STRING,

      nascimento: DataTypes.DATE,
    },
    {
      tableName: "Pet",
      timestamps: true,
    }
  );
  Pet.associate = function (models) {
    Pet.belongsTo(models.Cliente),
      {
        as: "Clientes",
        foreignKey: "id_cliente",
      };
    Pet.associate = function (models) {
      Pet.hasMany(models.Consulta),
        {
          as: "Consultas",
          foreignKey: "id_pet",
          otherKey: "id_veterinario",
        };
    };
  };
  return Pet;
};
