module.exports = (sequelize, DataTypes) => {
  const Tarefas = sequelize.define("Tarefas", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    titulo: DataTypes.STRING,
    dia_atividade: DataTypes.STRING,
    importante: DataTypes.TINYINT,
  });

  return Tarefas;
};
