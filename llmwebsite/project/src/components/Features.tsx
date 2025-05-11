import React from 'react';
import { Cpu, Smartphone, ShieldCheck, Zap, Gem, WifiOff } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: "Optimized for Mobile",
      description: "Advanced model quantization and pruning techniques make large models run efficiently on mobile hardware."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
      title: "Complete Privacy",
      description: "All processing happens on-device. Your conversations never leave your phone."
    },
    {
      icon: <WifiOff className="h-8 w-8 text-blue-500" />,
      title: "Works Offline",
      description: "No internet connection required. Use powerful AI even in remote areas."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "Fast Responses",
      description: "Optimized inference engine delivers quick responses despite running on mobile hardware."
    },
    {
      icon: <Gem className="h-8 w-8 text-blue-500" />,
      title: "Battery Efficient",
      description: "Designed to minimize power consumption while maintaining high performance."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      title: "Intuitive Interface",
      description: "Clean, simple UI that makes interacting with complex AI models easy and intuitive."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mobile LLM implementation brings cutting-edge AI technology to your smartphone with 
            impressive capabilities and thoughtful optimizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;