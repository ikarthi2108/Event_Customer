import React, { useState, useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import VenuesList from '../components/venues/VenuesList';
import VenueFilter from '../components/venues/VenueFilter';
import { useLocation } from 'react-router-dom';

const Venues = () => {
  const [venues, setVenues] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    capacity: '',
    location: '',
  });

  const location = useLocation();
  
  useEffect(() => {
    // Check if a category filter was passed via navigation state
    if (location.state?.category) {
      setFilters(prev => ({
        ...prev,
        category: location.state.category
      }));
    }
    
    // Fetch venues data
    fetchVenues();
  }, [location.state]);

  const fetchVenues = async () => {
    try {
      // Replace with your actual API call
      const response = await fetch('/api/venues');
      const data = await response.json();
      setVenues(data);
      applyFilters(data, filters);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching venues:', error);
      // For development, use sample data
      import('../data/venues').then(module => {
        setVenues(module.default);
        applyFilters(module.default, filters);
        setLoading(false);
      });
    }
  };

  const applyFilters = (venuesData, currentFilters) => {
    let result = [...venuesData];
    
    if (currentFilters.category) {
      result = result.filter(venue => 
        venue.category === currentFilters.category || 
        venue.categories?.includes(currentFilters.category)
      );
    }
    
    if (currentFilters.priceRange) {
      const [min, max] = currentFilters.priceRange.split('-').map(Number);
      result = result.filter(venue => 
        venue.pricePerPlate >= min && 
        (max ? venue.pricePerPlate <= max : true)
      );
    }
    
    if (currentFilters.capacity) {
      const [min, max] = currentFilters.capacity.split('-').map(Number);
      result = result.filter(venue => 
        venue.capacity >= min && 
        (max ? venue.capacity <= max : true)
      );
    }
    
    if (currentFilters.location) {
      result = result.filter(venue => 
        venue.location.toLowerCase().includes(currentFilters.location.toLowerCase())
      );
    }
    
    setFilteredVenues(result);
  };

  const handleFilterChange = (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    applyFilters(venues, updatedFilters);
  };

  return (
    <MainLayout>
      <div className="bg-dark-green text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Exquisite Wedding Venues</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover the perfect setting for your special day. Our curated selection of premier wedding venues 
            offers unmatched elegance and amenities.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <VenueFilter 
              filters={filters} 
              onFilterChange={handleFilterChange} 
            />
          </div>
          <div className="lg:col-span-3">
            <VenuesList venues={filteredVenues} loading={loading} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Venues;