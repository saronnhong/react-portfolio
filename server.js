// require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const nodemailer = require('nodemailer');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
  }
});

app.post("/send-email", function(req, res) {
  let mailOptions = {
    from: req.body.email.recipient,
    to: req.body.email.sender,
    subject: req.body.email.subject,
    text: "FROM: " + req.body.email.from + "\n\n" + req.body.email.text
  };

  transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
          console.log("error occurs ", err);
      } else {
          console.log("email sent!");
      }
  });
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
