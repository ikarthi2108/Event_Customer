// VenueDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Button from "./UI/Button";

const VenueDetail = () => {
  const { darkMode } = useTheme();
  const { name } = useParams();
  const navigate = useNavigate();

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
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const venue = venues.find((v) => v.name === decodeURIComponent(name));

  if (!venue) {
    return (
      <div className={`p-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Venue Not Found</h1>
          <Button variant="primary" onClick={() => navigate("/venues")} className="mt-4">
            Back to Venues
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img
            src={venue.image}
            alt={venue.name}
            className="w-full h-96 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{venue.name}</h1>
            <p className="text-lg">{venue.address}</p>
            <div className="flex gap-2 mt-4">
              {venue.hasAC && (
                <span className="bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded">AC</span>
              )}
              <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                {venue.vegNonVeg}
              </span>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white/95 dark:bg-gray-800/95 p-8 rounded-xl shadow-xl border border-white/20 backdrop-blur-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Seating Capacity</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.seatingCapacity}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Floating Capacity</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.floatingCapacity}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Dining Capacity</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.diningCapacity}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Price</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.price}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Catering Option</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.cateringOption || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Guest Rooms</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.guestRoomCount || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Car Parking</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.carParkingCount || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Established</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.establishmentYear || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Decoration</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{venue.decoration || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        {venue.amenities && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {venue.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md border border-white/20"
                >
                  <p className="text-gray-800 dark:text-white">{amenity}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Section */}
        {venue.services && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {venue.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md border border-white/20"
                >
                  <p className="text-gray-800 dark:text-white">{service.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Price: {service.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs Section */}
        {venue.faqs && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {venue.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md border border-white/20"
                >
                  <p className="text-gray-800 dark:text-white font-semibold">{faq.question}</p>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payment Policies Section */}
        {venue.paymentPolicies && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Payment Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {venue.paymentPolicies.map((policy, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md border border-white/20"
                >
                  <p className="text-gray-800 dark:text-white">{policy}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom Fields Section */}
        {venue.customFields && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Additional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {venue.customFields.map((field, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md border border-white/20"
                >
                  <p className="text-gray-800 dark:text-white font-semibold">{field.fieldName}</p>
                  <p className="text-gray-600 dark:text-gray-400">{field.fieldValue}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="text-center">
          <Button
            variant="primary"
            className="hover:shadow-lg"
            onClick={() => navigate("/venues")}
          >
            Back to Venues
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VenueDetail;