"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const BasicSlider = () => {
  const slideReferences = useRef<(HTMLDivElement | null)[]>([]);
  // Initialize slideReferences correctly
  slideReferences.current = [];
  useEffect(() => {
    // Set up GSAP timeline
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    slideReferences.current.forEach((slide, index) => {
      if (slide) {
        gsap.set(slide, { x: index === 0 ? '0%' : '100%' });
      }
    });
    // Create GSAP animation timeline
    slideReferences.current.forEach((slide, index) => {
      if (slide) {
        tl.to(slide, { x: '-100%', duration: 1, ease: 'power2.inOut' });
        // Set the next slide to be off-screen to the right
        const nextSlide = slideReferences.current[index + 1];
          tl.set(slide, { x: '100%' })
            .to(nextSlide, { x: '0%', duration: 1, ease: 'power2.inOut' });
      }
    });
  }, []);
  return (
    <div>
      <div className="sliderContainer flex justify-between overflow-hidden relative">
        <div
          className="slide1 h-full w-[100vw]"
          ref={el => {
            slideReferences.current[0] = el;
          }}
        >
          <img
            src='/assets/images/ktmecommerce.png'
            className='w-[100vw] h-full'
            alt="Slide 1"
          />
        </div>
        <div
          className="slide2 w-[100vw] h-full "
          ref={el => {
            slideReferences.current[1] = el;
          }}
        >
          <img
            src='/assets/images/chitwanfoodcenter.png'
            className='w-[100vw] h-full'
            alt="Slide 2"
          />
        </div>
        <div
          className="slide3 w-[100vw] h-full"
          ref={el => {
            slideReferences.current[2] = el;
          }}
        >
          <img
            src='/assets/images/flatcare.png'
            className='w-[100vw] h-full'
            alt="Slide 3"
          />
        </div>
      </div>
    </div>
  );
};
export default BasicSlider;
