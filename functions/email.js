var nodemailer = require('nodemailer')
var express = require("express")

  
export default (req, res) => {
var name = JSON.stringify(req.body.username)
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tonwareemizakana@gmail.com',
    pass: 'qdhleleroajyacvn'
  }
});

var mailOptions = {
  from: 'tonwareemizakana@gmail.com',
  to:JSON.stringify(req.body.email),
  subject: 'Email test',
  html: JSON.stringify(req.body.html)
};



  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.status(200).send(error)
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).send({
      res:`${info.response}`
    })
  }
});
  
}