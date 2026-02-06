'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mil-contact-form">
      <div className="mil-mb-30">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="mil-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mil-mb-30">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="mil-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mil-mb-30">
        <textarea
          name="message"
          placeholder="Your Message"
          className="mil-textarea"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="mil-btn mil-md">
        Send Message
      </button>
    </form>
  );
}