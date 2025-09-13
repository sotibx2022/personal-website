'use client'
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';
const ContactSection: React.FC = () => {
  return (
    <section className="section contact-section container" id="section-contact">
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;