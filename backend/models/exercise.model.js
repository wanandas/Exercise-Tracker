const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: [true, "Exercise must have a name"] },
    description: {
      type: String,
      required: [true, "Exercise must have a description"]
    },
    duration: {
      type: Number,
      required: [true, "Exercise must have a duration"]
    },
    date: { type: Date, required: [true, "Exercise must have a date"] }
  },
  { timestamps: true }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
