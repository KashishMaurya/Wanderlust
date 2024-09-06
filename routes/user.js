// sign-in + login user route

const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const { redirectUrl } = require("../middleware");
const {
  signupController,
  loginController,
  logoutController,
} = require("../controller/user.js");

// Signup Route
router
  .route("/signup")
  .get((req, res) => {
    res.render("users/signup");
  })
  .post(wrapAsync(signupController));

// Login Routes
router
  .route("/login")
  .get((req, res) => {
    res.render("users/login.ejs");
  })
  .post(
    redirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login", //if authentication fail redirect
      failureFlash: true, //send flash msge
    }),
    loginController
  );

// Logout Route
router.get("/logout", logoutController);

module.exports = router;
