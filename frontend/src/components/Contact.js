import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use the API URL from environment variables
    const API_URL = `${process.env.REACT_APP_API_URL}/api/contact`;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
        setIsSubmitted(true); // Show thank-you message after successful submission
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setStatus(''); // Clear the status message
  };

  // Display a thank-you message if the form has been submitted
  if (isSubmitted) {
    return (
      <section id="contact" className="contact">
        <p>Thank you for reaching out! I’ll get back to you shortly.</p>
        <button onClick={handleResetForm} className="send-again-button">Send another message</button>
      </section>
    );
  }
  

  return (
    <section id="contact" className="contact">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact Me</legend>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.name}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            value={formData.message}
            required
            className="contact-textarea"
          />
          <button type="submit" className="contact-button">Send</button>
          <p>{status}</p>
        </fieldset>
      </form>
    </section>
  );
}

export default Contact;
