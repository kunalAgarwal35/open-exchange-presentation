import React, { useState } from 'react';

const JoveoSolutionPage = () => {
  const [showOfferDialog, setShowOfferDialog] = useState(false);
  const [selectedDemand, setSelectedDemand] = useState(null);
  const [offerCPA, setOfferCPA] = useState('');
  const [matchedOffers, setMatchedOffers] = useState([]);
  const clients = [
    { 
      id: 1, 
      name: "Company A", 
      demand: "Software Engineers", 
      budget: "$5000 CPA", 
      budgetValue: 5000,
      location: "SF",
      quantity: "50 hires",
      skills: "React, Node.js, Python"
    },
    { 
      id: 2, 
      name: "Company B", 
      demand: "Marketing Managers", 
      budget: "$3000 CPA", 
      budgetValue: 3000,
      location: "NYC",
      quantity: "25 hires", 
      skills: "Digital Marketing, SEO, Analytics"
    },
    { 
      id: 3, 
      name: "Company C", 
      demand: "Data Scientists", 
      budget: "$7000 CPA", 
      budgetValue: 7000,
      location: "Austin",
      quantity: "30 hires",
      skills: "Machine Learning, Python, SQL"
    },
  ];

  const publishers = [
    "Indeed", "LinkedIn", "Glassdoor", "Monster", "CareerBuilder", 
    "ZipRecruiter", "Dice", "AngelList", "Stack Overflow", "GitHub Jobs"
  ];

  const handlePlaceOffer = (demand) => {
    setSelectedDemand(demand);
    setOfferCPA('');
    setShowOfferDialog(true);
  };

  const handleSubmitOffer = () => {
    const offerValue = parseInt(offerCPA);
    if (offerValue && offerValue < selectedDemand.budgetValue) {
      const newMatch = {
        id: Date.now(),
        demand: selectedDemand,
        offerCPA: offerValue,
        publisher: "LinkedIn", // Example publisher
        status: "matched",
        timestamp: new Date().toLocaleTimeString()
      };
      setMatchedOffers([...matchedOffers, newMatch]);
      setShowOfferDialog(false);
      setSelectedDemand(null);
      setOfferCPA('');
    }
  };

  const closeDialog = () => {
    setShowOfferDialog(false);
    setSelectedDemand(null);
    setOfferCPA('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Joveo Open Exchange Solution
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Just like electronic exchanges revolutionized stock trading, Joveo Open Exchange removes the middleman. 
          All publishers see all demands instantly, and performance responsibility shifts to publishers.
        </p>
      </div>

      {/* Direct Connection Model */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
        {/* Clients Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-joveo-blue mb-6">
            Live Demand Feed
          </h3>
          {clients.map((client) => (
            <div key={client.id} className="flow-node border-blue-200 bg-blue-50 hover:bg-blue-100 cursor-pointer transition-all duration-200" onClick={() => handlePlaceOffer(client)}>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">{client.id}</span>
                </div>
                <h4 className="font-semibold text-gray-800">{client.name}</h4>
                <div className="text-sm text-gray-600 mt-2 space-y-1">
                  <p><strong>Role:</strong> {client.demand}</p>
                  <p><strong>Max CPA:</strong> <span className="text-green-600 font-bold">{client.budget}</span></p>
                  <p><strong>Location:</strong> {client.location}</p>
                  <p><strong>Quantity:</strong> {client.quantity}</p>
                  <p><strong>Skills:</strong> {client.skills}</p>
                </div>
                <div className="mt-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  🎯 Click to Place Offer
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Connection Arrow */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <div className="text-6xl text-joveo-green">⚡</div>
            <p className="text-lg font-semibold text-joveo-green mt-2">Direct Connection</p>
            <p className="text-sm text-gray-500">No Middleman Required</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-joveo-green">
            <h4 className="font-semibold text-center text-joveo-green mb-2">Open Exchange Platform</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✅ Real-time demand visibility</li>
              <li>✅ Automated matching</li>
              <li>✅ Performance tracking</li>
              <li>✅ Instant notifications</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Real-time Matching Section */}
      {matchedOffers.length > 0 && (
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-300">
            <h3 className="text-2xl font-semibold text-center mb-6 text-green-800">
              🚀 Live Job Feed Started!
            </h3>
            <div className="space-y-4">
              {matchedOffers.map((match) => (
                <div key={match.id} className="bg-white rounded-lg p-4 border-2 border-green-300 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {match.publisher} ↔ {match.demand.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {match.demand.demand} • {match.demand.location} • ${match.offerCPA} CPA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                        LIVE • {match.timestamp}
                      </div>
                      <p className="text-xs text-green-600 mt-1">Job feed active</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Publishers Connected */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-300">
          <h3 className="text-2xl font-semibold text-center mb-6 text-green-800">
            All Publishers See All Demands Instantly
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {publishers.map((publisher, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center shadow border-2 border-green-300 hover:bg-green-50 cursor-pointer transition-all duration-200">
                <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                <p className="text-xs text-gray-600 font-medium">{publisher}</p>
                <p className="text-xs text-green-600 mt-1 font-semibold">✓ Live Feed Access</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-green-700 font-semibold">
              🎯 100% Publisher Reach - Real-time demand visibility for all publishers
            </p>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Performance Shift */}
        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Performance Responsibility Shift</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-red-600">❌ CSE Responsible</span>
              <span className="text-purple-600">→</span>
              <span className="text-green-600">✅ Publisher Responsible</span>
            </div>
            <p className="text-sm text-purple-700">
              Publishers now own campaign performance, creating better alignment and accountability.
            </p>
          </div>
        </div>

        {/* Efficiency Gains */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Efficiency Gains</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-sm text-blue-700">Instant demand distribution</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-sm text-blue-700">Automated publisher matching</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-sm text-blue-700">Real-time performance analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Before vs After Comparison */}
      <div className="bg-white rounded-xl p-8 shadow-lg border">
        <h3 className="text-2xl font-semibold text-center mb-8">Transformation Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-red-600 mb-4">Before: Traditional Model</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-red-50 p-3 rounded">📧 Manual email outreach</div>
              <div className="bg-red-50 p-3 rounded">👥 CSE performance responsibility</div>
              <div className="bg-red-50 p-3 rounded">📊 Limited publisher reach (60%)</div>
              <div className="bg-red-50 p-3 rounded">⏰ Time-intensive process</div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-green-600 mb-4">After: Open Exchange</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-green-50 p-3 rounded">⚡ Instant automated distribution</div>
              <div className="bg-green-50 p-3 rounded">🎯 Publisher performance ownership</div>
              <div className="bg-green-50 p-3 rounded">🌐 100% publisher reach</div>
              <div className="bg-green-50 p-3 rounded">🚀 Real-time optimization</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problems to Solve */}
      <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200">
        <h3 className="text-2xl font-semibold text-center mb-8 text-orange-800">Challenges to Solve</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">🔍</span>
              </div>
              <h4 className="text-xl font-semibold text-orange-800">Quality Assurance</h4>
            </div>
            <p className="text-gray-700 mb-4">
              How do we ensure publisher quality when removing CSE oversight? Need automated quality scoring and performance monitoring.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                Real-time quality scoring algorithms
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                Automated fraud detection systems
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                Publisher performance dashboards
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">⚖️</span>
              </div>
              <h4 className="text-xl font-semibold text-red-800">Fair Competition</h4>
            </div>
            <p className="text-gray-700 mb-4">
              Ensuring all publishers have equal access to demands and preventing gaming of the system.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Transparent auction mechanisms
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Anti-manipulation safeguards
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Equal opportunity algorithms
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="mt-12 bg-gradient-to-r from-joveo-blue to-joveo-light-blue rounded-xl p-8 text-white">
        <h3 className="text-2xl font-semibold text-center mb-8">Business Impact Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">75%</div>
            <p className="text-blue-100">Of Joveo Business Flows Through Open Exchange</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">4.8/5</div>
            <p className="text-blue-100">Client Satisfaction Score</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">3x</div>
            <p className="text-blue-100">Faster Campaign Launch Time</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">92%</div>
            <p className="text-blue-100">Publisher Retention Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">45%</div>
            <p className="text-blue-100">Increase in Revenue per Campaign</p>
          </div>
        </div>
      </div>

      {/* Offer Placement Dialog */}
      {showOfferDialog && selectedDemand && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Place Your Offer</h3>
              <p className="text-gray-600">Publisher: LinkedIn</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">{selectedDemand.name}</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>Role:</strong> {selectedDemand.demand}</p>
                <p><strong>Location:</strong> {selectedDemand.location}</p>
                <p><strong>Quantity:</strong> {selectedDemand.quantity}</p>
                <p><strong>Skills:</strong> {selectedDemand.skills}</p>
                <p><strong>Max CPA:</strong> <span className="text-green-600 font-bold">{selectedDemand.budget}</span></p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your CPA Offer ($)
              </label>
              <input
                type="number"
                value={offerCPA}
                onChange={(e) => setOfferCPA(e.target.value)}
                placeholder={`Enter less than ${selectedDemand.budgetValue}`}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-joveo-blue focus:border-transparent text-lg font-semibold"
              />
              {offerCPA && parseInt(offerCPA) < selectedDemand.budgetValue && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <p className="text-green-800 font-semibold text-sm">
                      ✅ Offer Accepted! Job feed will start immediately
                    </p>
                  </div>
                  <p className="text-green-700 text-xs mt-1">
                    Your offer of ${offerCPA} is below the max CPA of ${selectedDemand.budgetValue}
                  </p>
                </div>
              )}
              {offerCPA && parseInt(offerCPA) >= selectedDemand.budgetValue && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold text-sm">
                    ❌ Offer too high! Must be less than ${selectedDemand.budgetValue}
                  </p>
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={closeDialog}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitOffer}
                disabled={!offerCPA || parseInt(offerCPA) >= selectedDemand.budgetValue}
                className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                  offerCPA && parseInt(offerCPA) < selectedDemand.budgetValue
                    ? 'bg-joveo-green text-white hover:bg-green-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {offerCPA && parseInt(offerCPA) < selectedDemand.budgetValue ? 'Start Job Feed 🚀' : 'Place Offer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoveoSolutionPage;
