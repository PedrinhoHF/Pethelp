module.exports = (sequelize, DataTypes) => {
  const Veterinario = sequelize.define(
    "Veterinario",
    {
      id_veterinario: {
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
      sexo: DataTypes.STRING,

      crmv: {
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
      tableName: "Veterinario",
      timestamps: true,
    }
  );

  Veterinario.associate = function (models) {
    Veterinario.hasMany(models.Consulta),
      {
        as: "consulta",
        foreingKey: "id_veterinario",
        otherKey: "id_pet",
      };
  };

  return Veterinario;
};
