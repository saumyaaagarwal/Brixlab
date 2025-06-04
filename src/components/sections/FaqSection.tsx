import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; id: number }> = ({ question, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <span className={`ml-6 flex-shrink-0 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        id={`faq-answer-${id}`}
        className={`mt-2 transition-all duration-200 overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <p className="text-gray-600">Answer would go here. This is a placeholder for the FAQ answer content.</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* FAQ items */}
          {[
            "What services do you offer?",
            "How long does a typical project take?",
            "What is your pricing structure?",
            "How do we get started working together?",
            "Do you offer ongoing support?",
          ].map((question, index) => (
            <FAQItem key={index} question={question} id={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;