import React from 'react';

const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our successful case studies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Case study placeholders */}
          {[1, 2].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-secondary/80">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="relative p-8 min-h-[300px] flex flex-col justify-end text-white">
                <div className="mb-4 opacity-80">Case Study</div>
                <h3 className="text-2xl font-semibold mb-2">Case Study Title</h3>
                <p className="mb-4 opacity-90">Brief description of the case study</p>
                <div className="inline-flex items-center text-accent font-medium">
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;