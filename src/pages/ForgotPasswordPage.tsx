import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
        <Link to="/" className="text-3xl font-black tracking-tight text-black">
          FrostBoyz<span className="text-sky-400">.</span>
        </Link>
        <Mail className="mx-auto h-12 w-12 text-sky-500" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Password reset is offline</h1>
          <p className="mt-3 text-gray-600">Supabase has been disconnected, so password reset emails are not available.</p>
        </div>
        <Link to="/login" className="inline-flex items-center text-sm font-medium text-sky-600 hover:text-sky-800">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
