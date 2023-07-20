import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
  event.preventDefault();
  console.log('Form submitted:', formData);

  emailjs
    .send(
      'service_fl0qpn7', // Replace with your service ID from EmailJS
      'template_cq5mncj', // Replace with your template ID from EmailJS
      formData,
      'i2CD4x7-sO_OVHP-n' // Replace with your user ID from EmailJS
    )
    .then(response => {
      console.log('Email sent successfully!', response.status, response.text);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000); // Delay of 3000 milliseconds (3 seconds)
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
};

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  }, [isSuccess]);

  return (
    <div className="contactus-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {isSuccess && (
        <div className="success-message-container">
          <p className="success-message">Message sent successfully!</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
