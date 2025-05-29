import React, { useState } from 'react';
import { Mail, MapPin, Award, Users, BookOpen, Calendar, ChevronDown, ChevronRight } from 'lucide-react';

const SecretariatPage = () => {
  const [expandedBio, setExpandedBio] = useState(null);

  // Secretariat members data
  const secretariatMembers = [
    {
      id: 1,
      name: "Sanjana Dhabbala",
      position: "Secretary-General",
      image: "/images/secretariat/sanjana-dhabbala.jpg",
      email: "sg@gsumun.org",
      bio: "Sanjana is a senior at Georgia State University majoring in International Affairs and Political Science. She has been involved in Model UN for over four years and has served in various leadership roles within GSUMUN. As Secretary-General, she oversees all aspects of the conference and works to ensure an exceptional experience for all delegates.",
      responsibilities: [
        "Overall conference leadership and vision",
        "Coordination with university administration", 
        "Liaison with international delegates",
        "Final decision-making authority"
      ],
      achievements: [
        "Best Delegate at Harvard National MUN 2024",
        "Outstanding Delegate at NMUN New York 2023",
        "GSUMUN Director-General 2024"
      ]
    },
    {
      id: 5,
      name: "Páola Güell",
      position: "Assistant Secretary-General",
      image: "/images/secretariat/paola-guell.jpg",
      email: "asg@gsumun.org", 
      bio: "Páola is a senior majoring in International Affairs with a minor in Latin American Studies. Her international perspective and bilingual capabilities help GSUMUN reach a broader audience and provide inclusive experiences for all delegates.",
      responsibilities: [
        "International outreach and partnerships",
        "Delegation recruitment and relations",
        "Cultural programming and events",
        "Translation and interpretation services"
      ],
      achievements: [
        "GSUMUN Director 2024", 
        "Outstanding Delegate at LIMUN 2023",
        "Study Abroad Ambassador"
      ]
    },
    {
      id: 2,
      name: "Noelle Mendoza", 
      position: "Director-General",
      image: "/images/secretariat/noelle-mendoza.jpg",
      email: "dg@gsumun.org",
      bio: "Noelle is a senior studying Political Science with a concentration in International Relations. She brings extensive Model UN experience and a passion for diplomatic education to her role as Director-General, working closely with the Secretary-General to manage conference operations.",
      responsibilities: [
        "Academic programming and committee oversight",
        "Staff training and development",
        "Background guide coordination",
        "Crisis committee management"
      ],
      achievements: [
        "Outstanding Delegate at VMUN 2024",
        "GSUMUN Deputy Director-General 2024",
        "Best Position Paper at GMUN 2023"
      ]
    },
    {
      id: 6,
      name: "Haifaa Aldoohan",
      position: "Deputy Director-General",
      image: "/images/secretariat/haifaa-aldoohan.jpg",
      email: "ddg@gsumun.org",
      bio: "Haifaa is a junior studying Political Science and Middle Eastern Studies. Her expertise in regional politics and commitment to educational excellence make her an invaluable member of the leadership team, supporting academic programming and staff development.",
      responsibilities: [
        "Academic standards and quality assurance",
        "Committee chair training and support", 
        "Research coordination",
        "Educational workshop development"
      ],
      achievements: [
        "GSUMUN Director 2024",
        "Best Delegate at MUMUN 2023", 
        "Research Assistant in Political Science Department"
      ]
    },
    {
      id: 3,
      name: "Ryan Iler",
      position: "Under Secretary-General of Conference Services", 
      image: "/images/secretariat/ryan-iler.jpg",
      email: "logistics@gsumun.org",
      bio: "Ryan is a junior majoring in Business Administration with a focus on Operations Management. His organizational skills and attention to detail make him perfectly suited for managing the logistical aspects of GSUMUN, ensuring smooth operations throughout the conference.",
      responsibilities: [
        "Registration and delegate services",
        "Venue coordination and logistics",
        "Technology and AV support",
        "Emergency procedures and safety"
      ],
      achievements: [
        "GSUMUN Assistant Director of Operations 2024",
        "Outstanding Staff Member Award 2023",
        "Dean's List for Academic Excellence"
      ]
    },
    {
      id: 8,
      name: "Vasu Singh", 
      position: "Under Secretary-General of Digital Infrastructure",
      image: "/images/secretariat/vasu-singh.png",
      email: "digital@gsumun.org",
      bio: "As the Under Secretary General of Digital Infrastructure at Georgia State Model United Nations (GSUMUN), Vasu oversees the development and management of the conference's digital systems, ensuring seamless communication, registration, and resource access for delegates and staff. These roles have strengthened leadership, public speaking, and technical coordination skills in a fast-paced, collaborative environment.",
      responsibilities: [
        "Digital systems development and management",
        "Website development and maintenance",
        "Registration platform coordination", 
        "Technical infrastructure oversight",
        "Digital communication systems"
      ],
      achievements: [
        "Developed GSUMUN 2025 website and digital hub",
        "Implemented seamless registration system",
        "Enhanced digital delegate experience",
        "Technical Innovation Award 2024"
      ]
    },
    {
      id: 4,
      name: "Reem Elemam",
      position: "Chief of Staff",
      image: "/images/secretariat/reem-elemam.jpg", 
      email: "staff@gsumun.org",
      bio: "Reem is a junior studying International Affairs and Arabic. Her multicultural background and diplomatic skills enable her to effectively coordinate between different teams and ensure clear communication across all levels of the secretariat.",
      responsibilities: [
        "Internal secretariat coordination",
        "Communication management",
        "Staff scheduling and assignments", 
        "Inter-departmental liaison"
      ],
      achievements: [
        "GSUMUN Director 2024",
        "Best Delegate at AMUN 2023",
        "President of International Affairs Society"
      ]
    },
    
    {
      id: 7,
      name: "Aleen Hussein",
      position: "Under Secretary-General of Editing Suite",
      image: "/images/secretariat/aleen-hussein.jpg",
      email: "editing@gsumun.org",
      bio: "Aleen is a senior majoring in English and Political Science. Her strong writing and editing skills ensure that all GSUMUN publications meet the highest standards of clarity and accuracy, providing delegates with excellent educational materials.",
      responsibilities: [
        "Background guide editing and review",
        "Conference publication oversight",
        "Style guide development and enforcement",
        "Quality control for all written materials"
      ],
      achievements: [
        "GSUMUN Assistant Director 2024",
        "Editor-in-Chief of University Review",
        "Outstanding Academic Achievement Award"
      ]
    }
  ];

  const toggleBio = (memberId) => {
    setExpandedBio(expandedBio === memberId ? null : memberId);
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
            GSUMUN Secretariat
          </h1>
          <p 
            className="text-xl max-w-4xl mx-auto mb-8"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Meet the dedicated leadership team behind GSUMUN 2025. Our secretariat brings together 
            passionate students with diverse backgrounds and extensive Model UN experience to create 
            an exceptional conference experience.
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
                Leadership Team
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                50+
              </div>
              <div 
                style={{ 
                  color: '#D4D8E8',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Combined MUN Years
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                15
              </div>
              <div 
                style={{ 
                  color: '#D4D8E8',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Countries Visited
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                1000+
              </div>
              <div 
                style={{ 
                  color: '#D4D8E8',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Delegates Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* About the Secretariat */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 
              className="text-3xl font-bold text-center mb-8"
              style={{ 
                color: '#29487D',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              About Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  Experienced Leadership
                </h3>
                <p 
                  style={{ 
                    color: '#6B7280',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Our secretariat members have collectively participated in over 100 Model UN conferences 
                  worldwide, bringing invaluable experience to GSUMUN.
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
                  Academic Excellence
                </h3>
                <p 
                  style={{ 
                    color: '#6B7280',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Each member maintains high academic standards while pursuing degrees in International Affairs, 
                  Political Science, and related fields.
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
                  Proven Track Record
                </h3>
                <p 
                  style={{ 
                    color: '#6B7280',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Our team has received numerous awards and recognition at prestigious conferences 
                  including Harvard, Yale, and Georgetown Model UN.
                </p>
              </div>
            </div>
          </div>

          {/* Secretariat Members Grid */}
          <div className="space-y-8">
            <h2 
              className="text-3xl font-bold text-center mb-8"
              style={{ 
                color: '#29487D',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              Meet the Team
            </h2>
            
            {secretariatMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  {/* Profile Image */}
                  <div className="md:w-1/4 h-64 md:h-auto bg-gray-300 flex-shrink-0">
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
                      <div className="text-center">
                        <Users size={48} className="text-gray-500 mx-auto mb-2" />
                        <p className="text-gray-500 text-sm">{member.name}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-3/4 p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 
                          className="text-2xl font-bold mb-2"
                          style={{ 
                            color: '#29487D',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          {member.name}
                        </h3>
                        <p 
                          className="text-lg font-medium mb-2"
                          style={{ 
                            color: '#3C5898',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          {member.position}
                        </p>
                        <div 
                          className="flex items-center mb-4"
                          style={{ color: '#6B7280' }}
                        >
                          <Mail size={16} className="mr-2" />
                          <a 
                            href={`mailto:${member.email}`} 
                            className="transition-colors duration-200"
                            style={{ 
                              color: '#6B7280',
                              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#3C5898'}
                            onMouseLeave={(e) => e.target.style.color = '#6B7280'}
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bio */}
                    <p 
                      className="mb-4"
                      style={{ 
                        color: '#374151',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      {member.bio}
                    </p>
                    
                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleBio(member.id)}
                      className="flex items-center gap-2 font-medium mb-4 transition-colors duration-200"
                      style={{ 
                        color: '#3C5898',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#29487D'}
                      onMouseLeave={(e) => e.target.style.color = '#3C5898'}
                    >
                      {expandedBio === member.id ? (
                        <>
                          <ChevronDown size={16} />
                          <span>Hide Details</span>
                        </>
                      ) : (
                        <>
                          <ChevronRight size={16} />
                          <span>View Responsibilities & Achievements</span>
                        </>
                      )}
                    </button>
                    
                    {/* Expanded Content */}
                    {expandedBio === member.id && (
                      <div className="pt-4" style={{ borderTop: `1px solid #D4D8E8` }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Responsibilities */}
                          <div>
                            <h4 
                              className="font-semibold mb-3"
                              style={{ 
                                color: '#29487D',
                                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                              }}
                            >
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {member.responsibilities.map((responsibility, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div 
                                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                    style={{ backgroundColor: '#3C5898' }}
                                  ></div>
                                  <span 
                                    className="text-sm"
                                    style={{ 
                                      color: '#6B7280',
                                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                                    }}
                                  >
                                    {responsibility}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Achievements */}
                          <div>
                            <h4 
                              className="font-semibold mb-3"
                              style={{ 
                                color: '#29487D',
                                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                              }}
                            >
                              Notable Achievements
                            </h4>
                            <ul className="space-y-2">
                              {member.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Award size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
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
              </div>
            ))}
          </div>

          {/* Leadership Philosophy */}
          <div 
            className="border rounded-lg p-8 mt-12"
            style={{ 
              backgroundColor: '#F8F9FF',
              borderColor: '#D4D8E8'
            }}
          >
            <h2 
              className="text-2xl font-bold text-center mb-6"
              style={{ 
                color: '#29487D',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              Our Leadership Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ 
                    color: '#3C5898',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Inclusive Excellence
                </h3>
                <p 
                  className="text-sm"
                  style={{ 
                    color: '#374151',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  We believe that the best diplomatic solutions emerge when all voices are heard 
                  and respected, regardless of experience level or background.
                </p>
              </div>
              
              <div className="text-center">
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ 
                    color: '#3C5898',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Educational Impact
                </h3>
                <p 
                  className="text-sm"
                  style={{ 
                    color: '#374151',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Every decision we make is guided by our commitment to providing meaningful 
                  learning experiences that develop critical thinking and leadership skills.
                </p>
              </div>
              
              <div className="text-center">
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ 
                    color: '#3C5898',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  Global Perspective
                </h3>
                <p 
                  className="text-sm"
                  style={{ 
                    color: '#374151',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  We strive to bring international perspectives to every aspect of GSUMUN, 
                  fostering cross-cultural understanding and global citizenship.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-12 text-center">
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ 
                color: '#29487D',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              Connect with Our Leadership
            </h2>
            <p 
              className="mb-6 max-w-2xl mx-auto"
              style={{ 
                color: '#6B7280',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              Have questions about GSUMUN 2025? Our secretariat team is here to help. 
              Don't hesitate to reach out to any of our team members directly or contact our general inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:sg@gsumun.org" 
                className="px-6 py-3 rounded-md font-medium transition-all duration-200"
                style={{ 
                  backgroundColor: '#3C5898',
                  color: 'white',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#29487D'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3C5898'}
              >
                Email Secretary-General
              </a>
              <a 
                href="mailto:secretariat@gsumun.org" 
                className="border px-6 py-3 rounded-md font-medium transition-all duration-200"
                style={{ 
                  borderColor: '#3C5898',
                  color: '#3C5898',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F8F9FF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                General Inquiries
              </a>
            </div>
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

export default SecretariatPage;