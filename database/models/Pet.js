module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      id_pet: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      raca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pelagem: {
        type: DataTypes.STRING,
      },
      sexo: {
        type: DataTypes.STRING,
      },
      nascimento: {
        type: DataTypes.STRING,
      },
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
        foreingKey: "id_cliente",
      };
    Pet.associate = function (models) {
      Pet.hasMany(models.Consulta),
        {
          as: "Consultas",
          foreingKey: "id_pet",
          otherKey: "id_veterinario",
        };
    };
  };
  return Pet;
};
