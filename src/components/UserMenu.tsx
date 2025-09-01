import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut, Settings, Package } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';

const UserMenu: React.FC = () => {
  const { user, signOut } = useAuth();
  const { activePlan } = useSubscription();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-900 hover:text-blue-400 transition-colors"
        >
          <User className="h-5 w-5" />
          <span className="hidden sm:block font-medium">Account</span>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
              <div className="py-2">
                <Link
                  to="/login"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-4 w-4 mr-3" />
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-4 w-4 mr-3" />
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
        className="flex items-center space-x-2 text-gray-900 hover:text-blue-400 transition-colors"
      >
        <User className="h-5 w-5" />
        <span className="hidden sm:block font-medium">
          {user.user_metadata?.full_name || user.email?.split('@')[0]}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="p-4 border-b border-gray-200">
              <p className="font-medium text-gray-900">
                {user.user_metadata?.full_name || 'User'}
              </p>
              <p className="text-sm text-gray-600">{user.email}</p>
              {activePlan && (
                <p className="text-xs text-blue-600 mt-1 font-medium">
                  Plan: {activePlan}
                </p>
              )}
            </div>
            
            <div className="py-2">
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="h-4 w-4 mr-3" />
                Profile Settings
              </Link>
              
              <Link
                to="/orders"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Package className="h-4 w-4 mr-3" />
                Order History
              </Link>
              
              <button
                onClick={handleSignOut}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-3" />
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