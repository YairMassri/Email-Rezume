// var port = 4070;

// var express = require('express');
// var fs = require('fs');
// var nodemailer = require('nodemailer');
// var bodyParser = require('body-parser');
// var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'fviclass@gmail.com',
//     pass: 'fviclass2017'
//   }
// });

// var message = '';

// //purpose of this is to enable cross domain requests
// // Add headers
// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   // Pass to next layer of middleware
//   next();
// });

// app.get("/", function (req, res) {
//   let form = `<!DOCTYPE html>
//     <html>
//       <head>
//         <meta charset="utf-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <title>Resume Emailer</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1">
        
//         <link href="https://fonts.googleapis.com/css?family=Montserrat:300" rel="stylesheet">

//         <style>
//           body {
//             margin: 0;
//             font-family: 'Montserrat', sans-serif;
//             color: #000;
//           }

//           input, button {
//             outline: none;
//           }

//           input {
//             width: 400px;
//           }

//           input:focus {
//             border: 2px solid #77E3C3;
//           }

//           button {
//             width: 442px;
//             background-color: rgba(0,0,0,0);
//             border: 2px solid #77E3C3;
//             transition: transform 450ms;
//             color: #000;
//           }

//           button:hover {
//             cursor: pointer;
//             border: 1px solid #77E3C3;
//             background-color: #77E3C3;
//             color: #fff;
//             transform: scale(1.03);
//           }

//           .icon {
//             margin-bottom: 50px;
//           }

//           .container {
//             height: 100vh;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             flex-direction: row;
//             flex-wrap: wrap;
//           }

//           .wallper {
//             background-image: url(https://d2ue93q3u507c2.cloudfront.net/assets/generated_assets/94977d34f99015525dcd0fc9987fcbe6.png);
//             background-size: cover;
//             width: 100%;
//             height: 100%;
//             flex: 1;
//           }

//           .form-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             flex-direction: column;
//             flex: 1;
//             height: 100%;
//           }

//           .form-element {
//             padding: 0px 20px;
//             margin: 10px;
//             height: 70px;
//             font-size: 18px;
//           }
//         </style>
//       </head>
//       <body>
        
//       ${
//          message ? 
//           `<div style="text-align: center; position: fixed; right: 0; left: 0; top: 0; margin: auto; height: 70px; background-color: #000; color: #fff; width: 400px; display: flex; justify-content: center; align-items: center; font-size: 20px;">${message}</div>` : ''
//       }
        
//         <form action="http://localhost:4070/" method="post">
//           <div class="container">
//             <div class="wallper"></div>
            
