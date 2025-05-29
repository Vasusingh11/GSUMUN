import React from 'react';

const TeamPage = () => {
  // Sample secretariat data
  const secretariatMembers = [
    {
      id: 1,
      name: "Sanjana Dhabbala",
      position: "Secretary-General",
      image: "/images/secretariat/sanjana-dhabbala.jpg"
    },
    {
      id: 2,
      name: "Noelle Mendoza",
      position: "Director-General",
      image: "/images/secretariat/noelle-mendoza.jpg"
    },
    {
      id: 3,
      name: "Ryan Iler",
      position: "Under Secretary-General of Conference Services",
      image: "/images/secretariat/ryan-iler.jpg"
    },
    {
      id: 4,
      name: "Reem Elemam",
      position: "Chief of Staff",
      image: "/images/secretariat/reem-elemam.jpg"
    },
    {
      id: 5,
      name: "Páola Güell",
      position: "Assistant Secretary-General",
      image: "/images/secretariat/paola-guell.jpg"
    },
    {
      id: 6,
      name: "Haifaa Aldoohan",
      position: "Deputy Director-General",
      image: "/images/secretariat/haifaa-aldoohan.jpg"
    },
    {
      id: 7,
      name: "Aleen Hussein",
      position: "Under Secretary-General of Editing Suite",
      image: "/images/secretariat/aleen-hussein.jpg"
    },
    {
      id: 8,
      name: "Vasu Singh",
      position: "Under Secretary-General of Digital Infrastructure",
      image: "/images/secretariat/vasu-singh.jpg"
    }
  ];

  // Sample advisory board data
  const advisoryBoardMembers = [
    {
      id: 1,
      name: "Rohit Sadarangani",
      position: "Chairperson",
      details: [
        "Department Head: Secretariat",
        "Secretary-General, 2017"
      ],
      image: "/images/advisory-board/rohit-sadarangani.jpg"
    },
    {
      id: 2,
      name: "Ebenezer Eyasu",
      position: "Board Member",
      details: [
        "Assistant Secretary-General, 2017",
        "Assistant Secretary-General, 2022"
      ],
      image: "/images/advisory-board/ebenezer-eyasu.jpg"
    },
    {
      id: 3,
      name: "Kathryn Pitts",
      position: "Board Member",
      details: [
        "Director, 2018",
        "Secretary-General, 2019"
      ],
      image: "/images/advisory-board/kathryn-pitts.jpg"
    },
    {
      id: 4,
      name: "Alexandra Sandeva",
      position: "Board Member",
      details: [
        "Director-General, 2023",
        "Secretary-General, 2024"
      ],
      image: "/images/advisory-board/alexandra-sandeva.jpg"
    },
    {
      id: 5,
      name: "Noor al-Baghdadi",
      position: "Board Member",
      details: [
        "Secretary-General, 2023",
        "Director-General, 2022"
      ],
      image: "/images/advisory-board/noor-al-baghdadi.jpg"
    },
    {
      id: 6,
      name: "Chakier Francis",
      position: "Board Member",
      details: [
        "USG Conference Services, 2016",
        "Conference Services, 2015"
      ],
      image: "/images/advisory-board/chakier-francis.jpg"
    },
    {
      id: 7,
      name: "Tristan Fernandes",
      position: "Board Member",
      details: [
        "Assistant Secretary-General, 2018",
        "Director-General, 2022"
      ],
      image: "/images/advisory-board/tristan-fernandes.jpg"
    },
    {
      id: 8,
      name: "Trey Barker",
      position: "Board Member",
      details: [
        "Crisis Coordinator, 2024",
        "Assistant Secretary-General, 2023"
      ],
      image: "/images/advisory-board/trey-barker.jpg"
    }
  ];

  // Committee directors and assistant directors data
  const committeeLeadership = [
    {
      id: 1,
      committee: "General Assembly Third Committee",
      abbreviation: "GA 3",
      director: {
        name: "Valeria Chavez"
      },
      assistantDirector: {
        name: "Camoria Tucker"
      }
    },
    {
      id: 2,
      committee: "General Assembly Fourth Committee",
      abbreviation: "GA 4",
      director: {
        name: "Vasu Singh"
      },
      assistantDirector: {
        name: "Ashley Moore"
      }
    },
    {
      id: 3,
      committee: "United Nations Environment Assembly",
      abbreviation: "UNEA",
      director: {
        name: "Shabnam Habibi Faiz"
      },
      assistantDirector: {
        name: "Gracie Mendenhall"
      }
    },
    {
      id: 4,
      committee: "World Health Organization",
      abbreviation: "WHO",
      director: {
        name: "Samuel Jeffery Bransfield"
      },
      assistantDirector: {
        name: "Hamdi Abdilmalik Mursal"
      }
    },
    {
      id: 5,
      committee: "African Union",
      abbreviation: "AU",
      director: {
        name: "Soha Kaviani"
      },
      assistantDirector: {
        name: "Daphne Mondesir"
      }
    },
    {
      id: 6,
      committee: "UN High Commissioner for Refugees",
      abbreviation: "UNHCR",
      director: {
        name: "Derrol Alexis"
      },
      assistantDirector: {
        name: "Jannah Majeed"
      }
    },
    {
      id: 7,
      committee: "UN Special Committee on Palestine",
      abbreviation: "UNSCOP",
      director: {
        name: "Naksha Kashyap"
      },
      assistantDirector: null
    },
    {
      id: 8,
      committee: "Security Council",
      abbreviation: "SC",
      director: {
        name: "Kaylee Owens"
      },
      assistantDirector: null
    }
  ];

  const facultyAdvisor = {
    name: "Dr. Syed Rashid Naim",
    position: "Faculty Advisor & Principal Senior Lecturer",
    bio: "Dr. S. Rashid Naim is a Principal Senior Lecturer in the Political Science Department. Dr. Naim was born and brought up in India. He earned his undergraduate degree in history with honors from the Aligarh Muslim University in India, a Master's degree in International Studies from the Jawaharlal Nehru University in India. He also earned another Masters in International Relations from the Australian National University and his Ph.D. from the University of Illinois, Urbana-Champaign. Dr. Naim has taught and held research positions at the Centre for Islamic Studies at Oxford University in the UK, at the University of California Santa Cruz, and Union College in upstate New York. He has been with the Department of Political Science at Georgia State University since 1993.",
    image: "/images/about/dr-naim.jpg"
  };

  return (
    <div 
      className="min-h-screen pt-16"
      style={{ 
        backgroundColor: '#F9F9F9',
        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
      }}
    >
      {/* Page Header */}
      <div 
        className="text-white py-16"
        style={{ backgroundColor: '#29487D' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Our Team
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Meet the dedicated individuals who make GSUMUN possible - from our leadership secretariat to our committee directors and advisory board
          </p>
        </div>
      </div>

      {/* Secretariat Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 
          className="text-3xl font-bold mb-12 text-center"
          style={{ 
            color: '#29487D',
            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
          }}
        >
          GSUMUN Secretariat
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {secretariatMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <svg className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  {member.name}
                </h3>
                <div 
                  className="h-px w-16 mx-auto my-3"
                  style={{ backgroundColor: '#3C5898' }}
                ></div>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Committee Leadership Section */}
      <div 
        className="py-16"
        style={{ backgroundColor: 'white' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold mb-12 text-center"
            style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Committee Leadership
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {committeeLeadership.map((committee) => (
              <div 
                key={committee.id} 
                className="rounded-xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'white',
                  borderColor: '#D4D8E8'
                }}
              >
                <div 
                  className="px-6 py-4"
                  style={{ backgroundColor: '#F8F9FF' }}
                >
                  <h3 
                    className="text-xl font-bold"
                    style={{ 
                      color: '#29487D',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    {committee.committee}
                  </h3>
                  <p 
                    className="font-medium"
                    style={{ 
                      color: '#3C5898',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    ({committee.abbreviation})
                  </p>
                </div>
                
                <div className="p-6">
                  {/* Director */}
                  <div className="mb-6 pb-6" style={{ borderBottom: `1px solid #D4D8E8` }}>
                    <h4 
                      className="font-semibold mb-4"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      Director
                    </h4>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p 
                          className="font-bold"
                          style={{ 
                            color: '#374151',
                            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                          }}
                        >
                          {committee.director.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Assistant Director */}
                  {committee.assistantDirector ? (
                    <div>
                      <h4 
                        className="font-semibold mb-4"
                        style={{ 
                          color: '#29487D',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Assistant Director
                      </h4>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p 
                            className="font-bold"
                            style={{ 
                              color: '#374151',
                              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                            }}
                          >
                            {committee.assistantDirector.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 
                        className="font-semibold mb-4"
                        style={{ 
                          color: '#9CA3AF',
                          fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                        }}
                      >
                        Assistant Director
                      </h4>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p 
                            className="text-sm italic"
                            style={{ 
                              color: '#9CA3AF',
                              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                            }}
                          >
                            Position available
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Faculty Advisor Section */}
      <div 
        className="py-16"
        style={{ backgroundColor: '#F8F9FF' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold mb-12 text-center"
            style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            GSUMUN Faculty Advisor
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex max-w-5xl mx-auto">
            <div className="md:w-1/3 lg:w-1/4 bg-gray-200 flex items-center justify-center">
              {facultyAdvisor.image ? (
                <img 
                  src={facultyAdvisor.image} 
                  alt={facultyAdvisor.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="py-12">
                  <svg className="h-32 w-32 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="p-8 md:w-2/3 lg:w-3/4">
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                {facultyAdvisor.name}
              </h3>
              <p 
                className="mb-6 font-medium"
                style={{ 
                  color: '#3C5898',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                {facultyAdvisor.position}
              </p>
              <div 
                className="leading-relaxed"
                style={{ 
                  color: '#374151',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                <p>{facultyAdvisor.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisory Board Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 
          className="text-3xl font-bold mb-12 text-center"
          style={{ 
            color: '#29487D',
            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
          }}
        >
          Advisory Board
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisoryBoardMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <svg className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-bold text-center mb-2"
                  style={{ 
                    color: '#29487D',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  {member.name}
                </h3>
                <div 
                  className="h-px w-16 mx-auto my-3"
                  style={{ backgroundColor: '#3C5898' }}
                ></div>
                <p 
                  className="text-center mb-4 font-medium"
                  style={{ 
                    color: '#3C5898',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                  }}
                >
                  {member.position}
                </p>
                <ul className="text-sm space-y-1">
                  {member.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="text-center"
                      style={{ 
                        color: '#6B7280',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conference Services Section */}
      <div 
        className="py-16"
        style={{ backgroundColor: 'white' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold mb-12 text-center"
            style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Conference Services
          </h2>
          
          <div 
            className="text-center py-16"
            style={{ 
              backgroundColor: '#F8F9FF',
              border: `2px dashed #D4D8E8`
            }}
          >
            <div 
              className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#D4D8E8' }}
            >
              <svg className="h-10 w-10" style={{ color: '#29487D' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 
              className="text-xl font-semibold mb-3"
              style={{ 
                color: '#29487D',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              Conference Services Team
            </h3>
            <p 
              className="max-w-2xl mx-auto"
              style={{ 
                color: '#6B7280',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              Our dedicated Conference Services team works behind the scenes to ensure every aspect of GSUMUN runs smoothly. 
              From registration and logistics to technical support and delegate services, these team members are essential to our success.
            </p>
            <div className="mt-6">
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: '#D4D8E8',
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Team members to be announced
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div 
        className="text-white py-16"
        style={{ backgroundColor: '#29487D' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Join Our Team
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Interested in joining the GSUMUN team? We're always looking for dedicated individuals to help make our conference a success. Opportunities include secretariat positions, committee staff, and volunteer roles.
          </p>
          <a 
            href="/applications" 
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ 
              color: '#29487D',
              backgroundColor: 'white',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F6'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            Apply Now
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* White line separator before footer */}
      <div 
        className="w-full h-px"
        style={{ backgroundColor: 'white' }}
      ></div>
    </div>
  );
};

export default TeamPage;