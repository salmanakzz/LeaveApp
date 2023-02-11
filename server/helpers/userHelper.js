// user helper functions file
const userModel = require("../config/models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  // user register helper
  registerUser: (name, email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        let bcryptedPassword = await bcrypt.hash(password, 10);
        await userModel.create({ name, email, password: bcryptedPassword });
        resolve({ status: "ok", userRegistered: true });
      } catch (error) {
        reject({ status: "error", userRegistered: false, error });
      }
    });
  },

  // user login helper
  userLogin: (email, password) => {
    return new Promise(async (resolve, reject) => {
      const userDetails = await userModel.findOne({ email });
      try {
        const status = await bcrypt.compare(password, userDetails.password);
        if (status) {
          resolve({ status: "ok", user: true, userId: userDetails._id });
        } else {
          reject({ status: "error", user: false });
        }
      } catch (error) {
        reject({ status: "error", user: false, error });
      }
    });
  },
};
