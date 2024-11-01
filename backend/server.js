require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail'); // Import SendGrid
const app = express();

// Allow requests from your Netlify domain
const corsOptions = {
  origin: ['https://yonatandu-portfolio.netlify.app', 'http://localhost:3000']
};
app.use(cors(corsOptions));

app.use(express.json());

// Set up SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Endpoint for handling contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'yonatandudai@gmail.com',
    from: 'yonatandu@outlook.com',
    replyTo: email,
    subject: `New message from ${name}`,
    text: message,
  };
  
  try {
    await sgMail.send(msg);
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send('Failed to send message.');
  }
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error("Error occurred:", err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
