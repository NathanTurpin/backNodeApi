function Users(sequelize, datatypes) {
  return sequelize.define("users", {
    lastname: {
      type: datatypes.STRING(50),
    },
    firstname: {
      type: datatypes.STRING(50),
    },
    email: {
      type: datatypes.STRING(100),
      allowNull: false, // CHAMP REQUIS
    },
  });
}
module.exports = Users;
