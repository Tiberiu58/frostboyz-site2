import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import UserMenu from './UserMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useApp();
  const location = useLocation();

  const navigation = [
    { name: 'Shop', href: '/shop' },
    { name: 'Lookbook', href: '/lookbook' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-4 mt-4">
        <div className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-black tracking-tight transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
            FrostBoyz<span className="text-blue-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block font-medium text-sm tracking-wide transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] ${
                  isActive(item.href) 
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]' 
                    : 'text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Cart & Wishlist */}
          <div className="flex items-center space-x-4">
            <UserMenu />
            <Link to="/wishlist" className="text-gray-900 hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition-all duration-300">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="relative text-gray-900 hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition-all duration-300">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900 hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block font-medium text-sm tracking-wide transition-colors hover:text-blue-400 ${
                    isActive(item.href) ? 'text-blue-400' : 'text-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;