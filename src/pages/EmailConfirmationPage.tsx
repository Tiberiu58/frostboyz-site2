import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const EmailConfirmationPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-tight text-black">
              FrostBoyz<span className="text-sky-400">.</span>
            </h1>
          </div>

          <div className="mb-8 space-y-4">
            <AlertCircle className="mx-auto h-16 w-16 text-amber-500" />
            <h2 className="text-2xl font-bold text-gray-900">Email confirmation is offline</h2>
            <p className="text-gray-600">
              Supabase auth has been removed, so confirmation links are no longer processed by this site.
            </p>
          </div>

          <Link
            to="/"
            className="inline-block w-full rounded-lg bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmationPage;
