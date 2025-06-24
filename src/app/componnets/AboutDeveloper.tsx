// components/BioDataSection.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
}

const AboutDeveloper: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Design', percentage: 80 },
    { name: 'HTML', percentage: 99 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'MERN', percentage: 90 },
  ];

  return (
    <section className="section-biodata section">
      <div className="container grid grid-two-col">
        <div className="bio-image">
          <img 
            src="/images/biodata.jpg" 
            alt="bio data image" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="bio-data">
          <h2 className="common-heading">my bio-data</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            natus eum quibusdam, blanditiis nobis dolor distinctio asperiores
            itaque voluptas nesciunt cum dolorum. Quidem sed id repellat facere
          </p>
          <br />
          <p>
            itaque voluptas nesciunt cum dolorum. Quidem sed id repellat facere
            quod placeat praesentium.
          </p>

          <div className="bio-data-stats">
            {skills.map((skill, index) => (
              <div className="bio-stats" key={index}>
                <h3>{skill.name}</h3>
                <div 
                  className="bio-progress-bar"
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span>{skill.percentage}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bio-data-btn">
            <Link 
              href="#" 
              className="btn flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;