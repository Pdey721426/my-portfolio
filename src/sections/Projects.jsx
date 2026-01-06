import Section from "../components/Section";
export default function Projects() {
  return (
    <Section>
      <div id="projects">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-2">
              A fully responsive portfolio built with React & Tailwind.
            </p>
            <p className="text-gray-400 text-sm">
              Tech: React, Tailwind, Node.js
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2"></h3>
            <p className="text-gray-400 mb-2">
             ...
            </p>
            
          </div>
        </div>
      </div>
    </Section>
  );
}
