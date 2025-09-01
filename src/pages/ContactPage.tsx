import React, { useState } from 'react';
import { Mail, Instagram, MapPin, Phone, Clock } from 'lucide-react';
import TikTokIcon from '../components/TikTokIcon';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Questions about your order? Need styling advice? Want to collaborate? 
            We're here for the culture. Drop us a line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">frostboyz.jewelry@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+40 758848374</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM EST</p>
                    <p className="text-gray-600">Weekend: 10AM - 4PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Headquarters</h4>
                    <p className="text-gray-600">Bucharest, Romania</p>
                    <p className="text-sm text-gray-500">Where the frost begins</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow the Movement</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/frostboyz.jewelry?igsh=MWE1dDFkazh2dGV1bA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@frostboyzromania?_t=ZN-8zN3Ly3wF54&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Need Quick Help?</h4>
              <div className="space-y-2">
                <a href="/faq" className="block text-blue-400 hover:text-blue-600 transition-colors">
                  → Check our FAQ
                </a>
                <a href="/shop" className="block text-blue-400 hover:text-blue-600 transition-colors">
                  → Track your order
                </a>
                <a href="/about" className="block text-blue-400 hover:text-blue-600 transition-colors">
                  → Size guide
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Question</option>
                    <option value="product">Product Inquiry</option>
                    <option value="return">Return/Exchange</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Response Time:</strong> We typically respond within 24 hours. 
                  For urgent matters, hit us up on Instagram @frostboyz for faster response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;