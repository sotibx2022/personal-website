// components/BioDataSection.tsx
import React from "react";
import {
  Code2,
  Braces,
  Database,
  Github,
  Boxes,
  Layers,
  PlayCircle,
  Server,
} from "lucide-react";
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
    { name: "HTML", level: "Fluent", icon: <SiHtml5 className="text-orange-600 text-3xl" /> },
    { name: "CSS", level: "Fluent", icon: <SiCss3 className="text-blue-600 text-3xl" /> },
    { name: "JavaScript", level: "Fluent", icon: <SiJavascript className="text-yellow-500 text-3xl" /> },
    { name: "TypeScript", level: "Fluent", icon: <SiTypescript className="text-blue-500 text-3xl" /> },
    { name: "MongoDB", level: "Intermediate", icon: <SiMongodb className="text-green-600 text-3xl" /> },
    { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs className="text-black dark:text-white text-3xl" /> },
    { name: "TailwindCSS", level: "Intermediate", icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
    { name: "Framer Motion", level: "Beginner", icon: <SiFramer className="text-pink-500 text-3xl" /> },
    { name: "GitHub", level: "Intermediate", icon: <Github className="text-gray-700 dark:text-white w-7 h-7" /> },
    { name: "Node.js", level: "Beginner", icon: <SiNodedotjs className="text-green-500 text-3xl" /> },
  ];
  return (
    <section className="section section-biodata">
      <div className="container">
        <h2 className="common-heading text-center">My Skills</h2>
        <div className="grid grid-three-col gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div>{skill.icon}</div>
              <div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-sm">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutDeveloper;
