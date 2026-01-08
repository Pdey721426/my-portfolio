import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { GrFormNextLink , GrFormPreviousLink} from "react-icons/gr";

export default function Projects() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + projects.length) % projects.length);
  const next = () =>
    setIndex((index + 1) % projects.length);

  const project = projects[index];

  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Featured Projects
      </h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-[#111] rounded-2xl p-6 md:p-8 shadow-xl"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 md:h-72 object-cover hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-accent/20 text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside text-gray-300">
                {project.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={project.live}
                  className="px-5 py-2 rounded-lg bg-accent text-bg font-medium"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="px-5 py-2 rounded-lg border border-gray-600"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-between mt-6">
          <button onClick={prev} className="opacity-70 hover:opacity-100 flex items-center gap-1">
           <GrFormPreviousLink className="text-xl"/> Previous
          </button>
          <button onClick={next} className="opacity-70 hover:opacity-100 flex items-center gap-1">
            Next <GrFormNextLink className="text-xl"/>
          </button>
        </div>
      </div>
    </section>
  );
}
