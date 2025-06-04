import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Other Agencies VS Our Agency
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we compare to other agencies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Header */}
            <div className="p-6 bg-gray-100 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="h-8"></div>
            </div>
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-100">
              <h3 className="text-lg font-semibold text-gray-500 text-center">Other Agencies</h3>
            </div>
            <div className="p-6 bg-primary/10">
              <h3 className="text-lg font-semibold text-primary text-center">Our Agency</h3>
            </div>
            
            {/* Comparison rows */}
            {[1, 2, 3, 4].map((row, index) => (
              <React.Fragment key={row}>
                <div className={`p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b md:border-b-0 md:border-r border-gray-200`}>
                  <p className="font-medium">Comparison Point {row}</p>
                </div>
                <div className={`p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b md:border-b-0 md:border-r border-gray-200`}>
                  <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                </div>
                <div className={`p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="h-4 w-2/3 bg-accent rounded"></div>
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