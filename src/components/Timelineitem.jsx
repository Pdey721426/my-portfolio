function TimelineItem({ title, subtitle, date, type, position = "" }) {
  return (
    <div className="relative flex items-start mb-16">
      {/* Dot */}
      <div
        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full 
        bg-white border-4 border-accent z-10"
      ></div>

      {/* Content Card */}
      <div
        className={`ml-12 md:ml-[55%] bg-white dark:bg-[#111827] 
        shadow-lg rounded-xl p-6 w-full md:w-[45%] ${position}`}
      >
        <span className="text-sm text-accent font-semibold uppercase">
          {type}
        </span>

        <h3 className="text-xl font-bold mt-2">{title}</h3>

        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>

        <p className="text-gray-400 text-sm mt-2">{date}</p>
      </div>
    </div>
  );
}
export default TimelineItem;
