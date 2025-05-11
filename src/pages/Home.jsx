import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import VenueCard from '../components/VenueCard';
import Button from '../components/Button';

// Sample data - in a real app, this would come from your API
const featuredVenues = [
  {
    id: 1,
    name: 'Grand Palace Hotel',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80',
    location: 'New York, NY',
    price: '$5,000',
    rating: 4.9,
    capacity: 300
  },
  {
    id: 2,
    name: 'Seaside Resort',
    image: 'https://images.unsplash.com/photo-1561902048-4a811f662d9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    location: 'Miami, FL',
    price: '$4,500',
    rating: 4.7,
    capacity: 200
  },
  {
    id: 3,
    name: 'Mountain View Lodge',
    image: 'https://images.unsplash.com/photo-1505653553729-d8e8c0c92f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    location: 'Denver, CO',
    price: '$3,800',
    rating: 4.8,
    capacity: 150
  }
];

const categories = [
  {
    title: 'Wedding Venues',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    count: 325,
    slug: 'venues'
  },
  {
    title: 'Photographers',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    count: 156,
    slug: 'photographers'
  },
  {
    title: 'Catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    count: 98,
    slug: 'catering'
  },
  {
    title: 'Decoration',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    count: 142,
    slug: 'decoration'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah & David',
    image: 'https://images.unsplash.com/photo-1532972020291-7ca6fc555a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    quote: 'WeddingBliss made finding our dream venue so easy! We found exactly what we wanted within our budget.',
    location: 'Los Angeles, CA'
  },
  {
    id: 2,
    name: 'Jennifer & Michael',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    quote: 'From venues to photographers, we found all our wedding vendors through WeddingBliss. Highly recommend!',
    location: 'Chicago, IL'
  },
  {
    id: 3,
    name: 'Emily & James',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    quote: 'The service was exceptional. We were able to plan our entire wedding in just a few months thanks to WeddingBliss.',
    location: 'Seattle, WA'
  }
];

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-green-800">Browse by Category</h2>
            <p className="mt-4 text-xl text-gray-600">Find everything you need for your special day</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/categories">
              <Button variant="outline" size="lg">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Venues Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-green-800">Featured Venues</h2>
            <p className="mt-4 text-xl text-gray-600">Discover our top picks for your celebration</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVenues.map((venue) => (
              <VenueCard key={venue.id} {...venue} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/venues">
              <Button variant="primary" size="lg">
                Explore All Venues
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Top Mahals Section */}
      <section className="py-16 bg-dark-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Top Mahals</h2>
            <p className="mt-4 text-xl text-green-200">
              Explore our curated selection of premier mahals, perfect for your special day with unmatched elegance and amenities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Top Mahals Cards - Example */}
            <div className="bg-dark-green-700 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Royal Palace Mahal"
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">Royal Palace Mahal</h3>
                <p className="text-green-200 mt-2">Delhi, India</p>
                <p className="mt-4 text-gray-300">
                  Historic luxury mahal with beautiful gardens and exceptional service.
                </p>
                <Link to="/venues/royal-palace" className="mt-4 inline-block px-4 py-2 border border-green-300 text-green-300 rounded hover:bg-green-800 hover:text-white transition-colors duration-300">
                  View Details
                </Link>
              </div>
            </div>
            
            <div className="bg-dark-green-700 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1583396618422-597b2755de83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Golden Grand Mahal"
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">Golden Grand Mahal</h3>
                <p className="text-green-200 mt-2">Mumbai, India</p>
                <p className="mt-4 text-gray-300">
                  Modern luxury mahal with spacious halls and contemporary amenities.
                </p>
                <Link to="/venues/golden-grand" className="mt-4 inline-block px-4 py-2 border border-green-300 text-green-300 rounded hover:bg-green-800 hover:text-white transition-colors duration-300">
                  View Details
                </Link>
              </div>
            </div>
            
            <div className="bg-dark-green-700 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Emerald Valley Mahal"
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">Emerald Valley Mahal</h3>
                <p className="text-green-200 mt-2">Jaipur, India</p>
                <p className="mt-4 text-gray-300">
                  Scenic mahal surrounded by lush gardens and mountain views.
                </p>
                <Link to="/venues/emerald-valley" className="mt-4 inline-block px-4 py-2 border border-green-300 text-green-300 rounded hover:bg-green-800 hover:text-white transition-colors duration-300">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/venues/mahals">
              <Button variant="secondary" size="lg">
                View All Mahals
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-green-800">Happy Couples</h2>
            <p className="mt-4 text-xl text-gray-600">What our customers say about their experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-dark-green-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-dark-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Plan Your Perfect Wedding?</h2>
          <p className="mt-4 text-xl text-green-100">
            Join thousands of couples who found their dream wedding vendors with WeddingBliss.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/venues">
              <Button variant="secondary" size="lg" className="mr-4">
                Find Venues
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;