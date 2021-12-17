const express = require("express");
const sequelize = require("./models");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = 5000;

console.log(
  "L'URL DE LA BDD EST : " +
    process.env.DB_URL +
    " JE SUIS EN MODE " +
    process.env.NODE_ENV
);

app.use(cors());
//traiter les data d'un json
app.use(express.json());
//traiter les data d'un form
app.use(express.urlencoded());

const usersRouter = require("./route/usersRoute");
app.use("/users", usersRouter);

const tasksRouter = require("./route/tasksRoute");
app.use("/tasks", tasksRouter);

const tagRouter = require("./route/tagRoute");
app.use("/tag", tagRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("Db connected");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
