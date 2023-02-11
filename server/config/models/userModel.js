// user collection shema

const mongoose = require("mongoose");
const { USER_COLLECTION } = require("../collections");

const user = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: USER_COLLECTION,
  }
);

const model = mongoose.model("UserData", user);

module.exports = model;
