import React, { useState } from 'react';
import { Download, ChevronDown, ChevronRight, Check, AlertTriangle } from 'lucide-react';

const DelegateGuidePage = () => {
  const [expandedSections, setExpandedSections] = useState({
    'preparation': true, // First section open by default
    'research': false,
    'committee': false,
    'during': false,
    'after': false
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
          <h1 className="text-4xl font-bold mb-4">Delegate Guide</h1>
          <p className="text-xl mb-8">
            A comprehensive guide to help delegates prepare for and participate effectively in GSUMUN 2025.
          </p>
          <div className="flex space-x-4">
            <a 
              href="/docs/delegate-guide-2025.pdf" 
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
                  <h3 className="font-medium">September 30, 2025</h3>
                  <p className="text-sm text-gray-600">Early Registration Deadline</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-3">2</div>
                <div>
                  <h3 className="font-medium">October 15, 2025</h3>
                  <p className="text-sm text-gray-600">Position Paper Deadline</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-3">3</div>
                <div>
                  <h3 className="font-medium">October 25, 2025</h3>
                  <p className="text-sm text-gray-600">Regular Registration Deadline</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-800 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-3">4</div>
                <div>
                  <h3 className="font-medium">November 5-6, 2025</h3>
                  <p className="text-sm text-gray-600">Conference Dates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Preparation Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('preparation')}
            >
              <h2 className="text-xl font-bold">Before the Conference: Preparation</h2>
              {expandedSections.preparation ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.preparation && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Preparation Checklist</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full border-2 border-blue-600 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                    </div>
                    <div>
                      <p className="font-medium">Research your country</p>
                      <p className="text-sm text-gray-600">Study your country's political system, foreign policy positions, and history.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full border-2 border-blue-600 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                    </div>
                    <div>
                      <p className="font-medium">Research committee topics</p>
                      <p className="text-sm text-gray-600">Study your committee's topics and your country's position on them.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full border-2 border-blue-600 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                    </div>
                    <div>
                      <p className="font-medium">Write position paper</p>
                      <p className="text-sm text-gray-600">Due October 15, 2025. See position paper guidelines for details.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full border-2 border-blue-600 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                    </div>
                    <div>
                      <p className="font-medium">Prepare opening speech</p>
                      <p className="text-sm text-gray-600">1-minute speech outlining your country's position on the topics.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full border-2 border-blue-600 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-3 w-3 rounded-full bg-white"></span>
                    </div>
                    <div>
                      <p className="font-medium">Review Rules of Procedure</p>
                      <p className="text-sm text-gray-600">Familiarize yourself with parliamentary procedure and resolution format.</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Recommended Research Sources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-1">UN Official Website</h4>
                    <p className="text-sm text-gray-600 mb-2">Official documents, resolutions, and country statements.</p>
                    <a href="https://www.un.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">www.un.org</a>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-1">CIA World Factbook</h4>
                    <p className="text-sm text-gray-600 mb-2">Country profiles with political, economic, and social data.</p>
                    <a href="https://www.cia.gov/the-world-factbook/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">www.cia.gov/the-world-factbook</a>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-1">UN Digital Library</h4>
                    <p className="text-sm text-gray-600 mb-2">Archive of UN documents, voting records, and resolutions.</p>
                    <a href="https://digitallibrary.un.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">digitallibrary.un.org</a>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-1">BBC Country Profiles</h4>
                    <p className="text-sm text-gray-600 mb-2">Up-to-date news and political analysis for countries.</p>
                    <a href="https://www.bbc.com/news/world" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">www.bbc.com/news/world</a>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <h4 className="text-yellow-800 font-medium">Important Reminder</h4>
                      <p className="text-sm text-yellow-700">
                        Always represent your assigned country's actual policies and positions, not your personal views. Research thoroughly to understand your country's stance, even if it differs from your own opinions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Research Guidelines Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('research')}
            >
              <h2 className="text-xl font-bold">Research Guidelines</h2>
              {expandedSections.research ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.research && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Country Research</h3>
                <p className="mb-4">Focus on these key areas when researching your assigned country:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Political System</h4>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Form of government</li>
                      <li>Key political figures</li>
                      <li>Major political parties</li>
                      <li>Recent elections or transitions</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Foreign Policy</h4>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Major alliances and treaties</li>
                      <li>Relationship with neighboring countries</li>
                      <li>Historical UN voting patterns</li>
                      <li>Current international disputes</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Economic Factors</h4>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Economic system</li>
                      <li>Major industries and exports</li>
                      <li>GDP and development indicators</li>
                      <li>Economic challenges</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Social & Cultural Context</h4>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      <li>Demographics and population</li>
                      <li>Major ethnic and religious groups</li>
                      <li>Human rights situation</li>
                      <li>Social issues and challenges</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Topic Research</h3>
                <p className="mb-4">For each committee topic, make sure to research:</p>
                
                <ul className="space-y-2 mb-6 list-disc list-inside">
                  <li>Historical background and development of the issue</li>
                  <li>Current status and recent developments</li>
                  <li>Past UN resolutions and international actions</li>
                  <li>Different perspectives and approaches to the issue</li>
                  <li>Your country's specific policies and actions on the topic</li>
                  <li>Potential solutions that align with your country's interests</li>
                </ul>
                
                <a 
                  href="/docs/research-guide-2025.pdf" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-flex items-center"
                  download
                >
                  <Download size={18} className="mr-2" />
                  Download Research Guide
                </a>
              </div>
            )}
          </div>
          
          {/* Committee Session Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('committee')}
            >
              <h2 className="text-xl font-bold">Committee Sessions</h2>
              {expandedSections.committee ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.committee && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Committee Flow</h3>
                <ol className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Roll Call</p>
                      <p className="text-sm text-gray-600">The chair takes attendance at the beginning of each session.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Setting the Agenda</p>
                      <p className="text-sm text-gray-600">The committee votes on which topic to discuss first.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">General Speakers List</p>
                      <p className="text-sm text-gray-600">Formal debate begins with opening speeches.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">4</div>
                    <div>
                      <p className="font-medium">Moderated & Unmoderated Caucuses</p>
                      <p className="text-sm text-gray-600">Structured debate on specific aspects and informal discussion.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">5</div>
                    <div>
                      <p className="font-medium">Working Papers</p>
                      <p className="text-sm text-gray-600">Delegates collaborate on informal proposals to address the topic.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">6</div>
                    <div>
                      <p className="font-medium">Draft Resolutions</p>
                      <p className="text-sm text-gray-600">Working papers become formal proposals with sponsors and signatories.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">7</div>
                    <div>
                      <p className="font-medium">Amendments</p>
                      <p className="text-sm text-gray-600">Modifications to draft resolutions (friendly or unfriendly).</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">8</div>
                    <div>
                      <p className="font-medium">Voting Procedure</p>
                      <p className="text-sm text-gray-600">Formal vote on draft resolutions and amendments.</p>
                    </div>
                  </li>
                </ol>
                
                <h3 className="text-lg font-semibold mb-4">Tips for Effective Participation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Speaking Tips</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Speak clearly and confidently</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Use formal language and diplomatic terms</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Address the chair and fellow delegates properly</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Be concise and focused in your points</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Strategy Tips</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Build alliances with like-minded countries</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Stay in character as your country</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Use unmoderated caucuses to network</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Be solution-oriented in your contributions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <a 
                  href="/docs/rules-procedure-2025.pdf" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-flex items-center"
                  download
                >
                  <Download size={18} className="mr-2" />
                  Download Rules of Procedure
                </a>
              </div>
            )}
          </div>
          
          {/* During Conference Section */}
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
                <h3 className="text-lg font-semibold mb-4">What to Bring</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium mb-2">Essential Items</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><b>Professional Attire:</b> Western business attire or formal national dress</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><b>Technology:</b> Laptop/tablet for resolution writing</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><b>Research Materials:</b> Country research, position papers, notes</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><b>Writing Supplies:</b> Notepad, pens for note-taking</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Other Recommendations</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><b>Water Bottle:</b> Stay hydrated during long sessions</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><b>Chargers:</b> For electronic devices</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><b>Business Cards:</b> For networking (optional)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><b>Snacks:</b> For between sessions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Conference Etiquette</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Professional Decorum</p>
                      <p className="text-sm text-gray-600">Maintain a professional demeanor at all times, address others respectfully, and follow parliamentary procedure.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Punctuality</p>
                      <p className="text-sm text-gray-600">Arrive on time for all sessions. Being late disrupts committee proceedings.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Technology Use</p>
                      <p className="text-sm text-gray-600">Use electronic devices only for conference-related purposes during sessions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Respectful Communication</p>
                      <p className="text-sm text-gray-600">Listen actively when others are speaking, avoid interrupting, and use appropriate language.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <h4 className="text-yellow-800 font-medium">Important Note</h4>
                      <p className="text-sm text-yellow-700">
                        Always wear your conference badge during all sessions and events. This is required for security purposes and to identify your country assignment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* After Conference Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('after')}
            >
              <h2 className="text-xl font-bold">After the Conference</h2>
              {expandedSections.after ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.after && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Reflection and Improvement</h3>
                <p className="mb-4">After the conference, take time to reflect on your experience:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Review Your Performance</p>
                      <p className="text-sm text-gray-600">Consider what went well and what you could improve for future conferences.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Document Your Experience</p>
                      <p className="text-sm text-gray-600">Save your position papers, resolutions, and awards for your records and portfolio.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Connect with Other Delegates</p>
                      <p className="text-sm text-gray-600">Maintain relationships with those you met at the conference through social media or email.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Share Feedback</p>
                      <p className="text-sm text-gray-600">Provide constructive feedback to the conference organizers through the post-conference survey.</p>
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-4">Awards Criteria</h3>
                <p className="mb-4">GSUMUN recognizes outstanding delegates in several categories:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Best Delegate</h4>
                    <p className="text-sm text-gray-600 mb-2">Awarded to delegates who demonstrate:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Excellence in debate and negotiation</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Thorough knowledge of topics and country position</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Leadership in resolution drafting</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Diplomatic and constructive approach</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Outstanding Delegates</h4>
                    <p className="text-sm text-gray-600 mb-2">Awarded to delegates who show:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Strong participation and engagement</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Good understanding of committee topics</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Significant contributions to committee work</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Collaborative attitude</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Best Position Paper</h4>
                    <p className="text-sm text-gray-600 mb-2">Awarded based on:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Depth of research</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Clear articulation of country position</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Quality of proposed solutions</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Writing quality and format adherence</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Best Delegation</h4>
                    <p className="text-sm text-gray-600 mb-2">Awarded to schools based on:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Overall performance of delegates</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Quality of position papers</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Professional conduct</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Percentage of delegates receiving awards</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <a 
                  href="/docs/awards-criteria-2025.pdf" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-flex items-center"
                  download
                >
                  <Download size={18} className="mr-2" />
                  Download Awards Criteria
                </a>
              </div>
            )}
          </div>
          
          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">What should I wear to the conference?</h3>
                <p className="text-gray-600">Western business attire is required for all committee sessions. For men, this means a suit or dress shirt, tie, slacks, and dress shoes. For women, this means a business suit, professional dress, or blouse with dress pants/skirt and appropriate shoes. National dress is also appropriate if it's formal.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">How long should my position paper be?</h3>
                <p className="text-gray-600">Position papers should be 1-2 pages in length (double-spaced, 12-point font). You should address all topics assigned to your committee in your position paper.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">How long are opening speeches?</h3>
                <p className="text-gray-600">Opening speeches are typically 1 minute in length. Some larger committees may limit speeches to 45 seconds, while smaller committees may allow up to 1 minute 30 seconds.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Can I use electronic devices during committee?</h3>
                <p className="text-gray-600">Yes, laptops and tablets are permitted for note-taking, research, and resolution writing. However, they should only be used for committee-related purposes, and phones should be silenced during formal sessions.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Do I need to submit my draft resolutions before the conference?</h3>
                <p className="text-gray-600">No, draft resolutions are developed collaboratively during the conference. Only position papers need to be submitted in advance (by October 15, 2025).</p>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10">
            <h2 className="text-xl font-bold mb-4">Need More Help?</h2>
            <p className="mb-4">If you have additional questions or need assistance preparing for GSUMUN 2025, please contact us:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <p><a href="mailto:delegates@gsumun.org" className="text-blue-600 hover:underline">delegates@gsumun.org</a></p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Phone</h3>
                <p>(404) 555-1234</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DelegateGuidePage;