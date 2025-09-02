import React, { useState } from 'react';
import { Mail, CheckCircle, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

interface NewsletterSignupProps {
  onClose?: () => void;
  source?: string;
  className?: string;
  showAsModal?: boolean;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  onClose, 
  source = 'website',
  className = '',
  showAsModal = false 
}) => {
  const { user } = useAuth();
  const [email, setEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/newsletter-signup`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': session ? `Bearer ${session.access_token}` : '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setSuccess(true);
      setEmail('');
      
      // Auto-close after success if it's a modal
      if (showAsModal && onClose) {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error: any) {
      console.error('Newsletter signup error:', error);
      setError(error.message || 'Failed to subscribe');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={`${showAsModal ? 'text-center' : ''} ${className}`}>
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome to the Frost Fam! 🧊
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Check your email for your exclusive 10% off code!
        </p>
        {showAsModal && onClose && (
          <button
            onClick={onClose}
            className="text-blue-400 hover:text-blue-600 font-medium"
          >
            Continue Shopping
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      {showAsModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <X className="h-6 w-6" />
        </button>
      )}
      
      <div className={showAsModal ? 'text-center' : ''}>
        <div className="flex items-center justify-center mb-4">
          <Mail className="h-8 w-8 text-blue-400 mr-2" />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Join the Frost Fam
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get 10% off your first order + exclusive drops before anyone else
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
            </div>
          )}
          
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
              disabled={loading}
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Subscribing...' : 'Claim 10% Off'}
          </button>
        </form>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;