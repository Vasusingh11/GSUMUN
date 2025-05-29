import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Search, ChevronDown, ChevronRight, BookOpen, Shield, GraduationCap, User } from 'lucide-react';

const ResourcesPage = () => {
  // State for active tab and search
  const [activeTab, setActiveTab] = useState('delegates');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedGuides, setExpandedGuides] = useState({});
  
  // Mock resource data (in a real app, this would come from an API or CMS)
  const resources = {
    delegates: [
      {
        id: 'delegate-guide',
        title: 'Delegate Guide',
        description: 'Comprehensive guide for delegates including preparation, research, and conference strategies.',
        fileSize: '2.4 MB',
        format: 'PDF',
        lastUpdated: 'September 15, 2025',
        downloadUrl: '/resources/delegate-guide-2025.pdf',
        thumbnail: '/images/resources/delegate-guide-thumb.jpg',
        sections: [
          'Introduction to Model UN',
          'Research and Preparation',
          'Position Papers',
          'Public Speaking',
          'Rules of Procedure',
          'Resolution Writing',
          'Conference Etiquette',
          'Awards Criteria'
        ]
      },
      {
        id: 'position-paper',
        title: 'Position Paper Template',
        description: 'Official template and guidelines for writing effective position papers.',
        fileSize: '450 KB',
        format: 'DOCX',
        lastUpdated: 'August 10, 2025',
        downloadUrl: '/resources/position-paper-template-2025.docx',
        thumbnail: '/images/resources/position-paper-thumb.jpg',
        sections: [
          'Position Paper Format',
          'Topic Analysis Guidelines',
          'Policy Statement Structure',
          'Citations and References',
          'Submission Guidelines'
        ]
      },
      {
        id: 'country-research',
        title: 'Country Research Guide',
        description: 'Strategies and resources for researching your assigned country effectively.',
        fileSize: '1.8 MB',
        format: 'PDF',
        lastUpdated: 'August 22, 2025',
        downloadUrl: '/resources/country-research-guide-2025.pdf',
        thumbnail: '/images/resources/country-research-thumb.jpg',
        sections: [
          'Government Structure',
          'Foreign Policy Analysis',
          'Economic Indicators',
          'Historical Context',
          'Regional Alliances',
          'Voting Patterns',
          'Research Resources'
        ]
      },
      {
        id: 'resolution-writing',
        title: 'Resolution Writing Workshop',
        description: 'Materials from our resolution writing workshop with templates and examples.',
        fileSize: '3.2 MB',
        format: 'PDF',
        lastUpdated: 'September 1, 2025',
        downloadUrl: '/resources/resolution-writing-2025.pdf',
        thumbnail: '/images/resources/resolution-writing-thumb.jpg',
        sections: [
          'Resolution Structure',
          'Preambulatory Clauses',
          'Operative Clauses',
          'Amendment Process',
          'Sample Resolutions',
          'Common Mistakes'
        ]
      },
      {
        id: 'awards-criteria',
        title: 'Awards Criteria',
        description: 'Detailed explanation of the criteria used for delegate and delegation awards.',
        fileSize: '520 KB',
        format: 'PDF',
        lastUpdated: 'September 10, 2025',
        downloadUrl: '/resources/awards-criteria-2025.pdf',
        thumbnail: '/images/resources/awards-criteria-thumb.jpg',
        sections: [
          'Position Paper Evaluation',
          'Diplomatic Conduct',
          'Public Speaking',
          'Resolution Contribution',
          'Parliamentary Procedure',
          'Overall Participation'
        ]
      }
    ],
    faculty: [
      {
        id: 'faculty-guide',
        title: 'Faculty Advisor Guide',
        description: 'Essential information for faculty advisors including registration, preparation, and chaperoning.',
        fileSize: '3.1 MB',
        format: 'PDF',
        lastUpdated: 'August 5, 2025',
        downloadUrl: '/resources/faculty-guide-2025.pdf',
        thumbnail: '/images/resources/faculty-guide-thumb.jpg',
        sections: [
          'Advisor Responsibilities',
          'Delegation Management',
          'Student Preparation',
          'Conference Logistics',
          'Accommodation Information',
          'Emergency Protocols',
          'Post-Conference Debrief'
        ]
      },
      {
        id: 'school-registration',
        title: 'School Registration Packet',
        description: 'All forms and information needed for registering your school for GSUMUN.',
        fileSize: '1.7 MB',
        format: 'PDF',
        lastUpdated: 'July 15, 2025',
        downloadUrl: '/resources/school-registration-2025.pdf',
        thumbnail: '/images/resources/school-registration-thumb.jpg',
        sections: [
          'Registration Timeline',
          'Fee Structure',
          'Required Forms',
          'Delegation Size Guidelines',
          'Payment Instructions',
          'Cancellation Policy'
        ]
      },
      {
        id: 'travel-logistics',
        title: 'Travel & Logistics Guide',
        description: 'Information on accommodations, transportation, parking, and campus facilities.',
        fileSize: '2.2 MB',
        format: 'PDF',
        lastUpdated: 'August 30, 2025',
        downloadUrl: '/resources/travel-logistics-2025.pdf',
        thumbnail: '/images/resources/travel-logistics-thumb.jpg',
        sections: [
          'Hotel Recommendations',
          'Campus Map',
          'Parking Information',
          'Public Transportation',
          'Local Dining Options',
          'Weather Considerations'
        ]
      },
      {
        id: 'advisor-checklist',
        title: 'Advisor Conference Checklist',
        description: 'Comprehensive checklist to ensure you\'re prepared for the conference.',
        fileSize: '380 KB',
        format: 'PDF',
        lastUpdated: 'September 20, 2025',
        downloadUrl: '/resources/advisor-checklist-2025.pdf',
        thumbnail: '/images/resources/advisor-checklist-thumb.jpg',
        sections: [
          'Pre-Conference Preparation',
          'Conference Day Items',
          'Student Documentation',
          'Communication Plan',
          'Post-Conference Tasks'
        ]
      }
    ],
    rules: [
      {
        id: 'rules-procedure',
        title: 'Rules of Procedure',
        description: 'Official GSUMUN rules of procedure for all committees.',
        fileSize: '1.9 MB',
        format: 'PDF',
        lastUpdated: 'August 1, 2025',
        downloadUrl: '/resources/rules-procedure-2025.pdf',
        thumbnail: '/images/resources/rules-procedure-thumb.jpg',
        sections: [
          'Committee Structure',
          'Debate Format',
          'Points and Motions',
          'Voting Procedures',
          'Resolution Process',
          'Amendment Rules',
          'Special Rules for Crisis Committees'
        ]
      },
      {
        id: 'motions-guide',
        title: 'Motions Quick Reference',
        description: 'Quick reference guide for common motions, points, and their precedence.',
        fileSize: '420 KB',
        format: 'PDF',
        lastUpdated: 'August 15, 2025',
        downloadUrl: '/resources/motions-guide-2025.pdf',
        thumbnail: '/images/resources/motions-guide-thumb.jpg',
        sections: [
          'Procedural Motions',
          'Substantive Motions',
          'Points (Inquiry, Order, etc.)',
          'Precedence Chart',
          'Required Majorities'
        ]
      },
      {
        id: 'crisis-procedures',
        title: 'Crisis Committee Procedures',
        description: 'Special rules and procedures for crisis committees.',
        fileSize: '1.5 MB',
        format: 'PDF',
        lastUpdated: 'August 25, 2025',
        downloadUrl: '/resources/crisis-procedures-2025.pdf',
        thumbnail: '/images/resources/crisis-procedures-thumb.jpg',
        sections: [
          'Crisis Committee Structure',
          'Directive Writing',
          'Crisis Notes',
          'Portfolio Powers',
          'Joint Crisis Committees',
          'Crisis Arc Development'
        ]
      }
    ]
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Toggle expanded state for a guide
  const toggleExpanded = (id) => {
    setExpandedGuides(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Filter resources based on search
  const filteredResources = resources[activeTab].filter(resource => {
    if (searchTerm === '') return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      resource.title.toLowerCase().includes(searchLower) ||
      resource.description.toLowerCase().includes(searchLower) ||
      resource.sections.some(section => section.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-xl max-w-3xl mb-8">
            Access guides, templates, and reference materials to prepare for GSUMUN 2025.
            These resources are designed to help delegates, faculty advisors, and staff members prepare effectively.
          </p>
        </div>
      </section>
      
      {/* Tabs and Search Controls */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-10">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('delegates')}
              className={`py-4 px-6 text-center font-medium relative flex items-center gap-2 ${
                activeTab === 'delegates'
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <User size={18} />
              <span>Delegate Resources</span>
            </button>
            
            <button
              onClick={() => setActiveTab('faculty')}
              className={`py-4 px-6 text-center font-medium relative flex items-center gap-2 ${
                activeTab === 'faculty'
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <GraduationCap size={18} />
              <span>Faculty Resources</span>
            </button>
            
            <button
              onClick={() => setActiveTab('rules')}
              className={`py-4 px-6 text-center font-medium relative flex items-center gap-2 ${
                activeTab === 'rules'
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Shield size={18} />
              <span>Rules of Procedure</span>
            </button>
          </div>
          
          {/* Search Input */}
          <div className="py-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={`Search ${activeTab === 'delegates' ? 'delegate' : activeTab === 'faculty' ? 'faculty' : 'rules'} resources...`}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Section Title */}
          <h2 className="text-2xl font-bold mb-6">
            {activeTab === 'delegates' 
              ? 'Delegate Preparation Materials' 
              : activeTab === 'faculty'
              ? 'Faculty Advisor Resources'
              : 'Rules & Procedures'
            }
          </h2>
          
          {/* Resources Count */}
          <div className="mb-6 text-gray-600">
            Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
          </div>
          
          {/* Empty State */}
          {filteredResources.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <FileText size={48} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-gray-600 mb-4">
                No resources match your search term. Try using different keywords or browse all resources.
              </p>
              <button 
                onClick={() => setSearchTerm('')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
              >
                Clear search
              </button>
            </div>
          )}
          
          {/* Resources List */}
          <div className="space-y-6">
            {filteredResources.map((resource) => (
              <div 
                key={resource.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Thumbnail */}
                  <div 
                    className="md:w-48 h-40 md:h-auto bg-gray-300 flex-shrink-0"
                    style={{
                      backgroundImage: `url(${resource.thumbnail})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md font-medium">
                        {resource.format}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    
                    {/* Resource Meta */}
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mb-4 gap-2 sm:gap-6">
                      <div>
                        File size: {resource.fileSize}
                      </div>
                      <div>
                        Last updated: {resource.lastUpdated}
                      </div>
                    </div>
                    
                    {/* Sections (expandable) */}
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(resource.id)}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        {expandedGuides[resource.id] ? (
                          <>
                            <ChevronDown size={16} />
                            <span>Hide contents</span>
                          </>
                        ) : (
                          <>
                            <ChevronRight size={16} />
                            <span>View contents</span>
                          </>
                        )}
                      </button>
                      
                      {expandedGuides[resource.id] && (
                        <div className="mt-3 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Sections included:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {resource.sections.map((section, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm">
                                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                                <span>{section}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href={resource.downloadUrl}
                        download
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                      >
                        <Download size={16} />
                        <span>Download {resource.format}</span>
                      </a>
                      
                      <a 
                        href={resource.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition"
                      >
                        <ExternalLink size={16} />
                        <span>Preview</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;