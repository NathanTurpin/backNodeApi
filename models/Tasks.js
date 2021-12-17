function Tasks(sequelize, datatypes) {
  return sequelize.define("tasks", {
    content: {
      type: datatypes.STRING,
      allowNull: false, // CHAMP REQUIS
    },
    status: {
      type: datatypes.BOOLEAN,
      allowNull: false, // CHAMP REQUIS
    },
  });
}
module.exports = Tasks;
