const User = require("../models/user.model");

const getUsers = async (req, res) => {
  const users = await User.find();
  try {
    res.status(200).json({
      status: "success",
      results: users.length,
      users
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error
    });
  }
};

const addUser = async (req, res) => {
  const newUser = await User.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: { users: newUser }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      err: error
    });
  }
};

module.exports = { getUsers, addUser };
