export default function SidePanel({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-50 bg-gray-900 text-white z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          ✕
        </button>

        <ul className="mt-16 space-y-6 px-6">
          <li
            className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  
  after:transition-all after:duration-300
  hover:after:w-full
"
          >
            <a href="#intro" onClick={() => setIsOpen(false)}>Intro</a>
          </li>
          <li
            className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  
  after:transition-all after:duration-300
  hover:after:w-full
"
          >
            <a href="#identity" onClick={() => setIsOpen(false)}>Identity</a>
          </li>
          <li
            className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  
  after:transition-all after:duration-300
  hover:after:w-full
"
          >
            <a href="#capabilities" onClick={() => setIsOpen(false)}>Capabilities</a>
          </li>
          <li
            className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  
  after:transition-all after:duration-300
  hover:after:w-full
"
          >
            <a href="#experience" onClick={() => setIsOpen(false)}>WorkExperience</a>
          </li>
          <li
            className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  
  after:transition-all after:duration-300
  hover:after:w-full
"
          >
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li
            className="
  relative text-gray-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  
  after:transition-all after:duration-300
  hover:after:w-full
"
          >
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
