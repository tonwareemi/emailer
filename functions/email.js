var nodemailer = require('nodemailer')
var express = require("express")

  
export default (req, res) => {
var name = JSON.stringify(req.body.username)
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: JSON.stringify(req.body.sender),
    pass: JSON.stringify(req.body.password)
  }
});

var mailOptions = {
  from: JSON.stringify(req.body.sender).replace(/"/g,""),
  to:JSON.stringify(req.body.reciever).replace(/"/g,""),
  subject: JSON.stringify(req.body.title).replace(/"/g,""),
  html: JSON.stringify(req.body.html)
};



  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.status(200).send({
      err:error,
      username:JSON.stringify(req.body.sender),
      password:JSON.stringify(req.body.password)
    })
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).send({
      response: "email has been sent"
    })
  }
});
  
}