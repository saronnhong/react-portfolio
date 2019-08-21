// require('dotenv').config();
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const cors = require('cors'); //needed to disable sendgrid security


app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!


// const nodemailer = require('nodemailer');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-email", function(req, res) {
  
  
  const msg = {
    to: 'saronnhong@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg)
  .then((msg) => console.log('sendGrid email sent!'));
})

// Define API routes here
// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD
//   }
// });

// app.post("/send-email", function(req, res) {
//   let mailOptions = {
//     from: req.body.email.recipient,
//     to: req.body.email.sender,
//     subject: req.body.email.subject,
//     text: "FROM: " + req.body.email.from + "\n\n" + req.body.email.text
//   };

//   transporter.sendMail(mailOptions, function (err, data) {
//       if (err) {
//           console.log("error occurs ", err);
//       } else {
//           console.log("email sent!");
//       }
//   });
// })

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
