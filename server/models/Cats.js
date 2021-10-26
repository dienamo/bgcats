const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema(
  {
    url: String,
    id: String,
    votes: { type: Number, default: 0 },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
