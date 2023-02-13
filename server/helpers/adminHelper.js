//admin application helper functions file

const { USER_COLLECTION } = require("../config/collections");
const applicationModel = require("../config/models/applicationModel");

module.exports = {
  // fetching user applications function
  fetchUserApplications: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const applications = await applicationModel.aggregate([
          {
            $lookup: {
              from: USER_COLLECTION,
              localField: "userId",
              foreignField: "_id",
              as: "user",
            },
          },
          {
            $sort: { createdAt: -1 },
          },
        ]);
        resolve({ status: "ok", fetched: true, data: applications });
      } catch (error) {
        resolve({ status: "error", fetched: false, error });
      }
    });
  },
};
