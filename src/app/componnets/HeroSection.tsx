"use client"
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Code2, Braces, Github } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
} from "react-icons/si";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
interface Skill {
  name: string;
  icon: React.ReactNode;
}
const skills: Skill[] = [
  { name: "HTML", icon: <SiHtml5 className="skill-icon html-icon" /> },
  { name: "CSS", icon: <SiCss3 className="skill-icon css-icon" /> },
  { name: "JavaScript", icon: <SiJavascript className="skill-icon js-icon" /> },
  { name: "TypeScript", icon: <SiTypescript className="skill-icon ts-icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon mongodb-icon" /> },
  { name: "Next.js", icon: <SiNextdotjs className="skill-icon nextjs-icon" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="skill-icon tailwind-icon" /> },
  { name: "Motion", icon: <SiFramer className="skill-icon framer-icon" /> },
  { name: "GitHub", icon: <Github className="skill-icon github-icon" /> },
  { name: "Node.js", icon: <SiNodedotjs className="skill-icon nodejs-icon" /> },
  { name: "Langchain", icon: <Code2 className="skill-icon langchain-icon" /> },
  { name: "Shadcn UI", icon: <Braces className="skill-icon shadcn-icon" /> },
];
const HeroSection: React.FC = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <section className="section hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="portfolio-title">Welcome to my site,</h2>
          <h3 className="portfolio-tech-title">Binayaraj <strong>SOTI</strong>, here</h3>
          <p className="hero-description">
            Crafting Full-Stack Web Applications with Next.js Expertise
          </p>
        </div>
        <div className="socialIcons">
          <Link href="https://www.linkedin.com/in/binayaraj-soti-553132226/" className="social-link"><FaLinkedinIn /></Link>
          <Link href="https://github.com/sotibx2022" className="social-link"><FaGithub /></Link>
        </div>
      </div>
      <div>
        <h2 className="portfolio-title">Experties</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },   // mobile
            640: { slidesPerView: 2 },   // small tablets
            768: { slidesPerView: 3 },   // tablets
            1024: { slidesPerView: 4 },  // desktop
            1440: { slidesPerView: 5 },  // large screens
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="skill-card">
                <div className="skill-icon-wrapper">{skill.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default HeroSection;
