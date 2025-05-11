import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, Brain } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-blue-800">
            <Brain className="h-6 w-6 mr-1" />
            <Smartphone className="h-6 w-6" />
          </div>
          <span className="font-semibold text-xl text-blue-900">LLM Mobile</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-700 transition-colors">Features</a>
          <a href="#technical" className="text-gray-700 hover:text-blue-700 transition-colors">Technical Details</a>
          <a href="#faq" className="text-gray-700 hover:text-blue-700 transition-colors">FAQ</a>
          <a 
            href="#download" 
            className="px-4 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-all transform hover:scale-105"
          >
            Download
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#technical" 
              className="text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Technical Details
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#download" 
              className="px-4 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 text-center transition-all"
              onClick={() => setIsOpen(false)}
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;