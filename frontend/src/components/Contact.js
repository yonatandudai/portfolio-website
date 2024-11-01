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
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
        setIsSubmitted(true); // Hide form after successful submission
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  // Display a thank-you message if the form has been submitted
  if (isSubmitted) {
    return (
      <section id="contact" className="contact">
        <p>Thank you for reaching out! We’ll get back to you shortly.</p>
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
