// application routes setup file
const express = require("express");
const { submitApplication } = require("../controllers/applicationController");
const router = express.Router();

// user register route
router.post("/api/submit-application", submitApplication);


module.exports = router