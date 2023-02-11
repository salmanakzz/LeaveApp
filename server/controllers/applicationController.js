// application route controlling file

const applicationHelper = require("../helpers/applicationHelper");

const submitApplication = async (req, res) => {
  const { userId, content, date } = req.body;
  try {
    const response = await applicationHelper.submitUserApplication(
      userId,
      content,
      date
    );
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

// exporting controllers
module.exports = {
  submitApplication,
};
