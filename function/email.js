var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tonwareemizakana@gmail.com',
    pass: 'qdhleleroajyacvn'
  }
});

export default (req, res) => {
  
var mailOptions = {
  from: 'tonwareemizakana@gmail.com',
  to: 'hillaryzakana862002@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
  
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
  res.status(200).send(`Hello ${req}!`)
}