//             <div class="form-container">
//               <div class="icon">
//                 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
//                   viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve" width="250px" height="250px">
//                   <g>
//                     <g>
//                       <path d="M507.686,2.646c-2.701-1.867-6.147-2.29-9.221-1.127L248.189,96.113c-5.167,1.953-7.771,7.723-5.819,12.89    c1.952,5.166,7.728,7.771,12.89,5.818L492,25.342V397.2l-28-12.274V276.694c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10    v99.465L240.194,286.82L455.071,71.943c3.602-3.602,3.921-9.335,0.74-13.314c-3.179-3.979-8.842-4.932-13.149-2.214    L144.798,244.428L36.593,197.47l134.584-50.868c5.167-1.953,7.771-7.724,5.819-12.89c-1.953-5.166-7.727-7.772-12.89-5.818    L6.465,187.477c-3.809,1.439-6.364,5.043-6.462,9.114c-0.098,4.07,2.281,7.793,6.016,9.414l132.589,57.539l75.456,133.625    c1.805,3.195,5.166,5.084,8.707,5.084c0.844,0,1.697-0.107,2.543-0.33c2.019-0.531,3.751-1.661,5.041-3.163    c0,0.004,0.001,0.007,0.001,0.01l58.951-68.584l208.679,91.476c1.285,0.563,2.652,0.841,4.014,0.841    c1.915,0,3.82-0.55,5.472-1.629c2.826-1.847,4.529-4.995,4.529-8.371V10.872C512,7.588,510.387,4.513,507.686,2.646z     M215.7,283.029c-1.875,1.875-2.929,4.419-2.929,7.071v64.105l-53.715-95.125l218.531-137.938L215.7,283.029z M232.771,365.275    v-59.872l37.379,16.385L232.771,365.275z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M216.149,114.512c-1.859-1.86-4.43-2.93-7.069-2.93c-2.63,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07    c0,2.64,1.069,5.21,2.93,7.08c1.86,1.86,4.44,2.92,7.07,2.92s5.21-1.06,7.069-2.92c1.86-1.87,2.931-4.44,2.931-7.08    C219.08,118.952,218.01,116.372,216.149,114.512z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M65.245,318.095c-3.156-0.102-6.354,0.032-9.477,0.397c-5.485,0.642-9.411,5.609-8.77,11.095    c0.597,5.091,4.917,8.838,9.92,8.838c0.389,0,0.78-0.022,1.176-0.069c2.136-0.25,4.329-0.344,6.492-0.272    c5.556,0.209,10.143-4.146,10.323-9.666C75.092,322.899,70.765,318.277,65.245,318.095z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M59.445,474.007c-1.932-1.439-3.834-2.969-5.653-4.547c-4.172-3.618-10.487-3.171-14.107,1.002    c-3.618,4.172-3.17,10.488,1.002,14.106c2.193,1.902,4.484,3.745,6.812,5.478c1.794,1.336,3.889,1.981,5.966,1.981    c3.052,0,6.064-1.392,8.027-4.027C64.791,483.571,63.874,477.306,59.445,474.007z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M20,395.36v-3.419c0-5.523-4.478-10-10-10s-10,4.477-10,10v3.419c0,1.657,0.035,3.338,0.104,4.997    c0.225,5.376,4.653,9.583,9.984,9.583c0.141-0.001,0.283-0.004,0.426-0.01c5.518-0.23,9.804-4.891,9.573-10.409    C20.029,398.14,20,396.74,20,395.36z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M28.997,339.294c-4.215-3.563-10.527-3.035-14.092,1.184c-2.04,2.414-3.912,5-5.566,7.686    c-2.895,4.704-1.429,10.863,3.275,13.758c1.634,1.006,3.443,1.485,5.231,1.485c3.357,0,6.637-1.691,8.526-4.76    c1.131-1.838,2.412-3.608,3.809-5.26C33.746,349.169,33.216,342.859,28.997,339.294z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M31.35,441.2c-1.123-2.124-2.184-4.322-3.152-6.532c-2.216-5.06-8.113-7.365-13.171-5.15    c-5.06,2.215-7.365,8.112-5.149,13.171c1.164,2.658,2.439,5.303,3.792,7.86c1.793,3.392,5.261,5.328,8.849,5.328    c1.576,0,3.176-0.374,4.666-1.162C32.067,452.133,33.932,446.082,31.35,441.2z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M98.875,491.295c-2.358-0.439-4.731-0.976-7.052-1.595c-5.33-1.421-10.815,1.749-12.239,7.084    c-1.424,5.336,1.748,10.816,7.085,12.24c2.811,0.75,5.686,1.4,8.544,1.933c0.619,0.115,1.234,0.171,1.843,0.171    c4.722,0,8.923-3.36,9.819-8.171C107.886,497.527,104.305,492.306,98.875,491.295z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M113.486,342.204l-5.638-5.639c-0.06-0.06-0.12-0.119-0.182-0.177c-3.916-3.745-10.127-3.691-13.979,0.16    c-3.905,3.905-3.905,10.237,0,14.142c0.026,0.026,0.054,0.053,0.081,0.08l5.576,5.577c1.953,1.952,4.512,2.929,7.071,2.929    c2.559,0,5.118-0.977,7.071-2.929C117.391,352.442,117.391,346.11,113.486,342.204z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M193.999,469.965c-3.642-4.151-9.959-4.567-14.112-0.928c-1.812,1.588-3.704,3.125-5.626,4.569    c-4.414,3.319-5.302,9.588-1.983,14.002c1.965,2.614,4.965,3.991,8.001,3.991c2.092,0,4.201-0.654,6.002-2.007    c2.318-1.744,4.603-3.599,6.788-5.515C197.223,480.436,197.638,474.119,193.999,469.965z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M218.288,428.801c-5.089-2.158-10.954,0.219-13.11,5.303c-0.938,2.215-1.974,4.42-3.076,6.554    c-2.534,4.907-0.611,10.939,4.296,13.474c1.468,0.758,3.035,1.117,4.581,1.117c3.621,0,7.116-1.974,8.893-5.413    c1.333-2.581,2.585-5.248,3.721-7.926C225.747,436.826,223.373,430.957,218.288,428.801z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M147.426,376.146l-5.657-5.657c-3.904-3.905-10.237-3.905-14.142,0c-3.905,3.905-3.905,10.237,0.001,14.142l5.658,5.657    c1.952,1.953,4.511,2.929,7.07,2.929s5.119-0.977,7.071-2.929C151.332,386.383,151.332,380.051,147.426,376.146z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M154.228,496.484c-1.46-5.325-6.965-8.458-12.287-7c-2.32,0.636-4.692,1.19-7.051,1.649    c-5.422,1.054-8.963,6.302-7.909,11.724c0.929,4.777,5.114,8.094,9.806,8.094c0.632,0,1.274-0.061,1.918-0.186    c2.852-0.554,5.719-1.225,8.521-1.993C152.553,507.312,155.688,501.811,154.228,496.484z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M461.069,232.622c-1.859-1.86-4.439-2.93-7.069-2.93s-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07    c0,2.64,1.069,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07    S462.93,234.482,461.069,232.622z"
//                         fill="#77E3C3" />
//                     </g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                   <g>
//                   </g>
//                 </svg>
//               </div>
              
//               <h1>Frank Veloz Montero</h1>
              
//               <input class="form-element" type="text" name="from" placeholder="From" required />
              
//               <input class="form-element" type="email" name="dest_email" placeholder="Destination Email" required />
              
//               <input class="form-element" type="text" name="subject" placeholder="Subject" required />
              
//               <button class="form-element" type="submit">SEND</button>
//             </div>

//           </div>
//         </form>
//       </body>
//     </html>`

//   res.end(form);
// });

// app.post("/", function (req, res) {

//   var emailBody = fs.readFileSync('./resume.html');

//   console.log('page ', emailBody);

//   var mailOptions = {
//     from: req.body.from,
//     to: req.body.dest_email,
//     html: emailBody,
//     subject: req.body.subject
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
   
//     if (error) {
//       console.log(error);
//       message = "Something went wrong. Error:\n" + error;
//     } else {
//       console.log('Message sent ' + info.response);
//       message = "Your email was sent successfully";
//     }

//     res.redirect('/');
//   });
// });

// app.listen(port, function(err) {
//   if(err) throw err;

//   console.log('listening on port ' + port);
// });