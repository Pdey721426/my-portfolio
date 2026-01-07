import { useState } from "react";
export default function Navbar({ isOpen, setIsOpen }) {


  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-16">
      <h1 className="text-5xl font-heading hover-scale text-gradient">
        Portfolio
      </h1>

      {/* Desktop links */}
      <ul className="hidden md:flex space-x-6">
        <li
          className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-cyan-400
  after:transition-all after:duration-300
  hover:after:w-full
"
        >
          <a href="#intro">Intro</a>
        </li>
        <li
          className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-cyan-400
  after:transition-all after:duration-300
  hover:after:w-full
"
        >
          <a href="#identity">Identity</a>
        </li>
        <li
          className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-cyan-400
  after:transition-all after:duration-300
  hover:after:w-full
"
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-cyan-400
  after:transition-all after:duration-300
  hover:after:w-full
"
        >   <a href="#capabilities">Capabilities</a></li>
         <li
          className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-cyan-400
  after:transition-all after:duration-300
  hover:after:w-full
"
        >
          <a href="#experience">WorkExperience</a>
        </li>
        <li
          className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-cyan-400
  after:transition-all after:duration-300
  hover:after:w-full
"
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-cyan-400
  after:transition-all after:duration-300
  hover:after:w-full
"
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="lg:hidden text-2xl">
        {/* Add a simple toggle menu later */}
        <button onClick={() => setIsOpen(!isOpen)} >☰</button>
      </div>
    </nav>
  );
}
