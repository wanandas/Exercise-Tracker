const express = require("express");
const exerciseController = require("../controllers/exercisesController");

const router = express.Router();

router.route("/").get(exerciseController.getAllExercise);
router.route("/addExercise").post(exerciseController.createExercise);

router
  .route("/:id")
  .get(exerciseController.getExercise)
  .patch(exerciseController.updateExercise)
  .delete(exerciseController.deleteExercise);
module.exports = router;
