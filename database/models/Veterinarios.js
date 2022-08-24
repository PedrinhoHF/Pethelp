module.exports = (sequelize, DataTypes) => {
  const Veterinarios = sequelize.define(
    "Veterinarios",
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
      tableName: "Veterinarios",
      timestamps: true,
    }
  );

  Veterinarios.associate = function (models) {
    Veterinarios.hasMany(models.Consultas, {
      as: "Consultas",
      foreignKey: "id_veterinario",
      otherKey: "id_pet",
    });
  };

  return Veterinarios;
};
