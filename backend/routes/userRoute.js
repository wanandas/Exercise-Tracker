const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

router.route("/").get(userController.getUsers);
router.route("/addUser").post(userController.addUser);

module.exports = router;
