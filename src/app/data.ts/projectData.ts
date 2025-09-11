import ktmnowlogo from '../public/ktmnowlogo.png';
import flatcareLogo from '../public/flatcareLogo.webp';
export interface IProject {
  projectLogo: string;
  projectName: string;
  projectLink: string;
  projectDescription: string;
  frontEndTechStacks: string[];
  backendTechStacks: string[];
  topFeatures: string[];
}
export const projects = [
  {
    projectLogo: ktmnowlogo, 
    projectName: "ktmnow.store",
    projectLink: "https://ktmnow.store",
    projectDescription:
      "Fully functional AI Powered Ecommerce website built in Next.js with dashboard.",
    frontEndTechStacks: [
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "shadcn",
      "React Query",
      "react-hook-form",
      "Recharts",
      "SwiperJS",
      "Typesense"
    ],
    backendTechStacks: [
      "Next.js API",
      "MongoDB",
      "Next.js over Node.js",
      "jsonwebtoken",
      "LangChain",
      "Mongoose",
      "Next-Auth",
      "Cloudinary"
    ],
    topFeatures: [
      "Interactive Dashboard",
      "AI Product Recommendation",
      "Product Details Generator",
      "Sentiment Analysis of Remarks",
      "Wishlist Sharing to Others"
    ]
  },
  {
    projectLogo: flatcareLogo,
    projectName: "Faltcare Maintenance Planning",
    projectLink: "https://faltcare.vercel.app", 
    projectDescription:
      "A software solution that enables customers, technicians, planners, and admins to collaborate seamlessly for maintenance management. Inspired by real-life challenges of managing over 500 shelters, this project simplifies task management, prioritization, and communication.",
    frontEndTechStacks: [
      "Next.js",
      "Recharts",
      "React Hook Form",
      "React Query",
      "React Redux"
    ],
    backendTechStacks: [
      "MongoDB with Mongoose",
      "Firebase",
      "JWT Authentication",
    ],
    topFeatures: [
      "Interactive charts and Dynamic Admin Sidebar",
      "Complete Crud Operation for Materials and Notifications Planning",
      "Multi Step Customer Registration",
      "Custom authentication with JWT",
      "Update Profile and Change Password Functanality"
    ],
  }
]
