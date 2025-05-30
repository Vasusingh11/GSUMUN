import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, BookOpen, UserPlus, Calendar, MapPin } from 'lucide-react';

const HomePage = () => {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel data
  const carouselItems = [
    {
      id: 1,
      title: "GSUMUN 2025 Conference",
      subtitle: "November 5-6, 2025",
      description: "Join us for the annual Georgia State University Model United Nations Conference",
      image: "/images/hero-conference.jpg",
      buttonText: "Register Now",
      buttonLink: "/register"
    },
    {
      id: 2,
      title: "Conference Theme Revealed",
      subtitle: "Climate Change & Global Security",
      description: "Explore this year's focus on the intersection of climate change and international security",
      image: "/images/hero-theme.jpg",
      buttonText: "Learn More",
      buttonLink: "/committees"
    },
  ];
  
  // Statistics data
  const statistics = [
    { value: "20000+", label: "Delegates" },
    { value: "30+", label: "Committees" },
    { value: "70+", label: "Schools" },
    { value: "40+", label: "Years" }
  ];
  
  // CTA blocks data
  const ctaBlocks = [
    {
      title: "Delegate Hub",
      description: "Resources, guides, and information for conference participants",
      icon: <Users size={36} />,
      link: "/resources/delegate",
      gradient: "linear-gradient(135deg, #29487D 0%, #3C5898 100%)"
    },
    {
      title: "Faculty Advisor Hub",
      description: "Preparation materials, schedules, and coordination resources",
      icon: <BookOpen size={36} />,
      link: "/resources/faculty",
      gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)"
    },
    {
      title: "Staff & Registration",
      description: "Apply to join our team or register for the upcoming conference",
      icon: <UserPlus size={36} />,
      link: "/register",
      gradient: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)"
    }
  ];
  
  // Upcoming events
  const events = [
    {
      date: "August 15, 2025",
      title: "Early Registration Opens",
      description: "Register early for discounted rates and priority committee selection"
    },
    {
      date: "September 30, 2025",
      title: "Background Guides Released",
      description: "Access detailed committee information and position paper requirements"
    },
    {
      date: "October 15, 2025",
      title: "Position Paper Deadline",
      description: "Submit position papers for review and awards consideration"
    },
    {
      date: "November 5-6, 2025",
      title: "GSUMUN Conference",
      description: "Two days of debate, negotiation, and diplomatic excellence"
    }
  ];
  
  // Autoplay for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carouselItems.length]);
  
  // Handle carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1
    );
  };

  return (
    <div 
      className="min-h-screen"
      style={{ 
        background: 'linear-gradient(135deg, #F9F9F9 0%, #F5F7FA 100%)',
        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
      }}
    >
      {/* Hero Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out 
                       ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
              <h1 
                className="text-3xl md:text-5xl font-bold mb-2"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                {item.title}
              </h1>
              <h2 
                className="text-xl md:text-2xl font-semibold mb-4"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                {item.subtitle}
              </h2>
              <p 
                className="text-lg max-w-2xl mb-6"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                {item.description}
              </p>
              <a 
                href={item.buttonLink}
                className="font-bold py-3 px-6 rounded-md transition duration-300"
                style={{ 
                  backgroundColor: '#29487D',
                  color: 'white',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3C5898'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#29487D'}
              >
                {item.buttonText}
              </a>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 
                         ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Statistics Banner */}
      <section 
        className="text-white py-16"
        style={{ 
          background: 'linear-gradient(135deg, #29487D 0%, #3C5898 100%)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center group">
                <span 
                  className="text-4xl md:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                  }}
                >
                  {stat.value}
                </span>
                <span 
                  className="text-base md:text-lg opacity-90"
                  style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Blocks */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #F9F9F9 0%, #F5F7FA 100%)' }}>
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-16"
            style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Get Started
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ctaBlocks.map((block, index) => (
              <a 
                key={index} 
                href={block.link} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              >
                {/* Icon Header */}
                <div 
                  className="p-8 text-white"
                  style={{ background: block.gradient }}
                >
                  <div className="flex justify-center">
                    <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {block.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 
                    className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300"
                    style={{ 
                      color: '#29487D',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    {block.title}
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                  >
                    {block.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 
                className="text-4xl font-bold mb-8"
                style={{ 
                  color: '#29487D',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                }}
              >
                About GSUMUN
              </h2>
              <p 
                className="text-lg text-gray-700 mb-6 leading-relaxed"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                Georgia State University Model United Nations (GSUMUN) is an educational conference where students 
                simulate United Nations committees and other international organizations. Delegates represent various 
                countries and work to solve global challenges through debate, negotiation, and collaboration.
              </p>
              <p 
                className="text-lg text-gray-700 mb-8 leading-relaxed"
                style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
              >
                Our conference provides a unique opportunity for high school students to develop essential skills 
                in public speaking, critical thinking, and diplomatic negotiation while exploring complex 
                international issues.
              </p>
              <a 
                href="/about" 
                className="inline-flex items-center font-bold text-lg transition-all duration-300 hover:scale-105 px-6 py-3 rounded-xl"
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
                Learn more about GSUMUN
                <ChevronRight size={24} className="ml-2" />
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                <img 
                  src="/images/about-gsumun.jpg" 
                  alt="GSUMUN Conference Session" 
                  className="w-full h-auto object-cover"
                  style={{ height: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section 
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #F9F9F9 0%, #F5F7FA 100%)' }}
      >
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-16"
            style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Important Dates
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className="relative pl-12 md:pl-16 pb-8 border-l-4 last:border-transparent last:pb-0 transition-all duration-300 hover:scale-102"
                  style={{ borderColor: '#29487D' }}
                >
                  <div 
                    className="absolute top-0 left-0 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #29487D 0%, #3C5898 100%)' }}
                  >
                    <Calendar size={16} className="text-white" />
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <div 
                      className="text-sm font-bold mb-3 px-3 py-1 rounded-full inline-block"
                      style={{ 
                        color: '#29487D',
                        backgroundColor: '#D4D8E8',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      {event.date}
                    </div>
                    <h3 
                      className="text-xl font-bold mb-3"
                      style={{ 
                        color: '#29487D',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      {event.title}
                    </h3>
                    <p 
                      className="text-gray-600 leading-relaxed"
                      style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                    >
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Location / Contact CTA */}
      <section 
        className="text-white py-20 relative overflow-hidden"
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
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-white/20 rounded-full">
              <MapPin size={40} />
            </div>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Join Us in Atlanta
          </h2>
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90"
            style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
          >
            GSUMUN 2025 will be held at Georgia State University's downtown campus.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="/venue" 
              className="bg-white text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{ 
                color: '#29487D',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
              }}
            >
              View Venue Details
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
            >
              Contact Us
            </a>
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
        
        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default HomePage;