const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get("/", (req, res) => {
  sequelize.models.tasks.findAll().then((tasks) => res.json(tasks));
});

router.get("/:taskId", (req, res) => {
  sequelize.models.tasks
    .findByPk(req.params.taskId)
    .then((task) => res.json(task));
});
router.post("/", (req, res) => {
  sequelize.models.tasks
    .create(req.body)
    .then((tasks) => res.status(201).json(tasks));
});

router.delete("/:taskId", (req, res) => {
  sequelize.models.tasks
    .destroy({
      where: { id: req.params.taskId },
    })
    .then(res.json({ msg: "tasks supp" }));
});
router.patch("/:taskId", (req, res) => {
  sequelize.models.tasks
    .update(req.body, { where: { id: req.params.taskId } })
    .then((tasks) => res.status(200).json(tasks));
});
module.exports = router;
