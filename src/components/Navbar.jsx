import { useState } from "react";
import Button from "./ui/Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-3 md:py-4 font-semibold">
        
        {/* Left Links */}
        <div className="hidden md:flex gap-6">
          <h2 className="cursor-pointer hover:text-purple-500 transition">Services</h2>
          <h2 className="cursor-pointer hover:text-purple-500 transition">Work</h2>
          <h2 className="cursor-pointer hover:text-purple-500 transition">About</h2>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center items-center gap-2">
          <img
            src="/abstratto-header logo.png"
            alt="logo"
            className="w-10 md:w-12 object-contain"
          />
          <h1 className="text-lg md:text-2xl font-bold">Astratto</h1>
        </div>

        {/* Right Links + Button */}
        <div className="hidden md:flex gap-6 items-center">
          <h2 className="cursor-pointer hover:text-purple-500 transition">Career</h2>

          <Button
            as="a"
            href="#contact"
            withArrow
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={handleToggle}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg w-full px-4 py-4 flex flex-col gap-4">
          <h2
            className="cursor-pointer hover:text-purple-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </h2>
          <h2
            className="cursor-pointer hover:text-purple-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Work
          </h2>
          <h2
            className="cursor-pointer hover:text-purple-500 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </h2>
          <h2
            className="cursor-pointer hover:text-purple-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Career
          </h2>
          <Button
            as="a"
            href="#contact"
            withArrow
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}
          >
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
