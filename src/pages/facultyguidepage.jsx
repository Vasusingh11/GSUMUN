import React, { useState } from 'react';
import { Download, ChevronDown, ChevronRight, Check, AlertTriangle, FileText, Users, Clock, Mail, Phone } from 'lucide-react';

const FacultyGuidePage = () => {
  const [expandedSections, setExpandedSections] = useState({
    'before': true, // First section open by default
    'during': false,
    'logistics': false,
    'students': false,
    'emergency': false
  });

  // Toggle sections
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Faculty Advisor Guide</h1>
          <p className="text-xl mb-8">
            Essential information for faculty advisors preparing for and attending GSUMUN 2025.
          </p>
          <div className="flex space-x-4">
            <a 
              href="/docs/faculty-guide-2025.pdf" 
              className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center"
              download
            >
              <Download size={18} className="mr-2" />
              Download Full Guide
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Important Dates Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Important Dates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-blue-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-3">1</div>
                <div>
                  <h3 className="font-medium">May 31, 2025</h3>
                  <p className="text-sm text-gray-600">Registration Opens</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-3">2</div>
                <div>
                  <h3 className="font-medium">October 20, 2025</h3>
                  <p className="text-sm text-gray-600">Registration Closes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-3">3</div>
                <div>
                  <h3 className="font-medium">October 25, 2025</h3>
                  <p className="text-sm text-gray-600">Position Papers Due</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-3">4</div>
                <div>
                  <h3 className="font-medium">November 2025</h3>
                  <p className="text-sm text-gray-600">Conference Dates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Before the Conference Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('before')}
            >
              <h2 className="text-xl font-bold">Before the Conference: Preparation</h2>
              {expandedSections.before ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.before && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Registration Process</h3>
                <p className="mb-4">To register your school delegation for GSUMUN 2025:</p>
                
                <ol className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Complete the School Registration Form</p>
                      <p className="text-sm text-gray-600">
                        Fill out the online registration form on our website with your school's information, 
                        estimated delegation size, and faculty advisor contact details.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Receive Country Assignment</p>
                      <p className="text-sm text-gray-600">
                        After submitting your registration, you'll receive your country assignment based on your preferences and delegation size. 
                        Country assignments are made by the Secretary-General.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">Submit Payment</p>
                      <p className="text-sm text-gray-600">
                        Registration fee of $50 per delegation plus $40 per delegate. 
                        Payment must be completed by October 31, 2025.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">4</div>
                    <div>
                      <p className="font-medium">Submit Position Papers</p>
                      <p className="text-sm text-gray-600">
                        Position papers must be submitted by October 25, 2025 at 11:59pm to sg@gsumun.org 
                        to be eligible for Position Paper Awards.
                      </p>
                    </div>
                  </li>
                </ol>
                
                <h3 className="text-lg font-semibold mb-4">Preparing Your Delegation</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Student Selection</p>
                      <p className="text-sm text-gray-600">
                        Consider academic standing, interest in international affairs, public speaking ability, 
                        and commitment to preparation when selecting students for your delegation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Training Sessions</p>
                      <p className="text-sm text-gray-600">
                        Hold regular training sessions covering:
                      </p>
                      <ul className="text-sm text-gray-600 mt-2 list-disc list-inside ml-4">
                        <li>Rules of procedure and parliamentary process</li>
                        <li>Position paper writing</li>
                        <li>Public speaking and formal debate</li>
                        <li>Research methods and sources</li>
                        <li>Resolution writing and amendment procedures</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Country and Topic Research</p>
                      <p className="text-sm text-gray-600">
                        Guide students in researching their assigned countries and committee topics.
                        Direct them to reliable sources and help them understand their country's perspective.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="font-medium mb-2 flex items-center">
                      <FileText size={18} className="text-blue-600 mr-2" />
                      Required Documents
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>School Registration Form</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Position Papers</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Payment Confirmation</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Code of Conduct Agreement</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Users size={18} className="text-blue-600 mr-2" />
                      Faculty Responsibilities
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Serve as primary contact</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Coordinate registration and payment</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Prepare and supervise delegates</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Ensure code of conduct compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* During the Conference Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('during')}
            >
              <h2 className="text-xl font-bold">During the Conference</h2>
              {expandedSections.during ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.during && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Conference Schedule Overview</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Clock size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Day 1</p>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li><span className="font-medium">8:00-9:30 AM:</span> Registration & Check-in</li>
                        <li><span className="font-medium">9:30-10:30 AM:</span> Opening Ceremony</li>
                        <li><span className="font-medium">11:00 AM-1:00 PM:</span> Committee Session I</li>
                        <li><span className="font-medium">1:00-2:00 PM:</span> Lunch Break</li>
                        <li><span className="font-medium">2:00-4:30 PM:</span> Committee Session II</li>
                        <li><span className="font-medium">5:00-6:30 PM:</span> Committee Session III</li>
                        <li><span className="font-medium">7:00-9:00 PM:</span> Delegate Social Event</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Day 2</p>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li><span className="font-medium">9:00-11:30 AM:</span> Committee Session IV</li>
                        <li><span className="font-medium">11:30 AM-12:30 PM:</span> Lunch Break</li>
                        <li><span className="font-medium">12:30-2:30 PM:</span> Committee Session V</li>
                        <li><span className="font-medium">3:00-4:30 PM:</span> Closing Ceremony & Awards</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Faculty Advisor Schedule</h3>
                <p className="mb-4">In addition to the general conference schedule, we have arranged the following events specifically for faculty advisors:</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Faculty Advisor Orientation</p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Day 1, 9:00-9:30 AM</span> (During Registration)<br />
                        A brief orientation for all faculty advisors in the Student Center, Room 217.
                        We'll review the conference schedule, facilities, and emergency procedures.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Faculty Advisor Lounge</p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Open throughout the conference</span><br />
                        Student Center, Room 220<br />
                        A dedicated space for faculty advisors with refreshments, Wi-Fi, and workspaces.
                        This is also where faculty advisors must check in at least once during each committee session.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">Faculty Advisor Reception</p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Day 1, 7:00-8:30 PM</span><br />
                        Student Center, Room 223<br />
                        An opportunity to network with other faculty advisors and the GSUMUN staff.
                        Light refreshments will be served.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">4</div>
                    <div>
                      <p className="font-medium">Faculty Advisor Workshop</p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Day 2, 10:00-11:00 AM</span><br />
                        Student Center, Room 220<br />
                        An optional workshop on building and sustaining a successful Model UN program.
                        We'll discuss recruitment strategies, funding options, and preparation techniques.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Faculty Responsibilities During Conference</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Supervision</p>
                      <p className="text-sm text-gray-600">
                        Faculty advisors are responsible for the supervision and behavior of their delegates 
                        throughout the conference, including during social events and breaks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Regular Check-ins</p>
                      <p className="text-sm text-gray-600">
                        Faculty advisors must check in at the Faculty Advisor Lounge during each committee session.
                        This ensures that you can be located quickly if needed.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Committee Observation</p>
                      <p className="text-sm text-gray-600">
                        Faculty advisors are welcome to observe committee sessions but should not 
                        interfere with proceedings or assist their delegates during formal sessions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Available Contact</p>
                      <p className="text-sm text-gray-600">
                        Maintain an active cell phone and be reachable throughout the conference 
                        in case of emergencies or issues with your delegates.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <h4 className="text-yellow-800 font-medium">Important Note</h4>
                      <p className="text-sm text-yellow-700">
                        Schools must maintain a ratio of at least one faculty advisor for every 15 delegates.
                        Faculty advisors must be present for the entire duration of the conference. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Travel & Logistics Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('logistics')}
            >
              <h2 className="text-xl font-bold">Travel & Logistics</h2>
              {expandedSections.logistics ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.logistics && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Conference Venue</h3>
                <p className="mb-4">
                  GSUMUN 2025 will be held at the Georgia State University Student Center, located in downtown Atlanta.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium mb-2">Address</h4>
                    <p className="text-sm text-gray-600">
                      Georgia State University Student Center<br />
                      55 Gilmer Street SE<br />
                      Atlanta, GA 30303
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Parking</h4>
                    <p className="text-sm text-gray-600">
                      Parking is available in the Student Center Parking Deck at 41 Courtland Street SE.
                      The daily rate is $10 per vehicle. School buses can drop off delegates at the Student Center entrance
                      and then park at the designated bus parking area.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Accommodation Options</h3>
                <p className="mb-4">
                  We've partnered with several hotels near the conference venue to provide discounted rates for GSUMUN delegates.
                  When booking, mention "GSUMUN 2025" to receive the conference rate.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-1">Courtyard by Marriott Atlanta Downtown</h4>
                    <p className="text-sm text-gray-600 mb-2">0.3 miles from venue • $149/night</p>
                    <p className="text-sm text-gray-600">
                      Address: 133 Carnegie Way, Atlanta, GA 30303<br />
                      Phone: (404) 222-2416<br />
                      Reservation Deadline: October 10, 2025
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-1">Hilton Garden Inn Atlanta Downtown</h4>
                    <p className="text-sm text-gray-600 mb-2">0.4 miles from venue • $159/night</p>
                    <p className="text-sm text-gray-600">
                      Address: 275 Baker Street, Atlanta, GA 30313<br />
                      Phone: (404) 577-2001<br />
                      Reservation Deadline: October 10, 2025
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-1">Hampton Inn & Suites Atlanta-Downtown</h4>
                    <p className="text-sm text-gray-600 mb-2">0.5 miles from venue • $139/night</p>
                    <p className="text-sm text-gray-600">
                      Address: 161 Spring St NW, Atlanta, GA 30303<br />
                      Phone: (404) 589-1111<br />
                      Reservation Deadline: October 10, 2025
                    </p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Transportation</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">From Hartsfield-Jackson Atlanta International Airport</p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">MARTA (Recommended):</span> Take the Gold Line from the Airport Station to Five Points Station.
                        The Student Center is a 5-minute walk from the station. One-way fare is $2.50.<br /><br />
                        
                        <span className="font-medium">Taxi/Rideshare:</span> Approximately $30-40 from the airport to downtown Atlanta.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Around Downtown Atlanta</p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Walking:</span> Most partner hotels are within walking distance (0.3-0.5 miles) of the conference venue.<br /><br />
                        
                        <span className="font-medium">Streetcar:</span> The Atlanta Streetcar connects several downtown locations. One-way fare is $1.00.<br /><br />
                        
                        <span className="font-medium">Rideshare:</span> Uber and Lyft are widely available throughout Atlanta.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Meals</h3>
                <p className="mb-4">
                  Registration includes:
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coffee and light breakfast during registration (Day 1)</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lunch on both conference days</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Refreshments during breaks</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Light refreshments at the Delegate Social (Day 1)</span>
                  </li>
                </ul>
                
                <p className="mb-4">
                  For other meals, there are numerous restaurants within walking distance of the GSU Student Center.
                  A list of recommended dining options will be provided in your registration packet.
                </p>
              </div>
            )}
          </div>
          
          {/* Student Preparation Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('students')}
            >
              <h2 className="text-xl font-bold">Preparing Your Students</h2>
              {expandedSections.students ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.students && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recommended Preparation Timeline</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium mb-1">2-3 Months Before (August-September)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Recruit students and form your delegation</li>
                      <li>• Complete registration and secure funding</li>
                      <li>• Begin weekly or bi-weekly training sessions</li>
                      <li>• Introduce Model UN concepts and parliamentary procedure</li>
                      <li>• Assign countries/committees once confirmed</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium mb-1">1-2 Months Before (September-October)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Guide students in country and topic research</li>
                      <li>• Practice parliamentary procedure through simulations</li>
                      <li>• Work on position paper drafts</li>
                      <li>• Conduct public speaking exercises</li>
                      <li>• Finalize and submit position papers by deadline (Oct 25)</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium mb-1">2-4 Weeks Before (October)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Finalize travel and accommodation arrangements</li>
                      <li>• Conduct mock committee sessions</li>
                      <li>• Practice resolution writing</li>
                      <li>• Prepare opening speeches</li>
                      <li>• Review conference policies and code of conduct</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium mb-1">1 Week Before (Late October)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Final preparations and mock simulations</li>
                      <li>• Distribute materials and conference schedule</li>
                      <li>• Review dress code and professional conduct</li>
                      <li>• Ensure all forms and permissions are completed</li>
                      <li>• Pack materials and professional attire</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Student Expectations & Conduct</h3>
                <p className="mb-4">
                  It's important to prepare your students not only academically but also for the professional
                  environment of the conference. Please review the following expectations with your delegation:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Dress Code</p>
                      <p className="text-sm text-gray-600">
                        Western business attire is required for all committee sessions. Professional appearance
                        includes business suits, dress shirts, ties, and appropriate shoes. National symbols
                        such as flags or pins are not permitted.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Professional Conduct</p>
                      <p className="text-sm text-gray-600">
                        Delegates are expected to maintain professional decorum at all times. This includes
                        using appropriate language, treating all participants with respect, and following
                        parliamentary procedure. Disruptive behavior will not be tolerated.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Attendance & Participation</p>
                      <p className="text-sm text-gray-600">
                        Delegates are required to attend all committee sessions and conference events. 
                        Active participation in debate, caucuses, and resolution writing is expected.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Technology Use</p>
                      <p className="text-sm text-gray-600">
                        Electronic devices should only be used for conference-related purposes during committee sessions.
                        Phones should be silenced, and social media use should be limited to breaks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Emergency Procedures Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('emergency')}
            >
              <h2 className="text-xl font-bold">Emergency Procedures</h2>
              {expandedSections.emergency ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.emergency && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Phone size={18} className="text-blue-600 mr-2" />
                      Conference Emergency Line
                    </h4>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">(404) 555-8911</span><br />
                      Available 24/7 during the conference
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Mail size={18} className="text-blue-600 mr-2" />
                      Faculty Support
                    </h4>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">sg@gsumun.org</span><br />
                      <span className="font-medium">(404) 555-7890</span><br />
                      Available 8 AM - 10 PM during the conference
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Phone size={18} className="text-blue-600 mr-2" />
                      GSU Campus Security
                    </h4>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">(404) 413-2100</span><br />
                      Non-emergency campus security
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Phone size={18} className="text-blue-600 mr-2" />
                      Emergency Services
                    </h4>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">911</span><br />
                      For medical, fire, or police emergencies
                    </p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Medical Emergencies</h3>
                <p className="mb-4">
                  In case of a medical emergency during the conference:
                </p>
                
                <ol className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Assess the Situation</p>
                      <p className="text-sm text-gray-600">
                        Determine if it's a life-threatening emergency. If so, call 911 immediately.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Notify Conference Staff</p>
                      <p className="text-sm text-gray-600">
                        Contact the Conference Emergency Line or find a staff member wearing a Staff badge.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">First Aid</p>
                      <p className="text-sm text-gray-600">
                        First aid stations are located in the Student Center lobby and near the Faculty Advisor Lounge.
                        Each station is equipped with basic first aid supplies and staffed during committee sessions.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">4</div>
                    <div>
                      <p className="font-medium">Medical Facilities</p>
                      <p className="text-sm text-gray-600">
                        The nearest hospitals to the conference venue are:
                      </p>
                      <ul className="text-sm text-gray-600 mt-2">
                        <li>• Grady Memorial Hospital - 80 Jesse Hill Jr Drive SE (0.5 miles)</li>
                        <li>• Emory University Hospital Midtown - 550 Peachtree St NE (1.2 miles)</li>
                      </ul>
                    </div>
                  </li>
                </ol>
                
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <h4 className="text-red-800 font-medium">Important Emergency Information</h4>
                      <p className="text-sm text-red-700">
                        All faculty advisors must provide emergency contact information and any medical conditions 
                        of their delegates during registration. Ensure you have access to this information at all times during the conference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-blue-800 text-white rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Additional Support?</h2>
            <p className="mb-6">
              Our team is here to help you prepare for and navigate GSUMUN 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:sg@gsumun.org" 
                className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center"
              >
                <Mail size={18} className="mr-2" />
                Email Secretary-General
              </a>
              <a 
                href="/docs/faculty-guide-2025.pdf" 
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center"
                download
              >
                <Download size={18} className="mr-2" />
                Download Complete Guide
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyGuidePage;