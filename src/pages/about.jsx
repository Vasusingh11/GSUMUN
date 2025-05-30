import React, { useState, useEffect } from 'react';

const GSUMUNAboutPage = () => {
  const [conferenceSlide, setConferenceSlide] = useState(0);
  const [teamSlide, setTeamSlide] = useState(0);

  const conferenceImages = [
    {
      src: "/images/about/conference-2023.jpg",
      title: "GSUMUN 2023 Conference",
      description: "Our largest conference with 300+ delegates from across the nation"
    },
    {
      src: "/images/about/opening-ceremony-2022.jpg",
      title: "Opening Ceremony 2022",
      description: "Keynote speakers and distinguished guests at our annual opening"
    },
    {
      src: "/images/about/security-council.jpg",
      title: "Security Council Session",
      description: "Intense debates and diplomatic negotiations in our flagship committee"
    },
    {
      src: "/images/about/awards-ceremony-2023.jpg",
      title: "Awards Ceremony 2023",
      description: "Recognizing outstanding delegates and their diplomatic achievements"
    }
  ];

  const teamImages = [
    {
      src: "/images/about/erfurt-germany.jpg",
      title: "Erfurt, Germany",
      description: "GSUMUN Collegiate Team representing at international conference"
    },
    {
      src: "/images/about/xian-china.jpg",
      title: "Xian, China",
      description: "Cultural exchange and diplomatic engagement in Asia"
    },
    {
      src: "/images/about/banff-canada.jpg",
      title: "Banff, Canada",
      description: "International delegates collaboration in scenic Canadian Rockies"
    },
    {
      src: "/images/about/kobe-japan.jpg",
      title: "Kobe, Japan",
      description: "Strengthening diplomatic ties in the Land of the Rising Sun"
    },
    {
      src: "/images/about/prague-czech.jpg",
      title: "Prague, Czech Republic",
      description: "Historic European setting for modern diplomatic discussions"
    },
    {
      src: "/images/about/rome-italy.jpg",
      title: "Rome, Italy",
      description: "Ancient city hosting contemporary global dialogue"
    },
    {
      src: "/images/about/antalya-turkey.jpg",
      title: "Antalya, Turkey",
      description: "Bridging cultures and continents through Model UN diplomacy"
    }
  ];

  const drNaimImage = "/images/about/dr-naim.jpg";

  // Auto-play for carousels
  useEffect(() => {
    const conferenceInterval = setInterval(() => {
      setConferenceSlide(prev => (prev + 1) % conferenceImages.length);
    }, 5000);

    const teamInterval = setInterval(() => {
      setTeamSlide(prev => (prev + 1) % teamImages.length);
    }, 6000);

    return () => {
      clearInterval(conferenceInterval);
      clearInterval(teamInterval);
    };
  }, [conferenceImages.length, teamImages.length]);

  const changeSlide = (direction, type) => {
    if (type === 'conference') {
      setConferenceSlide(prev => {
        const newSlide = prev + direction;
        if (newSlide >= conferenceImages.length) return 0;
        if (newSlide < 0) return conferenceImages.length - 1;
        return newSlide;
      });
    } else {
      setTeamSlide(prev => {
        const newSlide = prev + direction;
        if (newSlide >= teamImages.length) return 0;
        if (newSlide < 0) return teamImages.length - 1;
        return newSlide;
      });
    }
  };

  const goToSlide = (index, type) => {
    if (type === 'conference') {
      setConferenceSlide(index);
    } else {
      setTeamSlide(index);
    }
  };

  const Carousel = ({ images, currentSlide, onSlideChange, onGoToSlide, type, title }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="p-6">
        <h2 
          className="text-2xl font-bold text-center mb-6"
          style={{ 
            color: '#29487D',
            fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
          }}
        >
          {title}
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full relative">
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-80 object-cover"
                  />
                  <div 
                    className="absolute bottom-0 left-0 right-0 text-white p-6"
                    style={{ background: 'linear-gradient(to top, rgba(41, 72, 125, 0.9), transparent)' }}
                  >
                    <div 
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                    >
                      {image.title}
                    </div>
                    <div 
                      style={{ 
                        color: '#D4D8E8',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      {image.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#29487D'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'white'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
            onClick={() => onSlideChange(-1, type)}
          >
            ‹
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#29487D'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'white'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
            onClick={() => onSlideChange(1, type)}
          >
            ›
          </button>
        </div>
        
        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'scale-125' : 'hover:opacity-70'
              }`}
              style={{ 
                backgroundColor: index === currentSlide ? '#3C5898' : '#D4D8E8'
              }}
              onClick={() => onGoToSlide(index, type)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen pt-16"
      style={{ 
        backgroundColor: '#F9F9F9',
        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
      }}
    >
      {/* Header */}
      <header 
        className="text-white py-16 px-4"
        style={{ backgroundColor: '#29487D' }}
      >
        <div className="container mx-auto max-w-5xl text-center">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            About GSUMUN
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            Empowering the next generation of global leaders through diplomatic education and international understanding
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-5xl px-4 py-12">
        
        {/* Dr. Naim Feature Section */}
        <section className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div 
              className="md:w-1/3 p-8 flex justify-center items-center"
              style={{ backgroundColor: '#F9F9F9' }}
            >
              <img 
                src={drNaimImage} 
                alt="Dr. Syed Rashid Naim" 
                className="w-64 h-64 rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 
                className="text-3xl font-bold mb-2"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Dr. Syed Rashid Naim
              </h2>
              <h3 
                className="text-xl mb-6 font-medium"
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Faculty Advisor & Principal Senior Lecturer
              </h3>
              <div 
                className="prose leading-relaxed"
                style={{ 
                  color: '#374151',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                <p className="mb-4">
                  Dr. S. Rashid Naim is a Principal Senior Lecturer in the Political Science Department. Dr. Naim was born and brought up in India. He earned his undergraduate degree in history with honors from the Aligarh Muslim University in India, a Master's degree in International Studies from the Jawaharlal Nehru University in India.
                </p>
                <p className="mb-4">
                  He also earned another Masters in International Relations from the Australian National University and his Ph.D. from the University of Illinois, Urbana-Champaign. Dr. Naim has taught and held research positions at the Centre for Islamic Studies at Oxford University in the UK, at the University of California Santa Cruz, and Union College in upstate New York.
                </p>
                <p>
                  He has been with the Department of Political Science at Georgia State University since 1993. Dr. Naim's areas of research and specialization are International Relations, religion and politics, Middle East politics, international relations of the Middle East, South Asian politics and Nuclear Proliferation. He is also a consultant on matters pertaining to Islam, the Middle East and South Asia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 
            className="text-3xl font-bold text-center mb-8"
            style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Our Mission
          </h2>
          <p 
            className="text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto"
            style={{ 
              color: '#374151',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Georgia State University Model United Nations (GSUMUN) is dedicated to fostering critical thinking, diplomatic skills, and global awareness among students. We strive to create an environment where future leaders can engage with complex international issues, develop negotiation skills, and build lasting connections with peers from diverse backgrounds.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-200" style={{ borderColor: '#D4D8E8' }}>
              <div className="text-4xl mb-4">🌍</div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Global Perspective
              </h3>
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                We encourage students to think beyond borders and understand the interconnected nature of global challenges.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-200" style={{ borderColor: '#D4D8E8' }}>
              <div className="text-4xl mb-4">🤝</div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Diplomatic Excellence
              </h3>
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Through simulation and practice, we develop the art of negotiation, compromise, and peaceful conflict resolution.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-200" style={{ borderColor: '#D4D8E8' }}>
              <div className="text-4xl mb-4">🎓</div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Educational Growth
              </h3>
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                We provide hands-on learning experiences that complement academic studies with real-world applications.
              </p>
            </div>
          </div>
        </section>

        {/* Conference Carousel */}
        <Carousel 
          images={conferenceImages}
          currentSlide={conferenceSlide}
          onSlideChange={changeSlide}
          onGoToSlide={goToSlide}
          type="conference"
          title="Previous Year Conferences"
        />

        {/* Team Carousel */}
        <Carousel 
          images={teamImages}
          currentSlide={teamSlide}
          onSlideChange={changeSlide}
          onGoToSlide={goToSlide}
          type="team"
          title="Our Global Team"
        />

        {/* Values Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 
            className="text-3xl font-bold text-center mb-8"
            style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: '#3C5898',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Inclusivity
              </h3>
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                We welcome students from all backgrounds and experience levels, fostering an environment where everyone can contribute and grow.
              </p>
            </div>
            <div className="text-center">
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: '#3C5898',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Excellence
              </h3>
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                We strive for the highest standards in our conferences, training programs, and representation at external events.
              </p>
            </div>
            <div className="text-center">
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: '#3C5898',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Innovation
              </h3>
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                We continuously evolve our programs and approaches to meet the changing needs of global diplomacy and education.
              </p>
            </div>
            <div className="text-center">
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: '#3C5898',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                Leadership
              </h3>
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                We develop confident, ethical leaders who can navigate complex challenges with integrity and vision.
              </p>
            </div>
          </div>
        </section>

        {/* Join Community Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 
            className="text-3xl font-bold text-center mb-8"
            style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Join Our Community
          </h2>
          <p 
            className="text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto"
            style={{ 
              color: '#374151',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Whether you're a seasoned delegate or completely new to Model UN, GSUMUN offers opportunities for growth, learning, and leadership. Our members go on to careers in diplomacy, law, business, and public service, carrying with them the skills and perspectives gained through their Model UN experience.
          </p>
          <p 
            className="text-center max-w-3xl mx-auto"
            style={{ 
              color: '#6B7280',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Ready to start your journey with us? Reach out to learn more about upcoming events, training sessions, and how you can become part of our dynamic community.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GSUMUNAboutPage;