import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IoHandLeftSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Section from "../components/Section";
export default function Intro() {
  const tagIcons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Pdey721426",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/prakaashdey07",
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/prakash.riddhi.12345",
    },
    { icon: <FaSquareXTwitter />, link: "https://twitter.com/PrakashRiddhi12" },
  ];

  return (
    <Section className="lg:h-screen flex flex-col lg:justify-start  md:justify-center md:h-50vh">
      <div id="intro" className="text-center lg:mt-[1%] md:mt-16">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold  mb-6 flex justify-center items-center flex-wrap  gap-2 lg:gap-5 text-center"
        >
          Hi, I’m
          <span className="flex items-center gap-6 text-5xl md:text-6xl">
            Prakash
            <IoHandLeftSharp
              aria-label="waving hand"
              className="text-yellow-300 rotate-[325deg] wave-hand"
            />
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-lg">
          I design and build scalable web applications with React, Node.js, and
          modern backend architectures.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#projects"
            className="
            flex items-center
      px-6 py-2 rounded-full
      border border-cyan-400
      text-cyan-400
      transition-all duration-300
      hover:bg-cyan-400 hover:text-black
      hover:shadow-[0_0_10px_#22d3ee]
    "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="
            flex 
            items-center
      px-6 py-2 rounded-full
      border border-gray-500
      text-gray-300
      transition-all duration-300
      hover:border-white hover:text-white
    "
          >
            Resume
          </a>
        </div>

        <div>
          <div className="flex justify-center mt-6 gap-6 text-2xl text-gray-400">
            {tagIcons.map((tag, index) => (
              <a
                key={index}
                href={tag.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-all duration-300 ease-out   hover:-translate-y-1 hover:scale-110"
              >
                {tag.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
