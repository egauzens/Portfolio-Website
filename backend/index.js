var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const dotenv = require('dotenv').config();
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(process.env.PORT);

app.use(express.static(path.join(__dirname, 'public')));

// Point server to React files
app.get('/*', (res) => {
  res.sendFile(path.join(__dirname, 'public', 'build', 'index.html'));
});

var transport = {
    host: 'smtp.office365.com',
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
  },
  tls: {
    ciphers: 'SSLv3'
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var subject = req.body.subject
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${firstName} ${lastName} \n email: ${email} \n subject: ${subject} \n message: ${message} `

  var mail = {
    from: `${process.env.EMAIL}`,
    to: `${process.env.EMAIL}`,
    subject: 'New message from portfolio website',
    text: content
  }

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})