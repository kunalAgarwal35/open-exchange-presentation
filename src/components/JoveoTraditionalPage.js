import React from 'react';

const JoveoTraditionalPage = () => {
  const clients = [
    { id: 1, name: "Company A", demand: "Software Engineers", budget: "$5000 CPA", location: "SF" },
    { id: 2, name: "Company B", demand: "Marketing Managers", budget: "$3000 CPA", location: "NYC" },
    { id: 3, name: "Company C", demand: "Data Scientists", budget: "$7000 CPA", location: "Austin" },
  ];

  const cses = [
    { id: 1, name: "CSE John", capacity: "Can email 20 publishers/day", performance: "Responsible for ROI" },
    { id: 2, name: "CSE Sarah", capacity: "Can email 15 publishers/day", performance: "Responsible for ROI" },
    { id: 3, name: "CSE Mike", capacity: "Can email 25 publishers/day", performance: "Responsible for ROI" },
  ];

  const publishers = [
    "Indeed", "LinkedIn", "Glassdoor", "Monster", "CareerBuilder", 
    "ZipRecruiter", "Dice", "AngelList", "Stack Overflow", "GitHub Jobs"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Traditional Joveo Model
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Similar to stock trading, clients come to Joveo with job ad demands. CSEs (Customer Success Engineers) 
          manually reach out to publishers via email. Their reach is limited by email capacity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Clients Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-joveo-blue mb-6">
            Clients (Advertisers)
          </h3>
          {clients.map((client) => (
            <div key={client.id} className="flow-node border-blue-200 bg-blue-50">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">{client.id}</span>
                </div>
                <h4 className="font-semibold text-gray-800">{client.name}</h4>
                <div className="text-sm text-gray-600 mt-2 space-y-1">
                  <p><strong>Need:</strong> {client.demand}</p>
                  <p><strong>Budget:</strong> {client.budget}</p>
                  <p><strong>Location:</strong> {client.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Arrows */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center">
            <div className="flow-arrow">→</div>
            <p className="text-sm text-gray-500 mt-2">Job Ad Requests</p>
          </div>
          <div className="text-center">
            <div className="flow-arrow">→</div>
            <p className="text-sm text-gray-500 mt-2">Email Publishers</p>
          </div>
        </div>

        {/* CSEs Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-joveo-orange mb-6">
            CSEs (Customer Success Engineers)
          </h3>
          {cses.map((cse) => (
            <div key={cse.id} className="flow-node border-orange-200 bg-orange-50">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">{cse.id}</span>
                </div>
                <h4 className="font-semibold text-gray-800">{cse.name}</h4>
                <div className="text-sm text-gray-600 mt-2 space-y-1">
                  <p>{cse.capacity}</p>
                  <p className="text-red-600 font-medium">{cse.performance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publishers Pool */}
      <div className="mt-12">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-2 border-gray-200">
          <h3 className="text-2xl font-semibold text-center mb-6">Publisher Network</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {publishers.map((publisher, i) => (
              <div key={i} className={`bg-white rounded-lg p-4 text-center shadow ${
                i < 6 ? 'border-2 border-green-300' : 'border-2 border-gray-200 opacity-50'
              }`}>
                <div className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                  i < 6 ? 'bg-green-500' : 'bg-gray-400'
                }`}></div>
                <p className="text-xs text-gray-600 font-medium">{publisher}</p>
                {i >= 6 && <p className="text-xs text-red-500 mt-1">Not Reached</p>}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              <span className="font-semibold text-orange-600">Limitation:</span> Only 6 out of 10 publishers reached due to email capacity
            </p>
          </div>
        </div>
      </div>

      {/* Email Process */}
      <div className="mt-8 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
        <h3 className="text-xl font-semibold text-yellow-800 mb-4">Manual Email Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white text-2xl">✉️</span>
            </div>
            <p className="text-sm text-yellow-700">CSE writes individual emails</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white text-2xl">⏰</span>
            </div>
            <p className="text-sm text-yellow-700">Time-consuming process</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white text-2xl">📊</span>
            </div>
            <p className="text-sm text-yellow-700">CSE monitors performance</p>
          </div>
        </div>
      </div>

      {/* Key Issues */}
      <div className="mt-8 bg-red-50 rounded-xl p-6 border border-red-200">
        <h3 className="text-xl font-semibold text-red-800 mb-4">Key Limitations</h3>
        <ul className="space-y-2 text-red-700">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            Limited publisher reach - depends on CSE's email capacity
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            CSE performance responsibility - creates bottleneck
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            Manual process - time-intensive and error-prone
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            Missed opportunities - publishers not reached miss potential matches
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JoveoTraditionalPage;
