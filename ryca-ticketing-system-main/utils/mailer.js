const nodemailer = require('nodemailer');

require('dotenv').config();


// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // You can change this to 'Yahoo', 'Outlook', etc., depending on your provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address from the .env file
    pass: process.env.EMAIL_PASS, // Your email password or app password from the .env file
  },
});

const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to : ["test1@yopmail.com"], // list of receivers
    subject, // Subject line
    text, // plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendMail;
