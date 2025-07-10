import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavProps {
  onNavigate: (page: string) => void;
  activePage: 'home' | 'docs';
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

function Nav({ onNavigate, activePage, mobileMenuOpen, setMobileMenuOpen }: NavProps) {
  return (
    <>
      <nav className="relative z-20 px-6 py-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 overflow-hidden rounded-lg">
              <img 
                src="/openposter.png" 
                alt="OpenPoster Logo"
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-xl font-bold text-black">OpenPoster</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={activePage === 'home' ? "text-black font-medium" : "text-gray-600 hover:text-black transition-colors"}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('docs')}
              className={activePage === 'docs' ? "text-black font-medium" : "text-gray-600 hover:text-black transition-colors"}
            >
              Docs
            </button>
            <a href="https://github.com/openposter/OpenPoster/releases" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Download
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <div 
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black"
          >
              <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col justify-center items-end h-full p-8 space-y-8">
            <button 
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className={`text-2xl font-medium ${activePage === 'home' ? 'text-black' : 'text-gray-600'} hover:text-black transition-colors`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                onNavigate('docs');
                setMobileMenuOpen(false);
              }}
              className={`text-2xl font-medium ${activePage === 'docs' ? 'text-black' : 'text-gray-600'} hover:text-black transition-colors`}
            >
              Docs
            </button>
            <a 
              href="https://github.com/openposter/OpenPoster/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl font-medium text-gray-600 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav; 