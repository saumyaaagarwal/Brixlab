import React, { useState } from 'react';

const ComparisonSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const comparisonPoints = [
    {
      feature: "Approach",
      others: "Sell you services",
      us: "We solve your business problems",
      expandedContent: "We dive deep into your real estate or D2C business challenges — leads, conversions, ROI — and craft campaigns that deliver tangible outcomes."
    },
    {
      feature: "Success Metrics",
      others: "Focus on vanity metrics",
      us: "We focus on growth KPIs",
      expandedContent: "No bluff. Every campaign is optimized for site visits, conversions, and actual return on investment."
    },
    {
      feature: "Strategy",
      others: "Cookie-cutter campaigns",
      us: "Customized strategies, always",
      expandedContent: "Your business isn't generic — your marketing shouldn't be either. Every funnel, ad, and creative is tailored to your audience."
    },
    {
      feature: "Project Mindset",
      others: "One-time project mindset",
      us: "Performance partnerships",
      expandedContent: "We work like an extension of your team — tracking, optimizing, and scaling as you grow. Long-term results > one-time wins."
    },
    {
      feature: "Services Scope",
      others: "Limited to marketing",
      us: "Full-stack business growth",
      expandedContent: "From branding, website design, to paid ads, SEO, and analytics — we offer 360° growth strategies under one roof."
    },
    {
      feature: "Technology",
      others: "Outdated tools",
      us: "Cutting-edge marketing technology",
      expandedContent: "We leverage AI-powered analytics, automation tools, and the latest martech stack to give you a competitive edge in today's digital landscape."
    }
  ];

  return (
    <section id="comparison" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Why <span className="text-emerald-500">BrixLab</span> Outperforms
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            A side-by-side comparison showing our competitive advantage
          </p>
        </div>
        
        {/* Mobile - Stacked Cards */}
        <div className="md:hidden space-y-4 max-w-md mx-auto">
          {comparisonPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700">{point.feature}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">Industry Standard</p>
                  <p className="text-gray-600">{point.others}</p>
                </div>
                <div className="p-4 bg-emerald-50/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-emerald-600 mb-1">BrixLab Advantage</p>
                      <p className="font-medium text-gray-800">{point.us}</p>
                    </div>
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="ml-2 p-1 rounded-full hover:bg-emerald-100 transition-colors"
                      aria-label={expandedIndex === index ? "Collapse details" : "Expand details"}
                    >
                      <svg 
                        className={`w-5 h-5 text-emerald-600 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  {expandedIndex === index && (
                    <div className="mt-3 pt-3 border-t border-emerald-100">
                      <p className="text-sm text-gray-600">{point.expandedContent}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop - Grid Layout */}
        <div className="hidden md:block max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Feature Column */}
            <div className="md:col-span-4 p-6 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Comparison Points</h3>
            </div>
            
            {/* Other Agencies Column */}
            <div className="md:col-span-4 p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50">
              <h3 className="text-base font-medium text-gray-500">Industry Standard</h3>
            </div>
            
            {/* BrixLab Column */}
            <div className="md:col-span-4 p-6 bg-emerald-50/50">
              <h3 className="text-base font-medium text-emerald-600">BrixLab Advantage</h3>
            </div>
            
            {/* Comparison Rows */}
            {comparisonPoints.map((point, index) => (
              <React.Fragment key={index}>
                {/* Feature Name */}
                <div className={`md:col-span-4 p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b md:border-b-0 md:border-r border-gray-200`}>
                  <p className="font-medium text-gray-800">{point.feature}</p>
                </div>
                
                {/* Other Agencies Value */}
                <div className={`md:col-span-4 p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b md:border-b-0 md:border-r border-gray-200 flex items-center`}>
                  <div className="w-full">
                    <p className="text-gray-500">{point.others}</p>
                  </div>
                </div>
                
                {/* BrixLab Value */}
                <div className={`md:col-span-4 p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b md:border-b-0 bg-emerald-50/30`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">{point.us}</p>
                    </div>
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="ml-2 p-1 rounded-full hover:bg-emerald-100 transition-colors"
                      aria-label={expandedIndex === index ? "Collapse details" : "Expand details"}
                    >
                      <svg 
                        className={`w-5 h-5 text-emerald-600 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  {expandedIndex === index && (
                    <div className="mt-3 pt-3 border-t border-emerald-100">
                      <p className="text-sm text-gray-600">{point.expandedContent}</p>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;