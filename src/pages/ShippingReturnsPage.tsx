import React from 'react';
import { Truck, RotateCcw, Shield, Clock, MapPin, Package } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ShippingReturnsPage: React.FC = () => {
  const shippingOptions = [
    {
      icon: Truck,
      title: 'Standard Shipping',
      description: 'Free worldwide shipping on orders over 150 RON',
      timeframe: '7-15 business days',
      cost: 'Free (orders 150+ RON) / 15 RON',
    },
    {
      icon: Package,
      title: 'Express Shipping',
      description: 'Faster delivery for urgent orders',
      timeframe: '3-7 business days',
      cost: '35 RON',
    },
  ];

  const returnSteps = [
    {
      step: '1',
      title: 'Contact Us',
      description: 'Email support@frostboyz.com within 14 days of delivery',
    },
    {
      step: '2',
      title: 'Get Return Label',
      description: 'We\'ll send you a prepaid return shipping label',
    },
    {
      step: '3',
      title: 'Pack & Send',
      description: 'Pack items in original packaging and ship back to us',
    },
    {
      step: '4',
      title: 'Get Refund',
      description: 'Receive full refund within 5-7 business days',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* SEO Header */}
      <div className="sr-only">
        <h1>Shipping & Returns - FrostBoyz Romania</h1>
        <p>Complete information about shipping options, delivery times, return policy, and warranty for FrostBoyz jewelry.</p>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/6669856/pexels-photo-6669856.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="FrostBoyz Shipping"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Shipping & Returns
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Fast, secure shipping worldwide. Easy returns. Your satisfaction is our priority.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Shipping Options
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We ship worldwide with secure, tracked delivery options
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {shippingOptions.map((option, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction="up">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
                  <option.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {option.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-2" />
                      {option.timeframe}
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {option.cost}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Shipping Details */}
          <ScrollReveal>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
                Shipping Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-800 dark:text-blue-300">
                <div>
                  <h4 className="font-semibold mb-2">Processing Time</h4>
                  <p className="text-sm">Orders are processed within 1-2 business days</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tracking</h4>
                  <p className="text-sm">All orders include tracking number via email</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Packaging</h4>
                  <p className="text-sm">Secure, discreet packaging with FrostBoyz branding</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Customs</h4>
                  <p className="text-sm">International orders may be subject to customs fees</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Returns Policy */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Easy Returns
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                14-day return policy. No questions asked if you're not completely satisfied.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {returnSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Return Conditions */}
          <ScrollReveal>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Return Conditions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">
                    ✓ Eligible for Return
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Items in original condition</li>
                    <li>• Unworn jewelry with tags</li>
                    <li>• Original packaging included</li>
                    <li>• Within 14 days of delivery</li>
                    <li>• Defective or damaged items</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">
                    ✗ Not Eligible for Return
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Custom or personalized items</li>
                    <li>• Engraved jewelry</li>
                    <li>• Items worn or damaged by customer</li>
                    <li>• Items without original packaging</li>
                    <li>• Returns after 14 days</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Warranty & Support */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Lifetime Warranty
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Every FrostBoyz piece comes with our lifetime warranty against manufacturing defects. 
                    We stand behind the quality of our jewelry.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Manufacturing Defects</h4>
                        <p className="text-sm">Structural issues, plating defects, clasp failures</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <RotateCcw className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Free Repairs</h4>
                        <p className="text-sm">We'll repair or replace defective items at no cost</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Worldwide Coverage</h4>
                        <p className="text-sm">Warranty valid regardless of your location</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                <p className="mb-6">
                  Our customer support team is here to help with any questions about shipping, 
                  returns, or warranty claims.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Email Support</h4>
                    <p className="text-blue-100">frostboyz.jewelry@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone Support</h4>
                    <p className="text-blue-100">+40 758 848 374</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-blue-100">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingReturnsPage;