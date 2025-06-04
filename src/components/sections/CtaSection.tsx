import React from 'react';
import { Button } from '../ui/buttons.tsx'; // Adjust import path to your Button component

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-10 md:p-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-8">
                Book a consultation with our experts
              </p>
              
              {/* Form placeholder */}
              <div className="space-y-4">
                <div className="h-12 bg-gray-100 rounded-lg"></div>
                <div className="h-12 bg-gray-100 rounded-lg"></div>
                <div className="h-24 bg-gray-100 rounded-lg"></div>
                
                {/* Replaced standard button with your custom Button */}
                <Button 
                  variant="primary" 
                  size="lg"
                  className="w-full"
                  onClick={() => console.log('Book now clicked')}
                >
                  Book Now
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-primary to-secondary">
              <div className="h-full flex items-center justify-center p-12">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-white/80 rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
                  <p className="opacity-80">Contact information would go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;