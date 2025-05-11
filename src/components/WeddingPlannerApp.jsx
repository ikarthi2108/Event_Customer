import { useState, useEffect } from 'react';
import { Sun, Moon, Search, MapPin, Calendar, Camera, UserRound, Music, Utensils, Heart } from 'lucide-react';

export default function WeddingPlannerApp() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preference from local storage
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to local storage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="font-royal w-full min-h-screen transition-colors duration-300">
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navbar */}
        <nav className="px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
          <div className="flex items-center">
            <Heart className="w-8 h-8 text-green-700 dark:text-green-500" fill="#15803D" />
            <h1 className="text-3xl font-bold ml-2 text-green-800 dark:text-green-400">RoyalWed</h1>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors">Services</a>
            <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors">Vendors</a>
            <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors">Stories</a>
            <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors">Contact</a>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900 transition-all"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative w-full h-[600px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/api/placeholder/1400/600')" }}>
          <div className="absolute inset-0 bg-green-900 bg-opacity-70"></div>
          <div className="relative h-full flex flex-col items-center justify-center px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-royal">Your Royal Wedding Awaits</h1>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl">The finest selection of premium wedding services and vendors across India</p>
            
            <div className="w-full max-w-4xl p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl transform transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-green-700 dark:text-green-500" />
                  </div>
                  <select className="block w-full pl-12 pr-4 py-4 text-base border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 bg-white dark:bg-gray-700 dark:text-white rounded-lg">
                    <option value="">Search For Vendors</option>
                    <option value="photographers">Photographers</option>
                    <option value="makeup_artists">Makeup Artists</option>
                    <option value="mandap">Mandap & Decorations</option>
                    <option value="caterers">Premium Caterers</option>
                    <option value="venues">Royal Venues</option>
                  </select>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-green-700 dark:text-green-500" />
                  </div>
                  <select className="block w-full pl-12 pr-4 py-4 text-base border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 bg-white dark:bg-gray-700 dark:text-white rounded-lg">
                    <option value="">Wedding City</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="jaipur">Jaipur</option>
                    <option value="udaipur">Udaipur</option>
                    <option value="goa">Goa</option>
                  </select>
                </div>
                <button className="bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-4 px-8 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg">
                  Find Vendors
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-green-700 dark:text-green-500 font-medium uppercase tracking-wide">Premium Offerings</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 font-royal">Our Royal Services</h2>
              <div className="w-20 h-1 bg-green-700 dark:bg-green-500 mx-auto my-4"></div>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Curated excellence for your perfect wedding celebration</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-green-700 dark:border-green-500">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                  <Camera className="w-8 h-8 text-green-700 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Luxury Photography</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">Award-winning photographers to capture your precious moments with artistic excellence.</p>
                <a href="#" className="inline-flex items-center mt-6 text-green-700 dark:text-green-400 font-medium hover:text-green-800 dark:hover:text-green-300">
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-green-700 dark:border-green-500">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                  <UserRound className="w-8 h-8 text-green-700 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Royal Styling</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">Celebrity makeup artists and stylists to ensure you look nothing short of royalty.</p>
                <a href="#" className="inline-flex items-center mt-6 text-green-700 dark:text-green-400 font-medium hover:text-green-800 dark:hover:text-green-300">
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-green-700 dark:border-green-500">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-green-700 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Elite Planning</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">Comprehensive planning from venue selection to day-of coordination with meticulous attention to detail.</p>
                <a href="#" className="inline-flex items-center mt-6 text-green-700 dark:text-green-400 font-medium hover:text-green-800 dark:hover:text-green-300">
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Vendors */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-green-700 dark:text-green-500 font-medium uppercase tracking-wide">Premium Partners</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 font-royal">Elite Vendors</h2>
              <div className="w-20 h-1 bg-green-700 dark:bg-green-500 mx-auto my-4"></div>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Handpicked professionals to make your wedding truly exceptional</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Royal Lens", category: "Photography", rating: 5 },
                { name: "Elite Decor", category: "Decoration", rating: 5 },
                { name: "Glam Squad", category: "Makeup", rating: 5 },
                { name: "Gourmet Feast", category: "Catering", rating: 5 }
              ].map((vendor, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                  <div className="h-56 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <img src={`/api/placeholder/400/250`} alt="Vendor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-semibold text-green-700 dark:text-green-500 uppercase tracking-wide">{vendor.category}</span>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white transition-colors group-hover:text-green-700 dark:group-hover:text-green-400">{vendor.name}</h3>
                    <div className="mt-3 flex items-center">
                      {[...Array(vendor.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">(120+ reviews)</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Starting from</span>
                      <span className="text-green-700 dark:text-green-500 font-bold">₹35,000</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-transparent border-2 border-green-700 dark:border-green-600 text-green-700 dark:text-green-500 hover:bg-green-700 hover:text-white dark:hover:bg-green-600 dark:hover:text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Explore All Premium Vendors
              </button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-green-700 dark:text-green-500 font-medium uppercase tracking-wide">Simple Process</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 font-royal">How RoyalWed Works</h2>
              <div className="w-20 h-1 bg-green-700 dark:bg-green-500 mx-auto my-4"></div>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Three simple steps to your dream wedding</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-green-700 dark:text-green-400" />
                  </div>
                  <span className="absolute top-0 -right-4 w-12 h-12 rounded-full bg-green-700 text-white text-xl flex items-center justify-center font-bold">1</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Discover</h3>
                <p className="text-gray-600 dark:text-gray-300">Browse through our curated list of premium vendors across various categories.</p>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <UserRound className="w-12 h-12 text-green-700 dark:text-green-400" />
                  </div>
                  <span className="absolute top-0 -right-4 w-12 h-12 rounded-full bg-green-700 text-white text-xl flex items-center justify-center font-bold">2</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
                <p className="text-gray-600 dark:text-gray-300">Meet with your preferred vendors and discuss your vision and requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-green-700 dark:text-green-400" />
                  </div>
                  <span className="absolute top-0 -right-4 w-12 h-12 rounded-full bg-green-700 text-white text-xl flex items-center justify-center font-bold">3</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Celebrate</h3>
                <p className="text-gray-600 dark:text-gray-300">Enjoy your perfect wedding day while we handle all the details behind the scenes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-green-700 dark:text-green-500 font-medium uppercase tracking-wide">Client Stories</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 font-royal">Royal Celebrations</h2>
              <div className="w-20 h-1 bg-green-700 dark:bg-green-500 mx-auto my-4"></div>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">What our distinguished clients say about their experience</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  couple: "Priya & Rahul", 
                  location: "Delhi Palace Wedding",
                  testimonial: "RoyalWed transformed our wedding into a royal celebration. The attention to detail and premium vendors exceeded our expectations. Every moment was magical!"
                },
                { 
                  couple: "Ananya & Vikas", 
                  location: "Udaipur Lakeside Wedding",
                  testimonial: "From the stunning decor to the exceptional catering, our destination wedding was flawless. RoyalWed's team anticipated our every need and delivered excellence."
                },
                { 
                  couple: "Meera & Arjun", 
                  location: "Mumbai Beach Wedding",
                  testimonial: "Our beachside wedding had the perfect balance of elegance and relaxation. RoyalWed's vendors were true professionals who brought our vision to life."
                }
              ].map((testimonial, index) => (
                <div key={index} className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden">
                      <img src={`/api/placeholder/100/100`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{testimonial.couple}</h4>
                      <p className="text-green-700 dark:text-green-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="mt-6 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-green-800 dark:bg-green-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="1" />
              <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6 font-royal">Begin Your Royal Wedding Journey</h2>
            <p className="text-2xl text-white opacity-90 mb-10">Let us transform your wedding into an unforgettable royal celebration</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-800 font-semibold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg">
                Start Planning
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-10 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-green-500" fill="#22C55E" />
                  <h3 className="text-2xl font-bold ml-2 font-royal">RoyalWed</h3>
                </div>
                <p className="text-gray-400 mb-6">Crafting royal wedding experiences for distinguished couples across India.</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Royal Wedding Planning</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Elite Vendor Booking</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Destination Weddings</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Luxury Decor</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Wedding Consultations</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6 text-white">Popular Destinations</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Delhi</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Rajasthan</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Goa</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Udaipur</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Mumbai</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6 text-white">Get In Touch</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    contact@royalwed.com
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    +91 98765 43210
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    Delhi, Mumbai, Bangalore
                  </li>
                </ul>
                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</h5>
                  <div className="flex">
                    <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full" />
                    <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} RoyalWed. All rights reserved.</p>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">FAQ</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Add this to your CSS or as a <style> tag in your HTML
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap');

// Add this to your tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         royal: ['Playfair Display', 'serif'],
//       },
//     },
//   },
//   plugins: [],
// }