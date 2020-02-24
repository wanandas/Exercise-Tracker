const Exercise = require("../models/exercise.model");

const getAllExercise = async (req, res) => {
  const exercises = await Exercise.find();
  try {
    res.status(200).json({
      status: "success",
      results: exercises.length,
      exercises
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

const createExercise = async (req, res) => {
  const newExercise = await Exercise.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      exercises: { newExercise }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

const getExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.status(200).json({
      status: "success",
      exercise
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

const updateExercise = async (req, res) => {
  const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  try {
    res.status(200).json({
      status: "success",

      exercise
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

const deleteExercise = async (req, res) => {
  await Exercise.findByIdAndDelete(req.params.id);
  try {
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

module.exports = {
  getAllExercise,
  createExercise,
  getExercise,
  updateExercise,
  deleteExercise
};
