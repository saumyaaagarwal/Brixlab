import React, { useState } from 'react';
 
const FAQItem: React.FC<{ question: string; answer: string; id: number }> = ({ question, answer, id }) => {
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
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};
 
const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "We've worked extensively with real estate businesses, D2C brands, EdTech and clothing labels, nutritionists, and more. While our strategies are universal, we tailor them to your industry's unique challenges and audience."
    },
    {
      question: "How do you generate high-quality leads?",
      answer: "We don't believe in generic lead dumps. Our campaigns use refined audience targeting, smart funnels, and constant optimization to ensure the leads we deliver are relevant, verified, and likely to convert — no wasted budgets, just real intent."
    },
    {
      question: "What services does BriXLabs offer?",
      answer: "From paid ad campaigns (Meta, Google, YouTube) and lead generation, to social media branding, website development, and analytics/reporting, we're a full-service marketing growth agency."
    },
    {
      question: "How soon can I expect results?",
      answer: "While brand-building takes time, you can expect performance insights and improvements within the first few weeks of launching your campaigns. We move fast but with purpose."
    },
    {
      question: "Do you offer customized plans or packages?",
      answer: "Yes — 100%. Every brand has different needs, budgets, and goals. We craft a strategy unique to your business, audience, and market position."
    },
    {
      question: "What makes BriXLabs different from other agencies?",
      answer: "We're not just marketers — we're growth architects. Our team blends creative thinking with performance precision, giving you strategies that don't just look good but actually drive measurable business outcomes. We don't chase trends, we build results."
    },
    {
      question: "Do you provide reports or performance updates?",
      answer: "Yes, transparency is key. You'll receive regular performance reports, along with our recommendations on what's working, what needs tweaking, and how we plan to scale further."
    }
  ];
 
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
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              id={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default FaqSection;