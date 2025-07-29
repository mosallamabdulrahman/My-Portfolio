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
    icon: <SiHtml5 color="#E34F26" size={40} />,
  },
  {
    title: "CSS",
    level: "Advanced",
    icon: <SiCss3 color="#2563EB" size={40} />,
  },
  {
    title: "Tailwind CSS",
    level: "Advanced",
    icon: <SiTailwindcss color="#06B6D4" size={40} />,
  },
  {
    title: "Bootstrap",
    level: "Intermediate",
    icon: <SiBootstrap color="#7952B3" size={40} />,
  },
  {
    title: "JavaScript",
    level: "Advanced",
    icon: <SiJavascript color="#F7DF1E" size={40} />,
  },
  {
    title: "TypeScript",
    level: "Intermediate",
    icon: <SiTypescript color="#3178C6" size={40} />,
  },
  {
    title: "React",
    level: "Advanced",
    icon: <SiReact color="#61DAFB" size={40} />,
  },
  {
    title: "PHP",
    level: "Intermediate",
    icon: <SiPhp color="#777BB4" size={40} />,
  },
  {
    title: "GitHub",
    level: "Intermediate",
    icon: <SiGithub color="#181717" size={40} />,
  },
];

export default skills;