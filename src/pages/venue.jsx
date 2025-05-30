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
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {/* Hero Section */}
      <section className="text-white py-20 px-4" style={{ background: 'linear-gradient(135deg, #29487D 0%, #3C5898 100%)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Conference Venue
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                GSUMUN 2025 will be held at the Georgia State University Student Center, 
                located in the heart of downtown Atlanta.
              </p>
              <div className="flex items-start mb-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <MapPin className="mr-4 mt-1 text-blue-200" size={24} />
                <div>
                  <p className="font-semibold mb-2 text-lg">
                    Georgia State University Student Center
                  </p>
                  <p className="text-blue-200">
                    55 Gilmer Street SE, Atlanta, GA 30303
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/api/placeholder/500/300" 
                alt="GSU Student Center"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-10 shadow-sm">
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
                className={`py-4 px-2 border-b-3 font-semibold text-base whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold mb-8 text-gray-900">
                    About the Venue
                  </h2>
                  <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                    The Georgia State University Student Center is a modern, state-of-the-art facility 
                    located in downtown Atlanta. This premier venue offers excellent meeting spaces, 
                    advanced technology, and convenient amenities for our conference delegates.
                  </p>
                  <p className="mb-8 text-gray-700 text-lg leading-relaxed">
                    The Student Center features multiple committee rooms, a large assembly hall for 
                    opening and closing ceremonies, dining facilities, and comfortable spaces for 
                    networking and collaboration.
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Conference Facilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: Users, text: '15 Committee Rooms' },
                      { icon: Wifi, text: 'Complimentary WiFi' },
                      { icon: Clock, text: '24/7 Security' },
                      { icon: Utensils, text: 'On-site Dining' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <item.icon className="mr-4 text-blue-600" size={24} />
                        <span className="font-medium text-gray-800">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Conference Rooms
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: 'General Assembly Hall', desc: 'Capacity: 300 | Opening & Closing Ceremonies' },
                      { title: 'Committee Rooms (A-O)', desc: 'Capacity: 30-50 each | All committee sessions' },
                      { title: 'Faculty Lounge', desc: 'Dedicated space for faculty advisors' },
                      { title: 'Registration Area', desc: 'Main lobby with welcome desk' }
                    ].map((room, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold mb-2 text-gray-900 text-lg">
                          {room.title}
                        </h4>
                        <p className="text-gray-600">
                          {room.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Campus Map */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Campus Map
                </h3>
                <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/800/400" 
                    alt="GSU Campus Map"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Directions Tab */}
          {activeTab === 'directions' && (
            <div className="space-y-12">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Getting to the Venue
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <Plane className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      By Air
                    </h3>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-1">
                      Hartsfield-Jackson Atlanta International Airport (ATL)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Distance: 10 miles south of downtown
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold mb-1 text-gray-900">
                        MARTA (Recommended)
                      </h4>
                      <p className="text-sm text-gray-600">
                        Take the Gold Line from Airport Station to Georgia State Station. 2-minute walk to venue. Cost: $2.50
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-gray-900">
                        Taxi/Rideshare
                      </h4>
                      <p className="text-sm text-gray-600">
                        Approximately $30-45 to downtown Atlanta
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-xl mr-4">
                      <Car className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      By Car
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold mb-1 text-gray-900">
                        From North (I-75/85 South)
                      </h4>
                      <p className="text-sm text-gray-600">
                        Exit 249A (Courtland Street), follow ramp right onto Courtland Street, continue to Gilmer Street
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold mb-1 text-gray-900">
                        From South (I-75/85 North)
                      </h4>
                      <p className="text-sm text-gray-600">
                        Exit 246 (Central Ave/Fulton St), right fork to Fulton St, right on Fulton, left on Capitol Ave (becomes Piedmont Ave)
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold mb-1 text-gray-900">
                        From East/West (I-20)
                      </h4>
                      <p className="text-sm text-gray-600">
                        Exit 58A (Capitol Avenue), right on Capitol Ave (becomes Piedmont Ave), continue to Gilmer Street
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 p-3 rounded-xl mr-4">
                      <Train className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      By Transit
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold mb-1 text-gray-900">
                        MARTA Rail
                      </h4>
                      <p className="text-sm text-gray-600">
                        Georgia State Station (Blue/Green Lines) - 2 minute walk to Student Center East
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold mb-1 text-gray-900">
                        MARTA Bus
                      </h4>
                      <p className="text-sm text-gray-600">
                        Multiple routes serve downtown area including Routes 3, 21, 26, 42, 49, 55
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold mb-1 text-gray-900">
                        Atlanta Streetcar
                      </h4>
                      <p className="text-sm text-gray-600">
                        Auburn at Piedmont Station - 5 minute walk to venue
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Address for GPS Navigation
                </h3>
                <p className="text-2xl font-mono bg-white px-6 py-4 rounded-lg border shadow-sm">
                  55 Gilmer Street SE, Atlanta, GA 30303
                </p>
              </div>
            </div>
          )}

          {/* Parking Tab */}
          {activeTab === 'parking' && (
            <div className="space-y-12">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Parking Information
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">
                      Student Center Parking Deck
                    </h3>
                    <div className="space-y-3 mb-6">
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Address:</strong> 41 Courtland Street SE
                      </p>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Rate:</strong> $10 per day
                      </p>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Hours:</strong> 24/7 access
                      </p>
                    </div>
                    <p className="text-gray-600 bg-blue-50 p-4 rounded-lg">
                      The most convenient parking option, connected directly to the Student Center.
                      Accepts cash and credit cards.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">
                      Alternative Parking
                    </h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Kinney Parking', details: 'Various locations downtown, $8-15/day' },
                        { name: 'Street Parking', details: 'Limited meter parking, $1.50/hour' },
                        { name: 'Capital Gateway Deck', details: '200 Capitol Ave SW, $12/day' }
                      ].map((option, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-gray-900">
                            {option.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {option.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    School Bus Parking
                  </h3>
                  <p className="mb-6 text-gray-700">
                    Special arrangements have been made for school buses and large vehicles.
                  </p>
                  <div className="space-y-4 mb-6">
                    {[
                      { title: 'Drop-off Location', desc: 'Gilmer Street entrance (main entrance)' },
                      { title: 'Bus Parking Area', desc: 'Designated area on Capitol Avenue' },
                      { title: 'Coordination Required', desc: 'Contact us at logistics@gsumun.org for bus parking arrangements' }
                    ].map((item, index) => (
                      <div key={index} className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold mb-2 text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                    <p className="text-sm text-amber-800">
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
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Recommended Hotels
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
                  We've partnered with several downtown Atlanta hotels to offer special rates for GSUMUN delegates. 
                  When booking, mention "GSUMUN 2025" to receive the conference rate.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {hotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {hotel.name}
                        </h3>
                        <span className="text-2xl font-bold text-blue-600">
                          {hotel.rate}
                        </span>
                      </div>
                      <div className="flex items-center mb-3 text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm font-medium">
                          {hotel.distance} from venue
                        </span>
                      </div>
                      <p className="text-sm mb-4 text-gray-600">
                        {hotel.address}
                      </p>
                      <div className="flex items-center mb-6 text-gray-600">
                        <Phone size={16} className="mr-2" />
                        <span className="text-sm">
                          {hotel.phone}
                        </span>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold mb-3 text-gray-900">
                          Amenities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {hotel.amenities.map((amenity, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800 font-medium"
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

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Booking Information
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mention "GSUMUN 2025" when booking to receive special conference rates
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Rates are per night and subject to availability
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Book early for best availability and rates
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Some hotels offer group discounts for 10+ rooms
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Dining Tab */}
          {activeTab === 'dining' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Dining Options
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
                  Downtown Atlanta offers excellent dining options within walking distance of the venue. 
                  Delegates are responsible for their own meals during the conference.
                </p>
              </div>

              {/* Food Information */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-4 text-orange-900">
                  Meal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Utensils className="text-orange-600 mr-4" size={24} />
                    <span className="text-gray-800 font-medium">
                      Meals not included in registration fee
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-orange-600 mr-4" size={24} />
                    <span className="text-gray-800 font-medium">
                      Many dining options within walking distance
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-orange-600 mr-4" size={24} />
                    <span className="text-gray-800 font-medium">
                      Student Center food court available on-site
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-orange-600 mr-4" size={24} />
                    <span className="text-gray-800 font-medium">
                      Group dining discounts available at select restaurants
                    </span>
                  </div>
                </div>
              </div>

              {/* Restaurant Categories */}
              {restaurants.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.options.map((restaurant, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-gray-900 text-lg">
                            {restaurant.name}
                          </h4>
                          <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                            {restaurant.distance}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {restaurant.cuisine}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Dining Tips
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'Many restaurants offer student discounts with valid ID',
                    'Food trucks are common around downtown during lunch hours',
                    'The Student Center has a food court with multiple options',
                    'Consider making reservations for large groups',
                    'Most restaurants accept credit cards and mobile payments'
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Accessibility Tab */}
          {activeTab === 'accessibility' && (
            <div className="space-y-12">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Accessibility Information
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Accessibility className="text-green-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Facility Access
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      'ADA compliant building with elevator access to all floors',
                      'Accessible parking spaces in the Student Center Parking Deck',
                      'Wheelchair accessible entrances and pathways',
                      'Accessible restrooms on each floor',
                      'All committee rooms are wheelchair accessible'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Special Accommodations
                  </h3>
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    We are committed to ensuring all delegates can fully participate in GSUMUN. 
                    Please contact us if you need any special accommodations.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                    <h4 className="font-semibold mb-3 text-gray-900">
                      Available Services
                    </h4>
                    <ul className="text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Large print materials
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Transportation Accessibility
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: 'MARTA Rail', desc: 'All MARTA stations are wheelchair accessible with elevators and tactile guidance systems.' },
                    { title: 'Rideshare', desc: 'Both Uber and Lyft offer wheelchair accessible vehicle options in Atlanta.' },
                    { title: 'Taxi Services', desc: 'Several taxi companies provide wheelchair accessible vehicles with advance booking.' }
                  ].map((option, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold mb-3 text-gray-900">
                        {option.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {option.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Request Accommodations
                </h3>
                <p className="text-gray-700 mb-6">
                  To ensure we can provide the accommodations you need, please contact us at least 
                  2 weeks before the conference.
                </p>
                <a 
                  href="mailto:accessibility@gsumun.org" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
                >
                  Email Accessibility Team
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default VenuePage;