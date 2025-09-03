'use client'
import React, { useState } from 'react';
import { MapPin, Phone, Mail, User, MessageSquare, Hash } from 'lucide-react';
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
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend here
  };
  return (
    <section className="section contact-section" id="section-contact">
      <div className="container">
        <h2 className="common-heading heading-center">Contact Us</h2>
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-description">
              Have a project in mind or want to collaborate? Feel free to reach out through the contact form or my contact details below.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-text">
                  <h4>Address</h4>
                  <p>Bharatpur-05, Kalyanpur, Chitwan</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-text">
                  <h4>WhatsApp</h4>
                  <p>+977 9864890402</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>sbinayaraj@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-label">
                <User size={20} className="label-icon" />
                <span className="label-text">Your Name</span>
              </div>
              <input
                type="text"
                name="username"
                required
                placeholder="e.g. John Doe"
                value={formData.username}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <div className="input-label">
                <Mail size={20} className="label-icon" />
                <span className="label-text">Your Email</span>
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="e.g. johndoe@example.com"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <div className="input-label">
                <Hash size={20} className="label-icon" />
                <span className="label-text">Subject</span>
              </div>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Website Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <div className="input-label">
                <MessageSquare size={20} className="label-icon" />
                <span className="label-text">Your Message</span>
              </div>
              <textarea
                name="message"
                placeholder="e.g. I'd like to discuss a website project for my business..."
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
            </div>
            <div>
              <input type="submit" value="Send Message" className="btn submit-btn" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;