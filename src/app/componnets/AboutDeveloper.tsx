// components/BioDataSection.tsx
import React from "react";
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
interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode;
}
const AboutDeveloper: React.FC = () => {
  const skills: Skill[] = [
    { name: "HTML", level: "Fluent", icon: <SiHtml5 className="skill-icon html-icon" /> },
    { name: "CSS", level: "Fluent", icon: <SiCss3 className="skill-icon css-icon" /> },
    { name: "JavaScript", level: "Fluent", icon: <SiJavascript className="skill-icon js-icon" /> },
    { name: "TypeScript", level: "Fluent", icon: <SiTypescript className="skill-icon ts-icon" /> },
    { name: "MongoDB", level: "Intermediate", icon: <SiMongodb className="skill-icon mongodb-icon" /> },
    { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs className="skill-icon nextjs-icon" /> },
    { name: "TailwindCSS", level: "Intermediate", icon: <SiTailwindcss className="skill-icon tailwind-icon" /> },
    { name: "Framer Motion", level: "Beginner", icon: <SiFramer className="skill-icon framer-icon" /> },
    { name: "GitHub", level: "Intermediate", icon: <Github className="skill-icon github-icon" /> },
    { name: "Node.js", level: "Beginner", icon: <SiNodedotjs className="skill-icon nodejs-icon" /> },
    { name: "Langchain", level: "Intermediate", icon: <Code2 className="skill-icon langchain-icon" /> },
    { name: "Shadcn UI", level: "Beginner", icon: <Braces className="skill-icon shadcn-icon" /> },
  ];
  return (
    <section className="section biodata-section">
      <div className="container">
        <h2 className="common-heading heading-center">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-wrapper">{skill.icon}</div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-level">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutDeveloper;
