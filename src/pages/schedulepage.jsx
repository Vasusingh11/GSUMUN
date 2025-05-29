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
    ceremony: { name: 'Ceremony', icon: <Award size={16} /> }
  };
  
  // Mock schedule data (in a real app, this would come from an API or CMS)
  const scheduleData = {
    day1: [
      {
        id: 'd1_1',
        time: '08:00 - 09:30',
        title: 'Registration & Check-in',
        location: 'Student Center Lobby',
        type: 'registration',
        description: 'Registration and check-in for all delegates and faculty advisors.',
        committees: []
      },
      {
        id: 'd1_2',
        time: '09:30 - 10:30',
        title: 'Opening Ceremony',
        location: 'Student Center Ballroom',
        type: 'ceremony',
        description: 'Welcome addresses from the Secretary-General and guest speakers.',
        committees: []
      },
      {
        id: 'd1_3',
        time: '10:30 - 11:00',
        title: 'Coffee Break',
        location: 'Student Center Atrium',
        type: 'break',
        description: 'Refreshments provided for all participants.',
        committees: []
      },
      {
        id: 'd1_4',
        time: '11:00 - 13:00',
        title: 'Committee Session I',
        location: 'Various Rooms',
        type: 'committee',
        description: 'First committee session focusing on setting the agenda and opening speeches.',
        committees: ['UNSC', 'SOCHUM', 'ECOSOC', 'UNEP', 'HSC', 'WHO']
      },
      {
        id: 'd1_5',
        time: '13:00 - 14:00',
        title: 'Lunch Break',
        location: 'Student Center Dining Hall',
        type: 'break',
        description: 'Lunch provided for all delegates and advisors.',
        committees: []
      },
      {
        id: 'd1_6',
        time: '14:00 - 16:30',
        title: 'Committee Session II',
        location: 'Various Rooms',
        type: 'committee',
        description: 'Working session for debate and resolution drafting.',
        committees: ['UNSC', 'SOCHUM', 'ECOSOC', 'UNEP', 'HSC', 'WHO']
      },
      {
        id: 'd1_7',
        time: '16:30 - 17:00',
        title: 'Coffee Break',
        location: 'Student Center Atrium',
        type: 'break',
        description: 'Afternoon refreshments provided for all participants.',
        committees: []
      },
      {
        id: 'd1_8',
        time: '17:00 - 18:30',
        title: 'Committee Session III',
        location: 'Various Rooms',
        type: 'committee',
        description: 'Continued debate and working paper development.',
        committees: ['UNSC', 'SOCHUM', 'ECOSOC', 'UNEP', 'HSC', 'WHO']
      },
      {
        id: 'd1_9',
        time: '19:00 - 21:00',
        title: 'Delegate Social Event',
        location: 'Student Center Plaza',
        type: 'general',
        description: 'Networking event for all delegates with light refreshments and activities.',
        committees: []
      }
    ],
    day2: [
      {
        id: 'd2_1',
        time: '08:30 - 09:00',
        title: 'Morning Check-in',
        location: 'Student Center Lobby',
        type: 'registration',
        description: 'Check-in for Day 2 of the conference.',
        committees: []
      },
      {
        id: 'd2_2',
        time: '09:00 - 11:30',
        title: 'Committee Session IV',
        location: 'Various Rooms',
        type: 'committee',
        description: 'Draft resolution finalization and voting procedures.',
        committees: ['UNSC', 'SOCHUM', 'ECOSOC', 'UNEP', 'HSC', 'WHO']
      },
      {
        id: 'd2_3',
        time: '11:30 - 12:30',
        title: 'Lunch Break',
        location: 'Student Center Dining Hall',
        type: 'break',
        description: 'Lunch provided for all delegates and advisors.',
        committees: []
      },
      {
        id: 'd2_4',
        time: '12:30 - 14:30',
        title: 'Committee Session V',
        location: 'Various Rooms',
        type: 'committee',
        description: 'Final voting procedures and committee wrap-up.',
        committees: ['UNSC', 'SOCHUM', 'ECOSOC', 'UNEP', 'HSC', 'WHO']
      },
      {
        id: 'd2_5',
        time: '14:30 - 15:00',
        title: 'Break & Transition',
        location: 'Student Center Atrium',
        type: 'break',
        description: 'Short break before closing ceremony.',
        committees: []
      },
      {
        id: 'd2_6',
        time: '15:00 - 16:30',
        title: 'Closing Ceremony & Awards',
        location: 'Student Center Ballroom',
        type: 'ceremony',
        description: 'Closing remarks from the Secretary-General and presentation of awards.',
        committees: []
      }
    ]
  };
  
  // Committee list for filtering
  const committees = [
    'UNSC', 'SOCHUM', 'ECOSOC', 'UNEP', 'HSC', 'WHO'
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
    // In a real implementation, this would generate an .ics file that can be downloaded
    // For simplicity, we're just showing how this would work conceptually
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
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-4">Conference Schedule</h1>
          <p className="text-xl max-w-3xl mb-8">
            Plan your GSUMUN 2025 experience with our detailed conference schedule.
            Browse sessions by day, type, or committee.
          </p>
          
          {/* Schedule Download Button */}
          <a 
            href="/docs/gsumun2025-schedule.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-gray-100 px-4 py-2 rounded-md transition"
          >
            <Download size={18} />
            <span>Download Full Schedule (PDF)</span>
          </a>
        </div>
      </section>
      
      {/* Schedule Controls */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-10">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Day Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveDay('day1')}
              className={`py-4 px-6 text-center font-medium relative ${
                activeDay === 'day1'
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <div>
                  <div>Day 1</div>
                  <div className="text-sm font-normal">{conferenceDates.day1}</div>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => setActiveDay('day2')}
              className={`py-4 px-6 text-center font-medium relative ${
                activeDay === 'day2'
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <div>
                  <div>Day 2</div>
                  <div className="text-sm font-normal">{conferenceDates.day2}</div>
                </div>
              </div>
            </button>
          </div>
          
          {/* Search & Filter Controls */}
          <div className="py-4 flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search sessions, locations, or keywords..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {/* Filter Button */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition"
            >
              <Filter size={18} />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
              <ChevronDown size={16} className={`transform transition ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Filter Panel */}
          {showFilters && (
            <div className="pb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Session Type Filter */}
              <div>
                <h3 className="font-medium mb-2">Session Type</h3>
                <div className="space-y-2">
                  {Object.entries(sessionTypes).map(([type, { name, icon }]) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.sessionType.includes(type)}
                        onChange={() => toggleFilter('sessionType', type)}
                        className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">{icon}</span>
                        <span>{name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Committee Filter */}
              <div>
                <h3 className="font-medium mb-2">Committee</h3>
                <div className="space-y-2">
                  {committees.map((committee) => (
                    <label key={committee} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.committee.includes(committee)}
                        onChange={() => toggleFilter('committee', committee)}
                        className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                      />
                      <span>{committee}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Clear Filters Button */}
              {activeFilterCount > 0 && (
                <div className="md:col-span-2 flex justify-end">
                  <button 
                    onClick={clearFilters}
                    className="text-blue-600 hover:text-blue-800 font-medium"
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
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Results Count */}
          <div className="mb-6 text-gray-600">
            Showing {filterSchedule(activeDay).length} events for {conferenceDates[activeDay]}
          </div>
          
          {/* Schedule Timeline */}
          <div className="space-y-6">
            {filterSchedule(activeDay).map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Time Column */}
                  <div className="bg-gray-100 p-4 md:w-48 flex-shrink-0">
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                      <Clock size={16} />
                      <span className="font-semibold">{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="p-4 flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {/* Session Type Badge */}
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium
                        ${event.type === 'committee' ? 'bg-blue-100 text-blue-800' : 
                          event.type === 'break' ? 'bg-green-100 text-green-800' :
                          event.type === 'registration' ? 'bg-purple-100 text-purple-800' :
                          event.type === 'ceremony' ? 'bg-amber-100 text-amber-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {sessionTypes[event.type].icon}
                        <span>{sessionTypes[event.type].name}</span>
                      </span>
                      
                      {/* Committee Tags (if applicable) */}
                      {event.committees.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {event.committees.map((committee, index) => (
                            <span 
                              key={index}
                              className="bg-gray-100 text-gray-700 rounded-full px-2.5 py-0.5 text-xs font-medium"
                            >
                              {committee}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Event Title */}
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    {/* Actions */}
                    <div className="flex justify-end">
                      <button
                        onClick={() => generateICalEvent(event)}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
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
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Calendar size={48} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No sessions found</h3>
                <p className="text-gray-600 mb-4">
                  No sessions match your current search criteria. Try adjusting your filters or search term.
                </p>
                <button 
                  onClick={clearFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;