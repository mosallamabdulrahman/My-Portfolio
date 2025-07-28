import "./myskills.css";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPhp,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    title: "HTML5",
    level: "Advanced",
    iconClass: "text-orange-600",
    icon: <SiHtml5 color="#E34F26" size={40} />,
  },
  {
    title: "CSS",
    level: "Advanced",
    iconClass: "text-blue-600",
    icon: <SiCss3 color="#2563EB" size={40} />,
  },
  {
    title: "Tailwind CSS",
    level: "Advanced",
    iconClass: "text-teal-500",
    icon: <SiTailwindcss color="#06B6D4" size={40} />,
  },
  {
    title: "Bootstrap",
    level: "Intermediate",
    iconClass: "text-indigo-600",
    icon: <SiBootstrap color="#7952B3" size={40} />,
  },
  {
    title: "JavaScript",
    level: "Intermediate",
    iconClass: "text-yellow-500",
    icon: <SiJavascript color="#F7DF1E" size={40} />,
  },
  {
    title: "TypeScript",
    level: "Intermediate",
    iconClass: "text-blue-500",
    icon: <SiTypescript color="#3178C6" size={40} />,
  },
  {
    title: "React",
    level: "Advanced",
    iconClass: "text-blue-400",
    icon: <SiReact color="#61DAFB" size={40} />,
  },
  {
    title: "PHP",
    level: "Intermediate",
    iconClass: "text-purple-600",
    icon: <SiPhp color="#777BB4" size={40} />,
  },
  {
    title: "GitHub",
    level: "Advanced",
    iconClass: "text-white",
    icon: <SiGithub color="#181717" size={40} />,
  },
];

export default skills;