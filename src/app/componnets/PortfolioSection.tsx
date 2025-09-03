'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const PortfolioSection: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: '../projectimage1.png',
      title: 'Graphical Interactive Dashboard',
      description:
        'Using Recharts.js the orders, products, and user details are demonstrated in graphical format.'
    },
    {
      id: 2,
      image: '../projectimage2.png',
      title: 'Light and Dark Mode Dashboard',
      description:
        'Responsive tables and sidebar supporting dual light and dark color modes.'
    },
    {
      id: 3,
      image: '../projectimage3.jpeg',
      title: 'AI Product Recommendation',
      description:
        'Langchain is used to recommend products based on user instructions.'
    },
    {
      id: 4,
      image: '../projectimage4.png',
      title: 'AI Product Details Generator',
      description:
        'Enter a product title and AI generates detailed product info and features using Langchain.'
    },
    {
      id: 5,
      image: '../projectimage5.png',
      title: 'Sentiment Analysis of Remarks',
      description:
        'Groq AI and Langchain analyze remarks. Negative ones are blocked, positive ones go live, and neutral ones require admin approval.'
    },
    {
      id: 6,
      image: '../projectimage6.jpeg',
      title: 'Wishlist Sharing',
      description:
        'Share wishlist items with loved ones so they can purchase what you truly want.'
    }
  ];
  return (
    <section className="section portfolio-section" id="portfolio">
      {/* Custom styles for Swiper components using Tailwind */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--color-primary) !important;
        }
        .swiper-pagination-bullet {
          background: var(--color-text) !important;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: var(--color-primary) !important;
          opacity: 1;
        }
      `}</style>
      <div className="portfolio-container">
        {/* Left Side - Product Details */}
        <div className="portfolio-details">
          <h2 className="portfolio-title">Product Details</h2>
          <h3 className="portfolio-subtitle">KTMnow.store</h3>
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
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            className="h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="slide-card bg-gradient-to-br from-[var(--color-bg)] to-[#c1d0b5] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div
                    className="imageContainer w-full flex justify-center items-center"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="slide-image"
                    />
                  </div>
                  <div className="slide-content p-5 flex flex-col flex-grow justify-between">
                    <h3 className="slide-title text-xl font-semibold text-[var(--color-text)] mb-3">{slide.title}</h3>
                    <p className="slide-description text-[var(--color-text)] opacity-90 leading-relaxed">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation arrows with Tailwind styling */}
          <div className="swiper-button-next !text-[var(--color-primary)] after:!text-xl md:after:!text-2xl"></div>
          <div className="swiper-button-prev !text-[var(--color-primary)] after:!text-xl md:after:!text-2xl"></div>
          {/* Pagination with Tailwind styling */}
          <div className="swiper-pagination !bottom-2"></div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioSection;