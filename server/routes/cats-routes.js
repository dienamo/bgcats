const express = require("express");
const router = express.Router();
const Cat = require("../models/Cats");

router.get("/cats", (req, res, next) => {
  Cat.find()
    .then((allCats) => {
      res.json(allCats);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/random-cats", async (req, res, next) => {
  try {
    const count = await Cat.countDocuments({});
    const random = await Math.floor(Math.random() * count);
    const twoCats = await Cat.find({}).skip(random).limit(2);
    res.status(200).json(twoCats);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
