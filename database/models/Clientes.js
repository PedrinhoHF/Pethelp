module.exports = (Sequelize, DataTypes) => {
  const Clientes = Sequelize.define(
    "Clientes",
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
    { tableName: "Clientes" }
  );

  Clientes.associate = function (models) {
    Clientes.hasMany(models.Pets,
      {
        as: "Pets",
        foreignKey: "id_cliente",
      });
  };
  return Clientes;
};
