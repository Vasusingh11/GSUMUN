import React, { useState } from 'react';
import { Download, ChevronDown, ChevronRight, Check, AlertTriangle, Search } from 'lucide-react';

const RulesProcedurePage = () => {
  const [expandedSections, setExpandedSections] = useState({
    'overview': true,
    'motions': false,
    'debate': false,
    'resolutions': false,
    'voting': false,
    'crisis': false
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMotion, setActiveMotion] = useState(null);

  // Toggle sections
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Motions and points data
  const motionsData = [
    {
      name: 'Motion to Open Debate',
      purpose: 'Begin discussion on a specific topic',
      vote: 'Simple Majority',
      interrupt: 'No',
      category: 'procedural',
      details: 'This motion is made at the beginning of committee to start debate on the first topic.'
    },
    {
      name: 'Motion for Moderated Caucus',
      purpose: 'Structured debate on a specific aspect of the topic',
      vote: 'Simple Majority',
      interrupt: 'No',
      category: 'debate',
      details: 'The delegate must specify the total time, individual speaking time, and the specific topic for discussion.'
    },
    {
      name: 'Motion for Unmoderated Caucus',
      purpose: 'Informal discussion period for working paper development',
      vote: 'Simple Majority',
      interrupt: 'No',
      category: 'debate',
      details: 'Delegates may move around the room freely to discuss ideas and form coalitions.'
    },
    {
      name: 'Motion to Extend Debate',
      purpose: 'Continue current moderated caucus or speakers list',
      vote: 'Simple Majority',
      interrupt: 'No',
      category: 'debate',
      details: 'Must specify the additional time requested. Can only be made during the final minute of current debate format.'
    },
    {
      name: 'Motion to Introduce Working Paper',
      purpose: 'Present a working paper to the committee',
      vote: 'Chair\'s Discretion',
      interrupt: 'No',
      category: 'resolution',
      details: 'Working papers must have the required number of sponsors (typically 20% of committee members).'
    },
    {
      name: 'Motion to Introduce Draft Resolution',
      purpose: 'Present a draft resolution for committee consideration',
      vote: 'Chair\'s Discretion',
      interrupt: 'No',
      category: 'resolution',
      details: 'Draft resolutions must have the required number of sponsors and signatories.'
    },
    {
      name: 'Motion to Close Debate',
      purpose: 'End discussion and move to voting procedure',
      vote: '2/3 Majority',
      interrupt: 'No',
      category: 'procedural',
      details: 'Once passed, no further debate is allowed and the committee moves directly to voting.'
    },
    {
      name: 'Motion to Table',
      purpose: 'Postpone discussion of current topic',
      vote: 'Simple Majority',
      interrupt: 'No',
      category: 'procedural',
      details: 'Debate on the current topic is suspended and may be resumed later in the session.'
    },
    {
      name: 'Point of Order',
      purpose: 'Indicate an error in parliamentary procedure',
      vote: 'Chair\'s Ruling',
      interrupt: 'Yes',
      category: 'point',
      details: 'Used when the chair or a delegate has made an error in following the rules of procedure.'
    },
    {
      name: 'Point of Information to the Chair',
      purpose: 'Ask a question about procedure or logistics',
      vote: 'None',
      interrupt: 'No',
      category: 'point',
      details: 'Questions should be about conference procedure, not about the topic being discussed.'
    },
    {
      name: 'Point of Information to the Speaker',
      purpose: 'Ask a question of the delegate currently speaking',
      vote: 'Speaker\'s Acceptance',
      interrupt: 'No',
      category: 'point',
      details: 'The speaker may accept or decline to answer. Questions should be brief and relevant.'
    },
    {
      name: 'Point of Personal Privilege',
      purpose: 'Address personal discomfort affecting participation',
      vote: 'Chair\'s Discretion',
      interrupt: 'Yes (if urgent)',
      category: 'point',
      details: 'Examples include inability to hear, temperature concerns, or urgent personal needs.'
    }
  ];

  // Filter motions based on search
  const filteredMotions = motionsData.filter(motion =>
    motion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    motion.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
    motion.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Rules of Procedure</h1>
          <p className="text-xl mb-8">
            Official parliamentary procedures governing GSUMUN 2025 committee sessions.
          </p>
          <div className="flex space-x-4">
            <a 
              href="/docs/rules-procedure-2025.pdf" 
              className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center"
              download
            >
              <Download size={18} className="mr-2" />
              Download Full Rules
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* Committee Flow Overview */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('overview')}
            >
              <h2 className="text-xl font-bold">Committee Session Overview</h2>
              {expandedSections.overview ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.overview && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Standard Committee Flow</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Roll Call</p>
                      <p className="text-sm text-gray-600">
                        The chair takes attendance. Delegates may respond "Present" or "Present and Voting."
                        Those responding "Present and Voting" cannot abstain on substantive votes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Setting the Agenda</p>
                      <p className="text-sm text-gray-600">
                        The committee votes on which topic to discuss first. This requires a simple majority.
                        Delegates may make brief speeches in favor of their preferred agenda item.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">Opening General Speakers List</p>
                      <p className="text-sm text-gray-600">
                        Formal debate begins. Delegates give opening speeches stating their country's position.
                        Speaking time is typically 60-90 seconds per speech.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">4</div>
                    <div>
                      <p className="font-medium">Moderated and Unmoderated Caucuses</p>
                      <p className="text-sm text-gray-600">
                        Focused debate on specific aspects of the topic through moderated caucuses.
                        Unmoderated caucuses allow for informal discussion and coalition building.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">5</div>
                    <div>
                      <p className="font-medium">Introduction of Working Papers</p>
                      <p className="text-sm text-gray-600">
                        Delegates present working papers - informal documents outlining potential solutions.
                        These help gauge committee support before drafting formal resolutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">6</div>
                    <div>
                      <p className="font-medium">Draft Resolution Introduction</p>
                      <p className="text-sm text-gray-600">
                        Working papers evolve into draft resolutions with proper UN format.
                        These require sponsors and signatories to be introduced.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">7</div>
                    <div>
                      <p className="font-medium">Amendment Process</p>
                      <p className="text-sm text-gray-600">
                        Delegates may propose amendments to modify draft resolutions.
                        Friendly amendments are accepted by sponsors; unfriendly amendments are voted on.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">8</div>
                    <div>
                      <p className="font-medium">Voting Procedure</p>
                      <p className="text-sm text-gray-600">
                        Final votes on draft resolutions. Most substantive votes require a simple majority.
                        No debate is allowed during voting procedure.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Key Principles</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Delegates must be recognized by the chair before speaking</li>
                    <li>• All comments must be directed through the chair</li>
                    <li>• Delegates should maintain diplomatic language and professional conduct</li>
                    <li>• Parliamentary procedure ensures fair and orderly debate</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {/* Motions and Points */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('motions')}
            >
              <h2 className="text-xl font-bold">Motions and Points Reference</h2>
              {expandedSections.motions ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.motions && (
              <div className="p-6">
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search motions and points..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                {/* Motions Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          Motion/Point
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          Purpose
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          Vote Required
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          Can Interrupt
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredMotions.map((motion, index) => (
                        <tr 
                          key={index} 
                          className="hover:bg-gray-50 cursor-pointer"
                          onClick={() => setActiveMotion(activeMotion === index ? null : index)}
                        >
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{motion.name}</div>
                            <div className="text-xs text-gray-500 capitalize">{motion.category}</div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm text-gray-600">{motion.purpose}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                            {motion.vote}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              motion.interrupt === 'Yes' || motion.interrupt.includes('Yes') 
                                ? 'bg-red-100 text-red-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {motion.interrupt}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Motion Details */}
                {activeMotion !== null && (
                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-md p-4">
                    <h4 className="font-medium text-blue-800 mb-2">
                      {filteredMotions[activeMotion].name} - Details
                    </h4>
                    <p className="text-sm text-blue-700">
                      {filteredMotions[activeMotion].details}
                    </p>
                  </div>
                )}
                
                {/* Empty state for search */}
                {filteredMotions.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No motions found matching your search.</p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Debate Formats */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('debate')}
            >
              <h2 className="text-xl font-bold">Debate Formats</h2>
              {expandedSections.debate ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.debate && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-3">General Speakers List</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Formal debate format for opening statements</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Speaking time: typically 60-90 seconds</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Delegates may yield time to questions, another delegate, or the chair</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Used primarily at the beginning of debate</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-3">Moderated Caucus</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Structured debate on a specific subtopic</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Individual speaking time: typically 30-60 seconds</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Total time: usually 10-20 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Chair calls on delegates to speak</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-3">Unmoderated Caucus</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Informal discussion period</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Delegates may move around and form groups</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Used for coalition building and working paper development</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Duration: typically 10-15 minutes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-3">Voting Procedure</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No debate allowed during voting</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Committee is in formal session</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Delegates cannot enter or leave the room</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Right of reply may be invoked if country is mentioned</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Speaking Order and Precedence</h3>
                <p className="mb-4">When multiple motions are on the floor, they are considered in this order:</p>
                
                <ol className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">1</span>
                    <span>Point of Order (highest precedence)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">2</span>
                    <span>Point of Personal Privilege</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">3</span>
                    <span>Motion to Close Debate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">4</span>
                    <span>Motion for Unmoderated Caucus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">5</span>
                    <span>Motion for Moderated Caucus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">6</span>
                    <span>Motion to Extend Debate (lowest precedence)</span>
                  </li>
                </ol>
              </div>
            )}
          </div>
          
          {/* Resolution Writing */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('resolutions')}
            >
              <h2 className="text-xl font-bold">Resolution Format & Writing</h2>
              {expandedSections.resolutions ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.resolutions && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Working Papers vs. Draft Resolutions</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Working Papers</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Informal documents to outline ideas</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Used to gauge committee support</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Require sponsors (typically 20% of committee)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Not voted on - for discussion only</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Can be in informal language</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Draft Resolutions</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Formal documents for voting</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Must follow UN resolution format</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Require sponsors and signatories</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Subject to amendments and voting</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Must use formal diplomatic language</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Resolution Structure</h3>
                
                <div className="space-y-6 mb-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4">
                      <h4 className="font-medium">Header</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-2">
                        Includes committee name, sponsors, signatories, and topic.
                      </p>
                      <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                        Committee: General Assembly Third Committee<br/>
                        Topic: Combating Climate Change and Global Security<br/>
                        Sponsors: France, Germany, Kenya<br/>
                        Signatories: Canada, Japan, Brazil, South Africa
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4">
                      <h4 className="font-medium">Preambulatory Clauses</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-2">
                        Describe the problem, recall past actions, and explain the purpose. Each clause ends with a comma.
                      </p>
                      <div className="bg-gray-100 p-3 rounded text-sm">
                        <p className="mb-2"><strong>Common preambulatory phrases:</strong></p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>• Affirming</div>
                          <div>• Alarmed by</div>
                          <div>• Aware of</div>
                          <div>• Bearing in mind</div>
                          <div>• Concerned by</div>
                          <div>• Convinced that</div>
                          <div>• Deeply disturbed</div>
                          <div>• Emphasizing</div>
                          <div>• Noting with concern</div>
                          <div>• Reaffirming</div>
                          <div>• Recalling</div>
                          <div>• Recognizing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4">
                      <h4 className="font-medium">Operative Clauses</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-2">
                        State the actions proposed by the resolution. Numbered and end with semicolons (except the last, which ends with a period).
                      </p>
                      <div className="bg-gray-100 p-3 rounded text-sm">
                        <p className="mb-2"><strong>Common operative phrases:</strong></p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>• Affirms</div>
                          <div>• Calls upon</div>
                          <div>• Condemns</div>
                          <div>• Decides</div>
                          <div>• Encourages</div>
                          <div>• Invites</div>
                          <div>• Recommends</div>
                          <div>• Requests</div>
                          <div>• Supports</div>
                          <div>• Urges</div>
                          <div>• Welcomes</div>
                          <div>• Authorizes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Amendment Process</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Friendly Amendments</p>
                      <p className="text-sm text-gray-600">
                        Accepted by all sponsors of the resolution. Automatically incorporated without a vote.
                        Must be minor changes that don't alter the fundamental purpose.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Unfriendly Amendments</p>
                      <p className="text-sm text-gray-600">
                        Not accepted by sponsors. Require a vote by the committee.
                        Must have a sponsor and can be debated before voting.
                      </p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="/docs/resolution-writing-guide-2025.pdf" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-flex items-center"
                  download
                >
                  <Download size={18} className="mr-2" />
                  Download Resolution Writing Guide
                </a>
              </div>
            )}
          </div>
          
          {/* Voting Procedures */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('voting')}
            >
              <h2 className="text-xl font-bold">Voting Procedures</h2>
              {expandedSections.voting ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.voting && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Types of Votes</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Procedural Votes</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Simple majority required (50% + 1)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Abstentions not counted in total</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Includes motions, amendments, etc.</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Exception: Motion to close debate requires 2/3 majority</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Substantive Votes</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Simple majority required (50% + 1)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Includes draft resolutions</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Delegates may abstain</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Those who said "Present and Voting" cannot abstain</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Voting Process</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Motion to Close Debate</p>
                      <p className="text-sm text-gray-600">
                        Requires 2/3 majority. If passed, committee moves to voting procedure.
                        If failed, debate continues.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Committee in Formal Session</p>
                      <p className="text-sm text-gray-600">
                        No debate allowed. Delegates cannot enter or leave. Only points of order
                        and personal privilege may interrupt.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">Vote on Amendments First</p>
                      <p className="text-sm text-gray-600">
                        Unfriendly amendments are voted on before the main resolution.
                        If passed, they become part of the resolution.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">4</div>
                    <div>
                      <p className="font-medium">Vote on Draft Resolution</p>
                      <p className="text-sm text-gray-600">
                        Final vote on the (possibly amended) draft resolution.
                        Simple majority required to pass.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <h4 className="text-yellow-800 font-medium">Right of Reply</h4>
                      <p className="text-sm text-yellow-700">
                        If a country is mentioned unfavorably during speeches, that country's delegate
                        may request a right of reply. This is granted at the chair's discretion and 
                        allows for a brief response (typically 30 seconds).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Crisis Committee Rules */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('crisis')}
            >
              <h2 className="text-xl font-bold">Crisis Committee Procedures</h2>
              {expandedSections.crisis ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </button>
            
            {expandedSections.crisis && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Crisis Committee Differences</h3>
                <p className="mb-4">
                  Crisis committees simulate evolving situations and allow for more dynamic interaction
                  between delegates and external events.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Portfolio Powers</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Unique abilities based on your character/position</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Can be used through crisis notes</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Limited by resources and political constraints</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Success depends on crisis staff evaluation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Crisis Notes</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Written communications to crisis staff</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Used to attempt actions outside committee</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Should be specific and realistic</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Results provided through crisis updates</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Can be used for intelligence gathering</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Directives</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Formal documents addressing crisis situations</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Shorter and more action-oriented than resolutions</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Can be written and passed quickly</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>May have immediate effects on the crisis</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">Crisis Updates</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Regular updates on evolving situation</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>May introduce new information or complications</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Respond to delegate actions and decisions</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Keep delegates informed of consequences</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Crisis Committee Strategy</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Balance Public and Private Actions</p>
                      <p className="text-sm text-gray-600">
                        Use committee debate to build public support while using crisis notes
                        for private actions that advance your agenda.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Adapt to Changing Circumstances</p>
                      <p className="text-sm text-gray-600">
                        Crisis committees are dynamic. Be prepared to adjust your strategy
                        based on crisis updates and other delegates' actions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Use Your Portfolio Powers Wisely</p>
                      <p className="text-sm text-gray-600">
                        Your unique abilities are limited resources. Use them strategically
                        to achieve maximum impact at crucial moments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Build Coalitions and Alliances</p>
                      <p className="text-sm text-gray-600">
                        Work with other delegates both openly and through private communication
                        to advance shared interests and counter opposing forces.
                      </p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="/docs/crisis-procedures-2025.pdf" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-flex items-center"
                  download
                >
                  <Download size={18} className="mr-2" />
                  Download Crisis Committee Guide
                </a>
              </div>
            )}
          </div>
          
          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">What happens if I make a procedural error?</h3>
                <p className="text-gray-600">Don't worry! Committee chairs are there to guide you. If you make an error, the chair will politely correct you and explain the proper procedure. This is a learning experience for everyone.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Can I change my vote after it's been recorded?</h3>
                <p className="text-gray-600">No, once your vote has been recorded and announced by the chair, it cannot be changed. Make sure you understand what you're voting on before casting your vote.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">How do I know when to yield my time?</h3>
                <p className="text-gray-600">You can yield your remaining speaking time to questions (allowing other delegates to ask you questions), to another delegate, or to the chair. This is optional and should be done before your time expires.</p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">What's the difference between a sponsor and a signatory?</h3>
                <p className="text-gray-600">Sponsors are delegates who helped write and strongly support a resolution. Signatories support the resolution being discussed but may not necessarily vote for it. Both are required to introduce a draft resolution.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Can I withdraw a motion after making it?</h3>
                <p className="text-gray-600">Yes, you can withdraw a motion before it's been seconded or before the chair opens debate on it. Once debate has begun or a vote has been called, the motion cannot be withdrawn.</p>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10">
            <h2 className="text-xl font-bold mb-4">Questions about Procedure?</h2>
            <p className="mb-4">If you have questions about the rules of procedure or need clarification:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Academic Team</h3>
                <p><a href="mailto:academic@gsumun.org" className="text-blue-600 hover:underline">academic@gsumun.org</a></p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Secretary-General</h3>
                <p><a href="mailto:sg@gsumun.org" className="text-blue-600 hover:underline">sg@gsumun.org</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RulesProcedurePage;