// user collection shema

const mongoose = require("mongoose");
const { APPLICATION_COLLECTION } = require("../collections");

const application = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: true },
    content: { type: String, required: true },
    leaveDate: { type: Date, required: true },
  },
  {
    timestamps: true,
    collection: APPLICATION_COLLECTION,
  }
);

const model = mongoose.model("appData", application);

module.exports = model;
