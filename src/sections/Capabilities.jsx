import Section from "../components/Section";

export default function Capabilities() {
  return (
    <Section id="capabilities" className="py-16 ">
      <h2 className="text-3xl font-semibold mb-12">
        What I Do
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            Frontend
          </h3>
          <p className="text-gray-400">
            React, Tailwind, clean UI architecture.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl"> 
          <h3 className="text-xl font-semibold mb-2">
            Backend
          </h3>
          <p className="text-muted">
            Node.js, APIs, databases, scalability.
          </p>
        </div>
      </div>
    </Section>
  );
}
