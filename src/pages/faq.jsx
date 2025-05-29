import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Mail, Phone, MessageCircle, HelpCircle } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const faqData = {
    general: {
      title: 'General Information',
      icon: <HelpCircle size={20} />,
      questions: [
        {
          id: 'what-is-gsumun',
          question: 'What is GSUMUN?',
          answer: 'GSUMUN (Georgia State University Model United Nations) is an annual conference that simulates the United Nations. High school and college students represent different countries and work together to solve global issues through debate, negotiation, and resolution writing.'
        },
        {
          id: 'when-where',
          question: 'When and where is GSUMUN 2025?',
          answer: 'GSUMUN 2025 will be held in November 2025 at the Georgia State University Student Center in downtown Atlanta, Georgia. Specific dates will be announced soon.'
        },
        {
          id: 'who-can-participate',
          question: 'Who can participate in GSUMUN?',
          answer: 'GSUMUN is open to high school and college students. Both experienced delegates and newcomers are welcome. Faculty advisors must accompany student delegations.'
        },
        {
          id: 'conference-size',
          question: 'How large is the conference?',
          answer: 'GSUMUN typically hosts 800-1000 delegates from schools across the Southeast and beyond, making it one of the premier Model UN conferences in the region.'
        },
        {
          id: 'first-time-friendly',
          question: 'Is GSUMUN beginner-friendly?',
          answer: 'Absolutely! We welcome first-time delegates and provide comprehensive training materials, background guides, and supportive staff to help newcomers succeed.'
        },
        {
          id: 'languages',
          question: 'What languages are used at the conference?',
          answer: 'All committee sessions and official proceedings are conducted in English. However, delegates may use their native languages during informal discussions and caucuses.'
        }
      ]
    },
    registration: {
      title: 'Registration & Payment',
      icon: <Mail size={20} />,
      questions: [
        {
          id: 'how-to-register',
          question: 'How do I register my school?',
          answer: 'Visit our registration page and complete the online form. You\'ll need to provide school information, estimated delegation size, and country preferences. After submitting, you\'ll receive an invoice and country assignment.'
        },
        {
          id: 'registration-cost',
          question: 'How much does registration cost?',
          answer: 'Registration fees are $50 per delegation plus $40 per delegate. This includes all conference materials, meals during the conference, and a conference t-shirt.'
        },
        {
          id: 'payment-deadline',
          question: 'When is payment due?',
          answer: 'Payment must be received by October 31, 2025. Delegations may be dropped for non-payment after this date unless approved by the Secretary-General.'
        },
        {
          id: 'country-assignment',
          question: 'How are countries assigned?',
          answer: 'Countries are assigned by the Secretary-General based on your preferences, delegation size, and registration order. We do our best to accommodate preferences, but assignments are not guaranteed.'
        },
        {
          id: 'change-delegation-size',
          question: 'Can I change my delegation size after registering?',
          answer: 'Yes, but changes must be made before October 20, 2025. You\'ll be billed for the minimum number of delegates required for your country assignment.'
        },
        {
          id: 'cancellation-policy',
          question: 'What is the cancellation policy?',
          answer: 'Cancellations due to extreme circumstances must be submitted in writing to the Secretary-General before the conference begins. Requests are evaluated case-by-case, and decisions are final.'
        },
        {
          id: 'group-discounts',
          question: 'Are there discounts for large delegations?',
          answer: 'We offer volume pricing - the more delegates you bring, the lower the per-delegate cost due to our delegation matrix structure. Contact us for specific pricing for large groups.'
        }
      ]
    },
    preparation: {
      title: 'Delegate Preparation',
      icon: <MessageCircle size={20} />,
      questions: [
        {
          id: 'background-guides',
          question: 'When are background guides available?',
          answer: 'Background guides are uploaded by August 15, 2025. These contain detailed information about committee topics, relevant UN history, and questions for consideration.'
        },
        {
          id: 'position-papers',
          question: 'Are position papers required?',
          answer: 'Position papers are required and must be submitted by October 25, 2025 at 11:59pm to sg@gsumun.org. They are necessary to be eligible for Position Paper Awards.'
        },
        {
          id: 'position-paper-format',
          question: 'What is the format for position papers?',
          answer: 'Position papers must be one page per committee, use Times New Roman 10-12pt font, and include specific header information. Detailed guidelines are available in our Delegate Resource Guide.'
        },
        {
          id: 'research-help',
          question: 'Where can I find research resources?',
          answer: 'Our website provides research guides, sample position papers, and links to reliable sources. The UN website, academic databases, and recent news sources are also valuable.'
        },
        {
          id: 'dress-code',
          question: 'What is the dress code?',
          answer: 'Western business attire is required: suits, dress shirts, ties for men; business suits, professional dresses, or blouses with dress pants/skirts for women. National dress is also appropriate if formal.'
        },
        {
          id: 'what-to-bring',
          question: 'What should delegates bring to the conference?',
          answer: 'Bring notepads, pens, business attire, position papers, delegate badge (provided at registration), and any research materials. Laptops are helpful but not required.'
        }
      ]
    },
    procedures: {
      title: 'Rules & Procedures',
      icon: <MessageCircle size={20} />,
      questions: [
        {
          id: 'rules-of-procedure',
          question: 'Where can I find the rules of procedure?',
          answer: 'Complete rules of procedure are available on our website under "Delegate Resources." We also provide training sessions and guides for first-time delegates.'
        },
        {
          id: 'committee-flow',
          question: 'How do committee sessions work?',
          answer: 'Sessions begin with roll call, agenda setting, and opening statements. This is followed by moderated and unmoderated caucuses, working paper development, draft resolution introduction, and voting.'
        },
        {
          id: 'voting-procedures',
          question: 'How does voting work?',
          answer: 'Most substantive votes require a simple majority. Delegates who said "Present and Voting" during roll call cannot abstain. Procedural votes also require simple majority, except motions to close debate (2/3 majority).'
        },
        {
          id: 'working-papers-vs-resolutions',
          question: 'What\'s the difference between working papers and draft resolutions?',
          answer: 'Working papers are informal documents to gauge support and outline ideas. Draft resolutions are formal documents in UN format that are voted on by the committee.'
        },
        {
          id: 'crisis-committees',
          question: 'How do crisis committees work?',
          answer: 'Crisis committees simulate evolving situations. Delegates have portfolio powers and can send crisis notes to influence events outside the committee room. They write directives instead of resolutions.'
        },
        {
          id: 'awards-criteria',
          question: 'How are awards determined?',
          answer: 'Awards are based on preparation (position papers), participation in debate, leadership in resolution writing, and knowledge of parliamentary procedure. Different categories include Best Delegate, Outstanding Delegate, and Honorable Mention.'
        }
      ]
    },
    logistics: {
      title: 'Venue & Travel',
      icon: <Phone size={20} />,
      questions: [
        {
          id: 'venue-location',
          question: 'Where exactly is the conference held?',
          answer: 'The conference is held at the Georgia State University Student Center, located at 55 Gilmer Street SE, Atlanta, GA 30303 in downtown Atlanta.'
        },
        {
          id: 'parking-info',
          question: 'Where can we park?',
          answer: 'The Student Center Parking Deck (41 Courtland Street SE) offers convenient parking for $10/day. Additional parking options are available nearby. School buses require advance coordination.'
        },
        {
          id: 'hotel-recommendations',
          question: 'Where should we stay?',
          answer: 'We have partnerships with several downtown hotels offering special GSUMUN rates. Options include Courtyard Marriott, Hilton Garden Inn, and Hampton Inn, all within walking distance.'
        },
        {
          id: 'transportation-options',
          question: 'How do we get to the venue?',
          answer: 'The venue is accessible by MARTA rail (Five Points Station), car via I-75/85, or taxi/rideshare from the airport. Detailed directions are available on our venue page.'
        },
        {
          id: 'meals-included',
          question: 'What meals are included?',
          answer: 'Registration includes continental breakfast both days, lunch both days, refreshments during breaks, and light refreshments at the delegate social event.'
        },
        {
          id: 'nearby-restaurants',
          question: 'What dining options are available nearby?',
          answer: 'Downtown Atlanta offers numerous dining options within walking distance, from quick service (Chick-fil-A, Subway) to fine dining. A detailed dining guide is provided at registration.'
        },
        {
          id: 'accessibility',
          question: 'Is the venue accessible?',
          answer: 'Yes, the Student Center is fully ADA compliant with elevator access, accessible parking, and accommodations available. Contact us in advance for specific accessibility needs.'
        }
      ]
    },
    faculty: {
      title: 'Faculty Advisors',
      icon: <Mail size={20} />,
      questions: [
        {
          id: 'faculty-requirements',
          question: 'What are the requirements for faculty advisors?',
          answer: 'Schools must have at least one faculty advisor for every 15 delegates. Faculty advisors must be present for the entire conference and serve as the primary contact for their delegation.'
        },
        {
          id: 'faculty-responsibilities',
          question: 'What are faculty advisor responsibilities?',
          answer: 'Faculty advisors supervise delegate behavior, check in regularly at the Faculty Lounge, coordinate registration and payment, and ensure delegates follow conference rules and code of conduct.'
        },
        {
          id: 'faculty-events',
          question: 'Are there special events for faculty advisors?',
          answer: 'Yes! We offer a faculty orientation, dedicated faculty lounge, networking reception, and an optional workshop on building successful Model UN programs.'
        },
        {
          id: 'committee-observation',
          question: 'Can faculty advisors observe committee sessions?',
          answer: 'Faculty advisors are welcome to observe committee sessions but should not interfere with proceedings or assist their delegates during formal sessions.'
        },
        {
          id: 'delegate-supervision',
          question: 'How should faculty advisors supervise delegates?',
          answer: 'Maintain active cell phone contact, check in at the Faculty Lounge during each session, be available for emergencies, and ensure delegates maintain professional conduct throughout.'
        },
        {
          id: 'first-time-advisor',
          question: 'I\'m a first-time faculty advisor. What should I know?',
          answer: 'We provide comprehensive resources including preparation guides, training materials, and support throughout the conference. Don\'t hesitate to ask questions - our staff is here to help!'
        }
      ]
    },
    technical: {
      title: 'Technical Support',
      icon: <Phone size={20} />,
      questions: [
        {
          id: 'website-issues',
          question: 'I\'m having trouble with the website. Who can help?',
          answer: 'For technical issues with registration or the website, contact our IT support at tech@gsumun.org or call (404) 413-1500 during business hours.'
        },
        {
          id: 'login-problems',
          question: 'I can\'t access my registration account.',
          answer: 'Try resetting your password using the "Forgot Password" link. If problems persist, email tech@gsumun.org with your school name and registration details.'
        },
        {
          id: 'document-downloads',
          question: 'I can\'t download background guides or forms.',
          answer: 'Ensure you\'re using an updated browser and have PDF viewing capabilities. Try clearing your browser cache or using a different browser. Contact tech support if issues continue.'
        },
        {
          id: 'payment-processing',
          question: 'My payment didn\'t go through. What should I do?',
          answer: 'Check with your bank about transaction limits and try again. For continued issues, contact our finance team at finance@gsumun.org with your transaction details.'
        },
        {
          id: 'email-notifications',
          question: 'I\'m not receiving conference emails.',
          answer: 'Check your spam/junk folder and add @gsumun.org to your safe sender list. Update your email address in your registration if needed.'
        }
      ]
    }
  };

  // Filter questions based on search term
  const filterQuestions = (questions) => {
    if (!searchTerm) return questions;
    return questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Get all questions for search
  const allQuestions = Object.values(faqData).flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  );

  const filteredAllQuestions = filterQuestions(allQuestions);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl mb-8">
            Find answers to common questions about GSUMUN 2025. Can't find what you're looking for? Contact us!
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Search Results */}
          {searchTerm && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Search Results ({filteredAllQuestions.length})</h2>
              {filteredAllQuestions.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <p className="text-gray-500">No questions found matching "{searchTerm}". Try different keywords or browse categories below.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredAllQuestions.map((question) => (
                    <div key={question.id} className="bg-white rounded-lg shadow-md">
                      <button
                        onClick={() => toggleQuestion(question.id)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50"
                      >
                        <div>
                          <h3 className="font-medium text-gray-900">{question.question}</h3>
                          <p className="text-sm text-blue-600">{question.category}</p>
                        </div>
                        {expandedQuestions[question.id] ? 
                          <ChevronDown size={20} className="text-gray-400" /> : 
                          <ChevronRight size={20} className="text-gray-400" />
                        }
                      </button>
                      {expandedQuestions[question.id] && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{question.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Category Navigation - Only show when not searching */}
          {!searchTerm && (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Object.entries(faqData).map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        activeCategory === key
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-center mb-2">
                        {category.icon}
                      </div>
                      <p className="font-medium text-sm">{category.title}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {category.questions.length} questions
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ Questions by Category */}
              <div className="bg-white rounded-lg shadow-md">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    {faqData[activeCategory].icon}
                    <span className="ml-2">{faqData[activeCategory].title}</span>
                  </h3>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {faqData[activeCategory].questions.map((question) => (
                    <div key={question.id}>
                      <button
                        onClick={() => toggleQuestion(question.id)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50"
                      >
                        <h4 className="font-medium text-gray-900">{question.question}</h4>
                        {expandedQuestions[question.id] ? 
                          <ChevronDown size={20} className="text-gray-400 flex-shrink-0 ml-4" /> : 
                          <ChevronRight size={20} className="text-gray-400 flex-shrink-0 ml-4" />
                        }
                      </button>
                      {expandedQuestions[question.id] && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{question.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Contact Section */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Still Have Questions?</h2>
              <p className="text-blue-700">Our team is here to help! Don't hesitate to reach out.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Mail size={20} />
                </div>
                <h3 className="font-medium mb-2">General Questions</h3>
                <p className="text-sm text-gray-600 mb-2">For registration, logistics, and general inquiries</p>
                <a href="mailto:sg@gsumun.org" className="text-blue-600 hover:underline">
                  sg@gsumun.org
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Phone size={20} />
                </div>
                <h3 className="font-medium mb-2">Phone Support</h3>
                <p className="text-sm text-gray-600 mb-2">Available Monday-Friday, 9 AM - 5 PM EST</p>
                <a href="tel:+14044131500" className="text-blue-600 hover:underline">
                  (404) 413-1500
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <MessageCircle size={20} />
                </div>
                <h3 className="font-medium mb-2">Technical Issues</h3>
                <p className="text-sm text-gray-600 mb-2">Website, registration, or payment problems</p>
                <a href="mailto:tech@gsumun.org" className="text-blue-600 hover:underline">
                  tech@gsumun.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-3">New to Model UN?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Check out our comprehensive delegate guide and preparation resources.
              </p>
              <a href="/delegate-guide" className="text-blue-600 hover:underline text-sm font-medium">
                View Delegate Guide →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-3">Faculty Advisors</h3>
              <p className="text-sm text-gray-600 mb-4">
                Find detailed information about preparing your delegation and conference logistics.
              </p>
              <a href="/faculty-guide" className="text-blue-600 hover:underline text-sm font-medium">
                View Faculty Guide →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-3">Ready to Register?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Start your registration process and secure your delegation's spot at GSUMUN 2025.
              </p>
              <a href="/register" className="text-blue-600 hover:underline text-sm font-medium">
                Register Now →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;