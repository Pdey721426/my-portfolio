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
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
             transition-transform duration-300 hover:rotate-90"
        >
          <span
            className={`
      absolute w-6 h-[2px] bg-white
      transition-all duration-1000 ease-in-out
      ${isOpen ? "rotate-45" : ""}
    `}
          />
          <span
            className={`
      absolute w-6 h-[2px] bg-white
      transition-all duration-1000 ease-in-out
      ${isOpen ? "-rotate-45" : ""}
    `}
          />
        </button>

        <ul className="mt-16 space-y-6 px-6">
          {/* <li
            className={`
    relative text-gray-300
    transition-all duration-1000
    ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
  `}
          >
            <a href="#intro" onClick={() => setIsOpen(false)}>
              Intro
            </a>
          </li> */}
          <li
            className={`
    relative text-gray-300
    transition-all duration-1000
    ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
  `}
          >
            <a href="#identity" onClick={() => setIsOpen(false)}>
              Identity
            </a>
          </li>
          <li
            className={`
    relative text-gray-300
    transition-all duration-700
    ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
  `}
          >
            <a href="#capabilities" onClick={() => setIsOpen(false)}>
              Capabilities
            </a>
          </li>
          <li
            className={`
    relative text-gray-300
    transition-all duration-700
    ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
  `}
          >
            <a href="#experience" onClick={() => setIsOpen(false)}>
              WorkExperience
            </a>
          </li>
          <li
            className={`
    relative text-gray-300
    transition-all duration-1000
    ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
  `}
          >
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li
            className={`
    relative text-gray-300
    transition-all duration-1000
    ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
  `}
          >
            <a href="#contacts" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
