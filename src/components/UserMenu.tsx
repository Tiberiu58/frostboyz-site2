import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Package, Settings, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';

const UserMenu: React.FC = () => {
  const { user, signOut } = useAuth();
  const { activePlan } = useSubscription();
  const [isOpen, setIsOpen] = useState(false);

  const menuButtonClass =
    'flex h-11 items-center gap-2 rounded-full px-3 text-gray-900 transition-colors duration-200 hover:bg-sky-50 hover:text-sky-700 dark:text-white dark:hover:bg-white/10 dark:hover:text-sky-300';
  const menuItemClass =
    'flex items-center px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-white/10';

  if (!user) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open account menu"
          aria-expanded={isOpen}
          className={menuButtonClass}
        >
          <User className="h-5 w-5" />
          <span className="hidden font-medium sm:block">Account</span>
        </button>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
              <div className="py-2">
                <Link to="/login" className={menuItemClass} onClick={() => setIsOpen(false)}>
                  <User className="mr-3 h-4 w-4" />
                  Sign In
                </Link>
                <Link to="/signup" className={menuItemClass} onClick={() => setIsOpen(false)}>
                  <User className="mr-3 h-4 w-4" />
                  Sign Up
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open account menu"
        aria-expanded={isOpen}
        className={menuButtonClass}
      >
        <User className="h-5 w-5" />
        <span className="hidden max-w-28 truncate font-medium sm:block">
          {user.user_metadata?.full_name || user.email?.split('@')[0]}
        </span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 z-20 mt-2 w-64 rounded-lg border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
            <div className="border-b border-gray-200 p-4 dark:border-gray-700">
              <p className="font-medium text-gray-900 dark:text-white">{user.user_metadata?.full_name || 'User'}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
              {activePlan && <p className="mt-1 text-xs font-medium text-sky-600 dark:text-sky-300">Plan: {activePlan}</p>}
            </div>

            <div className="py-2">
              <Link to="/profile" className={menuItemClass} onClick={() => setIsOpen(false)}>
                <Settings className="mr-3 h-4 w-4" />
                Profile Settings
              </Link>

              <Link to="/orders" className={menuItemClass} onClick={() => setIsOpen(false)}>
                <Package className="mr-3 h-4 w-4" />
                Order History
              </Link>

              <button onClick={handleSignOut} className={`${menuItemClass} w-full`}>
                <LogOut className="mr-3 h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;
