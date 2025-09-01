import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const EmailConfirmationPage: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        // Get the current session to check if email is confirmed
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          setStatus('error');
          setMessage('There was an error confirming your email. Please try again.');
          return;
        }

        if (session && session.user.email_confirmed_at) {
          setStatus('success');
          setMessage('Your email has been successfully confirmed! You can now sign in to your account.');
        } else {
          setStatus('error');
          setMessage('Email confirmation failed. The link may be expired or invalid.');
        }
      } catch (error) {
        setStatus('error');
        setMessage('An unexpected error occurred. Please try again.');
      }
    };

    // Add a small delay to show loading state
    const timer = setTimeout(() => {
      handleEmailConfirmation();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black tracking-tight">
              FrostBoyz<span className="text-blue-400">.</span>
            </h1>
          </div>

          {/* Status Content */}
          <div className="mb-8">
            {status === 'loading' && (
              <div className="space-y-4">
                <Loader2 className="h-16 w-16 text-blue-400 mx-auto animate-spin" />
                <h2 className="text-2xl font-bold text-gray-900">Confirming your email...</h2>
                <p className="text-gray-600">Please wait while we verify your account.</p>
              </div>
            )}

            {status === 'success' && (
              <div className="space-y-4">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <h2 className="text-2xl font-bold text-gray-900">Email Confirmed!</h2>
                <p className="text-gray-600">{message}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="space-y-4">
                <AlertCircle className="h-16 w-16 text-red-500 mx-auto" />
                <h2 className="text-2xl font-bold text-gray-900">Confirmation Failed</h2>
                <p className="text-gray-600">{message}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {status === 'success' && (
              <Link
                to="/login"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block"
              >
                Sign In to Your Account
              </Link>
            )}

            {status === 'error' && (
              <div className="space-y-3">
                <Link
                  to="/signup"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block"
                >
                  Try Signing Up Again
                </Link>
                <Link
                  to="/login"
                  className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block"
                >
                  Back to Sign In
                </Link>
              </div>
            )}

            <Link
              to="/"
              className="block text-blue-400 hover:text-blue-600 font-medium mt-4"
            >
              Return to Homepage
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Welcome to the Frost Fam! 🧊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmationPage;