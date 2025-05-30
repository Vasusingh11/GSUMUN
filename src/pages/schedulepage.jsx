import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Filter, Search, ChevronDown, ChevronRight, Download, Coffee, Users, UserCheck, Speech, Award } from 'lucide-react';

const SchedulePage = () => {
  // State for active tab and filters
  const [activeDay, setActiveDay] = useState('day1');
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    sessionType: [],
    committee: []
  });
  
  // Conference dates
  const conferenceDates = {
    day1: 'November 5, 2025',
    day2: 'November 6, 2025'
  };
  
  // Session types with icons
  const sessionTypes = {
    general: { name: 'General Session', icon: <Users size={16} /> },
    committee: { name: 'Committee Session', icon: <Speech size={16} /> },
    break: { name: 'Break', icon: <Coffee size={16} /> },
    registration: { name: 'Registration', icon: <UserCheck size={16} /> },
    ceremony: { name: 'Ceremony', icon: <Award size={16} /> },
    training: { name: 'Training', icon: <Users size={16} /> },
    social: { name: 'Social Event', icon: <Users size={16} /> }
  };
  
  // Updated schedule data based on the PDF
  const scheduleData = {
    day1: [
      {
        id: 'd1_1',
        time: '7:00 AM - 8:45 AM',
        title: 'Registration',
        location: 'GSU Student Center East Lobby',
        type: 'registration',
        description: 'Registration and check-in for all delegates and faculty advisors.',
        committees: []
      },
      {
        id: 'd1_2',
        time: '7:45 AM - 8:15 AM',
        title: 'Conference Training',
        location: 'GSU Speakers Auditorium',
        type: 'training',
        description: 'Training session for new delegates and overview of MUN procedures.',
        committees: []
      },
      {
        id: 'd1_3',
        time: '8:30 AM - 9:15 AM',
        title: 'Opening Ceremony',
        location: 'State Salon',
        type: 'ceremony',
        description: 'Welcome addresses from the Secretary-General and guest speakers.',
        committees: []
      },
      {
        id: 'd1_4',
        time: '9:30 AM - 12:45 PM',
        title: 'Committee Session 1: Group A',
        location: 'Various Committee Rooms',
        type: 'committee',
        description: 'First committee session focusing on setting the agenda and opening speeches.',
        committees: ['Group A']
      },
      {
        id: 'd1_5',
        time: '9:30 AM - 1:00 PM',
        title: 'Committee Session 1: Group B',
        location: 'Various Committee Rooms',
        type: 'committee',
        description: 'First committee session focusing on setting the agenda and opening speeches.',
        committees: ['Group B']
      },
      {
        id: 'd1_6',
        time: '12:45 PM - 2:00 PM',
        title: 'Lunch Segment A',
        location: 'Student Center Dining Hall',
        type: 'break',
        description: 'Lunch provided for Group A delegates and advisors.',
        committees: ['Group A']
      },
      {
        id: 'd1_7',
        time: '1:00 PM - 2:00 PM',
        title: 'Lunch Segment B',
        location: 'Student Center Dining Hall',
        type: 'break',
        description: 'Lunch provided for Group B delegates and advisors.',
        committees: ['Group B']
      },
      {
        id: 'd1_8',
        time: '2:00 PM - 4:30 PM',
        title: 'Committee Session 2',
        location: 'Various Committee Rooms',
        type: 'committee',
        description: 'Working session for debate and resolution drafting.',
        committees: ['All Groups']
      }
    ],
    day2: [
      {
        id: 'd2_1',
        time: '8:30 AM - 12:00 PM',
        title: 'Committee Session 3: Group A',
        location: 'Various Committee Rooms',
        type: 'committee',
        description: 'Draft resolution finalization and voting procedures.',
        committees: ['Group A']
      },
      {
        id: 'd2_2',
        time: '9:00 AM - 1:00 PM',
        title: 'Committee Session 3: Group B',
        location: 'Various Committee Rooms',
        type: 'committee',
        description: 'Draft resolution finalization and voting procedures.',
        committees: ['Group B']
      },
      {
        id: 'd2_3',
        time: '11:00 AM - 11:45 AM',
        title: 'Meet the Secretariat',
        location: 'Golden Key Room',
        type: 'social',
        description: 'Informal session to meet and interact with the Secretariat team.',
        committees: []
      },
      {
        id: 'd2_4',
        time: '12:00 PM - 1:30 PM',
        title: 'Lunch Segment A',
        location: 'Student Center Dining Hall',
        type: 'break',
        description: 'Lunch provided for Group A delegates and advisors.',
        committees: ['Group A']
      },
      {
        id: 'd2_5',
        time: '1:00 PM - 2:00 PM',
        title: 'Lunch Segment B',
        location: 'Student Center Dining Hall',
        type: 'break',
        description: 'Lunch provided for Group B delegates and advisors.',
        committees: ['Group B']
      },
      {
        id: 'd2_6',
        time: '1:30 PM - 4:00 PM',
        title: 'Committee Session 4: Group A',
        location: 'Various Committee Rooms',
        type: 'committee',
        description: 'Final voting procedures and committee wrap-up.',
        committees: ['Group A']
      },
      {
        id: 'd2_7',
        time: '2:00 PM - 4:00 PM',
        title: 'Committee Session 4: Group B',
        location: 'Various Committee Rooms',
        type: 'committee',
        description: 'Final voting procedures and committee wrap-up.',
        committees: ['Group B']
      },
      {
        id: 'd2_8',
        time: '4:15 PM - 5:15 PM',
        title: 'Closing Ceremony',
        location: 'State Salon',
        type: 'ceremony',
        description: 'Closing remarks from the Secretary-General and presentation of awards.',
        committees: []
      }
    ]
  };
  
  // Committee list for filtering
  const committees = [
    'Group A', 'Group B', 'All Groups'
  ];
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Toggle filter option
  const toggleFilter = (category, value) => {
    setActiveFilters(prev => {
      const updated = { ...prev };
      if (updated[category].includes(value)) {
        updated[category] = updated[category].filter(item => item !== value);
      } else {
        updated[category] = [...updated[category], value];
      }
      return updated;
    });
  };
  
  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({
      sessionType: [],
      committee: []
    });
    setSearchTerm('');
  };
  
  // Generate iCalendar file for an event
  const generateICalEvent = (event) => {
    console.log(`Adding to calendar: ${event.title}`);
    alert(`Event "${event.title}" would be added to your calendar.`);
  };
  
  // Filter schedule data based on search and filters
  const filterSchedule = (day) => {
    return scheduleData[day].filter(event => {
      // Search term filter
      const matchesSearch = 
        searchTerm === '' || 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Session type filter
      const matchesType = 
        activeFilters.sessionType.length === 0 || 
        activeFilters.sessionType.includes(event.type);
      
      // Committee filter
      const matchesCommittee = 
        activeFilters.committee.length === 0 || 
        (event.committees.length === 0 && activeFilters.committee.length === 0) ||
        event.committees.some(committee => activeFilters.committee.includes(committee));
      
      return matchesSearch && matchesType && matchesCommittee;
    });
  };
  
  // Count active filters
  const activeFilterCount = 
    activeFilters.sessionType.length + 
    activeFilters.committee.length;

  return (
    <div 
      className="min-h-screen pt-16"
      style={{ 
        background: 'linear-gradient(135deg, #F9F9F9 0%, #F5F7FA 100%)',
        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
      }}
    >
      {/* Header Section */}
      <section 
        className="text-white py-20 px-4 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #29487D 0%, #3C5898 100%)'
        }}
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill=%23ffffff fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <h1 
            className="text-5xl font-bold mb-6 leading-tight"
            style={{ 
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Conference Schedule
          </h1>
          <p 
            className="text-xl max-w-3xl mb-8 leading-relaxed opacity-90"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Plan your GSUMUN 2025 experience with our detailed conference schedule.
            Browse sessions by day, type, or committee.
          </p>
          
          {/* Schedule Download Button */}
          <a 
            href="/docs/gsumun2025-schedule.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black hover:shadow-lg px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            <Download size={20} />
            <span>Download Full Schedule (PDF)</span>
          </a>
        </div>
      </section>
      
      {/* Schedule Controls */}
      <section className="bg-white shadow-lg sticky top-16 z-20">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Day Tabs */}
          <div className="flex border-b" style={{ borderColor: '#D4D8E8' }}>
            <button
              onClick={() => setActiveDay('day1')}
              className={`py-6 px-8 text-center font-semibold relative transition-all duration-300 ${
                activeDay === 'day1'
                  ? '-mb-px'
                  : 'hover:bg-gray-50'
              }`}
              style={{
                color: activeDay === 'day1' ? '#29487D' : '#6B7280',
                borderBottom: activeDay === 'day1' ? '3px solid #29487D' : 'none',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              <div className="flex items-center gap-3">
                <Calendar size={20} />
                <div>
                  <div className="text-lg">Day 1</div>
                  <div className="text-sm font-normal opacity-75">{conferenceDates.day1}</div>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => setActiveDay('day2')}
              className={`py-6 px-8 text-center font-semibold relative transition-all duration-300 ${
                activeDay === 'day2'
                  ? '-mb-px'
                  : 'hover:bg-gray-50'
              }`}
              style={{
                color: activeDay === 'day2' ? '#29487D' : '#6B7280',
                borderBottom: activeDay === 'day2' ? '3px solid #29487D' : 'none',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              <div className="flex items-center gap-3">
                <Calendar size={20} />
                <div>
                  <div className="text-lg">Day 2</div>
                  <div className="text-sm font-normal opacity-75">{conferenceDates.day2}</div>
                </div>
              </div>
            </button>
          </div>
          
          {/* Search & Filter Controls */}
          <div className="py-6 flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search sessions, locations, or keywords..."
                className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300"
                style={{ 
                  borderColor: '#D4D8E8',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#29487D';
                  e.target.style.boxShadow = '0 0 0 3px rgba(41, 72, 125, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#D4D8E8';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            
            {/* Filter Button */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: showFilters ? '#29487D' : '#D4D8E8',
                color: showFilters ? 'white' : '#29487D',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              <Filter size={18} />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span 
                  className="text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
                  style={{ backgroundColor: '#3C5898' }}
                >
                  {activeFilterCount}
                </span>
              )}
              <ChevronDown size={16} className={`transform transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Filter Panel */}
          {showFilters && (
            <div className="pb-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Session Type Filter */}
              <div>
                <h3 
                  className="font-bold mb-4 text-lg"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Session Type
                </h3>
                <div className="space-y-3">
                  {Object.entries(sessionTypes).map(([type, { name, icon }]) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={activeFilters.sessionType.includes(type)}
                        onChange={() => toggleFilter('sessionType', type)}
                        className="rounded-md h-5 w-5 transition-colors duration-200"
                        style={{ 
                          accentColor: '#29487D'
                        }}
                      />
                      <div className="flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                        <span style={{ color: '#29487D' }}>{icon}</span>
                        <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                          {name}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Committee Filter */}
              <div>
                <h3 
                  className="font-bold mb-4 text-lg"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Committee Group
                </h3>
                <div className="space-y-3">
                  {committees.map((committee) => (
                    <label key={committee} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={activeFilters.committee.includes(committee)}
                        onChange={() => toggleFilter('committee', committee)}
                        className="rounded-md h-5 w-5 transition-colors duration-200"
                        style={{ 
                          accentColor: '#29487D'
                        }}
                      />
                      <span 
                        className="group-hover:text-blue-600 transition-colors"
                        style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                      >
                        {committee}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Clear Filters Button */}
              {activeFilterCount > 0 && (
                <div className="md:col-span-2 flex justify-end">
                  <button 
                    onClick={clearFilters}
                    className="font-semibold hover:underline transition-all duration-200"
                    style={{ 
                      color: '#29487D',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      
      {/* Schedule Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Results Count */}
          <div 
            className="mb-8 text-lg"
            style={{ 
              color: '#6B7280',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Showing {filterSchedule(activeDay).length} events for {conferenceDates[activeDay]}
          </div>
          
          {/* Schedule Timeline */}
          <div className="space-y-6">
            {filterSchedule(activeDay).map((event, index) => (
              <div 
                key={event.id} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-102"
                style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Time Column */}
                  <div 
                    className="p-6 lg:w-72 flex-shrink-0"
                    style={{ 
                      background: 'linear-gradient(135deg, #D4D8E8 0%, #E5E7EB 100%)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="p-2 rounded-full"
                        style={{ backgroundColor: '#29487D' }}
                      >
                        <Clock size={18} className="text-white" />
                      </div>
                      <span 
                        className="font-bold text-lg"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#6B7280' }} />
                      <span 
                        className="text-sm leading-relaxed"
                        style={{ 
                          color: '#6B7280',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        {event.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="p-6 flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {/* Session Type Badge */}
                      <span 
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                        style={{
                          backgroundColor: 
                            event.type === 'committee' ? '#EBF5FF' : 
                            event.type === 'break' ? '#F0FDF4' :
                            event.type === 'registration' ? '#F3E8FF' :
                            event.type === 'ceremony' ? '#FEF3C7' :
                            event.type === 'training' ? '#E0F2FE' :
                            event.type === 'social' ? '#FCE7F3' :
                            '#F3F4F6',
                          color: 
                            event.type === 'committee' ? '#1E40AF' : 
                            event.type === 'break' ? '#15803D' :
                            event.type === 'registration' ? '#7C3AED' :
                            event.type === 'ceremony' ? '#D97706' :
                            event.type === 'training' ? '#0369A1' :
                            event.type === 'social' ? '#BE185D' :
                            '#374151',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        {sessionTypes[event.type].icon}
                        <span>{sessionTypes[event.type].name}</span>
                      </span>
                      
                      {/* Committee Tags (if applicable) */}
                      {event.committees.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {event.committees.map((committee, index) => (
                            <span 
                              key={index}
                              className="rounded-full px-3 py-1 text-xs font-medium"
                              style={{ 
                                backgroundColor: '#D4D8E8',
                                color: '#29487D',
                                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                              }}
                            >
                              {committee}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Event Title */}
                    <h3 
                      className="text-2xl font-bold mb-3"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      {event.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="text-lg mb-6 leading-relaxed"
                      style={{ 
                        color: '#6B7280',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      {event.description}
                    </p>
                    
                    {/* Actions */}
                    <div className="flex justify-end">
                      <button
                        onClick={() => generateICalEvent(event)}
                        className="flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                        style={{ 
                          color: '#29487D',
                          backgroundColor: '#F8F9FF',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#29487D';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#F8F9FF';
                          e.target.style.color = '#29487D';
                        }}
                      >
                        <Calendar size={16} />
                        <span>Add to Calendar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Empty State */}
            {filterSchedule(activeDay).length === 0 && (
              <div 
                className="bg-white rounded-2xl shadow-xl p-12 text-center"
                style={{ boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex justify-center mb-6">
                  <Calendar size={64} className="text-gray-400" />
                </div>
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  No sessions found
                </h3>
                <p 
                  className="text-lg mb-6"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  No sessions match your current search criteria. Try adjusting your filters or search term.
                </p>
                <button 
                  onClick={clearFilters}
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #29487D 0%, #3C5898 100%)',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* White line separator before footer */}
      <div 
        className="w-full h-px bg-white"
      ></div>
      
      <style jsx>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default SchedulePage;