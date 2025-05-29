import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    {
      id: 3,
      title: "Featured Keynote Speaker",
      subtitle: "Ambassador Jane Smith",
      description: "Former UN Ambassador shares insights on global diplomacy and multilateral negotiation",
      image: "/images/hero-speaker.jpg",
      buttonText: "View Schedule",
      buttonLink: "/schedule"
    }
  ];
  
  // Statistics data
  const statistics = [
    { value: "500+", label: "Delegates" },
    { value: "25", label: "Committees" },
    { value: "60+", label: "Schools" },
    { value: "15", label: "Years" }
  ];
  
  // CTA blocks data
  const ctaBlocks = [
    {
      title: "Delegate Hub",
      description: "Resources, guides, and information for conference participants",
      icon: <Users size={36} />,
      link: "/delegates",
      color: "bg-blue-600"
    },
    {
      title: "Faculty Advisor Hub",
      description: "Preparation materials, schedules, and coordination resources",
      icon: <BookOpen size={36} />,
      link: "/faculty",
      color: "bg-amber-600"
    },
    {
      title: "Staff & Registration",
      description: "Apply to join our team or register for the upcoming conference",
      icon: <UserPlus size={36} />,
      link: "/register",
      color: "bg-red-600"
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
    <div className="min-h-screen bg-white">
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
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{item.title}</h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">{item.subtitle}</h2>
              <p className="text-lg max-w-2xl mb-6">{item.description}</p>
              <Link 
                to={item.buttonLink}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
              >
                {item.buttonText}
              </Link>
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
      <section className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
                <span className="text-sm md:text-base opacity-80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Blocks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Started</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ctaBlocks.map((block, index) => (
              <Link 
                key={index} 
                to={block.link} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
              >
                <div className={`${block.color} p-6 text-white`}>
                  <div className="flex justify-center">
                    {block.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition duration-300">
                    {block.title}
                  </h3>
                  <p className="text-gray-600">{block.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About GSUMUN</h2>
              <p className="text-gray-700 mb-4">
                Georgia State University Model United Nations (GSUMUN) is an educational conference where students 
                simulate United Nations committees and other international organizations. Delegates represent various 
                countries and work to solve global challenges through debate, negotiation, and collaboration.
              </p>
              <p className="text-gray-700 mb-6">
                Our conference provides a unique opportunity for high school students to develop essential skills 
                in public speaking, critical thinking, and diplomatic negotiation while exploring complex 
                international issues.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
              >
                Learn more about GSUMUN
                <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/about-gsumun.jpg" 
                  alt="GSUMUN Conference Session" 
                  className="w-full h-auto object-cover"
                  style={{ height: '350px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Important Dates</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 md:pl-10 pb-8 border-l-2 border-blue-600 last:border-transparent last:pb-0"
                >
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <Calendar size={12} className="text-white" />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-sm text-blue-600 font-semibold mb-2">{event.date}</div>
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Location / Contact CTA */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <MapPin size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Join Us in Atlanta</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            GSUMUN 2025 will be held at Georgia State University's downtown campus.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/venue" 
              className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition duration-300"
            >
              View Venue Details
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;