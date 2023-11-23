const ApiFeatures = require("../Utils/apiFeatures.js");
const Quiz = require("../Models/Quiz");

exports.SaveQuiz = async function (req,res) {
  try {
    console.log(req.body);
    console.log(Quiz);
    const newquiz = await Quiz.create(req.body);
    res.status(201).json({ status: "success", data: { quiz: newquiz } });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "Failed to save the quiz",
      error: error.message,
    });
  }
};

exports.GetquizByID = async function (req, res) {
  try {
    const myquiz = await Quiz.findById(req.params.id);
    res.status(200).json({ status: "success", data: { quiz: myquiz } });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "Failed to get  any quiz",
      error: error.message,
    });
  }
};

exports.deletequiz = async function (req, res) {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "Failed to delete the quiz",
      error: error.message,
    });
  }
};

exports.GetAllquizs = async function (req, res) {
  try {
    const features = new ApiFeatures(Quiz.find(), req.query)
      .filter()
      .limitFields()
      .sort()
      .pagination();

    const quizs = await features.query;

    res.status(200).json({
      status: "success",
      results: quizs.length,
      data: { quizs: quizs },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "Failed to get  any quizs",
      error: error.message,
    });
  }
};

exports.updatequiz = async function (req, res) {
  try {
    const update = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: { update: update },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to update the quiz",
      error: error.message,
    });
  }
};
