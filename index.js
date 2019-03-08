const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Subject : ${req.body.subject}</li>
            </ul>
            <h3>Message</h3>
            <p>Message: ${req.body.message}</p>
        `

        // create reusable transporter object using the default SMTP transport
        

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: "rosalind38@ethereal.email", // generated ethereal user
              pass: "N6u6rwgqgw5zWkEdc3" // generated ethereal password
            }
          });        

        // setup email data with unicode symbols
        let mailOptions = {
            from: req.body.email, // sender address
            to: "huiyanj91@gmail.com", // list of receivers
            subject: req.body.subject, // Subject line
            text: req.body.message, // plain text body
            html: htmlEmail // html body
        };

        // send mail with defined transport object
        let info = transporter.sendMail(mailOptions, function(err, res) {
            if (err) {
                console.log('Error')
            } else {
                console.log("Sending Success")
            }
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server Listen on ${PORT}`)
})