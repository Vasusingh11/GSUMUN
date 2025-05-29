import React, { useState } from 'react';
import { Award, Users, BookOpen, Calendar, Star, ChevronDown, ChevronRight, Mail, Linkedin } from 'lucide-react';

const AdvisoryBoardPage = () => {
  const [expandedMember, setExpandedMember] = useState(null);
  
  // Advisory Board members data
  const advisoryMembers = [
    {
      id: 1,
      name: "Rohit Sadarangani",
      position: "Chairperson",
      image: "/images/advisory-board/rohit-sadarangani.jpg",
      experience: [
        "Department Head: Secretariat",
        "Secretary-General, 2017"
      ],
      bio: "Rohit serves as the Chairperson of the GSUMUN Advisory Board, bringing extensive leadership experience from his time as Secretary-General. His vision and strategic guidance continue to shape the conference's direction and growth.",
      achievements: [
        "Led GSUMUN to record attendance in 2017",
        "Established international delegate programs",
        "Founded current advisory board structure"
      ],
      currentRole: "Alumni Relations Coordinator"
    },
    {
      id: 2,
      name: "Ebenezer Eyasu",
      position: "Board Member",
      image: "/images/advisory-board/ebenezer-eyasu.jpg",
      experience: [
        "Assistant Secretary-General, 2017",
        "Assistant Secretary-General, 2022"
      ],
      bio: "Ebenezer's dual tenure as Assistant Secretary-General provides invaluable continuity and institutional knowledge. His expertise in conference operations and delegate services helps maintain GSUMUN's high standards.",
      achievements: [
        "Implemented streamlined registration system",
        "Developed faculty advisor resources",
        "Enhanced delegate experience protocols"
      ],
      currentRole: "Operations Consultant"
    },
    {
      id: 3,
      name: "Kathryn Pitts",
      position: "Board Member",
      image: "/images/advisory-board/kathryn-pitts.jpg",
      experience: [
        "Director, 2018",
        "Secretary-General, 2019"
      ],
      bio: "Kathryn's progression from Director to Secretary-General exemplifies the leadership development that GSUMUN fosters. Her experience guides current secretariat members in their professional growth.",
      achievements: [
        "Expanded committee offerings by 40%",
        "Introduced crisis committee innovations",
        "Strengthened academic partnerships"
      ],
      currentRole: "Academic Standards Advisor"
    },
    {
      id: 4,
      name: "Alexandra Sandeva", 
      position: "Board Member",
      image: "/images/advisory-board/alexandra-sandeva.jpg",
      experience: [
        "Director-General, 2023",
        "Secretary-General, 2024"
      ],
      bio: "As the most recent Secretary-General, Alexandra brings fresh perspectives and contemporary insights to the advisory board. Her recent experience ensures the board stays current with evolving educational needs.",
      achievements: [
        "Achieved highest delegate satisfaction scores",
        "Launched digital innovation initiatives", 
        "Established sustainability programs"
      ],
      currentRole: "Strategic Planning Advisor"
    },
    {
      id: 5,
      name: "Noor al-Baghdadi",
      position: "Board Member",
      image: "/images/advisory-board/noor-al-baghdadi.jpg",
      experience: [
        "Secretary-General, 2023",
        "Director-General, 2022"
      ],
      bio: "Noor's leadership during a transformative period for GSUMUN brings valuable perspective on adapting to challenges while maintaining educational excellence. Her international background enriches the board's global outlook.",
      achievements: [
        "Successfully navigated conference transitions",
        "Enhanced international delegate recruitment",
        "Developed crisis management protocols"
      ],
      currentRole: "International Relations Advisor"
    },
    {
      id: 6,
      name: "Chakier Francis",
      position: "Board Member",
      image: "/images/advisory-board/chakier-francis.jpg",
      experience: [
        "USG Conference Services, 2016",
        "Conference Services, 2015"
      ],
      bio: "Chakier's extensive experience in conference services provides deep institutional knowledge about logistics and operations. His expertise ensures smooth conference execution and continuous improvement of processes.",
      achievements: [
        "Revolutionized conference logistics systems",
        "Established vendor partnerships",
        "Created emergency response procedures"
      ],
      currentRole: "Logistics and Operations Advisor"
    },
    {
      id: 7,
      name: "Tristan Fernandes",
      position: "Board Member",
      image: "/images/advisory-board/tristan-fernandes.jpg",
      experience: [
        "Assistant Secretary-General, 2018",
        "Director-General, 2022"
      ],
      bio: "Tristan's diverse experience across multiple leadership roles provides comprehensive understanding of GSUMUN operations. His expertise in both academic and administrative aspects guides strategic decisions.",
      achievements: [
        "Developed comprehensive training programs",
        "Enhanced committee quality standards",
        "Strengthened staff development initiatives"
      ],
      currentRole: "Education and Training Advisor"
    },
    {
      id: 8,
      name: "Trey Barker",
      position: "Board Member",
      image: "/images/advisory-board/trey-barker.jpg", 
      experience: [
        "Crisis Coordinator, 2024",
        "Assistant Secretary-General, 2023"
      ],
      bio: "Trey's recent experience and specialization in crisis committees brings contemporary insights and innovative approaches to the advisory board. His technical expertise helps integrate modern educational technologies.",
      achievements: [
        "Pioneered interactive crisis simulations",
        "Enhanced delegate engagement metrics",
        "Implemented real-time feedback systems"
      ],
      currentRole: "Innovation and Technology Advisor"
    }
  ];

  const toggleMember = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <div 
      className="min-h-screen pt-16"
      style={{ 
        backgroundColor: '#F9F9F9',
        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
      }}
    >
      {/* Header Section */}
      <section 
        className="text-white py-16 px-4"
        style={{ backgroundColor: '#29487D' }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Advisory Board
          </h1>
          <p 
            className="text-xl max-w-4xl mx-auto mb-8"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Our Advisory Board comprises distinguished GSUMUN alumni who provide strategic guidance, 
            institutional wisdom, and continued support to ensure the conference's continued excellence 
            and growth.
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                8
              </div>
              <div 
                style={{ 
                  color: '#D4D8E8',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Board Members
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                15+
              </div>
              <div 
                style={{ 
                  color: '#D4D8E8',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Years Combined Experience
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                20+
              </div>
              <div 
                style={{ 
                  color: '#D4D8E8',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Leadership Positions Held
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                5000+
              </div>
              <div 
                style={{ 
                  color: '#D4D8E8',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Delegates Impacted
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Advisory Board */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="text-3xl font-bold text-center mb-8"
            style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            About Our Advisory Board
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div 
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#D4D8E8' }}
              >
                <Users size={32} style={{ color: '#29487D' }} />
              </div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Strategic Guidance
              </h3>
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Providing long-term vision and strategic direction to ensure GSUMUN continues 
                to evolve and meet the changing needs of Model UN education.
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#D4D8E8' }}
              >
                <BookOpen size={32} style={{ color: '#29487D' }} />
              </div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Institutional Knowledge
              </h3>
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Drawing from years of collective experience to maintain GSUMUN's traditions 
                while fostering innovation and continuous improvement.
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#D4D8E8' }}
              >
                <Award size={32} style={{ color: '#29487D' }} />
              </div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Mentorship
              </h3>
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Supporting current secretariat members with guidance, advice, and professional 
                development opportunities based on real-world experience.
              </p>
            </div>
          </div>

          <div 
            className="border rounded-lg p-8"
            style={{ 
              backgroundColor: '#F8F9FF',
              borderColor: '#D4D8E8'
            }}
          >
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ 
                color: '#29487D',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              Board Mission
            </h3>
            <p 
              className="leading-relaxed"
              style={{ 
                color: '#374151',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              The GSUMUN Advisory Board serves as a bridge between past and present, ensuring that 
              the conference continues to provide exceptional educational experiences while adapting 
              to modern diplomatic education needs. Our members bring diverse perspectives from their 
              post-graduation careers in international relations, law, business, and public service, 
              enriching GSUMUN with real-world insights and professional networks.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Board Members */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Profile Image */}
                    <div className="w-20 h-20 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-300 items-center justify-center hidden">
                        <Users size={24} className="text-gray-500" />
                      </div>
                    </div>
                    
                    {/* Name and Position */}
                    <div className="flex-grow">
                      <h3 
                        className="text-xl font-bold mb-1"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        {member.name}
                      </h3>
                      <p 
                        className="font-medium mb-2"
                        style={{ 
                          color: '#3C5898',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        {member.position}
                      </p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-4">
                    <h4 
                      className="font-semibold mb-2"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      GSUMUN Experience
                    </h4>
                    <ul className="space-y-1">
                      {member.experience.map((exp, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star size={14} className="text-amber-500 flex-shrink-0" />
                          <span 
                            className="text-sm"
                            style={{ 
                              color: '#6B7280',
                              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                            }}
                          >
                            {exp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bio Preview */}
                  <p 
                    className="text-sm mb-4 line-clamp-3"
                    style={{ 
                      color: '#374151',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    {member.bio}
                  </p>

                  {/* Expand Button */}
                  <button
                    onClick={() => toggleMember(member.id)}
                    className="flex items-center gap-2 font-medium text-sm transition-colors duration-200"
                    style={{ 
                      color: '#3C5898',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#29487D'}
                    onMouseLeave={(e) => e.target.style.color = '#3C5898'}
                  >
                    {expandedMember === member.id ? (
                      <>
                        <ChevronDown size={16} />
                        <span>Show Less</span>
                      </>
                    ) : (
                      <>
                        <ChevronRight size={16} />
                        <span>Show More</span>
                      </>
                    )}
                  </button>

                  {/* Expanded Content */}
                  {expandedMember === member.id && (
                    <div className="mt-6 pt-6" style={{ borderTop: `1px solid #D4D8E8` }}>
                      <div className="space-y-4">
                        {/* Current Role */}
                        <div>
                          <h4 
                            className="font-semibold mb-2"
                            style={{ 
                              color: '#29487D',
                              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                            }}
                          >
                            Current Advisory Role
                          </h4>
                          <p 
                            className="text-sm"
                            style={{ 
                              color: '#6B7280',
                              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                            }}
                          >
                            {member.currentRole}
                          </p>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 
                            className="font-semibold mb-2"
                            style={{ 
                              color: '#29487D',
                              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                            }}
                          >
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {member.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Award size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                                <span 
                                  className="text-sm"
                                  style={{ 
                                    color: '#6B7280',
                                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                                  }}
                                >
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="text-white py-12 px-4"
        style={{ backgroundColor: '#29487D' }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Join Our Legacy
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Interested in contributing to GSUMUN's continued success? We welcome alumni 
            who are passionate about Model UN education and want to give back to the community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:advisory@gsumun.org" 
              className="px-6 py-3 rounded-md font-medium transition-all duration-200"
              style={{ 
                backgroundColor: 'white',
                color: '#29487D',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F6'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              Contact Advisory Board
            </a>
          </div>
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

export default AdvisoryBoardPage;