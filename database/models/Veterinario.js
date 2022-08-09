module.exports = (sequelize, DataTypes) => {
  const Veterinario = sequelize.define(
    "Veterinario",
    {
      id_veterinario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataTypes.STRING,

      cpf: DataTypes.INTEGER,

      email: DataTypes.STRING,

      sexo: DataTypes.STRING,

      crmv: DataTypes.STRING,

      telefone: DataTypes.INTEGER,

      senha: DataTypes.STRING,

      nascimento: DataTypes.DATE,

      rua: DataTypes.STRING,

      bairro: DataTypes.STRING,

      cidade: DataTypes.STRING,

      cep: DataTypes.INTEGER,
    },
    {
      tableName: "Veterinario",
      timestamps: true,
    }
  );

  Veterinario.associate = function (models) {
    Veterinario.hasMany(models.Consulta),
      {
        as: "consulta",
        foreignKey: "id_veterinario",
        otherKey: "id_pet",
      };
  };

  return Veterinario;
};
