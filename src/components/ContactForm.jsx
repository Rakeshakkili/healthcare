import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.message) validationErrors.message = 'Message is required';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      setErrors({});
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
