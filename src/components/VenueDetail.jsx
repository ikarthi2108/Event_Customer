import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Button from "./UI/Button";
import axios from "axios";

const VenueDetail = () => {
  const { darkMode } = useTheme();
  const { name } = useParams();
  const navigate = useNavigate();
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base URL for images
  // const BASE_IMAGE_URL = "http://localhost:5000";
  const BASE_IMAGE_URL = "https://event-admin-server-3pka.onrender.com";

  // Fallback image
  const FALLBACK_IMAGE =
    "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          // `http://localhost:5000/api/venues/name/${encodeURIComponent(
          `https://event-admin-server-3pka.onrender.com/api/venues/name/${encodeURIComponent(
            decodeURIComponent(name)
          )}`
        );
        if (response.data.success && response.data.data) {
          setVenue(response.data.data);
        } else {
          setError("Venue not found");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch venue details. Please try again.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchVenue();
  }, [name]);

  if (loading) {
    return (
      <div className={`p-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !venue) {
    return (
      <div className={`p-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {error || "Venue Not Found"}
          </h1>
          <Button
            variant="primary"
            onClick={() => navigate("/venues")}
            className="mt-4"
          >
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
            src={
              venue.displayImages && venue.displayImages[0]
                ? `${BASE_IMAGE_URL}/${venue.displayImages[0].replace(
                    /\\/g,
                    "/"
                  )}`
                : FALLBACK_IMAGE
            }
            alt={venue.name}
            className="w-full h-96 object-cover rounded-xl"
            onError={(e) => (e.target.src = FALLBACK_IMAGE)}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {venue.name}
            </h1>
            <p className="text-lg">{venue.address}</p>
            <div className="flex gap-2 mt-4">
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
          </div>
        </div>

        {/* Introduction Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Welcome to {venue.name}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Nestled in the heart of {venue.district}, {venue.name} offers a
            perfect blend of elegance and tradition for your special occasions.
            Whether you're planning a grand wedding, a corporate event, or a
            family celebration, our venue provides the ideal setting with
            top-notch facilities and a dedicated team to make your event
            unforgettable.
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-white/95 dark:bg-gray-800/95 p-8 rounded-xl shadow-xl border border-white/20 backdrop-blur-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Seating Capacity
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {venue.seatingCapacity}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Floating Capacity
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {venue.floatingCapacity}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Dining Capacity
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {venue.diningCapacity}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Price
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                ₹{venue.price}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Catering Option
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {venue.cateringOption || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Guest Rooms
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {venue.guestRoomCount || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Car Parking
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {venue.carParkingCount || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Established
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {venue.establishmentYear || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Decoration
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {venue.decoration || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Why Choose {venue.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/95 dark:bg-gray-800/95 p-6 rounded-xl shadow-md border border-white/20">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Elegant Ambiance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our beautifully designed halls offer a sophisticated atmosphere
                that enhances the charm of your event, making every moment
                memorable.
              </p>
            </div>
            <div className="bg-white/95 dark:bg-gray-800/95 p-6 rounded-xl shadow-md border border-white/20">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Prime Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Conveniently located with easy access to public transportation
                and major highways, ensuring your guests arrive hassle-free.
              </p>
            </div>
            <div className="bg-white/95 dark:bg-gray-800/95 p-6 rounded-xl shadow-md border border-white/20">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Exceptional Service
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our dedicated team is committed to providing personalized
                service, ensuring every detail of your event is executed
                flawlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        {venue.amenities && venue.amenities.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Amenities
            </h2>
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
        {venue.services && venue.services.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {venue.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md border border-white/20"
                >
                  <p className="text-gray-800 dark:text-white">
                    {service.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Price: {service.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs Section */}
        {venue.faqs && venue.faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {venue.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md border border-white/20"
                >
                  <p className="text-gray-800 dark:text-white font-semibold">
                    {faq.question}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payment Policies Section */}
        {venue.paymentPolicies && venue.paymentPolicies.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Payment Policies
            </h2>
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
        {venue.customFields && venue.customFields.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {venue.customFields.map((field, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-xl shadow-md border border-white/20"
                >
                  <p className="text-gray-800 dark:text-white font-semibold">
                    {field.fieldName}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {field.fieldValue}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/95 dark:bg-gray-800/95 p-6 rounded-xl shadow-md border border-white/20">
              <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                "Our wedding at {venue.name} was nothing short of magical! The
                staff went above and beyond to make our day special."
              </p>
              <p className="text-gray-800 dark:text-white font-semibold">
                - Priya & Arjun
              </p>
            </div>
            <div className="bg-white/95 dark:bg-gray-800/95 p-6 rounded-xl shadow-md border border-white/20">
              <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                "The venue's ambiance and facilities made our corporate event a
                huge success. Highly recommend!"
              </p>
              <p className="text-gray-800 dark:text-white font-semibold">
                - Ramesh Kumar, CEO
              </p>
            </div>
            <div className="bg-white/95 dark:bg-gray-800/95 p-6 rounded-xl shadow-md border border-white/20">
              <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                "A perfect place for family celebrations. The team handled
                everything with utmost professionalism."
              </p>
              <p className="text-gray-800 dark:text-white font-semibold">
                - Lakshmi Menon
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Have questions or ready to book? Contact us today!
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-800 dark:text-white">
              Phone: +91 98765 43210
            </p>
            <p className="text-gray-800 dark:text-white">
              Email: contact@{venue.name.toLowerCase().replace(/\s+/g, "")}.com
            </p>
            {venue.addressLink && (
              <a
                href={venue.addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 underline"
              >
                View on Google Maps
              </a>
            )}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mb-12 text-center bg-emerald-600 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Book Your Event Today!
          </h2>
          <p className="text-lg text-white/80 mb-6">
            Let {venue.name} be the backdrop for your next unforgettable event.
            Secure your date now and let us bring your vision to life.
          </p>

          <div className="flex justify-center">
            <Button
              variant="primary"
              className="bg-teal-500 text-white hover:bg-teal-600 hover:shadow-lg px-6 py-2 rounded-lg transition duration-300"
              onClick={() => navigate("/contact")}
            >
              Contact
            </Button>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button
            variant="primary"
            className="hover:shadow-lg text-dark"
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
