import React from 'react';
import { Shield, Eye, Target, Settings, Database, Globe } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const cookieTypes = [
    {
      icon: Shield,
      name: 'Necessary Cookies',
      description: 'Essential for the website to function properly',
      examples: ['Authentication tokens', 'Shopping cart contents', 'Security preferences'],
      retention: 'Session or up to 1 year',
      canDisable: false,
    },
    {
      icon: Eye,
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      examples: ['Google Analytics', 'Page views', 'User behavior tracking'],
      retention: 'Up to 2 years',
      canDisable: true,
    },
    {
      icon: Target,
      name: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements',
      examples: ['Facebook Pixel', 'Google Ads', 'Retargeting pixels'],
      retention: 'Up to 2 years',
      canDisable: true,
    },
    {
      icon: Settings,
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      examples: ['Chat widgets', 'Social media features', 'Language preferences'],
      retention: 'Up to 1 year',
      canDisable: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy & Cookie Information</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about how we handle your data and use cookies
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: January 2025</p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">Quick Summary</h2>
          <ul className="text-blue-800 space-y-2">
            <li>• We use cookies to improve your experience and analyze website usage</li>
            <li>• You can control which cookies we use through our cookie preferences</li>
            <li>• We never sell your personal information to third parties</li>
            <li>• Your data is encrypted and stored securely</li>
          </ul>
        </div>

        {/* Cookie Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cookie Information</h2>
          
          <div className="prose prose-lg text-gray-700 mb-8">
            <p>
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <cookie.icon className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{cookie.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        cookie.canDisable 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {cookie.canDisable ? 'Optional' : 'Required'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{cookie.description}</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Examples:</span>
                        <ul className="list-disc list-inside text-gray-600 ml-2">
                          {cookie.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Retention:</span>
                        <span className="text-gray-600 ml-2">{cookie.retention}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Collection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Data We Collect</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Database className="h-5 w-5 text-blue-400 mr-2" />
                  Personal Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Email address (for account creation)</li>
                  <li>• Full name (for shipping and personalization)</li>
                  <li>• Shipping address (for order fulfillment)</li>
                  <li>• Payment information (processed securely by Stripe)</li>
                  <li>• Order history and preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-5 w-5 text-blue-400 mr-2" />
                  Usage Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pages visited and time spent</li>
                  <li>• Device and browser information</li>
                  <li>• IP address and location (general)</li>
                  <li>• Referral sources</li>
                  <li>• Search terms and interactions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Data</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Operations</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer support</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvements & Analytics</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Analyze website performance and user behavior</li>
                  <li>Improve our products and services</li>
                  <li>Personalize your shopping experience</li>
                  <li>Optimize our website design and functionality</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing (Optional)</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Send promotional emails (with your consent)</li>
                  <li>Show relevant advertisements</li>
                  <li>Retarget visitors with personalized ads</li>
                  <li>Measure marketing campaign effectiveness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Processing</h3>
                <p className="text-gray-700">
                  We use <strong>Stripe</strong> for secure payment processing. Stripe may set cookies to prevent fraud 
                  and ensure secure transactions. Your payment information is never stored on our servers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics</h3>
                <p className="text-gray-700">
                  We may use <strong>Google Analytics</strong> to understand how visitors use our website. 
                  This helps us improve our site and provide better user experiences.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Social Media</h3>
                <p className="text-gray-700">
                  Social media platforms like <strong>Instagram</strong> and <strong>TikTok</strong> may set cookies 
                  when you interact with embedded content or share our products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights & Controls</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Controls</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Manage preferences through our cookie banner</li>
                  <li>Change settings anytime in your browser</li>
                  <li>Delete existing cookies from your device</li>
                  <li>Block future cookies (may affect functionality)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Rights</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Browser Settings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Cookies in Your Browser</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Chrome</h3>
                <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies and other site data</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Firefox</h3>
                <p className="text-sm text-gray-600">Settings → Privacy & Security → Cookies and Site Data</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Safari</h3>
                <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Edge</h3>
                <p className="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Privacy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Questions?</h2>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg text-white p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
              <p className="text-lg mb-6">
                Have questions about our privacy practices or want to exercise your data rights?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@frostboyz.com"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Email Privacy Team
                </a>
                <a
                  href="/contact"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Information</h2>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Controller</h3>
              <p>
                FrostBoyz is the data controller for the personal information we collect. 
                We are responsible for ensuring your data is handled in accordance with applicable privacy laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Basis for Processing</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Contract:</strong> To fulfill orders and provide customer service</li>
                <li><strong>Legitimate Interest:</strong> To improve our website and prevent fraud</li>
                <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
                <li><strong>Legal Obligation:</strong> To comply with tax and accounting requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Retention</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Account Data:</strong> Until you delete your account</li>
                <li><strong>Order History:</strong> 7 years for tax and legal compliance</li>
                <li><strong>Analytics Data:</strong> Up to 2 years</li>
                <li><strong>Marketing Data:</strong> Until you unsubscribe or object</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">International Transfers</h3>
              <p>
                Your data may be transferred to and processed in countries outside your residence. 
                We ensure appropriate safeguards are in place to protect your data during such transfers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Measures</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>SSL encryption for all data transmission</li>
                <li>Secure cloud storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Policy</h3>
              <p>
                We may update this privacy policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the "last updated" date.
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Management CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Manage Your Cookie Preferences</h3>
            <p className="text-gray-600 mb-4">
              You can change your cookie preferences at any time by clicking the button below.
            </p>
            <button
              onClick={() => {
                // Clear existing consent to show the popup again
                localStorage.removeItem('frostboyz-cookie-consent');
                window.location.reload();
              }}
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Update Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;