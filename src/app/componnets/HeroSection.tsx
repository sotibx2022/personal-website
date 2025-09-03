"use client"
import React from 'react';
const HeroSection: React.FC = () => {
  return (
    <section className="section-hero section container">
      <div className="container grid grid-two-col">
        <div className="section-hero-data">
          <p className="hero-top-data">
            Welcome To My Site
          </p>
          <h1 className="hero-heading">
            MYSELF, BINAYARAJ
          </h1>
          <p className="hero-para text-lg text-gray-700 leading-relaxed">
            I’m Binayaraj Soti, a Next.js e-commerce developer who transforms your ideas into fast, modern, and user-friendly websites.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;