var nodemailer = require('nodemailer')
var express = require("express")

  
export default (req, res) => {
var request = JSON.parse(req)
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: request.sender
    pass: request.password
  }
});

var mailOptions = {
  from: request.sender,
  to: request.reciever,
  subject: request.title,
  html: request.html
};



  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.status(200).send({
      err:error,
      username: request.sender,
      password: request.password
    })
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).send({
      response: "email has been sent"
    })
  }
});
  
}