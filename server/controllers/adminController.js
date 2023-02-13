// admin application route controlling file

const adminHelper = require("../helpers/adminHelper");


// user application fetch controller
const fetchApplications = async (req, res) => {
  try {
    const response = await adminHelper.fetchUserApplications();
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

// exporting controllers
module.exports = {
  fetchApplications,
};
