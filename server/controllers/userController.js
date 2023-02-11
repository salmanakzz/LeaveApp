// user route controlling file

const userHelper = require("../helpers/userHelper");

// user register route controling
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const response = await userHelper.registerUser(name, email, password);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await userHelper.userLogin(email, password);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

// exporting controllers
module.exports = {
  signup,
  login,
};
