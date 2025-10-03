const express = require("express");
const { loginUser, signUpUser, getEmailId } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.route("/signup").post(signUpUser);

authRouter.route("/login").post(loginUser);

authRouter.route("/getEmailId").post(getEmailId);

module.exports = authRouter;
