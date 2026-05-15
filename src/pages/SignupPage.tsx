import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const SignupPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8 transition-colors duration-300 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-950">
        <Link to="/" className="text-3xl font-black tracking-tight text-black dark:text-white">
          FrostBoyz<span className="text-sky-400">.</span>
        </Link>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
          <User className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-950 dark:text-white">Account creation is offline</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Supabase auth has been removed. Customer accounts can be re-enabled after choosing a new auth system.
          </p>
        </div>
        <Link
          to="/shop"
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-black px-6 py-3 font-bold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
