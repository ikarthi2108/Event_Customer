import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero_BG from "../assets/Evnzon_Hero_BG.png";

const Hero = () => {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const navigate = useNavigate();

  // Static data for dropdowns
  const vendorCategories = [
    "All Vendors",
    "Photographers",
    "Makeup Artists",
    "Decorators",
    "Caterers",
    "Venues",
  ];
  const districts = [
    "All Districts",
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Kanyakumari",
    "Tirunelveli",
  ];

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleFindVendors = () => {
    if (selectedVendor && selectedDistrict) {
      navigate(`/venues?vendor=${selectedVendor}&district=${selectedDistrict}`);
    } else {
      alert("Please select both a vendor category and a district.");
    }
  };

  return (
    <div className="relative bg-[#1A3C34] min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1A3C34]/97 z-10"></div>
        <img
          src={Hero_BG}
          alt="Wedding celebration"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none"; // Hide image if it fails to load
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-20">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          {/* Crown icon */}
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#c8a97e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2l3 6h6l-3 6 3 6h-6l-3-6-3 6H6l3-6-3-6h6z"
              />
            </svg>
          </div>

          {/* Main heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 font-['Cormorant Garamond']"
          >
            You celebrate, we organize
          </h1>

          {/* Subtext */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg text-white/80 mb-6 max-w-2xl"
          >
            Celebrate stress-free! We handle every detail from planning to
            execution, ensuring a flawless and memorable event.
          </p>

          {/* Discover button */}
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-8 px-6 py-2 border-2 border-[#c8a97e] text-[#c8a97e]  font-semibold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#1A3C34] transition-all duration-300"
          >
            Discover Exclusive Event Packages
          </button>

          {/* Search Bar */}
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="w-full max-w-4xl bg-white/95 p-6 rounded-xl shadow-xl border border-white/20 backdrop-blur-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700  mb-1">
                  Search For Vendors
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700 "
                  value={selectedVendor}
                  onChange={(e) => setSelectedVendor(e.target.value)}
                >
                  <option value="" disabled>
                    All Vendors
                  </option>
                  {vendorCategories.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Wedding District
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700 "
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                >
                  <option value="" disabled>
                    All Districts
                  </option>
                  {districts.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700  mb-1 opacity-0">
                  Search
                </label>
                <button
                  className="w-full px-4 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out bg-[#D4AF37] text-[#1A3C34] hover:bg-[#C19A2E] hover:shadow-lg flex items-center justify-center  group"
                  onClick={handleFindVendors}
                >
                  <span>Find Vendors</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
