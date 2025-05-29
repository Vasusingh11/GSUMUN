import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, User, MessageSquare, HelpCircle, Users, BookOpen, Settings, Accessibility } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            Have questions about GSUMUN 2025? We're here to help! Reach out to our team 
            for assistance with registration, academic content, logistics, or any other inquiries.
          </p>
          
          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center gap-3">
              <Mail size={24} />
              <div className="text-left">
                <div className="font-medium">Email</div>
                <div className="text-blue-200">info@gsumun.org</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone size={24} />
              <div className="text-left">
                <div className="font-medium">Phone</div>
                <div className="text-blue-200">(404) 413-1500</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock size={24} />
              <div className="text-left">
                <div className="font-medium">Response Time</div>
                <div className="text-blue-200">24-48 hours</div>
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
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">General Inquiries</h3>
                      <p className="text-gray-600 text-sm">For all general questions and information</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:info@gsumun.org?subject=General Inquiry - GSUMUN 2025"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition inline-block"
                  >
                    Email info@gsumun.org
                  </a>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-100 rounded-lg p-3">
                      <Phone className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone Support</h3>
                      <p className="text-gray-600 text-sm">Available during business hours</p>
                    </div>
                  </div>
                  <a 
                    href="tel:+14044131500"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition inline-block"
                  >
                    Call (404) 413-1500
                  </a>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <MessageSquare className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Secretary-General</h3>
                      <p className="text-gray-600 text-sm">Direct line to conference leadership</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:sg@gsumun.org?subject=Inquiry for Secretary-General - GSUMUN 2025"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition inline-block"
                  >
                    Email Secretary-General
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-blue-800">Response Times</h3>
                <div className="space-y-2 text-sm text-blue-700">
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
              <h2 className="text-2xl font-bold">Department Contacts</h2>
              <p className="text-gray-600">
                For faster assistance, contact the department most relevant to your inquiry:
              </p>
              
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                        {dept.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                        
                        <div className="mb-3">
                          <a 
                            href={`mailto:${dept.email}`}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {dept.email}
                          </a>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-1">Handles:</h4>
                          <ul className="text-xs text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-1">
                            {dept.responsibleFor.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
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
              <h2 className="text-2xl font-bold mb-6">Office Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      Georgia State University<br />
                      Political Science Department<br />
                      55 Park Place NE, Suite 504<br />
                      Atlanta, GA 30303
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
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
                  <Phone className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone Support</h3>
                    <p className="text-gray-600">
                      Main Office: (404) 413-1500<br />
                      Emergency Line: (404) 555-8911<br />
                      <span className="text-sm text-gray-500">
                        Emergency line available 24/7 during conference dates
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Links */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Help</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Before You Contact Us</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    You might find the answer to your question in our comprehensive resources:
                  </p>
                  <div className="space-y-2">
                    <a href="/faqs" className="block text-blue-600 hover:text-blue-800 text-sm">
                      → Frequently Asked Questions
                    </a>
                    <a href="/resources/delegate" className="block text-blue-600 hover:text-blue-800 text-sm">
                      → Delegate Guide & Resources
                    </a>
                    <a href="/resources/faculty" className="block text-blue-600 hover:text-blue-800 text-sm">
                      → Faculty Advisor Guide
                    </a>
                    <a href="/schedule" className="block text-blue-600 hover:text-blue-800 text-sm">
                      → Conference Schedule & Timeline
                    </a>
                    <a href="/venue" className="block text-blue-600 hover:text-blue-800 text-sm">
                      → Venue & Travel Information
                    </a>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold mb-3 text-blue-800">Emergency Contact</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    For urgent matters during the conference (November 5-6, 2025):
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-blue-600" />
                      <span className="font-medium text-blue-800">(404) 555-8911</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-blue-600" />
                      <span className="font-medium text-blue-800">emergency@gsumun.org</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Follow */}
      <section className="py-12 px-4 bg-blue-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Follow us for the latest updates, announcements, and behind-the-scenes content 
            from GSUMUN 2025 preparation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@gsumun.org" 
              className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition"
            >
              General Inquiries
            </a>
            <a 
              href="mailto:sg@gsumun.org" 
              className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition"
            >
              Secretary-General
            </a>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm">
            <p>Expected response time: 24-48 hours during business days</p>
            <p>Faster response times during conference registration periods</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;