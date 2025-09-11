'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SingleProject from './SingleProject';
import { IProject, projects } from '../data.ts/projectData';
import { A11y, Navigation, Pagination } from 'swiper/modules';
const PortfolioSection: React.FC = () => {
  return (
    <section className="section portfolio-section" id="portfolio">
      <h2 className="portfolio-title">Product Details</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project: IProject, index: number) => (
          <SwiperSlide key={index}>
            <SingleProject {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default PortfolioSection;
