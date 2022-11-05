var nodemailer = require('nodemailer')
var express = require("express")

  
export default (req, res) => {
var request=  JSON.stringify(JSON.parse(req.body));
var name = JSON.stringify(req.body.username)
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: JSON.stringify(req.body.sender),
    pass: JSON.stringify(req.body.password)
  }
});

var mailOptions = {
  from: JSON.stringify(req.body.sender),
  to:JSON.stringify(req.body.email),
  subject: JSON.stringify(req.body.title),
  html: JSON.stringify(req.body.html)
};



  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.status(200).send(error)
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).send({
      response: "email has been sent"
    })
  }
});
  
}