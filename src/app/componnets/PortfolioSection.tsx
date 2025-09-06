'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
// Import images from public/project1 folder
import projectimage1 from '../../../public/project1/projectimage1.png';
import projectimage2 from '../../../public/project1/projectimage2.png';
import projectimage3 from '../../../public/project1/projectimage3.jpeg';
import projectimage4 from '../../../public/project1/projectimage4.png';
import projectimage5 from '../../../public/project1/projectimage5.png';
import projectimage6 from '../../../public/project1/projectimage6.jpeg';
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
      <div className="portfolio-container">
        {/* Left Side - Product Details */}
        <div className="portfolio-details">
          <h2 className="portfolio-title">Product Details</h2>
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
        <div className="portfolio-slider relative">
          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            className="h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="slide-card bg-gradient-to-br from-[var(--color-bg)] to-[#c1d0b5] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="imageContainer w-full flex justify-center items-center">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={500}
                      height={250}
                      className="slide-image object-contain"
                    />
                  </div>
                  <div className="slide-content p-5 flex flex-col flex-grow justify-between">
                    <h3 className="slide-title text-xl font-semibold text-[var(--color-text)] mb-3">
                      {slide.title}
                    </h3>
                    <p className="slide-description text-[var(--color-text)] opacity-90 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation arrows */}
          <div className="swiper-button-next !text-[var(--color-primary)] after:!text-xl md:after:!text-2xl"></div>
          <div className="swiper-button-prev !text-[var(--color-primary)] after:!text-xl md:after:!text-2xl"></div>
          {/* Pagination */}
          <div className="swiper-pagination !bottom-2"></div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioSection;
