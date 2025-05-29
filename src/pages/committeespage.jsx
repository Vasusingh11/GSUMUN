import React, { useState, useEffect } from 'react';
import { Search, Download, Filter, ChevronDown, Users, BookOpen, FileText, AlertTriangle } from 'lucide-react';

const CommitteesPage = () => {
  // State for search, filters, and active committee
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    level: [],
    topic: [],
    type: []
  });
  const [showFilters, setShowFilters] = useState(false);
  const [activeCommittee, setActiveCommittee] = useState(null);
  
  // Updated committee data with GSUMUN 2025 information
  const committees = [
    {
      id: 1,
      name: 'General Assembly Third Committee',
      shortName: 'GA3',
      type: 'Large Committee',
      level: 'Intermediate',
      topics: ['Indigenous Rights', 'Climate Change', 'Human Rights'],
      description: 'The Third Committee addresses social, humanitarian affairs and human rights questions that affect peoples all over the world.',
      image: '/images/committees/ga3.jpg',
      backgroundGuide: '/docs/background-guides/GA3.pdf',
      resourceGuide: '/docs/resource-guides/GA3.pdf',
      detailedTopics: [
        {
          title: "Protecting the rights and welfare of indigenous communities during climate change crises",
          sdgs: ["SDG 13", "SDG 14", "SDG 15"]
        },
        {
          title: "Reaffirming the human right against arbitrary arrest, detention or exile during political crisis",
          sdgs: ["SDG 16"]
        }
      ],
      chairs: [
        {
          name: 'Valeria Chavez',
          position: 'Director',
          image: '',
          bio: 'Valeria leads the GA3 committee focusing on human rights and climate change impacts on indigenous communities.',
          email: 'valchavez17@gmail.com',
          phone: '(470) 702-7037'
        },
        {
          name: 'Camoria Tucker',
          position: 'Assistant Director',
          image: '',
          bio: 'Camoria assists in managing GA3 committee operations and delegate guidance.',
          email: 'Ctucker37@student.gsu.edu',
          phone: '478-251-4458'
        }
      ]
    },
    {
      id: 2,
      name: 'General Assembly Fourth Committee',
      shortName: 'GA4',
      type: 'Large Committee',
      level: 'Advanced',
      topics: ['Decolonization', 'Peacekeeping', 'Colonial Legacy'],
      description: 'The Fourth Committee considers questions relating to decolonization, peacekeeping, outer space, atomic radiation, and University for Peace.',
      image: '/images/committees/ga4.jpg',
      backgroundGuide: '/docs/background-guides/GA4.pdf',
      resourceGuide: '/docs/resource-guides/GA4.pdf',
      detailedTopics: [
        {
          title: "Addressing the Legacy of Colonial-Era Borders in Modern Conflict Zones",
          sdgs: []
        },
        {
          title: "Improving Mandate Clarity and Accountability in UN Peacekeeping Operations",
          sdgs: [],
          subtopic: "The Use of Private Military Contractors in Peacekeeping Operations"
        }
      ],
      chairs: [
        {
          name: 'Vasu Singh',
          position: 'Director',
          image: '',
          bio: 'Vasu specializes in decolonization issues and peacekeeping operations with focus on colonial-era border conflicts.',
          email: 'mr.vasusingh@gmail.com',
          phone: '(404) 429-8213'
        },
        {
          name: 'Ashley Moore',
          position: 'Assistant Director',
          image: '',
          bio: 'Ashley supports GA4 operations with expertise in UN peacekeeping mandate clarity and accountability.',
          email: 'ashley000411@gmail.com',
          phone: '470-216-4855'
        }
      ]
    },
    {
      id: 3,
      name: 'United Nations Environment Assembly',
      shortName: 'UNEA',
      type: 'Large Committee',
      level: 'Intermediate',
      topics: ['Environmental Rights', 'Indigenous Rights', 'Water Scarcity'],
      description: 'UNEA is the world\'s highest-level decision-making body on the environment, addressing critical environmental challenges.',
      image: '/images/committees/unea.jpg',
      backgroundGuide: '/docs/background-guides/UNEA.pdf',
      resourceGuide: '/docs/resource-guides/UNEA.pdf',
      detailedTopics: [
        {
          title: "Addressing violence, displacement, and rights violations against Indigenous communities and environmental activists, especially in areas affected by mining, deforestation, and land grabs",
          sdgs: []
        },
        {
          title: "Promoting human rights by addressing water scarcity and sanitation issues worsened by droughts, floods, and industrial pollution, particularly in marginalized communities",
          sdgs: []
        }
      ],
      chairs: [
        {
          name: 'Shabnam Habibi Faiz',
          position: 'Director',
          image: '',
          bio: 'Shabnam focuses on environmental activism protection and water scarcity issues affecting marginalized communities.',
          email: 'faiz.shabnam@yahoo.com',
          phone: '(770) 658-9437'
        },
        {
          name: 'Gracie Mendenhall',
          position: 'Assistant Director',
          image: '',
          bio: 'Gracie assists with UNEA operations specializing in indigenous environmental rights and community protection.',
          email: 'lmendenhall2@student.gsu.edu',
          phone: '916-533-1053'
        }
      ]
    },
    {
      id: 4,
      name: 'World Health Organization',
      shortName: 'WHO',
      type: 'Large Committee',
      level: 'Intermediate',
      topics: ['Global Health Security', 'Pandemic Preparedness', 'Healthcare Workers'],
      description: 'WHO directs and coordinates international health within the United Nations system, addressing global health challenges.',
      image: '/images/committees/who.jpg',
      backgroundGuide: '/docs/background-guides/WHO.pdf',
      resourceGuide: '/docs/resource-guides/WHO.pdf',
      detailedTopics: [
        {
          title: "Establishing and refining pandemic and epidemic protocols in regards to meeting the 2030 agenda",
          sdgs: []
        },
        {
          title: "Ensuring and upholding safe practices for healthcare workers during times of conflict",
          sdgs: []
        }
      ],
      chairs: [
        {
          name: 'Samuel Jeffery Bransfield',
          position: 'Director',
          image: '',
          bio: 'Samuel leads WHO committee with focus on pandemic protocols and healthcare worker safety during conflicts.',
          email: 'sambrans180@gmail.com',
          phone: '(912) 271-4199'
        },
        {
          name: 'Hamdi Abdilmalik Mursal',
          position: 'Assistant Director',
          image: '',
          bio: 'Hamdi supports WHO operations specializing in global health security and epidemic response protocols.',
          email: 'Hamdi.gca@gmail.com',
          phone: '404-518-7682'
        }
      ]
    },
    {
      id: 5,
      name: 'African Union',
      shortName: 'AU',
      type: 'Midsize Committee',
      level: 'Intermediate',
      topics: ['Human Rights', 'Continental Integration', 'Conflict Resolution'],
      description: 'The African Union promotes unity, solidarity, cohesion and cooperation among African peoples and African states.',
      image: '/images/committees/au.jpg',
      backgroundGuide: '/docs/background-guides/AU.pdf',
      resourceGuide: '/docs/resource-guides/AU.pdf',
      detailedTopics: [
        {
          title: "Advancing Human Rights in Conflict-Affected Zones: Protecting Civilians, Migrants, and Internally Displaced Persons (IDPs)",
          sdgs: []
        },
        {
          title: "Strengthening Continental Integration Through Infrastructure Development and Cross-Border Cooperation",
          sdgs: []
        }
      ],
      chairs: [
        {
          name: 'Soha Kaviani',
          position: 'Director',
          image: '',
          bio: 'Soha leads the AU committee focusing on human rights in conflict zones and continental integration efforts.',
          email: 'sohakaviani@yahoo.com',
          phone: '(678) 274-8576'
        },
        {
          name: 'Daphne Mondesir',
          position: 'Assistant Director',
          image: '',
          bio: 'Daphne assists AU operations with expertise in infrastructure development and cross-border cooperation.',
          email: 'Daphnemondesir01@gmail.com',
          phone: '770-286-8766'
        }
      ]
    },
    {
      id: 6,
      name: 'UN High Commissioner for Refugees',
      shortName: 'UNHCR',
      type: 'Midsize Committee',
      level: 'Beginner',
      topics: ['Refugee Rights', 'Gender-Based Violence', 'Climate Displacement'],
      description: 'UNHCR protects refugees worldwide and facilitates their voluntary repatriation, local integration or resettlement.',
      image: '/images/committees/unhcr.jpg',
      backgroundGuide: '/docs/background-guides/UNHCR.pdf',
      resourceGuide: '/docs/resource-guides/UNHCR.pdf',
      detailedTopics: [
        {
          title: "Gender-Based Violence in Refugee Camps During Humanitarian Emergencies",
          sdgs: []
        },
        {
          title: "Ensuring the Rights and Safety of Climate-Displaced Populations",
          sdgs: []
        }
      ],
      chairs: [
        {
          name: 'Derrol Alexis',
          position: 'Director',
          image: '',
          bio: 'Derrol leads UNHCR committee focusing on gender-based violence in refugee camps and climate displacement issues.',
          email: 'derrol01alexis@gmail.com',
          phone: '(646) 752-1424'
        },
        {
          name: 'Jannah Majeed',
          position: 'Assistant Director',
          image: '',
          bio: 'Jannah assists UNHCR operations specializing in refugee rights and climate-displaced population protection.',
          email: 'jannah.majeed2794@gmail.com',
          phone: '678-333-9704'
        }
      ]
    },
    {
      id: 7,
      name: 'UN Special Committee on Palestine (Historical)',
      shortName: 'UNSCOP',
      type: 'Crisis Committee',
      level: 'Advanced',
      topics: ['Palestine Mandate', 'Historical Simulation', 'Crisis Management'],
      description: 'A historical committee examining the 1947 UN Special Committee on Palestine and the future of the Mandate of Palestine.',
      image: '/images/committees/unscop.jpg',
      backgroundGuide: '/docs/background-guides/UNSCOP.pdf',
      resourceGuide: '/docs/resource-guides/UNSCOP.pdf',
      detailedTopics: [
        {
          title: "Determining the future of the Mandate of Palestine",
          sdgs: [],
          special: [
            "Periodic updates every couple hours that represent months of progress",
            "BGG will include two sides: Arab and Jewish perspective"
          ]
        }
      ],
      chairs: [
        {
          name: 'Naksha Kashyap',
          position: 'Director',
          image: '',
          bio: 'Naksha leads the historical UNSCOP committee with expertise in crisis simulation and historical analysis.',
          email: 'Nakshapk14@gmail.com',
          phone: '470-328-0923'
        },
        {
          name: 'Dylan',
          position: 'Assistant Director',
          image: '',
          bio: 'Dylan assists with UNSCOP historical simulation and crisis management operations.',
          email: 'dylan@gsumun.org',
          phone: ''
        },
        {
          name: 'Ryan',
          position: 'Advisor',
          image: '',
          bio: 'Ryan provides strategic guidance for the UNSCOP historical committee simulation.',
          email: 'ryan@gsumun.org',
          phone: ''
        }
      ]
    },
    {
      id: 8,
      name: 'Security Council',
      shortName: 'SC',
      type: 'Small Committee',
      level: 'Advanced',
      topics: ['International Security', 'Haiti Crisis', 'Yemen Conflict'],
      description: 'The Security Council maintains international peace and security, with primary responsibility for determining threats to peace.',
      image: '/images/committees/sc.jpg',
      backgroundGuide: '/docs/background-guides/SC.pdf',
      resourceGuide: '/docs/resource-guides/SC.pdf',
      detailedTopics: [
        {
          title: "Situation in Haiti",
          subtitle: "Restoring Governance and Civil Protection in Haiti Amid Gang Violence",
          sdgs: ["SDG 1", "SDG 2", "SDG 4", "SDG 16"]
        },
        {
          title: "Situation in Yemen",
          subtitle: "Reinforcing the Ceasefire and Addressing the Use of Starvation as a Method of War in Yemen",
          sdgs: ["SDG 2", "SDG 3", "SDG 6"]
        }
      ],
      chairs: [
        {
          name: 'Kaylee Owens',
          position: 'Director',
          image: '',
          bio: 'Kaylee leads the Security Council focusing on current crises in Haiti and Yemen with emphasis on governance and humanitarian issues.',
          email: 'kayleeowns4@gmail.com',
          phone: '470-278-3488'
        }
      ]
    }
  ];
  
  // Filter options
  const filterOptions = {
    level: ['Beginner', 'Intermediate', 'Advanced'],
    topic: ['Human Rights', 'Indigenous Rights', 'Climate Change', 'Environmental Rights', 'Water Scarcity', 'Global Health Security', 'Pandemic Preparedness', 'Healthcare Workers', 'Decolonization', 'Peacekeeping', 'Colonial Legacy', 'Continental Integration', 'Conflict Resolution', 'Refugee Rights', 'Gender-Based Violence', 'Climate Displacement', 'Palestine Mandate', 'Historical Simulation', 'Crisis Management', 'International Security', 'Haiti Crisis', 'Yemen Conflict'],
    type: ['Large Committee', 'Midsize Committee', 'Small Committee', 'Crisis Committee']
  };
  
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
      level: [],
      topic: [],
      type: []
    });
    setSearchTerm('');
  };
  
  // Toggle committee details
  const toggleCommittee = (committeeId) => {
    setActiveCommittee(activeCommittee === committeeId ? null : committeeId);
  };
  
  // Filter committees based on search and filters
  const filteredCommittees = committees.filter(committee => {
    // Search term filter
    const matchesSearch = 
      searchTerm === '' || 
      committee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      committee.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      committee.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      committee.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Level filter
    const matchesLevel = 
      activeFilters.level.length === 0 || 
      activeFilters.level.includes(committee.level);
    
    // Topic filter
    const matchesTopic = 
      activeFilters.topic.length === 0 || 
      committee.topics.some(topic => activeFilters.topic.includes(topic));
    
    // Type filter
    const matchesType = 
      activeFilters.type.length === 0 || 
      activeFilters.type.includes(committee.type);
    
    return matchesSearch && matchesLevel && matchesTopic && matchesType;
  });
  
  // Count active filters
  const activeFilterCount = 
    activeFilters.level.length + 
    activeFilters.topic.length + 
    activeFilters.type.length;

  return (
    <div className="min-h-screen bg-blue-50 pt-16 font-helvetica-light">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-4 font-sf-pro-display">Committees</h1>
          <p className="text-xl max-w-3xl mb-8 font-helvetica-light">
            GSUMUN 2025 features a diverse range of committees addressing critical global issues.
            Explore our committees below to find detailed information, background guides, and chair details.
          </p>
          
          {/* Search & Filter Controls */}
          <div className="bg-white rounded-lg shadow-md p-4 text-gray-800">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search committees, topics, or keywords..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-helvetica-light"
                />
              </div>
              
              {/* Filter Button */}
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition font-sf-pro-rounded"
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
              <div className="mt-4 border-t border-gray-200 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Experience Level Filter */}
                <div>
                  <h3 className="font-medium mb-2 font-sf-pro-rounded">Experience Level</h3>
                  <div className="space-y-2">
                    {filterOptions.level.map((level) => (
                      <label key={level} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.level.includes(level)}
                          onChange={() => toggleFilter('level', level)}
                          className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                        />
                        <span className="font-helvetica-light">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Topics Filter */}
                <div>
                  <h3 className="font-medium mb-2 font-sf-pro-rounded">Topics</h3>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {filterOptions.topic.map((topic) => (
                      <label key={topic} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.topic.includes(topic)}
                          onChange={() => toggleFilter('topic', topic)}
                          className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                        />
                        <span className="font-helvetica-light">{topic}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Committee Type Filter */}
                <div>
                  <h3 className="font-medium mb-2 font-sf-pro-rounded">Committee Type</h3>
                  <div className="space-y-2">
                    {filterOptions.type.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                        />
                        <span className="font-helvetica-light">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Clear Filters Button */}
                {activeFilterCount > 0 && (
                  <div className="md:col-span-3 flex justify-end">
                    <button 
                      onClick={clearFilters}
                      className="text-blue-600 hover:text-blue-800 font-medium font-sf-pro-rounded"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Committees List */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Results Count */}
          <div className="mb-6 text-gray-600 font-helvetica-light">
            Showing {filteredCommittees.length} {filteredCommittees.length === 1 ? 'committee' : 'committees'}
          </div>
          
          {/* No Results Message */}
          {filteredCommittees.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <AlertTriangle size={48} className="text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-sf-pro-display">No committees found</h3>
              <p className="text-gray-600 mb-4 font-helvetica-light">
                No committees match your current search criteria. Try adjusting your filters or search term.
              </p>
              <button 
                onClick={clearFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition font-sf-pro-rounded"
              >
                Clear all filters
              </button>
            </div>
          )}
          
          {/* Committee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommittees.map((committee) => (
              <div 
                key={committee.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
              >
                {/* Committee Image */}
                <div 
                  className="h-40 bg-blue-700 relative"
                  style={{
                    backgroundImage: committee.image ? `url(${committee.image})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <span className="inline-block bg-blue-600 text-xs font-semibold px-2 py-1 rounded-md mb-2 font-sf-pro-rounded">
                      {committee.level}
                    </span>
                    <h3 className="text-lg font-bold font-sf-pro-display">{committee.shortName}</h3>
                  </div>
                </div>
                
                {/* Committee Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 font-sf-pro-display">{committee.name}</h3>
                  
                  {/* Topics */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1 font-sf-pro-rounded">Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {committee.topics.map((topic, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-helvetica-light"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Button Row */}
                  <div className="flex gap-2 mb-4">
                    <a 
                      href={committee.backgroundGuide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-md flex-1 transition font-sf-pro-rounded"
                    >
                      <BookOpen size={16} />
                      <span>Background Guide</span>
                    </a>
                    <a 
                      href={committee.resourceGuide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-2 rounded-md transition"
                    >
                      <Download size={16} />
                    </a>
                  </div>
                  
                  {/* Toggle Details Button */}
                  <button
                    onClick={() => toggleCommittee(committee.id)}
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-md transition font-sf-pro-rounded"
                  >
                    <Users size={16} />
                    <span>{activeCommittee === committee.id ? 'Hide Details' : 'Show Committee Details'}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transform transition ${activeCommittee === committee.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
                
                {/* Expanded Details */}
                {activeCommittee === committee.id && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    {/* Description */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 font-sf-pro-rounded">Description</h4>
                      <p className="text-gray-700 text-sm font-helvetica-light">{committee.description}</p>
                    </div>

                    {/* Detailed Topics */}
                    {committee.detailedTopics && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-3 font-sf-pro-rounded">Committee Topics</h4>
                        <div className="space-y-2">
                          {committee.detailedTopics.map((topic, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs font-bold font-sf-pro-rounded">{index + 1}</span>
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-medium text-gray-800 text-sm leading-snug mb-2 font-sf-pro-display">
                                    {topic.title}
                                  </h5>
                                  {topic.subtitle && (
                                    <div className="bg-blue-50 p-2 rounded-md mb-2">
                                      <p className="text-blue-700 text-xs font-helvetica-light italic">
                                        "{topic.subtitle}"
                                      </p>
                                    </div>
                                  )}
                                  {topic.subtopic && (
                                    <div className="bg-indigo-50 p-2 rounded-md mb-2">
                                      <p className="text-indigo-700 text-xs font-helvetica-light">
                                        <span className="font-medium">Subtopic:</span> {topic.subtopic}
                                      </p>
                                    </div>
                                  )}
                                  {topic.special && (
                                    <div className="bg-purple-50 p-2 rounded-md mb-2">
                                      <p className="text-purple-700 text-xs font-medium mb-1 font-sf-pro-rounded">Special Format:</p>
                                      {topic.special.map((item, idx) => (
                                        <p key={idx} className="text-purple-600 text-xs font-helvetica-light">
                                          • {item}
                                        </p>
                                      ))}
                                    </div>
                                  )}
                                  {topic.sdgs && topic.sdgs.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-2">
                                      <span className="text-xs text-gray-500 font-sf-pro-rounded mr-1">Related SDGs:</span>
                                      {topic.sdgs.map((sdg, sdgIndex) => (
                                        <span key={sdgIndex} className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-helvetica-light">
                                          {sdg}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Chairs */}
                    <div>
                      <h4 className="font-semibold mb-2 font-sf-pro-rounded">Committee Leadership</h4>
                      <div className="space-y-4">
                        {committee.chairs.map((chair, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div 
                              className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden flex items-center justify-center"
                            >
                              {chair.image ? (
                                <img 
                                  src={chair.image} 
                                  alt={chair.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <Users size={24} className="text-gray-500" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium font-sf-pro-display">{chair.name}</div>
                              <div className="text-sm text-gray-600 font-sf-pro-rounded">{chair.position}</div>
                              <a 
                                href={`mailto:${chair.email}`}
                                className="text-sm text-blue-600 hover:text-blue-800 font-helvetica-light"
                              >
                                {chair.email}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommitteesPage;