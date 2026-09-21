import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const NotFound = () => {
  useSEO({
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist or has been moved.',
    path: '/404',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
