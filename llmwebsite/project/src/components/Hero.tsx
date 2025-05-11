import React from 'react';
import { Smartphone, Brain, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4">
              LLMs in Your Pocket
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-600 font-medium mb-6">
              Powerful AI language models, now on your mobile device
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-lg">
              We've successfully ported state-of-the-art language models to run efficiently on mobile devices, 
              making advanced AI accessible offline and with complete privacy.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#download" 
                className="px-6 py-3 rounded-full bg-blue-700 text-white text-center hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Download APK
              </a>
              <a 
                href="#technical" 
                className="px-6 py-3 rounded-full border-2 border-blue-700 text-blue-700 text-center hover:bg-blue-50 transition-all flex items-center justify-center"
              >
                <Brain className="h-5 w-5 mr-2" />
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-[500px] md:w-80 md:h-[600px]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-[40px] shadow-lg transform rotate-3"></div>
            <div className="absolute top-3 left-3 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-[40px] shadow-lg transform -rotate-3"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[250px] h-[520px] md:w-[280px] md:h-[580px] bg-gray-900 rounded-[35px] shadow-xl overflow-hidden border-8 border-gray-800">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex justify-center items-center">
                <div className="w-20 h-2 bg-gray-700 rounded-full"></div>
              </div>
              <div className="w-full h-full pt-6 bg-gradient-to-b from-blue-900 to-purple-900 flex flex-col">
                <div className="p-4 text-white">
                  <div className="mb-4 flex items-center">
                    <Brain className="h-6 w-6 text-blue-300 mr-2" />
                    <span className="font-medium">LLM Mobile Assistant</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-3 animate-fadeIn">
                    <p className="text-sm">How do you work offline?</p>
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm p-3 rounded-lg mb-3 animate-pulse">
                    <div className="flex items-start">
                      <Brain className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">I run completely on your device with no internet required. Your data stays private and never leaves your phone.</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-3 animate-fadeIn delay-300">
                    <p className="text-sm">How large is the model?</p>
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm p-3 rounded-lg mb-3 animate-pulse delay-500">
                    <div className="flex items-start">
                      <Brain className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">We've optimized a 7B parameter model to run efficiently on standard smartphone hardware.</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg animate-fadeIn delay-700">
                    <p className="text-sm">Show me what you can do...</p>
                  </div>
                </div>
                <div className="mt-auto p-4 border-t border-white/10">
                  <div className="bg-white/5 rounded-full py-2 px-4 flex items-center">
                    <input type="text" className="bg-transparent w-full text-white outline-none text-sm" placeholder="Ask me anything..." />
                    <Zap className="h-5 w-5 text-blue-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;