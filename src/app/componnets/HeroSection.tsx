"use client"
import React from 'react';
import AnimatedText from './AnimatedText';
import StaggerWrapper from './animation/StaggerWrapper';
const HeroSection: React.FC = () => {
  return (
      <section className="section-hero section container">
      <StaggerWrapper baseDelay={0.2}>
        <AnimatedText animationInfo='Text Revealing Effect' />
      </StaggerWrapper>
      <div className="container grid grid-two-col">
          <div className="section-hero-data">
            <StaggerWrapper baseDelay={0.4}>
          <p className="hero-top-data">
            Welcome To My Site
          </p>
          <h1 className="hero-heading">
            MYSELF, BINAYARAJ
          </h1>
          <p className="hero-para text-lg text-gray-700 leading-relaxed">
            Highly trained and motivated professional with over 6 years of Maintenance Planning experience at Saudi Aramco Oil Company, complemented by more than 10 years in IT across various institutions and consultancies. 
          </p>
          <div>
            <a href="#" target="_blank" className="btn hireme-btn">
              Hire Me
            </a>
          </div>
          </StaggerWrapper>
        </div>
        <StaggerWrapper baseDelay={0.6}>
        <div className="section-hero-image">
          <img 
            src="../hero.jpg" 
            alt="hero image" 
            className="hero-img" 
          />
        </div>
        </StaggerWrapper>
      </div>
    </section>
  );
};
export default HeroSection;