// application helper functions file

const applicationModel = require("../config/models/applicationModel");
const nodemailer = require("nodemailer");

module.exports = {
  // application submit helper
  submitUserApplication: (userId, content, date, email) => {
    return new Promise(async (resolve, reject) => {
      // user mail to the admin mail
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SEND_EMAIL,
          pass: process.env.SEND_PASS,
        },
      });

      var mailOptions = {
        from: `"Student"<${email}>`,
        to: process.env.SEND_EMAIL,
        subject: `Leave Application : ${new Date(date).toLocaleDateString()}`,
        html: content,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      try {
        await applicationModel.create({ userId, content, leaveDate: date });
        resolve({ status: "ok", applcationSubmitted: true });
      } catch (error) {
        reject({ status: "error", applcationSubmitted: false, error });
      }
    });
  },
};
