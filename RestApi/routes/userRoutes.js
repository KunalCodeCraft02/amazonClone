// userRoutes.js
const userControllers = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();
const checkuserauth = require("../middleware/authMiddleware");

// Public Routes
router.post("/register", userControllers.userRegistration);
router.post("/login", userControllers.loginUser);

// Private route protected
router.use("/changepassword", checkuserauth);

// Protected Routes
router.post("/changepassword", userControllers.changepassword);

module.exports = router;
