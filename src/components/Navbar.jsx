import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './UI/Button';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-50 w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="https://img.weddingbazaar.com/shaadisaga_production/static/vendor_categories/WeddingBazaarLogo.svg" alt="Logo" className="h-10 w-auto" />
            {/* <span className={`font-semibold text-xl ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
              WeddingVendors
            </span> */}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`font-medium hover:${darkMode ? 'text-emerald-400' : 'text-emerald-700'} transition-colors`}>Home</a>
            <a href="#" className={`font-medium hover:${darkMode ? 'text-emerald-400' : 'text-emerald-700'} transition-colors`}>Vendors</a>
            <a href="#" className={`font-medium hover:${darkMode ? 'text-emerald-400' : 'text-emerald-700'} transition-colors`}>Venues</a>
            <a href="#" className={`font-medium hover:${darkMode ? 'text-emerald-400' : 'text-emerald-700'} transition-colors`}>Blog</a>
            <a href="#" className={`font-medium hover:${darkMode ? 'text-emerald-400' : 'text-emerald-700'} transition-colors`}>Contact</a>
            
            {/* <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div> */}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-2 border-t border-gray-200 dark:border-gray-700">
            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800">Home</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800">Vendors</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800">Venues</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800">Blog</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
            {/* <div className="flex items-center justify-between py-2 px-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;