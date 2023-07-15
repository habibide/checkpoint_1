var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'moushab17@gmail.com',
    pass: 'Flutterdart384885'
  }
});

var mailOptions = {
  from: 'moushab17@gmail.com',
  to: 'habibiflutter@gmail.com',
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