import React, { useEffect, useRef } from 'react';
import '../styles/Resultssection.css';
// Import only the first image
import image1 from '../../assets/image/image_1.jpg';

const ResultsSection: React.FC = () => {
  // Only the first image is included, rest are empty strings
  const imageUrls = [
    image1, '', '', '', '',
    '', '', '', '', ''
  ];

  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;

    const animateRow = (row: HTMLDivElement | null, direction: number) => {
      if (!row) return;
      
      const rowWidth = row.scrollWidth / 2;
      const duration = 40000;
      
      row.style.transform = `translateX(${direction > 0 ? 0 : -rowWidth}px)`;
      
      row.animate(
        [
          { transform: `translateX(${direction > 0 ? 0 : -rowWidth}px)` },
          { transform: `translateX(${direction > 0 ? -rowWidth : 0}px)` }
        ],
        {
          duration,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    };

    animateRow(firstRow, -1.5);
    animateRow(secondRow, 1.5);

    return () => {
      firstRow?.getAnimations().forEach(anim => anim.cancel());
      secondRow?.getAnimations().forEach(anim => anim.cancel());
    };
  }, []);

  return (
    <section id="results" className="results-section">
      <div className="results-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 results-content">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold results-title">
            Our 
            <span className="results-title-gradient"> Results</span>
          </h2>
        </div>
        
        <div className="results-tracks-container">
          {/* First row - Only the first box has an image */}
          <div className="results-track" ref={firstRowRef}>
            {[...imageUrls.slice(0, 5), ...imageUrls.slice(0, 5)].map((url, index) => (
              <div key={`first-${index}`} className="result-box">
                <div className="result-image">
                  {url && <img src={url} alt="First result" />} {/* Only render if URL exists */}
                  <div className="glow-effect"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - All boxes empty */}
          <div className="results-track results-track-reverse" ref={secondRowRef}>
            {[...imageUrls.slice(5), ...imageUrls.slice(5)].map((_, index) => (
              <div key={`second-${index}`} className="result-box">
                <div className="result-image">
                  <div className="glow-effect"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;