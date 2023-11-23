const express = require("express");

const router = express.Router();

const QuizController = require("../Controllers/quizController");


router
  .route("/")
  .post( QuizController.SaveQuiz)
  .get(QuizController.GetAllquizs);


router
  .route("/:id")
  .patch(QuizController.updatequiz)
  .get(QuizController.GetquizByID)
  .delete(

    QuizController.deletequiz
  );



module.exports = router;