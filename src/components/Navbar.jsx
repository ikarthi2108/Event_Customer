import React, { useState } from "react";
import Logo from "../assets/evnzon-logo.png"; // Logo import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1A3C34] text-white">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center ">
            <img
              src={Logo}
              alt="Evnzon Logo"
              className="h-18 w-auto" // Increased from h-8 to h-12
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-[#D4AF37] transition-colors" // Removed font-medium
            >
              HOME
            </a>
            <a
              href="#"
              className="text-white hover:text-[#D4AF37] transition-colors" // Removed font-medium
            >
              SERVICES
            </a>
            <a
              href="#"
              className="text-white hover:text-[#D4AF37] transition-colors" // Removed font-medium
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-white hover:text-[#D4AF37] transition-colors" // Removed font-medium
            >
              GALLERY
            </a>
            <a
              href="#"
              className="text-white hover:text-[#D4AF37] transition-colors" // Removed font-medium
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-2 border-t border-white/20">
            <a href="#" className="block py-2 px-4 hover:bg-[#2A5C4E]">
              HOME
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-[#2A5C4E]">
              SERVICES
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-[#2A5C4E]">
              ABOUT
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-[#2A5C4E]">
              GALLERY
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-[#2A5C4E]">
              CONTACT
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;