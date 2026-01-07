import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import Identity from "./sections/Identity";
import Capabilities from "./sections/Capabilities";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import NavScroll from "./components/NavScroll";
import SlidePanel from "./components/SliderPanel";
import Timeline from "./sections/Timeline";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App() {
const [isOpen, setIsOpen] = useState(false);

   useSmoothScroll();
  return (
    <div className="bg-bg text-text relative">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="relative">
        <Intro />
        <Identity />
        <Skills />
        <Capabilities />
        <Timeline />
        <Projects />
        <Contact />
        <NavScroll />
      </main>
      <SlidePanel isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer />
    </div>
  );
}
