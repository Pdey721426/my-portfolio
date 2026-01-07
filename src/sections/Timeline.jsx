import TimelineItem from "../components/Timelineitem";
export default function Timeline() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Education & Experience
      </h2>

      <div className="relative max-w-4xl mx-auto pr-5">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-300"></div>

        {/* Timeline Items */}
        <TimelineItem
          title="Bachelor of Computer Applications (BCA)"
          subtitle="Brainware University"
          date="2021 – 2024"
          type="education"
        />

        <TimelineItem
          title="Master of Computer Applications (MCA)"
          subtitle="Brainware University"
          date="2024 – Present"
          type="education"
          position="lg:ml-0"
        />

        <TimelineItem
          title="Web Designer"
          subtitle="Riddhi Management Sector 3"
          date="2024 – Present"
          type="experience"
        />
      </div>
    </section>
  );
}
