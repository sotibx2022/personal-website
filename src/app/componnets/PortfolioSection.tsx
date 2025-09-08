'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ktmnowlogo from '../../../public/ktmnowlogo.png';
import { Circle, CircleCheck, Lightbulb } from 'lucide-react';
const PortfolioSection: React.FC = () => {
  const slides = [
  {
    id: 1,
    title: 'Interactive Dashboard',
  },
  {
    id: 3,
    title: 'AI Product Recommendation.',
  },
  {
    id: 4,
    title: 'Product Details Generator.',
  },
  {
    id: 5,
    title: 'Sentiment Analysis of Remarks.',
  },
  {
    id: 6,
    title: 'Wishlist Sharing to Others.',
  },
];
  return (
    <section className="section portfolio-section" id="portfolio">
      <h2 className="portfolio-title">Product Details</h2>
      <div className="portfolio-container">
        <div className="portfolio-details">
          <div className="projectSubtitle">
            <Image
              alt="ktmnowlogo"
              width={50}
              height={50}
              src={ktmnowlogo}
              className="h-[50px] w-auto"
            />
            <h3>ktmnow.store</h3>
            <Link href="https://www.ktmnow.store/" className="btn">
              View
            </Link>
          </div>
          <p className="portfolio-description">
            Fully functional <strong>AI Powered Ecommerce website</strong> built in Next.js.
          </p>
          <h4 className="portfolio-tech-title">Tech Stacks:</h4>
          <ul className="portfolio-tech-list">
            <li className="tech-item">TypeScript</li>
            <li className="tech-item">Tailwind CSS</li>
            <li className="tech-item">MongoDB</li>
            <li className="tech-item">Langchain</li>
            <li className="tech-item">Next.js</li>
          </ul>
        </div>
        {/* Right Side - Swiper Slider */}
        <div className="portfolio-slider">
          <h4 className="portfolio-tech-title">Top Features:</h4>
          {slides.map((slide, index) => (
            <div className="singleSlideTitle" key={index}>
              <CircleCheck />
             <p className="slide-title"> {slide.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PortfolioSection;
