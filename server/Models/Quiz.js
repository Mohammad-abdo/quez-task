const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Every Quiz Must include a title"],
    trim: true,
  },
  question: {
    type: String,
    required: [true, "Every Quiz Must include a Question"],
    trim: true,
  },
  answers: {
    type: [String],
    required: true,
    trim: true,
  },
  trueAnswer: {
    type: String,
    required: true,
    trim: true,
  },
  topic: {
    type: String,
    enum: ["language", "math", "sciences", "History"],
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true
});

const Quiz = mongoose.model("Quizes", QuizSchema);

module.exports = Quiz;
