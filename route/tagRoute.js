const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get("/", (req, res) => {
  sequelize.models.tag.findAll().then((tag) => res.json(tag));
});

router.get("/:tagId", (req, res) => {
  sequelize.models.tag.findByPk(req.params.tagId).then((tag) => res.json(tag));
});

router.post("/", (req, res) => {
  sequelize.models.tag
    .create(req.body)
    .then((tag) => res.status(201).json(tag));
});

router.delete("/:tagId", (req, res) => {
  sequelize.models.tag
    .destroy({
      where: { id: req.params.tagId },
    })
    .then(res.json({ msg: "tag supp" }));
});

router.patch("/:tagId", (req, res) => {
  sequelize.models.tag
    .update(req.body, { where: { id: req.params.tagId } })
    .then((tag) => res.status(200).json(tag));
});
module.exports = router;
