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
    <div 
      className="min-h-screen pt-16"
      style={{ 
        backgroundColor: '#F9F9F9',
        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
      }}
    >
      {/* Hero Section */}
      <section 
        className="text-white py-16 px-4"
        style={{ backgroundColor: '#29487D' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                Conference Venue
              </h1>
              <p 
                className="text-xl mb-6"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                GSUMUN 2025 will be held at the Georgia State University Student Center, 
                located in the heart of downtown Atlanta.
              </p>
              <div className="flex items-center mb-4">
                <MapPin className="mr-3" size={20} />
                <div>
                  <p 
                    className="font-medium mb-2"
                    style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                  >
                    Georgia State University Student Center
                  </p>
                  <p 
                    style={{ 
                      color: '#D4D8E8',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    55 Gilmer Street SE, Atlanta, GA 30303
                  </p>
                </div>
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
      <section className="bg-white border-b sticky top-16 z-10" style={{ borderColor: '#D4D8E8' }}>
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
                className={`py-4 px-2 border-b-2 font-medium text-base whitespace-nowrap transition-colors duration-200`}
                style={{ 
                  borderBottomColor: activeTab === tab.id ? '#29487D' : 'transparent',
                  color: activeTab === tab.id ? '#29487D' : '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.color = '#3C5898';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.color = '#6B7280';
                  }
                }}
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
                  <h2 
                    className="text-3xl font-bold mb-6"
                    style={{ 
                      color: '#29487D',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    About the Venue
                  </h2>
                  <p 
                    className="mb-4"
                    style={{ 
                      color: '#6B7280',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    The Georgia State University Student Center is a modern, state-of-the-art facility 
                    located in downtown Atlanta. This premier venue offers excellent meeting spaces, 
                    advanced technology, and convenient amenities for our conference delegates.
                  </p>
                  <p 
                    className="mb-6"
                    style={{ 
                      color: '#6B7280',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    The Student Center features multiple committee rooms, a large assembly hall for 
                    opening and closing ceremonies, dining facilities, and comfortable spaces for 
                    networking and collaboration.
                  </p>
                  
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ 
                      color: '#29487D',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    Conference Facilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      className="flex items-center p-3 rounded-lg"
                      style={{ backgroundColor: '#D4D8E8' }}
                    >
                      <Users style={{ color: '#29487D' }} className="mr-3" size={20} />
                      <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                        15 Committee Rooms
                      </span>
                    </div>
                    <div 
                      className="flex items-center p-3 rounded-lg"
                      style={{ backgroundColor: '#D4D8E8' }}
                    >
                      <Wifi style={{ color: '#29487D' }} className="mr-3" size={20} />
                      <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                        Complimentary WiFi
                      </span>
                    </div>
                    <div 
                      className="flex items-center p-3 rounded-lg"
                      style={{ backgroundColor: '#D4D8E8' }}
                    >
                      <Clock style={{ color: '#29487D' }} className="mr-3" size={20} />
                      <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                        24/7 Security
                      </span>
                    </div>
                    <div 
                      className="flex items-center p-3 rounded-lg"
                      style={{ backgroundColor: '#D4D8E8' }}
                    >
                      <Utensils style={{ color: '#29487D' }} className="mr-3" size={20} />
                      <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                        On-site Dining
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ 
                      color: '#29487D',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    Conference Rooms
                  </h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4" style={{ borderColor: '#D4D8E8' }}>
                      <h4 
                        className="font-medium mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        General Assembly Hall
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Capacity: 300 | Opening & Closing Ceremonies
                      </p>
                    </div>
                    <div className="border rounded-lg p-4" style={{ borderColor: '#D4D8E8' }}>
                      <h4 
                        className="font-medium mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        Committee Rooms (A-O)
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Capacity: 30-50 each | All committee sessions
                      </p>
                    </div>
                    <div className="border rounded-lg p-4" style={{ borderColor: '#D4D8E8' }}>
                      <h4 
                        className="font-medium mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        Faculty Lounge
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Dedicated space for faculty advisors
                      </p>
                    </div>
                    <div className="border rounded-lg p-4" style={{ borderColor: '#D4D8E8' }}>
                      <h4 
                        className="font-medium mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        Registration Area
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Main lobby with welcome desk
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Campus Map */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Campus Map
                </h3>
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
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Getting to the Venue
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Plane style={{ color: '#29487D' }} className="mr-3" size={24} />
                    <h3 
                      className="text-xl font-semibold"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      By Air
                    </h3>
                  </div>
                  <p 
                    className="mb-4"
                    style={{ 
                      color: '#6B7280',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    <strong>Hartsfield-Jackson Atlanta International Airport (ATL)</strong><br />
                    Distance: 10 miles south of downtown
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 
                        className="font-bold mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        MARTA (Recommended)
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Take the Gold Line from Airport Station to Georgia State Station. 2-minute walk to venue. Cost: $2.50
                      </p>
                    </div>
                    <div>
                      <h4 
                        className="font-medium mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        Taxi/Rideshare
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Approximately $30-45 to downtown Atlanta
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Car style={{ color: '#29487D' }} className="mr-3" size={24} />
                    <h3 
                      className="text-xl font-semibold"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      By Car
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 
                        className="font-bold mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        From North (I-75/85 South)
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Exit 249A (Courtland Street), follow ramp right onto Courtland Street, continue to Gilmer Street
                      </p>
                    </div>
                    <div>
                      <h4 
                        className="font-bold mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        From South (I-75/85 North)
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Exit 246 (Central Ave/Fulton St), right fork to Fulton St, right on Fulton, left on Capitol Ave (becomes Piedmont Ave)
                      </p>
                    </div>
                    <div>
                      <h4 
                        className="font-bold mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        From East/West (I-20)
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Exit 58A (Capitol Avenue), right on Capitol Ave (becomes Piedmont Ave), continue to Gilmer Street
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Train style={{ color: '#29487D' }} className="mr-3" size={24} />
                    <h3 
                      className="text-xl font-semibold"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      By Transit
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 
                        className="font-bold mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        MARTA Rail
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Georgia State Station (Blue/Green Lines) - 2 minute walk to Student Center East
                      </p>
                    </div>
                    <div>
                      <h4 
                        className="font-bold mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        MARTA Bus
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Multiple routes serve downtown area including Routes 3, 21, 26, 42, 49, 55
                      </p>
                    </div>
                    <div>
                      <h4 
                        className="font-bold mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'Gill Sans Bold', 'Myriad Pro Bold', 'SF Pro Display Bold', 'Helvetica Neue', Arial, sans-serif"
                        }}
                      >
                        Atlanta Streetcar
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Auburn at Piedmont Station - 5 minute walk to venue
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="border rounded-lg p-6"
                style={{ 
                  backgroundColor: '#F8F9FF',
                  borderColor: '#D4D8E8'
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Address for GPS Navigation
                </h3>
                <p className="text-lg font-mono bg-white px-3 py-2 rounded border">
                  55 Gilmer Street SE, Atlanta, GA 30303
                </p>
              </div>
            </div>
          )}

          {/* Parking Tab */}
          {activeTab === 'parking' && (
            <div className="space-y-8">
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Parking Information
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 
                      className="text-xl font-semibold mb-4"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      Student Center Parking Deck
                    </h3>
                    <p 
                      className="mb-4"
                      style={{ 
                        color: '#6B7280',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      <strong>Address:</strong> 41 Courtland Street SE<br />
                      <strong>Rate:</strong> $10 per day<br />
                      <strong>Hours:</strong> 24/7 access
                    </p>
                    <p 
                      className="text-sm"
                      style={{ 
                        color: '#6B7280',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      The most convenient parking option, connected directly to the Student Center.
                      Accepts cash and credit cards.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 
                      className="text-xl font-semibold mb-4"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      Alternative Parking
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <h4 
                          className="font-medium mb-2"
                          style={{ 
                            color: '#29487D',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          Kinney Parking
                        </h4>
                        <p 
                          className="text-sm"
                          style={{ 
                            color: '#6B7280',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          Various locations downtown, $8-15/day
                        </p>
                      </div>
                      <div>
                        <h4 
                          className="font-medium mb-2"
                          style={{ 
                            color: '#29487D',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          Street Parking
                        </h4>
                        <p 
                          className="text-sm"
                          style={{ 
                            color: '#6B7280',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          Limited meter parking, $1.50/hour
                        </p>
                      </div>
                      <div>
                        <h4 
                          className="font-medium mb-2"
                          style={{ 
                            color: '#29487D',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          Capital Gateway Deck
                        </h4>
                        <p 
                          className="text-sm"
                          style={{ 
                            color: '#6B7280',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          200 Capitol Ave SW, $12/day
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ 
                      color: '#29487D',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    School Bus Parking
                  </h3>
                  <p 
                    className="mb-4"
                    style={{ 
                      color: '#6B7280',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    Special arrangements have been made for school buses and large vehicles.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 
                        className="font-medium mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Drop-off Location
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Gilmer Street entrance (main entrance)
                      </p>
                    </div>
                    <div>
                      <h4 
                        className="font-medium mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Bus Parking Area
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Designated area on Capitol Avenue
                      </p>
                    </div>
                    <div>
                      <h4 
                        className="font-medium mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Coordination Required
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Contact us at <a 
                          href="mailto:logistics@gsumun.org" 
                          style={{ color: '#3C5898' }}
                          className="transition-colors duration-200"
                          onMouseEnter={(e) => e.target.style.color = '#29487D'}
                          onMouseLeave={(e) => e.target.style.color = '#3C5898'}
                        >
                          logistics@gsumun.org
                        </a> for bus parking arrangements
                      </p>
                    </div>
                  </div>
                  
                  <div 
                    className="mt-6 p-4 border rounded"
                    style={{ 
                      backgroundColor: '#FEF3C7',
                      borderColor: '#F59E0B'
                    }}
                  >
                    <p 
                      className="text-sm"
                      style={{ 
                        color: '#92400E',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
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
                <h2 
                  className="text-3xl font-bold mb-4"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Recommended Hotels
                </h2>
                <p 
                  className="max-w-2xl mx-auto"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
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
                        <h3 
                          className="text-xl font-semibold"
                          style={{ 
                            color: '#29487D',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          {hotel.name}
                        </h3>
                        <span 
                          className="font-bold"
                          style={{ 
                            color: '#3C5898',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          {hotel.rate}
                        </span>
                      </div>
                      <div className="flex items-center mb-2" style={{ color: '#6B7280' }}>
                        <MapPin size={16} className="mr-1" />
                        <span 
                          className="text-sm"
                          style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                        >
                          {hotel.distance} from venue
                        </span>
                      </div>
                      <p 
                        className="text-sm mb-3"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        {hotel.address}
                      </p>
                      <div className="flex items-center mb-4" style={{ color: '#6B7280' }}>
                        <Phone size={16} className="mr-1" />
                        <span 
                          className="text-sm"
                          style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                        >
                          {hotel.phone}
                        </span>
                      </div>
                      <div className="border-t pt-3" style={{ borderColor: '#D4D8E8' }}>
                        <h4 
                          className="font-medium mb-2"
                          style={{ 
                            color: '#29487D',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          Amenities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {hotel.amenities.map((amenity, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 text-xs rounded"
                              style={{ 
                                backgroundColor: '#D4D8E8',
                                color: '#29487D',
                                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                              }}
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

              <div 
                className="border rounded-lg p-6"
                style={{ 
                  backgroundColor: '#F8F9FF',
                  borderColor: '#D4D8E8'
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Booking Information
                </h3>
                <ul 
                  className="space-y-2 text-sm"
                  style={{ 
                    color: '#374151',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
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
                <h2 
                  className="text-3xl font-bold mb-4"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Dining Options
                </h2>
                <p 
                  className="max-w-2xl mx-auto"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Downtown Atlanta offers excellent dining options within walking distance of the venue. 
                  Conference registration includes select meals, with plenty of options for other dining needs.
                </p>
              </div>

              {/* Included Meals */}
              <div 
                className="border rounded-lg p-6 mb-8"
                style={{ 
                  backgroundColor: '#F0FDF4',
                  borderColor: '#22C55E'
                }}
              >
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ 
                    color: '#15803D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Meals Included in Registration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock style={{ color: '#22C55E' }} className="mr-3" size={20} />
                    <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                      Continental breakfast (Day 1 & 2)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Utensils style={{ color: '#22C55E' }} className="mr-3" size={20} />
                    <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                      Lunch (Day 1 & 2)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users style={{ color: '#22C55E' }} className="mr-3" size={20} />
                    <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                      Delegate social refreshments
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock style={{ color: '#22C55E' }} className="mr-3" size={20} />
                    <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                      Coffee breaks throughout
                    </span>
                  </div>
                </div>
              </div>

              {/* Restaurant Categories */}
              {restaurants.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ 
                      color: '#29487D',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.options.map((restaurant, idx) => (
                      <div key={idx} className="border rounded-lg p-4" style={{ borderColor: '#D4D8E8' }}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 
                            className="font-medium mb-2"
                            style={{ 
                              color: '#29487D',
                              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                            }}
                          >
                            {restaurant.name}
                          </h4>
                          <span 
                            className="text-sm"
                            style={{ 
                              color: '#9CA3AF',
                              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                            }}
                          >
                            {restaurant.distance}
                          </span>
                        </div>
                        <p 
                          className="text-sm"
                          style={{ 
                            color: '#6B7280',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          {restaurant.cuisine}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div 
                className="border rounded-lg p-6"
                style={{ 
                  backgroundColor: '#F8F9FF',
                  borderColor: '#D4D8E8'
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Dining Tips
                </h3>
                <ul 
                  className="space-y-2 text-sm"
                  style={{ 
                    color: '#374151',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
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
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Accessibility Information
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Accessibility style={{ color: '#29487D' }} className="mr-3" size={24} />
                    <h3 
                      className="text-xl font-semibold"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      Facility Access
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#22C55E' }}
                      ></div>
                      <span 
                        className="text-sm"
                        style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                      >
                        ADA compliant building with elevator access to all floors
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#22C55E' }}
                      ></div>
                      <span 
                        className="text-sm"
                        style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                      >
                        Accessible parking spaces in the Student Center Parking Deck
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#22C55E' }}
                      ></div>
                      <span 
                        className="text-sm"
                        style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                      >
                        Wheelchair accessible entrances and pathways
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#22C55E' }}
                      ></div>
                      <span 
                        className="text-sm"
                        style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                      >
                        Accessible restrooms on each floor
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#22C55E' }}
                      ></div>
                      <span 
                        className="text-sm"
                        style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                      >
                        All committee rooms are wheelchair accessible
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ 
                      color: '#29487D',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    Special Accommodations
                  </h3>
                  <p 
                    className="mb-4"
                    style={{ 
                      color: '#6B7280',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    We are committed to ensuring all delegates can fully participate in GSUMUN. 
                    Please contact us if you need any special accommodations.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 
                        className="font-medium mb-2"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Available Services
                      </h4>
                      <ul 
                        className="text-sm mt-2 space-y-1"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        <li>• Large print materials</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Transportation Accessibility
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 
                      className="font-medium mb-2"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      MARTA Rail
                    </h4>
                    <p 
                      className="text-sm"
                      style={{ 
                        color: '#6B7280',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      All MARTA stations are wheelchair accessible with elevators and tactile guidance systems.
                    </p>
                  </div>
                  <div>
                    <h4 
                      className="font-medium mb-2"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      Rideshare
                    </h4>
                    <p 
                      className="text-sm"
                      style={{ 
                        color: '#6B7280',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      Both Uber and Lyft offer wheelchair accessible vehicle options in Atlanta.
                    </p>
                  </div>
                  <div>
                    <h4 
                      className="font-medium mb-2"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      Taxi Services
                    </h4>
                    <p 
                      className="text-sm"
                      style={{ 
                        color: '#6B7280',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      Several taxi companies provide wheelchair accessible vehicles with advance booking.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="border rounded-lg p-6"
                style={{ 
                  backgroundColor: '#F1F5F9',
                  borderColor: '#CBD5E1'
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Request Accommodations
                </h3>
                <p 
                  className="text-sm mb-3"
                  style={{ 
                    color: '#374151',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  To ensure we can provide the accommodations you need, please contact us at least 
                  2 weeks before the conference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:accessibility@gsumun.org" 
                    className="px-4 py-2 rounded text-center font-medium transition-all duration-200"
                    style={{ 
                      backgroundColor: '#29487D',
                      color: 'white',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#3C5898'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#29487D'}
                  >
                    Email Accessibility Team
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* White line separator before footer */}
      <div 
        className="w-full h-px"
        style={{ backgroundColor: 'white' }}
      ></div>
    </div>
  );
};

export default VenuePage;