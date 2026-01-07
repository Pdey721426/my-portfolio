import React from "react";

const workData = [
  {
    role: "Web Designer & Developer",
    company: "Riddhi Management",
    duration: "2024 – 2026",
    points: [
      "Developed web applications using React, Node.js, and Tailwind CSS.",
      "Reduced application load time by 30% improving performance.",
      "Collaborated with a team of 5 developers on full-stack projects.",
    ],
  },

];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-16  text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>
        
        <div className="flex flex-col gap-8">
          {workData.map((job, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <span className="text-gray-400">{job.duration}</span>
              </div>
              <p className="text-gray-300 mb-4">{job.company}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
