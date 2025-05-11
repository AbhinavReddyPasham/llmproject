import React from 'react';
import { Github, Twitter, Mail, Smartphone, Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <Brain className="h-6 w-6 mr-1" />
                <Smartphone className="h-6 w-6" />
              </div>
              <span className="font-semibold text-xl">LLM Mobile</span>
            </div>
            <p className="text-blue-200 mb-6">
              Bringing powerful language models to your pocket with privacy and offline capabilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-blue-200 hover:text-white transition-colors">Features</a></li>
              <li><a href="#technical" className="text-blue-200 hover:text-white transition-colors">Technical Details</a></li>
              <li><a href="#download" className="text-blue-200 hover:text-white transition-colors">Download</a></li>
              <li><a href="#faq" className="text-blue-200 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Installation Guide</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Research Paper</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-blue-200 mb-4">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <a 
              href="mailto:contact@llmmobile.example.com" 
              className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-flex items-center transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              Get in Touch
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-300 text-sm">
              &copy; {new Date().getFullYear()} LLM Mobile Project. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-300 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-300 text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-300 text-sm hover:text-white transition-colors">License</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;