// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VenueDetails from "./components/VenueDetails";
import VenueDetail from "./components/VenueDetail";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/venues" element={<VenueDetails />} />
              <Route path="/venues/:name" element={<VenueDetail />} />
            </Routes>
          </main>
          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <p>© {new Date().getFullYear()} WeddingVendors. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;