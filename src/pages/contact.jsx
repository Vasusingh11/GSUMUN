import React, { useState } from 'react';
import { Mail, MapPin, Clock, User, MessageSquare, HelpCircle, Users, BookOpen, Settings, Accessibility } from 'lucide-react';

const ContactPage = () => {
  // Contact departments
  const departments = [
    {
      name: 'Secretary-General',
      icon: <User size={20} />,
      email: 'sg@gsumun.org',
      description: 'General inquiries, leadership questions, and conference overview',
      responsibleFor: ['Conference leadership', 'Strategic planning', 'General inquiries', 'Partnership opportunities']
    },
    {
      name: 'Registration & Logistics',
      icon: <Users size={20} />,
      email: 'registration@gsumun.org',
      description: 'Registration, payment, accommodation, and travel assistance',
      responsibleFor: ['School registration', 'Payment processing', 'Hotel reservations', 'Transportation coordination']
    },
    {
      name: 'Academic Affairs',
      icon: <BookOpen size={20} />,
      email: 'academic@gsumun.org',
      description: 'Committee information, background guides, and academic content',
      responsibleFor: ['Background guides', 'Position papers', 'Committee assignments', 'Academic standards']
    },
    {
      name: 'Digital Infrastructure',
      icon: <Settings size={20} />,
      email: 'digital@gsumun.org',
      description: 'Website issues, technical support, and digital resources',
      responsibleFor: ['Website support', 'Registration platform', 'Digital resources', 'Technical assistance']
    },
    {
      name: 'Accessibility Services',
      icon: <Accessibility size={20} />,
      email: 'accessibility@gsumun.org',
      description: 'Special accommodations and accessibility needs',
      responsibleFor: ['Special accommodations', 'Dietary restrictions', 'Mobility assistance', 'Language interpretation']
    },
    {
      name: 'Faculty Support',
      icon: <HelpCircle size={20} />,
      email: 'faculty@gsumun.org',
      description: 'Faculty advisor resources and delegation management',
      responsibleFor: ['Faculty resources', 'Delegation coordination', 'Chaperone information', 'Educational materials']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16" style={{ fontFamily: 'SF Pro Display Light, system-ui, sans-serif' }}>
      {/* Header Section */}
      <section className="text-white py-16 px-4" style={{ backgroundColor: '#29487D' }}>
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'SF Pro Display Bold, system-ui, sans-serif' }}>Contact Us</h1>
          <p className="text-xl max-w-4xl mx-auto mb-8" style={{ fontFamily: 'SF Pro Display Light, system-ui, sans-serif' }}>
            Have questions about GSUMUN 2025? We're here to help! Reach out to our team 
            for assistance with registration, academic content, logistics, or any other inquiries.
          </p>
          
          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="flex items-center justify-center gap-3">
              <Mail size={24} />
              <div className="text-left">
                <div className="font-medium" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>Email</div>
                <div className="text-blue-200" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>info@gsumun.org</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock size={24} />
              <div className="text-left">
                <div className="font-medium" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>Response Time</div>
                <div className="text-blue-200" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>24-48 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Quick Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'SF Pro Display Bold, system-ui, sans-serif' }}>Get in Touch</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-lg p-3" style={{ backgroundColor: '#e6eaff' }}>
                      <Mail style={{ color: '#29487D' }} size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>General Inquiries</h3>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>For all general questions and information</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:info@gsumun.org?subject=General Inquiry - GSUMUN 2025"
                    className="text-white px-4 py-2 rounded-md text-sm font-medium transition inline-block"
                    style={{ 
                      backgroundColor: '#29487D',
                      fontFamily: 'SF Pro Display, system-ui, sans-serif'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1a2c4a'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#29487D'}
                  >
                    Email info@gsumun.org
                  </a>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-lg p-3" style={{ backgroundColor: '#f0f5ff' }}>
                      <MessageSquare style={{ color: '#3C5898' }} size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>Secretary-General</h3>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>Direct line to conference leadership</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:sg@gsumun.org?subject=Inquiry for Secretary-General - GSUMUN 2025"
                    className="text-white px-4 py-2 rounded-md text-sm font-medium transition inline-block"
                    style={{ 
                      backgroundColor: '#3C5898',
                      fontFamily: 'SF Pro Display, system-ui, sans-serif'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#29487D'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#3C5898'}
                  >
                    Email Secretary-General
                  </a>
                </div>
              </div>

              <div className="border rounded-lg p-6" style={{ backgroundColor: '#f8f9ff', borderColor: '#D4D8E8' }}>
                <h3 className="font-semibold mb-3" style={{ color: '#29487D', fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>Response Times</h3>
                <div className="space-y-2 text-sm" style={{ color: '#3C5898', fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>
                  <div className="flex justify-between">
                    <span>General Inquiries:</span>
                    <span className="font-medium">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Registration Issues:</span>
                    <span className="font-medium">Same day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency (during conference):</span>
                    <span className="font-medium">Immediate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'SF Pro Display Bold, system-ui, sans-serif' }}>Department Contacts</h2>
              <p className="text-gray-600" style={{ fontFamily: 'SF Pro Display Light, system-ui, sans-serif' }}>
                For faster assistance, contact the department most relevant to your inquiry:
              </p>
              
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg p-2 flex-shrink-0" style={{ backgroundColor: '#e6eaff' }}>
                        <div style={{ color: '#29487D' }}>
                          {dept.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'SF Pro Display Bold, system-ui, sans-serif' }}>{dept.name}</h3>
                        <p className="text-gray-600 text-sm mb-3" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>{dept.description}</p>
                        
                        <div className="mb-3">
                          <a 
                            href={`mailto:${dept.email}`}
                            className="font-medium transition"
                            style={{ 
                              color: '#3C5898',
                              fontFamily: 'SF Pro Display, system-ui, sans-serif'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#29487D'}
                            onMouseLeave={(e) => e.target.style.color = '#3C5898'}
                          >
                            {dept.email}
                          </a>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-1" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>Handles:</h4>
                          <ul className="text-xs text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-1" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>
                            {dept.responsibleFor.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#29487D' }}></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Office Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'SF Pro Display Bold, system-ui, sans-serif' }}>Office Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin style={{ color: '#29487D' }} className="mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>Address</h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>
                      Georgia State University<br />
                      Political Science Department<br />
                      55 Park Place NE, Suite 504<br />
                      Atlanta, GA 30303
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock style={{ color: '#29487D' }} className="mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>Office Hours</h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>
                      Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                      Saturday: 10:00 AM - 2:00 PM EST<br />
                      Sunday: Closed<br />
                      <span className="text-sm text-gray-500 mt-2 block">
                        Extended hours during conference registration periods
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail style={{ color: '#29487D' }} className="mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>Email Support</h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>
                      Main Office: info@gsumun.org<br />
                      Emergency Email: emergency@gsumun.org<br />
                      <span className="text-sm text-gray-500">
                        Emergency email monitored 24/7 during conference dates
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Links */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'SF Pro Display Bold, system-ui, sans-serif' }}>Quick Help</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3" style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>Before You Contact Us</h3>
                  <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>
                    You might find the answer to your question in our comprehensive resources:
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="/faqs" 
                      className="block text-sm transition"
                      style={{ 
                        color: '#3C5898',
                        fontFamily: 'SF Pro Display, system-ui, sans-serif'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#29487D'}
                      onMouseLeave={(e) => e.target.style.color = '#3C5898'}
                    >
                      → Frequently Asked Questions
                    </a>
                    <a 
                      href="/resources/delegate" 
                      className="block text-sm transition"
                      style={{ 
                        color: '#3C5898',
                        fontFamily: 'SF Pro Display, system-ui, sans-serif'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#29487D'}
                      onMouseLeave={(e) => e.target.style.color = '#3C5898'}
                    >
                      → Delegate Guide & Resources
                    </a>
                    <a 
                      href="/resources/faculty" 
                      className="block text-sm transition"
                      style={{ 
                        color: '#3C5898',
                        fontFamily: 'SF Pro Display, system-ui, sans-serif'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#29487D'}
                      onMouseLeave={(e) => e.target.style.color = '#3C5898'}
                    >
                      → Faculty Advisor Guide
                    </a>
                    <a 
                      href="/schedule" 
                      className="block text-sm transition"
                      style={{ 
                        color: '#3C5898',
                        fontFamily: 'SF Pro Display, system-ui, sans-serif'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#29487D'}
                      onMouseLeave={(e) => e.target.style.color = '#3C5898'}
                    >
                      → Conference Schedule & Timeline
                    </a>
                    <a 
                      href="/venue" 
                      className="block text-sm transition"
                      style={{ 
                        color: '#3C5898',
                        fontFamily: 'SF Pro Display, system-ui, sans-serif'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#29487D'}
                      onMouseLeave={(e) => e.target.style.color = '#3C5898'}
                    >
                      → Venue & Travel Information
                    </a>
                  </div>
                </div>
                
                <div className="border rounded-lg p-6" style={{ backgroundColor: '#f8f9ff', borderColor: '#D4D8E8' }}>
                  <h3 className="font-semibold mb-3" style={{ color: '#29487D', fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>Emergency Contact</h3>
                  <p className="text-sm mb-3" style={{ color: '#3C5898', fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>
                    For urgent matters during the conference (November 5-6, 2025):
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail size={16} style={{ color: '#29487D' }} />
                      <span className="font-medium" style={{ color: '#29487D', fontFamily: 'SF Pro Display, system-ui, sans-serif' }}>emergency@gsumun.org</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Follow */}
      <section className="py-12 px-4 text-white" style={{ backgroundColor: '#29487D' }}>
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'SF Pro Display Bold, system-ui, sans-serif' }}>Stay Connected</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'SF Pro Display Light, system-ui, sans-serif' }}>
            Follow us for the latest updates, announcements, and behind-the-scenes content 
            from GSUMUN 2025 preparation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@gsumun.org" 
              className="text-white px-6 py-3 rounded-md font-medium transition"
              style={{ 
                backgroundColor: '#3C5898',
                fontFamily: 'SF Pro Display, system-ui, sans-serif'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2d4374'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3C5898'}
            >
              General Inquiries
            </a>
            <a 
              href="mailto:sg@gsumun.org" 
              className="border text-white px-6 py-3 rounded-md font-medium transition"
              style={{ 
                borderColor: '#D4D8E8',
                fontFamily: 'SF Pro Display, system-ui, sans-serif'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Secretary-General
            </a>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm" style={{ fontFamily: 'Helvetica Neue, system-ui, sans-serif' }}>
            <p>Expected response time: 24-48 hours during business days</p>
            <p>Faster response times during conference registration periods</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;