'use client'
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend here
  };

  return (
    <section className="section section-contact" id="section-contact">
      <div className="container">
        <h2 className="common-heading">contact us</h2>
      </div>

      <div className="section-contact-main contact-container">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-two-col">
            <input 
              type="text" 
              name="username" 
              required 
              placeholder="Name"
              value={formData.username}
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Email" 
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea 
              name="message" 
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <input type="submit" value="send message" className="btn" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;