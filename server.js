var port = 3179;

var express = require('express');
var fs = require('fs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'server3178@gmail.com',
    pass: 'port3178'
  }
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://fvi-grad.com:3179');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With', 'content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();

});

app.get("/", function(req, res){
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
  </head>
  
  <body align="center">
      <h1>Yair D Massri</h1>
      <form action="http://fvi-grad.com:3179/" method="post">
          <br>
          <input type="text" name="from" value="" placeholder="From:">
          <br>
          <br>
          <input type="text" name="destination_email" value="" placeholder="Destination Email:">
          <br>
          <br>
          <input type="text" name="subject" value="" placeholder="Subject:">
          <br>
          <br>
          <input type="text" name="message" value="" placeholder="Message:">
          <br>
          <br>
          <input type="submit" value="Send">
      </form>
  </body>
  
  </html>`);
})

app.post("/", function (req, res) {
  console.log ("/", req.body)
  var emailBody = fs.readFileSync('./resume.html');

  emailBody = emailBody;

  var mailOptions = {
    from: req.body.from,
    to: req.body.destination_email,
    html: emailBody,
    subject: req.body.subject
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.end("Something went Wrong. Error:\n" + error);
    } else {
      console.log('Message sent' + info.response);
      res.redirect('/');
    }
  })
})

app.listen(port, function(err){
  if(err) throw err;

  console.log('listening on port' + port);
})