require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail'); // Import SendGrid
const app = express();

app.use(cors());
app.use(express.json());

// Set up SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Use environment variable for security

// Endpoint for handling contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Set up email data
  const msg = {
    to: 'yonatandudai@gmail.com', // Your email address to receive messages
    from: 'yonatandu@outlook.com', // Must be a verified sender in SendGrid
    replyTo: email, // This can be any email provided by the user
    subject: `New message from ${name}`,
    text: message,
  };
  

  try {
    await sgMail.send(msg); // Send the email using SendGrid
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error("Error sending email:", error); // Logs error details
    res.status(500).send('Failed to send message.');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
