import React, { useState } from 'react';
import { Download, CheckCircle, Phone, Shield, AlertTriangle } from 'lucide-react';
const APK_URL = "https://drive.google.com/uc?export=download&id=133mme9lZc88ejBYcukVBkjt9m-6eoLO7";

const DownloadSection: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = APK_URL;
    link.download = 'LLM-Mobile-v1.0.2.apk'; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
      
      // Reset the downloaded state after 3 seconds
      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="download" className="py-24 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get LLM Mobile Today</h2>
          <p className="text-lg text-blue-100 mb-10">
            Experience the power of large language models right on your device, 
            with no internet connection required and complete privacy.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold mb-2">LLM Mobile v1.0.2</h3>
                <p className="text-blue-200">Latest release - June 15, 2025</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-blue-800/30 px-3 py-1 rounded-full text-sm">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>Android 10+</span>
                </div>
                <div className="flex items-center bg-blue-800/30 px-3 py-1 rounded-full text-sm">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>Privacy-Focused</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                <p>Compatible with most Android devices with at least 2GB of free storage</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                <p>Additional downloadable plug-ins for specialized domains (medical, legal, coding)</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                <p>Regular updates with improved performance and features</p>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                <p>This is an early release and may contain bugs. Please report issues through the app.</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <button
                onClick={handleDownloadClick}
                disabled={isDownloading || isDownloaded}
                className={`
                  flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium
                  transition-all transform duration-300 shadow-lg 
                  ${isDownloaded 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
                  }
                  w-full sm:w-auto min-w-[200px]
                `}
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Downloading...
                  </>
                ) : isDownloaded ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Downloaded!
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 mr-2" />
                    Download APK (45MB)
                  </>
                )}
              </button>
              <p className="mt-4 text-sm text-blue-200">
                By downloading, you agree to our <a href="#" className="underline hover:text-white">Terms of Service</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <h4 className="font-semibold mb-2">System Requirements</h4>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• Android 10 or higher</li>
                <li>• 2GB RAM minimum</li>
                <li>• 2GB free storage</li>
                <li>• ARM64 processor</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <h4 className="font-semibold mb-2">Installation Guide</h4>
              <ol className="text-blue-200 text-sm space-y-1">
                <li>1. Download the APK file</li>
                <li>2. Allow installation from unknown sources</li>
                <li>3. Open the APK and install</li>
                <li>4. Follow the setup wizard</li>
              </ol>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <h4 className="font-semibold mb-2">Support</h4>
              <p className="text-blue-200 text-sm mb-2">Need help installing or using the app?</p>
              <a href="#" className="text-white hover:text-blue-200 underline text-sm">View Installation Guide</a><br/>
              <a href="#" className="text-white hover:text-blue-200 underline text-sm">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;