import Section from "../components/Section";

import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoWordpress,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiTailwindcss,
  SiBootstrap,
  SiCanva,
  SiPython,
  SiExpress,
  SiGit,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <IoLogoHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <IoLogoCss3 />, color: "text-blue-500" },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
      color: "text-yellow-400",
    },
    { name: "Python", icon: <SiPython />, color: "text-blue-400" },
    { name: "React", icon: <IoLogoReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <IoLogoNodejs />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress />, color: "text-green-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
    { name: "WordPress", icon: <IoLogoWordpress />, color: "text-blue-700" },
    { name: "Photoshop", icon: <SiAdobephotoshop />, color: "text-yellow-400" },
    {
      name: "Illustrator",
      icon: <SiAdobeillustrator />,
      color: "text-orange-400",
    },
    { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
    { name: "Canva", icon: <SiCanva />, color: "text-blue-400" },
    { name: "Git", icon: <SiGit />, color: "text-red-500" },
    { name: "GitHub", icon: <SiGithub />, color: "text-white-800" },
  ];

  return (
    <Section id="skills" className="py-16">
      <div>
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center justify-center gap-4 px-3 py-2  cursor-default    hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            >
              <div
                className={`text-3xl ${skill.color} group-hover:animate-pulse`}
              >
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
