function Post(sequelize, datatypes) {
  return sequelize.define("post", {
    title: {
      type: datatypes.STRING,
      allowNull: false, // CHAMP REQUIS
    },
    body: {
      type: datatypes.TEXT,
    },
  });
}
module.exports = Post;
