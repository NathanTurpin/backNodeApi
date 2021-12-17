const sequelize = require("./models");

// CON A LA BDD
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection établie !");
    // Code genere la bdd
    sequelize.sync({ force: true }).then(() => {
      console.log("Les tables de la base ont bien ete generee");
      console.log(sequelize.models);
      sequelize.models.users.create({
        firstname: "JB",
        lastname: "Lavisse",
        email: "jb@truc.fr",
      });
      sequelize.models.users.create({
        firstname: "Toto",
        lastname: "Tt",
        email: "toto@truc.fr",
      });
      sequelize.models.users.create({
        firstname: "Jhon",
        lastname: "Doe",
        email: "jhonDoe@truc.fr",
      });
      sequelize.models.tasks.create({
        content: "task 1",
        status: false,
        userId: 1,
      });
      sequelize.models.tasks.create({
        content: "task 2",
        status: false,
        userId: 1,
      });
      sequelize.models.tasks.create({
        content: "task 3",
        status: true,
        userId: 2,
      });
      sequelize.models.tasks.create({
        content: "task 4",
        status: false,
        userId: 1,
      });
      sequelize.models.tasks.create({
        content: "task 5",
        status: false,
        userId: 2,
      });
      sequelize.models.tag.create({
        name: "tag 1",
      });
      sequelize.models.tag.create({
        name: "tag 2",
      });
    });
  })

  .catch((err) => {
    console.log(err);
  });
