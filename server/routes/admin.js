// user routes setup file
const express = require("express");
const router = express.Router();

const { fetchApplications } = require("../controllers/adminController");

//fetch application route
router.get("/api/fetch-applications", fetchApplications);

module.exports = router;
