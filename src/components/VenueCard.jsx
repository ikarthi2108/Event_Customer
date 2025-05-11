import React from 'react';
import { Link } from 'react-router-dom';

const VenueCard = ({ id, name, image, location, price, rating, capacity }) => {
  return (
    <Link to={`/venues/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1 duration-300">
        <div className="relative">
          <div className="h-64 overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110" 
            />
          </div>
          {rating && (
            <div className="absolute top-3 right-3 bg-white py-1 px-2 rounded-md flex items-center shadow-md">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-700">{rating}</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-dark-green-800 group-hover:text-dark-green-600 transition-colors duration-300">{name}</h3>
          <div className="mt-1 flex items-center text-gray-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{location}</span>
          </div>
          
          {capacity && (
            <div className="mt-1 flex items-center text-gray-600">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-sm">Up to {capacity} guests</span>
            </div>
          )}
          
          <div className="mt-4 flex justify-between items-center">
            <div>
              <span className="text-dark-green-700 font-semibold">{price}</span>
              {price && <span className="text-gray-500 text-sm"> / event</span>}
            </div>
            <button className="text-dark-green-700 hover:text-dark-green-900 text-sm font-medium hover:underline">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VenueCard;