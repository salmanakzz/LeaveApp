// user routes setup file
const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/userController");

// user register route
router.post("/api/signup", signup);

// user register route
router.post("/api/login", login);

module.exports = router