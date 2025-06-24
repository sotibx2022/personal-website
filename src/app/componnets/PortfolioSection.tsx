'use client';
// components/PortfolioSection.tsx
import React, { useState } from 'react';
interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string[];
  demoLink: string;
  viewLink: string;
}
const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: 'https://picsum.photos/id/230/800/600',
      title: 'Project 1',
      category: ['website'],
      demoLink: '#',
      viewLink: 'http://charcounter.thapaonlineclass.com/'
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/260/800/600',
      title: 'Project 2',
      category: ['design'],
      demoLink: '#',
      viewLink: 'https://www.thapatechnical.com/'
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/237/800/600',
      title: 'Project 3',
      category: ['mobile'],
      demoLink: '#',
      viewLink: 'https://example.com/project3'
    },
    {
      id: 4,
      image: 'https://picsum.photos/id/238/800/600',
      title: 'Project 4',
      category: ['website', 'design'],
      demoLink: '#',
      viewLink: 'https://example.com/project4'
    }
  ];
  const filters = ['Websites', 'Youtube', 'Design'];
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => 
        item.category.includes(activeFilter.toLowerCase()));
  return (
    <section className="section-portfolio section" id="portfolio-section">
      <div className="container">
        <h2 className="common-heading">Latest works</h2>
        <p>
          I have worked several years as an employee to reputed companies as a IT professional as well as completed
          many mini projects using my core skills. Below are the some developements started for my self portfolio.
        </p>
      </div>
      <div className="p-btns">
        <button 
          className={`btn p-btn ${activeFilter === 'all' ? 'active' : ''}`} 
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`btn p-btn ${activeFilter === filter.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.toLowerCase())}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="container grid grid-three-col portfolio-images">
        {filteredItems.map(item => (
          <div className={`img-ovelay p-btn--${item.id}`} key={item.id}>
            <img src={item.image} loading="lazy" alt="portfolio images" />
            <div className="overlay">
              <a href={item.viewLink} target="_blank" rel="noopener noreferrer" className="common-heading">
                {item.title}
              </a>
              <br />
              <div className="btn">
                <a href={item.demoLink} className="btn">View Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default PortfolioSection;