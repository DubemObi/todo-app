const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter the title"],
  },
  description: {
    type: String,
    required: [true, "Enter a description"],
  },
  duration: {
    type: Number,
    required: [true, "How long will it take"],
  },
  Date: {
    type: String,
    default: new Date().toUTCString(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
