// components/FreelanceSection.tsx
import React from 'react';

const FreelanceSection: React.FC = () => {
  return (
    <section className="section section-freelancer">
      <div className="overlay"></div>
      <div className="container">
        <h2 style={{ color: 'white' }}>I am <span>available</span> for freelancing</h2>
        <p style={{ color: 'white' }}>
          If you have any project need to develop, feel free to reach me. I will convert your dream to the reality.
        </p>
        <a href="/contact" className="btn">HIRE ME</a>
      </div>
    </section>
  );
};

export default FreelanceSection;