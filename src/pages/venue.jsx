import React, { useState } from 'react';
import { MapPin, Car, Plane, Train, Utensils, Bed, Phone, Clock, Wifi, Users, Accessibility } from 'lucide-react';

const VenuePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const hotels = [
    {
      name: 'Courtyard by Marriott Atlanta Downtown',
      distance: '0.3 miles',
      rate: '$149/night',
      address: '133 Carnegie Way, Atlanta, GA 30303',
      phone: '(404) 222-2416',
      amenities: ['Free WiFi', 'Fitness Center', 'Restaurant', 'Business Center'],
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Hilton Garden Inn Atlanta Downtown',
      distance: '0.4 miles',
      rate: '$159/night',
      address: '275 Baker Street, Atlanta, GA 30313',
      phone: '(404) 577-2001',
      amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Fitness Center'],
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Hampton Inn & Suites Atlanta-Downtown',
      distance: '0.5 miles',
      rate: '$139/night',
      address: '161 Spring St NW, Atlanta, GA 30303',
      phone: '(404) 589-1111',
      amenities: ['Free Breakfast', 'Pool', 'Free WiFi', 'Fitness Center'],
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Omni Atlanta Hotel at CNN Center',
      distance: '0.6 miles',
      rate: '$179/night',
      address: '100 CNN Center, Atlanta, GA 30303',
      phone: '(404) 659-0000',
      amenities: ['Pool', 'Spa', 'Multiple Restaurants', 'Shopping'],
      image: '/api/placeholder/300/200'
    }
  ];

  const restaurants = [
    {
      category: 'Quick Service',
      options: [
        { name: 'Chick-fil-A', distance: '0.1 miles', cuisine: 'Fast Food' },
        { name: 'Subway', distance: '0.1 miles', cuisine: 'Sandwiches' },
        { name: 'Panera Bread', distance: '0.2 miles', cuisine: 'Bakery Cafe' },
        { name: 'Chipotle', distance: '0.3 miles', cuisine: 'Mexican' }
      ]
    },
    {
      category: 'Casual Dining',
      options: [
        { name: 'The Varsity', distance: '0.4 miles', cuisine: 'American Classic' },
        { name: 'CNN Center Food Court', distance: '0.6 miles', cuisine: 'Various' },
        { name: 'Hard Rock Cafe', distance: '0.7 miles', cuisine: 'American' },
        { name: 'Stats Brewpub', distance: '0.8 miles', cuisine: 'Sports Bar' }
      ]
    },
    {
      category: 'Fine Dining',
      options: [
        { name: 'The Sun Dial Restaurant', distance: '0.9 miles', cuisine: 'American Fine Dining' },
        { name: 'Nikolai\'s Roof', distance: '1.2 miles', cuisine: 'Continental' },
        { name: 'Alma Cocina', distance: '0.8 miles', cuisine: 'Mexican' },
        { name: 'Grind Coffee', distance: '0.3 miles', cuisine: 'Coffee & Light Bites' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 pt-16 font-helvetica-light">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4 font-sf-pro-display">Conference Venue</h1>
              <p className="text-xl mb-6 font-helvetica-light">
                GSUMUN 2025 will be held at the Georgia State University Student Center, 
                located in the heart of downtown Atlanta.
              </p>
              <div className="flex items-center mb-4">
                <MapPin className="mr-3" size={20} />
                <div>
                  <p className="font-medium mb-2 font-sf-pro-rounded">Georgia State University Student Center</p>
                  <p className="text-slate-300 font-helvetica-light">55 Gilmer Street SE, Atlanta, GA 30303</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3" size={20} />
                <p className="font-helvetica-light">(404) 413-1500</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/api/placeholder/500/300" 
                alt="GSU Student Center"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-16 z-10">
        <div className="container mx-auto max-w-6xl px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'directions', label: 'Directions' },
              { id: 'parking', label: 'Parking' },
              { id: 'hotels', label: 'Hotels' },
              { id: 'dining', label: 'Dining' },
              { id: 'accessibility', label: 'Accessibility' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap font-sf-pro-rounded ${
                  activeTab === tab.id 
                    ? 'border-blue-700 text-blue-700' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-sf-pro-display">About the Venue</h2>
                  <p className="text-gray-600 mb-4 font-helvetica-light">
                    The Georgia State University Student Center is a modern, state-of-the-art facility 
                    located in downtown Atlanta. This premier venue offers excellent meeting spaces, 
                    advanced technology, and convenient amenities for our conference delegates.
                  </p>
                  <p className="text-gray-600 mb-6 font-helvetica-light">
                    The Student Center features multiple committee rooms, a large assembly hall for 
                    opening and closing ceremonies, dining facilities, and comfortable spaces for 
                    networking and collaboration.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 font-sf-pro-display">Conference Facilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                      <Users className="text-blue-700 mr-3" size={20} />
                      <span className="font-helvetica-light">15 Committee Rooms</span>
                    </div>
                    <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                      <Wifi className="text-blue-700 mr-3" size={20} />
                      <span className="font-helvetica-light">Complimentary WiFi</span>
                    </div>
                    <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                      <Clock className="text-blue-700 mr-3" size={20} />
                      <span className="font-helvetica-light">24/7 Security</span>
                    </div>
                    <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                      <Utensils className="text-blue-700 mr-3" size={20} />
                      <span className="font-helvetica-light">On-site Dining</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-sf-pro-display">Conference Rooms</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">General Assembly Hall</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Capacity: 300 | Opening & Closing Ceremonies</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">Committee Rooms (A-O)</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Capacity: 30-50 each | All committee sessions</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">Faculty Lounge</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Dedicated space for faculty advisors</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">Registration Area</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Main lobby with welcome desk</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Campus Map */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 font-sf-pro-display">Campus Map</h3>
                <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/800/400" 
                    alt="GSU Campus Map"
                    className="max-w-full max-h-full object-contain rounded"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Directions Tab */}
          {activeTab === 'directions' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6 font-sf-pro-display">Getting to the Venue</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Plane className="text-blue-700 mr-3" size={24} />
                    <h3 className="text-xl font-semibold font-sf-pro-display">By Air</h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-helvetica-light">
                    <strong>Hartsfield-Jackson Atlanta International Airport (ATL)</strong><br />
                    Distance: 10 miles south of downtown
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">MARTA (Recommended)</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Take the Gold Line from Airport Station to Five Points Station. 5-minute walk to venue. Cost: $2.50</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">Taxi/Rideshare</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Approximately $30-45 to downtown Atlanta</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Car className="text-blue-700 mr-3" size={24} />
                    <h3 className="text-xl font-semibold font-sf-pro-display">By Car</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">From I-75/85 North</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Exit 248C (Courtland St), turn right on Gilmer St</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">From I-75/85 South</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Exit 248A (Edgewood Ave), turn left on Courtland St, right on Gilmer St</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">From I-20 East/West</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Exit 56A (Windsor St), follow signs to GSU</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Train className="text-blue-700 mr-3" size={24} />
                    <h3 className="text-xl font-semibold font-sf-pro-display">By Transit</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">MARTA Rail</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Five Points Station (Red/Gold Lines) - 5 minute walk</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">MARTA Bus</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Multiple routes serve downtown area</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">Atlanta Streetcar</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Centennial Olympic Park Station - 10 minute walk</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 font-sf-pro-display">Address for GPS Navigation</h3>
                <p className="text-lg font-mono bg-white px-3 py-2 rounded border">
                  55 Gilmer Street SE, Atlanta, GA 30303
                </p>
              </div>
            </div>
          )}

          {/* Parking Tab */}
          {activeTab === 'parking' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6 font-sf-pro-display">Parking Information</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 font-sf-pro-display">Student Center Parking Deck</h3>
                    <p className="text-gray-600 mb-4 font-helvetica-light">
                      <strong>Address:</strong> 41 Courtland Street SE<br />
                      <strong>Rate:</strong> $10 per day<br />
                      <strong>Hours:</strong> 24/7 access
                    </p>
                    <p className="text-sm text-gray-600 font-helvetica-light">
                      The most convenient parking option, connected directly to the Student Center.
                      Accepts cash and credit cards.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 font-sf-pro-display">Alternative Parking</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium mb-2 font-sf-pro-rounded">Kinney Parking</h4>
                        <p className="text-sm text-gray-600 font-helvetica-light">Various locations downtown, $8-15/day</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 font-sf-pro-rounded">Street Parking</h4>
                        <p className="text-sm text-gray-600 font-helvetica-light">Limited meter parking, $1.50/hour</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 font-sf-pro-rounded">Capital Gateway Deck</h4>
                        <p className="text-sm text-gray-600 font-helvetica-light">200 Capitol Ave SW, $12/day</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 font-sf-pro-display">School Bus Parking</h3>
                  <p className="text-gray-600 mb-4 font-helvetica-light">
                    Special arrangements have been made for school buses and large vehicles.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">Drop-off Location</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Gilmer Street entrance (main entrance)</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">Bus Parking Area</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Designated area on Capitol Avenue</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">Coordination Required</h4>
                      <p className="text-sm text-gray-600 font-helvetica-light">Contact us at <a href="mailto:logistics@gsumun.org" className="text-blue-700">logistics@gsumun.org</a> for bus parking arrangements</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
                    <p className="text-sm text-yellow-800 font-helvetica-light">
                      <strong>Important:</strong> Bus parking must be arranged in advance. 
                      Please contact our logistics team at least 2 weeks before the conference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hotels Tab */}
          {activeTab === 'hotels' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 font-sf-pro-display">Recommended Hotels</h2>
                <p className="text-gray-600 max-w-2xl mx-auto font-helvetica-light">
                  We've partnered with several downtown Atlanta hotels to offer special rates for GSUMUN delegates. 
                  When booking, mention "GSUMUN 2025" to receive the conference rate.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {hotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold font-sf-pro-display">{hotel.name}</h3>
                        <span className="text-blue-700 font-bold font-sf-pro-rounded">{hotel.rate}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm font-helvetica-light">{hotel.distance} from venue</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 font-helvetica-light">{hotel.address}</p>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Phone size={16} className="mr-1" />
                        <span className="text-sm font-helvetica-light">{hotel.phone}</span>
                      </div>
                      <div className="border-t pt-3">
                        <h4 className="font-medium mb-2 font-sf-pro-rounded">Amenities</h4>
                        <div className="flex flex-wrap gap-2">
                          {hotel.amenities.map((amenity, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded font-helvetica-light"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 font-sf-pro-display">Booking Information</h3>
                <ul className="space-y-2 text-sm text-gray-700 font-helvetica-light">
                  <li>• Mention "GSUMUN 2025" when booking to receive special conference rates</li>
                  <li>• Rates are per night and subject to availability</li>
                  <li>• Book early for best availability and rates</li>
                  <li>• Cancellation policies vary by hotel</li>
                  <li>• Some hotels offer group discounts for 10+ rooms</li>
                </ul>
              </div>
            </div>
          )}

          {/* Dining Tab */}
          {activeTab === 'dining' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 font-sf-pro-display">Dining Options</h2>
                <p className="text-gray-600 max-w-2xl mx-auto font-helvetica-light">
                  Downtown Atlanta offers excellent dining options within walking distance of the venue. 
                  Conference registration includes select meals, with plenty of options for other dining needs.
                </p>
              </div>

              {/* Included Meals */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-green-800 font-sf-pro-display">Meals Included in Registration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock className="text-green-600 mr-3" size={20} />
                    <span className="font-helvetica-light">Continental breakfast (Day 1 & 2)</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="text-green-600 mr-3" size={20} />
                    <span className="font-helvetica-light">Lunch (Day 1 & 2)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-green-600 mr-3" size={20} />
                    <span className="font-helvetica-light">Delegate social refreshments</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-green-600 mr-3" size={20} />
                    <span className="font-helvetica-light">Coffee breaks throughout</span>
                  </div>
                </div>
              </div>

              {/* Restaurant Categories */}
              {restaurants.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 font-sf-pro-display">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.options.map((restaurant, idx) => (
                      <div key={idx} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium mb-2 font-sf-pro-rounded">{restaurant.name}</h4>
                          <span className="text-sm text-gray-500 font-helvetica-light">{restaurant.distance}</span>
                        </div>
                        <p className="text-sm text-gray-600 font-helvetica-light">{restaurant.cuisine}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 font-sf-pro-display">Dining Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700 font-helvetica-light">
                  <li>• Many restaurants offer student discounts with valid ID</li>
                  <li>• Food trucks are common around downtown during lunch hours</li>
                  <li>• The Student Center has a food court with multiple options</li>
                  <li>• Consider making reservations for large groups</li>
                  <li>• Most restaurants accept credit cards and mobile payments</li>
                </ul>
              </div>
            </div>
          )}

          {/* Accessibility Tab */}
          {activeTab === 'accessibility' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6 font-sf-pro-display">Accessibility Information</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Accessibility className="text-slate-700 mr-3" size={24} />
                    <h3 className="text-xl font-semibold font-sf-pro-display">Facility Access</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-helvetica-light">ADA compliant building with elevator access to all floors</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-helvetica-light">Accessible parking spaces in the Student Center Parking Deck</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-helvetica-light">Wheelchair accessible entrances and pathways</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-helvetica-light">Accessible restrooms on each floor</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-helvetica-light">All committee rooms are wheelchair accessible</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 font-sf-pro-display">Special Accommodations</h3>
                  <p className="text-gray-600 mb-4 font-helvetica-light">
                    We are committed to ensuring all delegates can fully participate in GSUMUN. 
                    Please contact us if you need any special accommodations.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2 font-sf-pro-rounded">Available Services</h4>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1 font-helvetica-light">
                        <li>• Sign language interpreters (advance notice required)</li>
                        <li>• Large print materials</li>
                        <li>• Dietary accommodations for meals</li>
                        <li>• Reserved seating arrangements</li>
                        <li>• Audio amplification equipment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 font-sf-pro-display">Transportation Accessibility</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 font-sf-pro-rounded">MARTA Rail</h4>
                    <p className="text-sm text-gray-600 font-helvetica-light">
                      All MARTA stations are wheelchair accessible with elevators and tactile guidance systems.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 font-sf-pro-rounded">Rideshare</h4>
                    <p className="text-sm text-gray-600 font-helvetica-light">
                      Both Uber and Lyft offer wheelchair accessible vehicle options in Atlanta.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 font-sf-pro-rounded">Taxi Services</h4>
                    <p className="text-sm text-gray-600 font-helvetica-light">
                      Several taxi companies provide wheelchair accessible vehicles with advance booking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 border border-slate-300 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 font-sf-pro-display">Request Accommodations</h3>
                <p className="text-sm text-gray-700 mb-3 font-helvetica-light">
                  To ensure we can provide the accommodations you need, please contact us at least 
                  2 weeks before the conference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:accessibility@gsumun.org" 
                    className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 text-center font-sf-pro-rounded"
                  >
                    Email Accessibility Team
                  </a>
                  <a 
                    href="tel:+14044135000" 
                    className="border border-blue-800 text-blue-800 px-4 py-2 rounded hover:bg-blue-100 text-center font-sf-pro-rounded"
                  >
                    Call (404) 413-5000
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default VenuePage;