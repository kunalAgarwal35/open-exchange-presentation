import React from 'react';

const StockTradingPage = () => {
  const clients = [
    { id: 1, name: "Client A", demand: "Buy 100 AAPL @ $150" },
    { id: 2, name: "Client B", demand: "Sell 50 GOOGL @ $2800" },
    { id: 3, name: "Client C", demand: "Buy 200 TSLA @ $800" },
  ];

  const brokers = [
    { id: 1, name: "Broker 1", reach: "Can reach 5 people" },
    { id: 2, name: "Broker 2", reach: "Can reach 3 people" },
    { id: 3, name: "Broker 3", reach: "Can reach 7 people" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Traditional Stock Trading
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          In traditional stock exchanges, clients place orders through brokers who physically shout in the trading pit. 
          The reach is limited by how loud the broker can shout.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Clients Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-joveo-blue mb-6">
            Clients
          </h3>
          {clients.map((client) => (
            <div key={client.id} className="flow-node border-blue-200 bg-blue-50">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">{client.id}</span>
                </div>
                <h4 className="font-semibold text-gray-800">{client.name}</h4>
                <p className="text-sm text-gray-600 mt-2">{client.demand}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Arrows */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center">
            <div className="flow-arrow">→</div>
            <p className="text-sm text-gray-500 mt-2">Place Orders</p>
          </div>
          <div className="text-center">
            <div className="flow-arrow">→</div>
            <p className="text-sm text-gray-500 mt-2">Shout in Pit</p>
          </div>
        </div>

        {/* Brokers Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-joveo-orange mb-6">
            Brokers
          </h3>
          {brokers.map((broker) => (
            <div key={broker.id} className="flow-node border-orange-200 bg-orange-50">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">{broker.id}</span>
                </div>
                <h4 className="font-semibold text-gray-800">{broker.name}</h4>
                <p className="text-sm text-gray-600 mt-2">{broker.reach}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trading Pit */}
      <div className="mt-12">
        <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-xl p-8 border-2 border-gray-200">
          <h3 className="text-2xl font-semibold text-center mb-6">Trading Pit</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center shadow">
                <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-2"></div>
                <p className="text-xs text-gray-600">Trader {i + 1}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              <span className="font-semibold text-red-600">Problem:</span> Limited reach based on broker's voice volume
            </p>
          </div>
        </div>
      </div>

      {/* Key Issues */}
      <div className="mt-12 bg-red-50 rounded-xl p-6 border border-red-200">
        <h3 className="text-xl font-semibold text-red-800 mb-4">Key Limitations</h3>
        <ul className="space-y-2 text-red-700">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            Limited reach - depends on how loud the broker can shout
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            Inefficient matching - not all potential traders are reached
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            Human bottleneck - brokers are the limiting factor
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StockTradingPage;
