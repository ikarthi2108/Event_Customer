import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, image, count, slug }) => {
  return (
    <Link to={`/categories/${slug}`} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div className="h-64 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-green-900 via-dark-green-900/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-green-200 mt-1">{count} listings</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;