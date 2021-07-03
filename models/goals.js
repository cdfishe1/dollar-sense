const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const goalsSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "What are you saving for?",
  },
  amount: {
    type: Number,
  },
  saveBy: {
    type: Date,
    required: "When do you want to save this by?",
  },
  userID: {
    type: String,
  },
  emoji: {
    type: String,
  },
});

const Goals = mongoose.model("GoalsDB", goalsSchema);

module.exports = Goals;
