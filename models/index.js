const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:datas.db");

const Post = require("./Post")(sequelize, DataTypes);
const Tag = require("./Tag")(sequelize, DataTypes);
const Tasks = require("./Tasks")(sequelize, DataTypes);
const Users = require("./Users")(sequelize, DataTypes);

Post.belongsTo(Users);
Users.hasMany(Post);
Users.hasMany(Tasks);
Tasks.belongsTo(Users);
Tasks.belongsToMany(Tag, { through: "tasks_tags" });
Tag.belongsToMany(Tasks, { through: "tasks_tags" });
console.log("checking db co ...");

module.exports = sequelize;
