import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Select from "./UI/Select";
import Button from "./UI/Button";
import axios from "axios";

const VenueDetails = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base URL for images
  //   const BASE_IMAGE_URL = "http://localhost:5000";
  const BASE_IMAGE_URL = "https://event-admin-server-3pka.onrender.com";

  // Get query parameters
  const query = new URLSearchParams(location.search);
  const vendor = query.get("vendor")?.toLowerCase();
  const district = query.get("district")?.toLowerCase();

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        setLoading(true);
        // const response = await axios.get("http://localhost:5000/api/venues", {
        const response = await axios.get("https://event-admin-server-3pka.onrender.com/api/venues", {
          params: { searchValue: vendor, district },
        });
        setVenues(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch venues. Please try again.");
        setLoading(false);
        console.error(err);
      }
    };

    if (vendor && district) {
      fetchVenues();
    } else {
      setError("Please select a vendor category and district.");
      setLoading(false);
    }
  }, [vendor, district]);

  // Static filter options
  const filterOptions = {
    ac: ["All", "AC", "Non-AC"],
    vegNonVeg: ["All", "Veg", "Non-Veg", "Both"],
    priceRange: ["All", "Below 20,000", "20,000 - 50,000", "Above 50,000"],
  };

  // Fallback image
  const FALLBACK_IMAGE =
    "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (loading) {
    return (
      <div className={`p-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (venues.length === 0) {
    return (
      <div className={`p-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            No Venues Found
          </h1>
          <Button
            variant="primary"
            className="hover:shadow-lg"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <div className="mb-6">
          <Button
            variant="secondary"
            className="flex items-center gap-2 hover:shadow-lg transition-all duration-300 ease-in-out"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </Button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
            Our Venues
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Top Mahals
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore our curated selection of premier mahals, perfect for your
            special day with unmatched elegance and amenities.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white/95 dark:bg-gray-800/95 p-8 rounded-xl shadow-xl border border-white/20 backdrop-blur-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                AC/Non-AC
              </label>
              <Select
                options={filterOptions.ac}
                placeholder="All"
                darkMode={darkMode}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Veg/Non-Veg
              </label>
              <Select
                options={filterOptions.vegNonVeg}
                placeholder="All"
                darkMode={darkMode}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Price Range
              </label>
              <Select
                options={filterOptions.priceRange}
                placeholder="All"
                darkMode={darkMode}
              />
            </div>
            <div className="flex items-end">
              <Button
                variant="primary"
                fullWidth
                className="hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Venue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={
                    venue.displayImages[0]
                      ? `${BASE_IMAGE_URL}/${venue.displayImages[0].replace(
                          /\\/g,
                          "/"
                        )}`
                      : FALLBACK_IMAGE
                  }
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.target.src = FALLBACK_IMAGE)}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {venue.hasAC && (
                    <span className="bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      AC
                    </span>
                  )}
                  <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {venue.vegNonVeg.charAt(0).toUpperCase() +
                      venue.vegNonVeg.slice(1)}
                  </span>
                </div>
                <button className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded">
                  Get Quote
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {venue.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {venue.address}, {venue.district}
                </p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Seating
                    </p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">
                      {venue.seatingCapacity}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Floating
                    </p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">
                      {venue.floatingCapacity}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Dining
                    </p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">
                      {venue.diningCapacity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    ₹{venue.price}
                  </p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                      {venue.rating || "N/A"}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    fullWidth
                    className="hover:shadow-lg"
                    onClick={() =>
                      navigate(`/venues/${encodeURIComponent(venue.name)}`)
                    }
                  >
                    View Venue
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-12 flex justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h18M9 3v2m6-2v2M3 19h18M3 9h18m-6 6h-6m-3-3h12"
                      />
                    </svg>
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-12 flex justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.243l-4.243-4.243m0 0L9.172 7.757M12 19a7 7 0 100-14 7 7 0 000 14z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
