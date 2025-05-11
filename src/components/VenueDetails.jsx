import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Select from "./UI/Select";
import Button from "./UI/Button";

const VenueDetails = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  // Static filter options
  const filterOptions = {
    ac: ["All", "AC", "Non-AC"],
    vegNonVeg: ["All", "Veg", "Non-Veg", "Both"],
    priceRange: ["All", "Below 20,000", "20,000 - 50,000", "Above 50,000"],
  };

  // Static venue data extended with JSON response
  const venues = [
    {
      name: "KC Thirumana Mahal",
      address: "Maruthamalai Road, Kalveerampalayam, Coimbatore, Tamil Nadu 641011",
      seatingCapacity: 450,
      floatingCapacity: 650,
      diningCapacity: 120,
      price: "₹120",
      hasAC: true,
      vegNonVeg: "Non-Veg",
      rating: 4.5,
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "KPR Mahal",
      address: "Velavan Nagar, GanapathyPudur, Coimbatore, Tamil Nadu 641006",
      seatingCapacity: 300,
      floatingCapacity: 450,
      diningCapacity: 150,
      price: "₹150",
      hasAC: true,
      vegNonVeg: "Both",
      rating: 4.5,
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "RR Mahal",
      address: "Ramamurthy Rd, Periya Thambi Nagar, Selvapuram South, Coimbatore, Tamil Nadu 641026",
      seatingCapacity: 400,
      floatingCapacity: 850,
      diningCapacity: 150,
      price: "₹150",
      hasAC: true,
      vegNonVeg: "Non-Veg",
      rating: 4.5,
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "PN Mahal",
      location: "Kangeyam",
      district: "Kanyakumari",
      address: "New, Kangeyam, Kanyakumari",
      addressLink: "https://maps.app.goo.gl/sGMP393tP3nHHnZW7",
      price: "20000 - 50000",
      hasAC: true,
      brideGroomRoomAC: false,
      guestRoomCount: 40,
      decoration: "At your Cost",
      vegNonVeg: "Both",
      seatingCapacity: 400,
      floatingCapacity: 500,
      diningCapacity: 300,
      cateringOption: "Both",
      carParkingCount: 400,
      hasGenerator: true,
      hasDJ: true,
      establishmentYear: 2012,
      displayImages: ["Uploads\\displayImages-1746924997390-15758563.jpg"],
      albumImages: ["Uploads\\albumImages-1746924997397-933631374.png"],
      amenities: ["Venue", "Amenity"],
      otherInformation: ["Other", "Information"],
      paymentPolicies: ["Payment", "Policies"],
      services: [{ name: "Service", price: "300" }],
      faqs: [{ question: "Questions", answer: "Answers" }],
      customFields: [{ fieldName: "Custom", fieldValue: "Field" }],
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Fallback image
    },
  ];

  return (
    <div className={`p-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Our Venues</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Top Mahals</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore our curated selection of premier mahals, perfect for your special day with unmatched elegance and amenities.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white/95 dark:bg-gray-800/95 p-8 rounded-xl shadow-xl border border-white/20 backdrop-blur-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">AC/Non-AC</label>
              <Select options={filterOptions.ac} placeholder="All" darkMode={darkMode} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Veg/Non-Veg</label>
              <Select options={filterOptions.vegNonVeg} placeholder="All" darkMode={darkMode} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price Range</label>
              <Select options={filterOptions.priceRange} placeholder="All" darkMode={darkMode} />
            </div>
            <div className="flex items-end">
              <Button variant="primary" fullWidth className="hover:shadow-lg transition-all duration-300 ease-in-out">
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
                <img src={venue.image} alt={venue.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {venue.hasAC && (
                    <span className="bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded">AC</span>
                  )}
                  <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {venue.vegNonVeg}
                  </span>
                </div>
                <button className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded">
                  Get Quote
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{venue.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{venue.address}</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Seating</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.seatingCapacity}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Floating</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.floatingCapacity}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Dining</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.diningCapacity}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.price}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">{venue.rating || "N/A"} (Static)</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    fullWidth
                    className="hover:shadow-lg"
                    onClick={() => navigate(`/venues/${encodeURIComponent(venue.name)}`)}
                  >
                    View Venue
                  </Button>
                  <Button variant="secondary" className="w-12 flex justify-center">
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
                  <Button variant="secondary" className="w-12 flex justify-center">
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