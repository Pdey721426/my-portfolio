import { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi";

export default function NavScroll() {
  const [show, setShow] = useState(false);

  // Show button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-6 right-6 z-50
          h-12 w-12
          rounded-full
          bg-gradient-to-r from-indigo-500 to-purple-600
          text-white
          flex items-center justify-center
          shadow-lg
          hover:scale-110 hover:shadow-xl
          transition-all duration-300
        "
        aria-label="Scroll to top"
      >
        <HiChevronUp className="text-4xl" />
      </button>
    )
  );
}
