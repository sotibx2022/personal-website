"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
interface SlideItemProps {
    url: string;
    title: string;
    description: string;
}
const SlideItem: React.FC<SlideItemProps> = ({ url, title, description }) => {
    const slideContentRef = useRef<HTMLDivElement>(null);
    const singleItemContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const container = singleItemContainerRef.current;
        const slideContent = slideContentRef.current;
        const animateSlideContent = () => {
            if (slideContent) {
                gsap.to(slideContent, {
                    top: 0,
                    duration: 0.5,
                });
            }
        };
        const removeSlideContent = () => {
            if (slideContent) {
                gsap.to(slideContent, {
                    top: "100%",
                    duration: 0.5,
                });
            }
        };
        if (container) {
            container.addEventListener("mouseenter", animateSlideContent);
            container.addEventListener("mouseleave", removeSlideContent);
            // Clean up the event listeners on component unmount
            return () => {
                if (container) {
                    container.removeEventListener("mouseenter", animateSlideContent);
                    container.removeEventListener("mouseleave", removeSlideContent);
                }
            };
        }
    }, []);
    return (
        <div>
            <div
                ref={singleItemContainerRef}
                className="singleItemContainer w-[300px] relative cursor-pointer overflow-hidden"
            >
                <img src={url} alt={title} className='w-full' />
                <div
                    ref={slideContentRef}
                    className="slideContent absolute top-[100%] w-full h-full"
                >
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};
export default SlideItem;
