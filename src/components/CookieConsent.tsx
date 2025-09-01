import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('frostboyz-cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: Date.now(),
    };
    localStorage.setItem('frostboyz-cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptSelected = () => {
    const selectedPreferences = {
      ...preferences,
      timestamp: Date.now(),
    };
    localStorage.setItem('frostboyz-cookie-consent', JSON.stringify(selectedPreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true, // Always required
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: Date.now(),
    };
    localStorage.setItem('frostboyz-cookie-consent', JSON.stringify(rejected));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-3 flex-1">
              <Cookie className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">We use cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking "Accept All", you consent to our use of cookies.{' '}
                  <a href="/privacy" className="text-blue-400 hover:text-blue-600 underline">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Customize
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Manage your cookie preferences. You can enable or disable different types of cookies below.
              </p>
            </div>

            <div className="p-6 space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Necessary Cookies</h3>
                  <p className="text-sm text-gray-600">
                    Essential for the website to function properly. These cannot be disabled.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-6 bg-blue-400 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Analytics Cookies</h3>
                  <p className="text-sm text-gray-600">
                    Help us understand how visitors interact with our website by collecting anonymous information.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => togglePreference('analytics')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.analytics ? 'bg-blue-400' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Marketing Cookies</h3>
                  <p className="text-sm text-gray-600">
                    Used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => togglePreference('marketing')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.marketing ? 'bg-blue-400' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Functional Cookies</h3>
                  <p className="text-sm text-gray-600">
                    Enable enhanced functionality like chat widgets and social media features.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => togglePreference('functional')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.functional ? 'bg-blue-400' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                      preferences.functional ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-2 text-sm font-medium bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;