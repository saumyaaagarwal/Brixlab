import React from 'react';

const TrustedBrandsSection: React.FC = () => {
  return (
    <section id="trusted-brands" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
            Trusted By Leading Brands
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Brand logo placeholders */}
          {[1, 2, 3, 4, 5].map((brand) => (
            <div 
              key={brand} 
              className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center"
            >
              <div className="w-20 h-8 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;