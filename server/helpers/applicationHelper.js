// application helper functions file

const applicationModel = require("../config/models/applicationModel");

module.exports = {
  // application submit helper
  submitUserApplication: (userId, content, date) => {
    return new Promise(async (resolve, reject) => {
      try {
        await applicationModel.create({ userId, content, leaveDate: date });
        resolve({ status: "ok", applcationSubmitted: true });
      } catch (error) {
        reject({ status: "error", applcationSubmitted: false, error });
      }
    });
  },
};
