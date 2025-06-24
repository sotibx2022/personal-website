// components/HeroSection.tsx
import React from 'react';
const HeroSection: React.FC = () => {
  return (
    <section className="section-hero section container bg-red-500">
      <div className="container grid grid-two-col">
        <div className="section-hero-data">
          <p className="hero-top-data">Welcome To My Site</p>
          <h1 className="hero-heading">MYSELF, BINAYARAJ</h1>
          <p className="hero-para">
            Highly trained and Motivated Person who have More than Six 6 years of Maintenance Planning work experience in Saudi Aramco Oil Company,
            also more than 10 years experiences on IT profession throughout different institutions & consultancies can give his best to obtain a 
            challenging management as suitable to my skills, Experience, and backgrounds.
          </p>
          <div>
            <a href="#" target="_blank" className="btn hireme-btn">Hire Me</a>
          </div>
        </div>
        <div className="section-hero-image">
          <img src="../hero.jpg" alt="hero image" className="hero-img" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;