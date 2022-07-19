module.exports = (Sequelize, DataTypes) => {
  const Cliente = Sequelize.define(
    "Cliente",
    {
      id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      cpf: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      telefone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      nascimento: {
        type: DataTypes.STRING,
      },
      sexo: DataTypes.STRING,

      rua: {
        type: DataTypes.STRING,
      },
      bairro: {
        type: DataTypes.STRING,
      },
      cidade: {
        type: DataTypes.STRING,
      },
      cep: {
        type: DataTypes.INTEGER,
      },
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
