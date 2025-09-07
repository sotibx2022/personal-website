'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import images from public/project1 folder
import projectimage1 from '../../../public/project1/projectimage3.jpeg';
import projectimage2 from '../../../public/project1/projectimage3.jpeg';
import projectimage3 from '../../../public/project1/projectimage3.jpeg';
import projectimage4 from '../../../public/project1/projectimage3.jpeg';
import projectimage5 from '../../../public/project1/projectimage3.jpeg';
import projectimage6 from '../../../public/project1/projectimage3.jpeg';
import ktmnowlogo from '../../../public/ktmnowlogo.png';
const PortfolioSection: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: projectimage1,
      title: 'Graphical Interactive Dashboard',
      description:
        'Using Recharts.js the orders, products, and user details are demonstrated in graphical format.',
    },
    {
      id: 2,
      image: projectimage2,
      title: 'Light and Dark Mode Dashboard',
      description:
        'Responsive tables and sidebar supporting dual light and dark color modes.',
    },
    {
      id: 3,
      image: projectimage3,
      title: 'AI Product Recommendation',
      description:
        'Langchain is used to recommend products based on user instructions.',
    },
    {
      id: 4,
      image: projectimage4,
      title: 'AI Product Details Generator',
      description:
        'Enter a product title and AI generates detailed product info and features using Langchain.',
    },
    {
      id: 5,
      image: projectimage5,
      title: 'Sentiment Analysis of Remarks',
      description:
        'Groq AI and Langchain analyze remarks. Negative ones are blocked, positive ones go live, and neutral ones require admin approval.',
    },
    {
      id: 6,
      image: projectimage6,
      title: 'Wishlist Sharing',
      description:
        'Share wishlist items with loved ones so they can purchase what you truly want.',
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
            <h3 className="slide-title" key={index}>
              {slide.title}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PortfolioSection;
