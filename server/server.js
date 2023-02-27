const express = require("express")
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

require('dotenv').config({ path : "./.env" });

const path = require('path');
const app = express()

const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL_WWW;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Serve the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Setup CORS (Cross-Origin Resource Sharing)
const allowedOrigins = [process.env.FRONTEND_URL, process.env.FRONTEND_URL_WWW, process.env.FRONTEND_URL_TEST];
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL_WWW);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

// Serve the PDF resume file statically
app.use('/resume.pdf', express.static(path.join(__dirname, '../server/res/resume.pdf')));

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.post("/api/submit-form", (req, res) => {
    const formData = req.body;
    const {firstName, lastName, email, phone, subject, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

    const mailOptions = {
        from: email,
        to: "anton.u.bergman@gmail.com",
        subject: "Personal Website: " + subject,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).send("Server error");
        } else {
          console.log(`Email sent: ${info.response}`);
          res.send("Success");
        }
      });
})

// Download route for the resume file
app.get('/api/resume', (req, res) => {

  console.log("path: " + path.join(__dirname, '../server/res/resume.pdf'));
  res.download(path.join(__dirname, '../server/res/resume.pdf'), 'resume.pdf', error => {
    if (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });
});

// Send the React app for any other requests
app.get('/*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started at https://localhost:${PORT}`)
});