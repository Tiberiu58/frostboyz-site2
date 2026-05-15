import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, ShoppingBag, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import UserMenu from './UserMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useApp();
  const location = useLocation();

  const navigation = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'New In', href: '/new' },
    { name: 'About FrostBoyz', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping-returns' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-3 mt-3 sm:mx-4">
        <div className="frost-panel rounded-lg transition-all duration-300">
          <nav className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8" aria-label="Primary navigation">
            <div className="flex h-16 items-center justify-between">
              <Link
                to="/"
                className="text-xl font-bold tracking-tight text-gray-950 transition-colors duration-200 hover:text-sky-600 dark:text-white dark:hover:text-sky-300 sm:text-2xl"
              >
                <span className="font-black uppercase tracking-wider">FrostBoyz</span>
                <span className="font-black text-sky-500">.</span>
              </Link>

              <div className="hidden items-center gap-5 lg:flex xl:gap-7">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block rounded-md px-1 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-sky-600 dark:hover:text-sky-300 ${
                      isActive(item.href) ? 'text-sky-600 dark:text-sky-300' : 'text-gray-800 dark:text-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <UserMenu />
                <Link
                  to="/wishlist"
                  aria-label="Wishlist"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-gray-900 transition-colors duration-200 hover:bg-sky-50 hover:text-sky-700 dark:text-white dark:hover:bg-white/10 dark:hover:text-sky-300"
                >
                  <Heart className="h-5 w-5" />
                </Link>
                <Link
                  to="/cart"
                  aria-label="Cart"
                  className="relative flex h-11 w-11 items-center justify-center rounded-full text-gray-900 transition-colors duration-200 hover:bg-sky-50 hover:text-sky-700 dark:text-white dark:hover:bg-white/10 dark:hover:text-sky-300"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white shadow-lg">
                      {cartCount}
                    </span>
                  )}
                </Link>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={isMenuOpen}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-gray-900 transition-colors duration-200 hover:bg-sky-50 hover:text-sky-700 dark:text-white dark:hover:bg-white/10 lg:hidden"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="border-t border-gray-200 dark:border-white/10 lg:hidden">
                <div className="py-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block rounded-md px-3 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-sky-50 dark:hover:bg-white/10 ${
                        isActive(item.href) ? 'text-sky-600 dark:text-sky-300' : 'text-gray-900 dark:text-white'
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
