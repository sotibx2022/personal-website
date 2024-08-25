"use client";
import { useEffect } from "react";
import gsap from "gsap";
import React from "react";
import Link from "next/link";
const ImageSlider = () => {
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(".image-slide", {
          width: "100%",
          duration: 2,
          stagger: 2,
          delay: 2, 
          onStart: () => {
            gsap.set(".content", { y: "100px" });
          },
        });
        tl.to(
          ".content",
          {
            y: 0,
            duration: 1,
            stagger: 2,
          },
        );
      }, []);
  return (
    <div>
      <div className="imageContainer w-[90vw] h-[90vh] bg-red-300">
        <div className="wrapper w-full h-[10vh] bg-yellow-400 relative">
          <div className="images w-full h-[90vh] bg-red-100 relative">
            {/* Corrected this div: removed the self-closing tag */}
            <div className="image-slide absolute top-0 left-0 h-full w-0 bg-yellow-300 overflow-hidden">
              <img
                src="/assets/images/flatcare.PNG"
                alt="FlatCare Maintenance Planning"
                className="object-cover w-full h-[80vh]"
              />
              <div className="content translate-y-[100px]">
              <h1 >Flatcare Maintenance Planning</h1>
              <Link href="/">Show More</Link>
              </div>
            </div>
            <div className="image-slide absolute top-0 left-0 h-full w-0 bg-yellow-300 overflow-hidden">
              <img
                src="/assets/images/ktmecommerce.PNG"
                alt="Ecommerce KTM"
                className="object-cover w-full h-[80vh]"
              />
            <div className="content translate-y-[100px]">
              <h1 >Flatcare Maintenance Planning</h1>
              <Link href="/">Show More</Link>
              </div>
            </div>
            <div className="image-slide absolute top-0 left-0 h-full w-0 bg-yellow-300 overflow-hidden">
              <img
                src="/assets/images/chitwanfoodCenter.PNG"
                alt="Chitwan Food Center"
                className="object-cover w-full h-[80vh]"
              />
              <div className="content translate-y-[100px]">
              <h1 >Flatcare Maintenance Planning</h1>
              <Link href="/">Show More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
