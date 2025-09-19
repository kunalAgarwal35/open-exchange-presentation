import React, { useState } from 'react';
import StockTradingPage from './components/StockTradingPage';
import JoveoTraditionalPage from './components/JoveoTraditionalPage';
import JoveoSolutionPage from './components/JoveoSolutionPage';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    { component: StockTradingPage, title: "Traditional Stock Trading" },
    { component: JoveoTraditionalPage, title: "Traditional Joveo Model" },
    { component: JoveoSolutionPage, title: "Joveo Open Exchange Solution" }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-joveo-blue">Joveo Open Exchange</h1>
            </div>
            <div className="flex space-x-4">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === index
                      ? 'bg-joveo-blue text-white'
                      : 'text-gray-600 hover:text-joveo-blue hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="page-transition">
        <CurrentPageComponent />
      </main>

      {/* Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`p-2 rounded-full transition-colors duration-200 ${
              currentPage === 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-joveo-blue hover:bg-joveo-blue hover:text-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <span className="text-sm font-medium text-gray-600">
            {currentPage + 1} / {pages.length}
          </span>
          
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className={`p-2 rounded-full transition-colors duration-200 ${
              currentPage === pages.length - 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-joveo-blue hover:bg-joveo-blue hover:text-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
