const express = require("express");
const router = express.Router();
const Cat = require("../models/Cats");

router.get("/cats", (req, res) => {
  Cat.find()
    .then((allCats) => {
      res.json(allCats);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/random-cats", async (req, res) => {
  try {
    const count = await Cat.countDocuments({});
    const random = await Math.floor(Math.random() * count);
    const twoCats = await Cat.find({}).skip(random).limit(2);
    res.status(200).json(twoCats);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/vote", async (req, res) => {
  try {
    const winner = await Cat.findByIdAndUpdate(
      { _id: req.body.catId },
      { $inc: { votes: 1 } },
      { new: true }
    );
    const count = await Cat.countDocuments({});
    const random = await Math.floor(Math.random() * count);
    const twoCats = await Cat.find({}).skip(random).limit(2);
    res.status(200).json({ twoCats, winner });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
