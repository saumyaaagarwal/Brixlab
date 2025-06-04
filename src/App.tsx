import React from 'react';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import ResultsSection from './components/sections/ResultsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import TrustedBrandsSection from './components/sections/TrustedBrandsSection';
import CaseStudiesSection from './components/sections/CaseStudiesSection';
import ComparisonSection from './components/sections/ComparisonSection';
import ProcessSection from './components/sections/ProcessSection';
import TeamSection from './components/sections/TeamSection';
import CtaSection from './components/sections/CtaSection';
import FaqSection from './components/sections/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <ServicesSection />
        <ResultsSection />
        <TestimonialsSection />
        <TrustedBrandsSection />
        <CaseStudiesSection />
        <ComparisonSection />
        <ProcessSection />
        <TeamSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;