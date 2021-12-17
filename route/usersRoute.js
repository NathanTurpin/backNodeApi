const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get("/", (req, res) => {
  sequelize.models.users.findAll().then((users) => res.json(users));
});

router.get("/:userId", (req, res) => {
  sequelize.models.users
    .findByPk(req.params.userId)
    .then((user) => res.json(user));
});
router.post("/", (req, res) => {
  sequelize.models.users
    .create(req.body)
    .then((users) => res.status(201).json(users));
});
router.delete("/:userId", (req, res) => {
  sequelize.models.users
    .destroy({
      where: { id: req.params.userId },
    })
    .then(res.json({ msg: "users supp" }));
});
router.patch("/:userId", (req, res) => {
  sequelize.models.users
    .update(req.body, { where: { id: req.params.userId } })
    .then((users) => res.status(200).json(users));
});
module.exports = router;
