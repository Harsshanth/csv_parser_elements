var nodemailer = require("nodemailer");
const data = require("./csvjson.json");
let to = "";
data.forEach((element) => {
  to = to + "," + element["Email address"];
});

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "harsshanthhcl@gmail.com",
    pass: "nrsrfuyrwrhoowto",
  },
});

var mailOptions = {
  from: "harsshanthhcl@gmail.com",
  to: to,
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
