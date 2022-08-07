module.exports = (Sequelize, DataTypes) => {
  const Cliente = Sequelize.define(
    "Cliente",
    {
      id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataTypes.STRING,

      cpf: DataTypes.INTEGER,

      email: DataTypes.STRING,

      telefone: DataTypes.INTEGER,

      senha: DataTypes.STRING,

      nascimento: DataTypes.DATE,

      sexo: DataTypes.STRING,

      rua: DataTypes.STRING,

      bairro: DataTypes.STRING,

      cidade: DataTypes.STRING,

      cep: DataTypes.INTEGER,
    },
    {
      tableName: "Cliente",
      timestamps: true,
    }
  );

  Cliente.associate = function (models) {
    Cliente.hasMany(models.Pet),
      {
        as: "Pets",
        foreingKey: "id_cliente",
      };
  };

  return Cliente;
};
