import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const VenueDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base URL for images
  // const BASE_IMAGE_URL = "http://localhost:5000";
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
      <div className="p-16 bg-[#1A3C34] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-12 w-12 text-[#D4AF37] mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <p className="text-white text-lg">Loading venues...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-16 bg-[#1A3C34] min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Error</h1>
          <p className="text-red-500 text-lg mb-6">{error}</p>
          <button
            className="px-4 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out bg-[#D4AF37] text-[#1A3C34] hover:bg-[#C19A2E] hover:shadow-lg"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (venues.length === 0) {
    return (
      <div className="p-16 bg-[#1A3C34] min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
            Search Results
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            No Venues Found
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
            We couldn't find any venues matching your criteria. Try adjusting
            your search or explore other options.
          </p>
          <button
            className="px-6 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out bg-[#D4AF37] text-[#1A3C34] hover:bg-[#C19A2E] hover:shadow-lg"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-16 bg-[#1A3C34] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
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
        <div className="bg-white/95 p-8 rounded-xl shadow-xl border border-white/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                AC/Non-AC
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700">
                <option value="" disabled selected>
                  All
                </option>
                {filterOptions.ac.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Veg/Non-Veg
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700">
                <option value="" disabled selected>
                  All
                </option>
                {filterOptions.vegNonVeg.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700">
                <option value="" disabled selected>
                  All
                </option>
                {filterOptions.priceRange.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full px-4 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out bg-[#D4AF37] text-[#1A3C34] hover:bg-[#C19A2E] hover:shadow-lg">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Venue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
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
                    <span className="bg-[#1A3C34] text-white text-xs font-semibold px-2 py-1 rounded">
                      AC
                    </span>
                  )}
                  <span className="bg-[#D4AF37] text-white text-xs font-semibold px-2 py-1 rounded">
                    {venue.vegNonVeg.toUpperCase()}
                  </span>
                </div>
                <button className="absolute top-4 right-4 bg-[#D4AF37] text-white text-xs font-semibold px-3 py-1 rounded">
                  Get Quote
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {venue.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {venue.address}, {venue.district}
                </p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700">Seating</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {venue.seatingCapacity}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700">
                      Floating
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {venue.floatingCapacity}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700">Dining</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {venue.diningCapacity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-lg font-semibold text-gray-800">
                    ₹{venue.price}
                  </p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="ml-1 text-sm text-gray-600">
                      4.5 (Static)
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="w-full px-4 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out bg-[#1A3C34] text-white hover:shadow-lg"
                    onClick={() =>
                      navigate(`/venues/${encodeURIComponent(venue.name)}`)
                    }
                  >
                    View Venue
                  </button>
                  <button className="w-12 flex justify-center px-4 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out bg-[#1A3C34] text-white">
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
                  </button>
                  <button className="w-12 flex justify-center px-4 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out bg-[#1A3C34] text-white">
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
                  </button>
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
