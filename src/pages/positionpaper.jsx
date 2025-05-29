import React, { useState } from 'react';
import { Download, ChevronDown, ChevronRight, Check, AlertTriangle, FileText, Search, Award, BookOpen, Users } from 'lucide-react';

const PositionPaperPage = () => {
  const [expandedSections, setExpandedSections] = useState({
    'overview': true,
    'structure': false,
    'writing': false,
    'formatting': false,
    'research': false,
    'examples': false,
    'submission': false,
    'awards': false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const preambulatoryPhrases = [
    'Affirming', 'Alarmed by', 'Appreciating', 'Aware of', 'Bearing in mind',
    'Believing', 'Concerned by', 'Confident', 'Convinced that', 'Declaring',
    'Deeply concerned', 'Deeply convinced', 'Deeply disturbed', 'Deeply regretting',
    'Desiring', 'Emphasizing', 'Expecting', 'Expressing appreciation', 'Expressing satisfaction',
    'Fully aware', 'Further deploring', 'Further recalling', 'Guided by', 'Having adopted',
    'Having considered', 'Having examined', 'Having heard', 'Having received', 'Keeping in mind',
    'Noting with appreciation', 'Noting with approval', 'Noting with concern', 'Noting with regret',
    'Noting with satisfaction', 'Observing', 'Reaffirming', 'Realizing', 'Recalling',
    'Recognizing', 'Referring', 'Seeking', 'Taking into consideration', 'Taking note',
    'Viewing with appreciation', 'Welcoming'
  ];

  const operativePhrases = [
    'Accepts', 'Affirms', 'Approves', 'Authorizes', 'Calls', 'Calls upon',
    'Condemns', 'Confirms', 'Congratulates', 'Considers', 'Declares accordingly',
    'Deplores', 'Designates', 'Draws attention', 'Emphasizes', 'Encourages',
    'Endorses', 'Expresses appreciation', 'Expresses hope', 'Further invites',
    'Further proclaims', 'Further reminds', 'Further recommends', 'Further requests',
    'Further resolves', 'Hopes', 'Invites', 'Notes', 'Proclaims', 'Reaffirms',
    'Recommends', 'Regrets', 'Reminds', 'Requests', 'Resolves', 'Solemnly affirms',
    'Strongly condemns', 'Supports', 'Takes note of', 'Transmits', 'Trusts', 'Urges'
  ];

  const sampleTopics = [
    {
      committee: 'General Assembly Third Committee',
      topic: 'Combating Climate Change and Global Security',
      countries: ['United States', 'China', 'India', 'Germany', 'Brazil']
    },
    {
      committee: 'Security Council',
      topic: 'The Situation in the Middle East',
      countries: ['United States', 'United Kingdom', 'France', 'Russia', 'China']
    },
    {
      committee: 'Economic and Social Council',
      topic: 'Promoting Sustainable Development Goals',
      countries: ['Japan', 'Sweden', 'Kenya', 'Mexico', 'Australia']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Position Paper Guide</h1>
          <p className="text-xl mb-8">
            Learn how to write compelling position papers that represent your country's stance 
            and demonstrate thorough research and understanding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-700 rounded-lg p-4">
              <FileText className="mb-2" size={24} />
              <h3 className="font-semibold">Due Date</h3>
              <p className="text-blue-200">October 25, 2025 11:59 PM</p>
            </div>
            <div className="bg-blue-700 rounded-lg p-4">
              <Award className="mb-2" size={24} />
              <h3 className="font-semibold">Awards Eligible</h3>
              <p className="text-blue-200">Position Paper Awards</p>
            </div>
            <div className="bg-blue-700 rounded-lg p-4">
              <Users className="mb-2" size={24} />
              <h3 className="font-semibold">Required For</h3>
              <p className="text-blue-200">All Delegates</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a 
              href="/docs/position-paper-template-2025.docx" 
              className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center"
              download
            >
              <Download size={18} className="mr-2" />
              Download Template
            </a>
            <a 
              href="/docs/position-paper-examples-2025.pdf" 
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium flex items-center"
              download
            >
              <BookOpen size={18} className="mr-2" />
              Sample Papers
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('overview')}
            >
              <h2 className="text-xl font-bold">What is a Position Paper?</h2>
              {expandedSections.overview ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.overview && (
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  A position paper is a diplomatic document that outlines your country's official stance 
                  on the topics being discussed in your committee. It demonstrates your research, 
                  understanding of your country's foreign policy, and proposed solutions to global issues.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3 text-green-700">Purpose</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Demonstrate your country's historical position</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Show understanding of the issues</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Propose realistic solutions</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Prepare for committee debate</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3 text-blue-700">Requirements</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>One page per committee maximum</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Times New Roman 10-12pt font</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Proper header format</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No citations required</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <h4 className="text-yellow-800 font-medium">Important Note</h4>
                      <p className="text-sm text-yellow-700">
                        Position papers are required to be eligible for Position Paper Awards. 
                        They must be submitted by October 25, 2025 at 11:59 PM to sg@gsumun.org.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Structure Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('structure')}
            >
              <h2 className="text-xl font-bold">Position Paper Structure</h2>
              {expandedSections.structure ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.structure && (
              <div className="p-6">
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-blue-50 p-4">
                      <h3 className="font-semibold text-blue-800">Header Section</h3>
                    </div>
                    <div className="p-4">
                      <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-3">
                        <div className="grid grid-cols-2">
                          <div>
                            <div className="font-bold">Delegation from</div>
                            <div>The Republic of India</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">Represented by</div>
                            <div>Georgia State University</div>
                          </div>
                        </div>
                        <div className="text-center mt-4 font-bold">
                          Position Paper for the General Assembly Third Committee
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        The header must include your delegation name, representing school, 
                        and the specific committee. Use the exact format shown above.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-green-50 p-4">
                      <h3 className="font-semibold text-green-800">Topic Sections</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Each committee topic should have its own section. Follow this structure for each topic:
                      </p>
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-medium">1. Topic Introduction</h4>
                          <p className="text-sm text-gray-600">
                            Briefly describe the issue and why it's important globally and to your country.
                          </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-medium">2. Country's Historical Position</h4>
                          <p className="text-sm text-gray-600">
                            Explain your country's past actions, policies, and statements on this issue.
                          </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-medium">3. Current Stance & Challenges</h4>
                          <p className="text-sm text-gray-600">
                            Describe your country's current position and any challenges it faces.
                          </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-medium">4. Proposed Solutions</h4>
                          <p className="text-sm text-gray-600">
                            Outline specific, realistic solutions your country supports for addressing the issue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Writing Guide Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('writing')}
            >
              <h2 className="text-xl font-bold">Step-by-Step Writing Guide</h2>
              {expandedSections.writing ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.writing && (
              <div className="p-6">
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Research Your Country",
                      content: "Study your country's government structure, economy, culture, and foreign policy priorities. Understand its relationships with other nations and international organizations."
                    },
                    {
                      step: 2,
                      title: "Understand the Topics",
                      content: "Read the background guide thoroughly. Research current events related to each topic. Understand the key stakeholders and existing international frameworks."
                    },
                    {
                      step: 3,
                      title: "Find Your Country's Position",
                      content: "Look for official government statements, UN voting records, speeches by leaders, and policy documents. Check your country's mission to the UN website."
                    },
                    {
                      step: 4,
                      title: "Identify Key Challenges",
                      content: "Determine what specific challenges your country faces regarding each topic. Consider economic, political, social, and security factors."
                    },
                    {
                      step: 5,
                      title: "Develop Realistic Solutions",
                      content: "Propose solutions that align with your country's capabilities and interests. Consider what your country would realistically support in committee."
                    },
                    {
                      step: 6,
                      title: "Write and Review",
                      content: "Draft your position paper using formal diplomatic language. Review for accuracy, clarity, and adherence to formatting requirements."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Writing Tips</h3>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Write in third person (avoid "I" or "we" - use "The delegation of...")</li>
                    <li>• Use formal diplomatic language</li>
                    <li>• Be specific rather than vague</li>
                    <li>• Stay consistent with your country's actual positions</li>
                    <li>• Avoid taking positions your country would never support</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Formatting Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('formatting')}
            >
              <h2 className="text-xl font-bold">Formatting Requirements</h2>
              {expandedSections.formatting ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.formatting && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold mb-3">Document Format</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Length</p>
                          <p className="text-sm text-gray-600">Maximum one page per committee</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Font</p>
                          <p className="text-sm text-gray-600">Times New Roman, 10-12 point</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Margins</p>
                          <p className="text-sm text-gray-600">1 inch on all sides</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Spacing</p>
                          <p className="text-sm text-gray-600">Single-spaced</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold mb-3">Header Requirements</h3>
                    <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                      <div className="grid grid-cols-2 mb-2">
                        <div>
                          <div className="font-bold italic">Delegation from</div>
                          <div className="font-bold">[Your Country]</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold italic">Represented by</div>
                          <div className="font-bold">[Your School]</div>
                        </div>
                      </div>
                      <div className="text-center border-t pt-2">
                        <div className="font-bold">Position Paper for the [Committee Name]</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Use this exact format for your header. Bold and italic formatting 
                      is required as shown.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
                  <h4 className="font-medium text-red-800 mb-2">Common Formatting Mistakes</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Exceeding one page length</li>
                    <li>• Missing or incorrect header information</li>
                    <li>• Wrong font or font size</li>
                    <li>• Including citations or bibliography</li>
                    <li>• Missing bold/italic formatting in header</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Research Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('research')}
            >
              <h2 className="text-xl font-bold">Research Resources</h2>
              {expandedSections.research ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.research && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Primary Sources</h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="https://www.un.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">UN Official Website</a></li>
                      <li><a href="https://digitallibrary.un.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">UN Digital Library</a></li>
                      <li><a href="https://www.un.org/en/ga/documents" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">UN General Assembly Documents</a></li>
                      <li><a href="https://www.un.org/securitycouncil" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">UN Security Council</a></li>
                      <li><span className="text-gray-600">Your country's UN mission website</span></li>
                      <li><span className="text-gray-600">Official government websites</span></li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Secondary Sources</h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="https://www.cfr.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Council on Foreign Relations</a></li>
                      <li><a href="https://www.bbc.com/news" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">BBC News</a></li>
                      <li><a href="https://www.reuters.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Reuters</a></li>
                      <li><a href="https://www.foreignaffairs.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Foreign Affairs Magazine</a></li>
                      <li><span className="text-gray-600">Academic journals and databases</span></li>
                      <li><span className="text-gray-600">Think tank reports and analysis</span></li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Research Strategy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-medium text-blue-800 mb-2">Country Background</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Government structure</li>
                        <li>• Economic priorities</li>
                        <li>• Foreign policy goals</li>
                        <li>• Regional relationships</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded">
                      <h4 className="font-medium text-green-800 mb-2">Topic Research</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Current developments</li>
                        <li>• Key stakeholders</li>
                        <li>• Existing frameworks</li>
                        <li>• Recent UN actions</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded">
                      <h4 className="font-medium text-purple-800 mb-2">Country Position</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Official statements</li>
                        <li>• Voting records</li>
                        <li>• Policy documents</li>
                        <li>• Leadership speeches</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Examples Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('examples')}
            >
              <h2 className="text-xl font-bold">Sample Topics & Approaches</h2>
              {expandedSections.examples ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.examples && (
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Here are examples of how different countries might approach common topics:
                </p>

                {sampleTopics.map((topic, index) => (
                  <div key={index} className="border rounded-lg p-4 mb-4">
                    <h3 className="font-semibold mb-2">{topic.committee}</h3>
                    <h4 className="text-blue-600 font-medium mb-3">Topic: {topic.topic}</h4>
                    
                    <div className="space-y-3">
                      {topic.countries.map((country, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded">
                          <h5 className="font-medium text-gray-800">{country}</h5>
                          <p className="text-sm text-gray-600 mt-1">
                            {country === 'United States' && topic.topic.includes('Climate') && 
                              'Focus on technology solutions, private sector innovation, and market-based approaches while emphasizing economic competitiveness.'}
                            {country === 'China' && topic.topic.includes('Climate') && 
                              'Emphasize developing country status, historical responsibility of developed nations, and sovereignty over domestic climate policies.'}
                            {country === 'India' && topic.topic.includes('Climate') && 
                              'Highlight development needs, per capita emissions, and call for climate finance and technology transfer from developed countries.'}
                            {country === 'Germany' && topic.topic.includes('Climate') && 
                              'Advocate for ambitious emission reduction targets, renewable energy transition, and strong international cooperation mechanisms.'}
                            {country === 'Brazil' && topic.topic.includes('Climate') && 
                              'Focus on forest conservation, sustainable development, and the principle of common but differentiated responsibilities.'}
                            {topic.topic.includes('Middle East') && 
                              'Approach would focus on regional stability, humanitarian concerns, and each country\'s specific strategic interests in the region.'}
                            {topic.topic.includes('Sustainable Development') && 
                              'Emphasize national priorities, capacity building needs, and international cooperation for achieving the SDGs.'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="mt-6">
                  <a 
                    href="/docs/position-paper-examples-2025.pdf" 
                    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-flex items-center"
                    download
                  >
                    <Download size={18} className="mr-2" />
                    Download Complete Sample Papers
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Submission Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('submission')}
            >
              <h2 className="text-xl font-bold">Submission Guidelines</h2>
              {expandedSections.submission ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.submission && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3 text-red-700">Submission Requirements</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <AlertTriangle size={16} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Deadline:</strong> October 25, 2025 at 11:59 PM</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Email to:</strong> sg@gsumun.org</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Format:</strong> PDF or Word document</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Filename:</strong> SchoolName_Country_Committee.pdf</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3 text-blue-700">Email Subject Line</h3>
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-3">
                      GSUMUN 2025 Position Paper - [School Name] - [Country]
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Use this exact format for your email subject line to ensure proper processing.
                    </p>
                    
                    <h4 className="font-medium mb-2">Email Body Should Include:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• School name and delegation size</li>
                      <li>• Country assignment</li>
                      <li>• Committee assignments</li>
                      <li>• Faculty advisor contact information</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">Important Reminders</h3>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Position papers submitted after the deadline will not be eligible for awards</li>
                    <li>• Make sure to submit one paper per committee your delegation is in</li>
                    <li>• Double-check all formatting requirements before submission</li>
                    <li>• Keep copies of your submissions for reference</li>
                    <li>• Confirmation emails will be sent within 48 hours of submission</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Submission Checklist</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Before Submitting:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>☐ Proper header format used</li>
                        <li>☐ One page maximum per committee</li>
                        <li>☐ Times New Roman 10-12pt font</li>
                        <li>☐ Proofread for grammar and spelling</li>
                        <li>☐ Saved as PDF or Word document</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Email Submission:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>☐ Correct email address (sg@gsumun.org)</li>
                        <li>☐ Proper subject line format</li>
                        <li>☐ Correct filename format</li>
                        <li>☐ All required information in email body</li>
                        <li>☐ Submitted before deadline</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Awards Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('awards')}
            >
              <h2 className="text-xl font-bold">Position Paper Awards</h2>
              {expandedSections.awards ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.awards && (
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Position Paper Awards recognize outstanding research, writing, and understanding 
                  of country positions. Awards are given in each committee based on the quality 
                  and accuracy of submitted position papers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3 text-gold-700">Evaluation Criteria</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Research Quality (30%)</h4>
                        <p className="text-sm text-gray-600">Depth and accuracy of research, use of reliable sources</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Country Representation (25%)</h4>
                        <p className="text-sm text-gray-600">Accurate portrayal of country's actual positions and policies</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Writing Quality (20%)</h4>
                        <p className="text-sm text-gray-600">Clear, diplomatic language and proper formatting</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Solution Feasibility (15%)</h4>
                        <p className="text-sm text-gray-600">Realistic and practical proposed solutions</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Understanding (10%)</h4>
                        <p className="text-sm text-gray-600">Demonstration of topic comprehension and global awareness</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3 text-blue-700">Award Categories</h3>
                    <div className="space-y-3">
                      <div className="bg-yellow-50 p-3 rounded">
                        <h4 className="font-medium text-yellow-800">Outstanding Position Paper</h4>
                        <p className="text-sm text-yellow-700">Top 10% of submissions in each committee</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium text-gray-800">Commendable Position Paper</h4>
                        <p className="text-sm text-gray-700">Top 25% of submissions in each committee</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-blue-50 rounded">
                      <h4 className="font-medium text-blue-800 mb-2">Special Recognition</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Best First-Time Delegate Position Paper</li>
                        <li>• Most Creative Solutions</li>
                        <li>• Best Research</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Tips for Award-Winning Papers</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Use primary sources from your country's government and UN mission</li>
                    <li>• Be specific about policies and provide concrete examples</li>
                    <li>• Avoid generic statements that could apply to any country</li>
                    <li>• Propose innovative but realistic solutions</li>
                    <li>• Demonstrate understanding of your country's unique perspective</li>
                    <li>• Use proper diplomatic language throughout</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Need Help with Your Position Paper?</h2>
            <p className="text-gray-700 mb-4">
              Our academic team is here to help! Don't hesitate to reach out with questions about 
              research, formatting, or country positions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Academic Team</h3>
                <p><a href="mailto:academic@gsumun.org" className="text-blue-600 hover:underline">academic@gsumun.org</a></p>
                <p className="text-sm text-gray-600">For topic and research questions</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Secretary-General</h3>
                <p><a href="mailto:sg@gsumun.org" className="text-blue-600 hover:underline">sg@gsumun.org</a></p>
                <p className="text-sm text-gray-600">For submission and general questions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PositionPaperPage;