import React from 'react';
import { Code, GitBranch, Layers, BarChart } from 'lucide-react';

const TechnicalDetails: React.FC = () => {
  return (
    <section id="technical" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Technical Deep Dive</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The technology behind running large language models on resource-constrained mobile devices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    <Layers className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Model Compression</h3>
                    <p className="text-gray-600">
                      We implemented advanced 4-bit quantization and knowledge distillation techniques to reduce model size by 75% while preserving most of the model's capabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    <BarChart className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Mobile Optimization</h3>
                    <p className="text-gray-600">
                      Custom inference engine built specifically for mobile GPUs and NPUs, taking advantage of hardware acceleration features available on modern devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    <Code className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Efficient Implementation</h3>
                    <p className="text-gray-600">
                      Written in C++ with Kotlin/Swift bindings for native performance, with carefully managed memory usage and tensor operations to minimize resource consumption.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    <GitBranch className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Open Source Approach</h3>
                    <p className="text-gray-600">
                      Our techniques and optimizations are openly documented to help advance the field of on-device AI. We believe in collaborative advancement of mobile AI capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 md:p-8 rounded-xl shadow-xl text-white">
              <h3 className="text-2xl font-semibold mb-6">Performance Metrics</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Model Size</span>
                    <span>1.2GB</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <p className="text-blue-200 text-sm mt-1">75% reduction from original 7B model</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Inference Speed</span>
                    <span>~5 tokens/sec</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-blue-200 text-sm mt-1">Optimized for modern mobile processors</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">RAM Usage</span>
                    <span>~800MB</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-blue-200 text-sm mt-1">Efficient memory management</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Battery Impact</span>
                    <span>Moderate</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-blue-200 text-sm mt-1">~10% battery per hour of active use</p>
                </div>
              </div>
              
              <div className="mt-8 text-sm text-blue-200">
                <p>* Benchmarked on mid-range Android devices (Snapdragon 8 Gen 1)</p>
                <p>* Performance varies by device hardware capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDetails;