import React, { useState } from 'react';
import { CheckCircle, Mail, X } from 'lucide-react';

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
  showAsModal = false,
}) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subscribers = JSON.parse(localStorage.getItem('frostboyz-newsletter-local') || '[]') as Array<{
      email: string;
      source: string;
      subscribedAt: string;
    }>;

    localStorage.setItem(
      'frostboyz-newsletter-local',
      JSON.stringify([
        ...subscribers.filter((subscriber) => subscriber.email.toLowerCase() !== email.toLowerCase()),
        { email, source, subscribedAt: new Date().toISOString() },
      ]),
    );
    localStorage.setItem('frostboyz-newsletter-subscribed', 'true');
    setSuccess(true);
    setEmail('');

    if (showAsModal && onClose) {
      window.setTimeout(onClose, 1600);
    }
  };

  if (success) {
    return (
      <div className={`${showAsModal ? 'text-center' : ''} ${className}`}>
        <div className="mb-4 flex items-center justify-center">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Welcome to the Frost Fam!</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Your email was saved locally. Connect a new email provider when you are ready to send campaigns.
        </p>
        {showAsModal && onClose && (
          <button onClick={onClose} className="font-medium text-sky-600 hover:text-sky-800 dark:text-sky-300">
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
          aria-label="Close newsletter modal"
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <X className="h-6 w-6" />
        </button>
      )}

      <div className={showAsModal ? 'text-center' : ''}>
        <div className="mb-4 flex items-center justify-center">
          <Mail className="mr-2 h-8 w-8 text-sky-500" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">Join the Frost Fam</h3>
        </div>
        <p className="mb-6 text-gray-600 dark:text-gray-300">Get drop updates and launch offers before anyone else.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            />
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Claim Updates
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Supabase has been removed; this form currently stores signups only in this browser.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
