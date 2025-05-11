import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left font-medium text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-700" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-700" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-gray-600">{answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does the app work offline?",
      answer: (
        <p>
          Our app includes a fully embedded neural network model that runs entirely on your device.
          All processing is done locally using your phone's CPU and GPU, without requiring any cloud
          or server connection. This means you can use powerful AI capabilities even without
          internet access.
        </p>
      ),
    },
    {
      question: "What kind of performance can I expect?",
      answer: (
        <p>
          Performance varies depending on your device's hardware capabilities. On mid-range to flagship
          devices from the last 2-3 years, you can expect response times of approximately 1-5 seconds
          for short answers, and 5-15 seconds for longer responses. The app is optimized to balance
          performance with battery consumption.
        </p>
      ),
    },
    {
      question: "Is my data private?",
      answer: (
        <p>
          Absolutely. Since all processing happens locally on your device, none of your inputs or
          conversations are sent to any servers. Your data never leaves your device, giving you
          complete privacy and security. This is one of the main advantages of our on-device approach
          compared to cloud-based AI services.
        </p>
      ),
    },
    {
      question: "Will it drain my battery?",
      answer: (
        <p>
          The app is optimized to minimize battery drain, but running AI inference is naturally
          resource-intensive. When actively using the app for conversation, expect a battery usage
          similar to playing a 3D game. However, when in standby, the app uses minimal resources.
          We recommend closing the app when not in use for extended periods.
        </p>
      ),
    },
    {
      question: "Does it work on all Android devices?",
      answer: (
        <p>
          The app requires Android 10 or higher and at least 2GB of RAM. Devices with more powerful
          hardware will provide better performance. We've tested it extensively on various device models,
          but there may be compatibility issues with some specific devices or custom ROMs. If you
          encounter any problems, please contact our support team.
        </p>
      ),
    },
    {
      question: "How does this compare to ChatGPT and other cloud AI services?",
      answer: (
        <>
          <p>
            While cloud-based services like ChatGPT can leverage more powerful models (typically 175B+
            parameters compared to our optimized 7B model), our solution offers several unique advantages:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Complete privacy - no data leaves your device</li>
            <li>Works without internet connection</li>
            <li>No subscription fees</li>
            <li>No usage limits or quotas</li>
          </ul>
          <p className="mt-2">
            For many everyday tasks, our optimized model provides comparable quality while offering
            these additional benefits.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Answers to common questions about our mobile LLM implementation.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Can't find an answer to your question?
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800"
          >
            Contact our support team
            <ChevronDown className="h-4 w-4 ml-1 transform rotate-270" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;