const express = require("express");

const router = express.Router();

const { userRegister } = require("../controllers/user.controller");

router.route("/register").post(userRegister);

module.exports = router;
