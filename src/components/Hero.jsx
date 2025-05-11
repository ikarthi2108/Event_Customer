import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Select from "./UI/Select";
import Button from "./UI/Button";
import { districts, vendorCategories } from "../utils/constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const { darkMode } = useTheme();
  const [showChat, setShowChat] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
    });

    // Optional: Auto-hide the chat popup after 3 seconds if shown
    if (showChat) {
      const timer = setTimeout(() => {
        setShowChat(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showChat]);

  const handleFindVendors = () => {
    if (selectedVendor && selectedDistrict) {
      navigate(`/venues?vendor=${selectedVendor}&district=${selectedDistrict}`);
    } else {
      alert("Please select both a vendor category and a district.");
    }
  };

  return (
    <div className={`relative ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Background overlay with more professional gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/85 to-teal-900/90 z-10"></div>

      {/* Hero image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Wedding celebration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-20">
        <div className="flex flex-col items-center md:items-start max-w-5xl mx-auto text-center md:text-left">
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/20"
          >
            <span className="text-emerald-200 font-medium">
              India's Premier Wedding Planning Service
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Discover <span className="text-emerald-300">Perfect Wedding</span>{" "}
            Vendors
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-xl text-white/90 mb-6 max-w-2xl"
          >
            Connect with top photographers, makeup artists, decorators,
            caterers, and more for your dream celebration.
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-full max-w-4xl bg-white/95 dark:bg-gray-800/95 p-6 rounded-xl shadow-xl border border-white/20 backdrop-blur-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Search For Vendors
                </label>
                <Select
                  options={vendorCategories}
                  placeholder="All Vendors"
                  darkMode={darkMode}
                  value={selectedVendor}
                  onChange={(e) => setSelectedVendor(e.target.value)}
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Wedding District
                </label>
                <Select
                  options={districts}
                  placeholder="All Districts"
                  darkMode={darkMode}
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 opacity-0">
                  Search
                </label>
                <Button
                  variant="primary"
                  fullWidth
                  className="group hover:shadow-lg transition-all duration-300 ease-in-out"
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
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-white">⭐ 10,000+ Verified Vendors</span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-white">⭐ 50+ Major Districts</span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-white">⭐ 100,000+ Happy Couples</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated decorative elements using AOS */}
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-emerald-500/20 hidden md:block"
      ></div>
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        className="absolute bottom-1/3 right-10 w-16 h-16 rounded-full bg-teal-500/20 hidden md:block"
      ></div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-white/10 hidden md:block"
      ></div>
    </div>
  );
};

export default Hero;