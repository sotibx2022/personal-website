"use client"
import React, { useState, useEffect } from 'react';
import SlideItem from './SlideItem';
import { caurasolItems } from '.';
import gsap from 'gsap';
const CarouselSlider = () => {
    const[slidesPerPage, setSlidesPerPage] = useState(0);
    const[startIndex, setStartIndex] = useState(0);
    const[endIndex, setEndIndex] = useState(1)
    const findSlidesPerPage = () => {
        const container = document.querySelector(".carouselContainer");
        const slideItems = document.querySelectorAll(".slideItem");
        if (container && slideItems.length > 0) {
            console.log("does this work");
            const containerWidth = container.clientWidth;
            const slideItemWidth = slideItems[0].clientWidth; // Use the first slide item to get width
            const slidesPerPage = Math.floor(containerWidth / slideItemWidth);
            console.log(containerWidth, slideItemWidth, slidesPerPage);
            setSlidesPerPage(slidesPerPage);
            setEndIndex(startIndex + slidesPerPage);
        }
    };
    useEffect(() => {
        findSlidesPerPage();
        window.addEventListener('resize', findSlidesPerPage);
        return () => {
            window.removeEventListener('resize', findSlidesPerPage);
        };
    }, []);
    useEffect(() => {
        setEndIndex(startIndex + slidesPerPage);
    }, [startIndex, slidesPerPage]);
    const handleNext =() =>{
        if(endIndex<caurasolItems.length){
            setStartIndex(startIndex+1);
            setEndIndex(endIndex+1);
        }else{
            setStartIndex(0);
            setEndIndex(startIndex+ slidesPerPage);
        }
    }
    const handlePrevious=() =>{
        if(startIndex>0){
            setStartIndex(startIndex-1);
            setEndIndex(endIndex-1);
        }else{
            setStartIndex(caurasolItems.length-slidesPerPage)
            setEndIndex(startIndex+slidesPerPage);
        }
    }
  return (
    <div className="carouselContainer relative">
      <div
        className="flex w-[100vw] justify-around"
      >
        {caurasolItems &&
          caurasolItems.slice(startIndex,endIndex).map((item, index) => (
            <div
              key={index}
              className="slideItem flex w-[300px]"
            >
              <SlideItem {...item} />
            </div>
          ))}
      </div>
      <div className="absolute top-[50%] -translate-y-1/2 flex justify-between items-center w-full">
        <button  className="bg-red-500 p-2" onClick={handlePrevious} >
          Previous
        </button>
       <button  className="bg-red-500 p-2" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};
export default CarouselSlider;
