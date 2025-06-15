import React from 'react';
import FeedraLogo from './components/FeedraLogo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <FeedraLogo size="lg" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <FeedraLogo size="xl" />
              {/* macOS-style reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white opacity-20 rounded-full pointer-events-none"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Feedra
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            The next-generation browser powered by AI. Featuring a distinctive macOS-style icon 
            with rainbow-colored branding and intelligent content curation.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Now
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Logo Variations */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">macOS-Style App Icon</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Default Versions */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">RGB Rainbow Theme</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">Extra Large</span>
                  <div className="flex items-center gap-4">
                    <FeedraLogo size="xl" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">Large</span>
                  <FeedraLogo size="lg" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">Medium</span>
                  <FeedraLogo size="md" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">Small (Icon Only)</span>
                  <FeedraLogo size="sm" />
                </div>
              </div>
            </div>

            {/* Monochrome Versions */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Monochrome Theme</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">Extra Large</span>
                  <div className="flex items-center gap-4">
                    <FeedraLogo size="xl" variant="monochrome" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">Large</span>
                  <FeedraLogo size="lg" variant="monochrome" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">Medium</span>
                  <FeedraLogo size="md" variant="monochrome" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">Small (Icon Only)</span>
                  <FeedraLogo size="sm" variant="monochrome" />
                </div>
              </div>
            </div>
          </div>

          {/* Icon Details */}
          <div className="mt-8 p-6 bg-black rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">macOS App Icon Style</h3>
            <div className="flex justify-center items-center gap-8">
              <FeedraLogo size="lg" />
              <div className="text-white space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-sm"></div>
                  <span className="text-sm">RGB Rainbow Letter F</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm"></div>
                  <span className="text-sm">Golden AI Star</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black border border-gray-600 rounded-full"></div>
                  <span className="text-sm">Black Circle Background</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Background Examples */}
        <div className="bg-gray-900 rounded-2xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Dark Background Usage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <FeedraLogo size="lg" className="justify-center" />
              </div>
              <p className="text-gray-300 text-sm">Navigation Header</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <FeedraLogo size="md" className="justify-center" />
              </div>
              <p className="text-gray-300 text-sm">Sidebar</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <FeedraLogo size="sm" className="justify-center" />
              </div>
              <p className="text-gray-300 text-sm">Compact View</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600">Intelligent content curation and smart browsing assistance</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Feed Management</h3>
            <p className="text-gray-600">Seamlessly organize and manage your content feeds</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Optimized performance for seamless browsing experience</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <FeedraLogo size="md" className="opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;