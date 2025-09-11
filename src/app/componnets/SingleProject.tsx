import React from 'react'
import { IProject } from '../data.ts/projectData'
import Image from "next/image";
import Link from 'next/link';
import { CircleCheck } from 'lucide-react';
const SingleProject: React.FC<IProject> = ({ projectLogo,
    projectName,
    projectLink,
    projectDescription,
    frontEndTechStacks,
    backendTechStacks,
    topFeatures }) => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-details">
                <div className="projectSubtitle">
                    <Image
                        alt={projectName}
                        width={50}
                        height={50}
                        src={projectLogo}
                        className="h-[50px] w-auto"
                    />
                    <h3>{projectName}</h3>
                    <Link href={projectLink} className="btn">
                        View
                    </Link>
                </div>
                <p className="portfolio-description">
                    {projectDescription}
                </p>
                <h4 className="portfolio-tech-title">FrontEnd</h4>
                <ul className="portfolio-tech-list">
                    {frontEndTechStacks.map((stack, index) => {
                        return <li className="tech-item" key={index}>{stack}</li>
                    })}
                </ul>
                <h4 className="portfolio-tech-title">BackEnd</h4>
                <ul className="portfolio-tech-list">
                    {backendTechStacks.map((stack, index) => {
                        return <li className="tech-item" key={index}>{stack}</li>
                    })}
                </ul>
            </div>
            {/* Right Side - Swiper Slider */}
            <div className="portfolio-slider">
                <h4 className="portfolio-tech-title">Top Features:</h4>
                {topFeatures.map((feature, index) => (
                    <div className="singleSlideTitle" key={index}>
                        <CircleCheck />
                        <p className="slide-title"> {feature}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SingleProject