import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Music, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              FrostBoyz<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Born from urban culture, FrostBoyz is more than jewelry. It's attitude. 
              Trap-inspired, icy, bold.
            </p>
            <p className="text-blue-400 font-medium text-lg">
              "Frost never melts."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/lookbook" className="text-gray-400 hover:text-white transition-colors">Lookbook</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:frostboyz.jewelry@gmail.com" 
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                frostboyz.jewelry@gmail.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Music className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 FrostBoyz. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;