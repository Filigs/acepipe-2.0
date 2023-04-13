import { useState, useEffect } from "react";
import { IoArrowUpCircle } from "react-icons/io5";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 z-50 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-300 ease-in-out rounded-full p-2 shadow-md bg-primary hover:bg-primaryHover text-white focus:outline-none focus:ring focus:ring-primary`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <IoArrowUpCircle className="w-4 h-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
    </button>
  );
}

export default BackToTopButton;
