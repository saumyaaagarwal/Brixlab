import React, { useEffect, useRef } from 'react';
import '../styles/Resultssection.css';
import image1 from '../../assets/image/2.jpg';
import image2 from '../../assets/image/3.jpg';
import image3 from '../../assets/image/4.jpg';
import image4 from '../../assets/image/6.jpg';
import image5 from '../../assets/image/7.jpg';
import image6 from '../../assets/image/8.jpg';
import image7 from '../../assets/image/9.jpg';
import image8 from '../../assets/image/10.jpg';
import image9 from '../../assets/image/11.jpg';
import image10 from '../../assets/image/12.jpg';

const ResultsSection: React.FC = () => {
  const imageUrls = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10
  ];
 
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;
 
    const animateRow = (row: HTMLDivElement | null, direction: number) => {
      if (!row) return;
       
      const rowWidth = row.scrollWidth / 2;
      const duration = 12000;
     
      row.style.transform = `translateX(${direction > 0 ? 0 : -rowWidth}px)`;
     
      const animation = row.animate(
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

      // Pause animation when window is not visible
      const handleVisibilityChange = () => {
        if (document.hidden) {
          animation.pause();
        } else {
          animation.play();
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Our Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our achived results
          </p>
        </div>
       
        <div className="results-tracks-container">
          {/* First row */}
          <div className="results-track" ref={firstRowRef}>
            {[...imageUrls.slice(0, 5), ...imageUrls.slice(0, 5)].map((url, index) => (
              <div key={`first-${index}`} className="result-box">
                <div className="result-image">
                  {url && <img src={url} alt={`Result ${index + 1}`} />}
                  <div className="glow-effect"></div>
                </div>
              </div>
            ))}
          </div>
 
          {/* Second row */}
          <div className="results-track results-track-reverse" ref={secondRowRef}>
            {[...imageUrls.slice(5), ...imageUrls.slice(5)].map((url, index) => (
              <div key={`second-${index}`} className="result-box">
                <div className="result-image">
                  {url && <img src={url} alt={`Result ${index + 6}`} />}
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