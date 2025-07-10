import React from 'react';

function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-6 sm:py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm text-gray-500 text-center">
          <span>© 2025 OpenPoster. All rights reserved.</span>
          <a href="#" className="hover:text-black transition-colors">Code of Conduct</a>
          <a href="#" className="hover:text-black transition-colors">License</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 