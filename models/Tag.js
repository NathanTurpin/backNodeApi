function Tag(sequelize, datatypes) {
  return sequelize.define("tag", {
    name: {
      type: datatypes.STRING(20),
    },
  });
}
module.exports = Tag;
