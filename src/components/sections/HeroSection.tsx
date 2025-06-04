import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/buttons.tsx'; // Adjust the import path to your Button component
import '../styles/Herosection.css';

const HeroSection: React.FC = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const typingText = typingTextRef.current;
    const cursor = cursorRef.current;
    const text = "BriXLabs";
    let index = 0;

    if (!typingText || !cursor) return;

    const type = () => {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 200);
      } else {
        cursor.style.animation = 'none';
        setTimeout(() => {
          if (cursor) cursor.style.animation = 'blink 0.7s infinite';
        }, 500);
      }
    };

    const timer = setTimeout(() => {
      typingText.textContent = '';
      type();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="site-wrapper">
        <nav className="fixed-nav">
          <div className="nav-container">
            <div className="logo">
              <span ref={typingTextRef} className="typing-text"></span>
              <span ref={cursorRef} className="cursor"></span>
            </div>
            
            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
              <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#clients" onClick={() => setIsMenuOpen(false)}>Clients</a>
              <a href="#why-us" onClick={() => setIsMenuOpen(false)}>Why BrixLabs?</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
              <a href="#faqs" onClick={() => setIsMenuOpen(false)}>FAQs</a>
            </div>
            <Button 
              variant="primary"
              size="md"
              className="chat-btn"
              onClick={() => console.log('Chat Now clicked')}
            >
              Chat Now
            </Button>
          </div>
        </nav>

        <section className="hero-section">
          <div className="gradient-patch-1"></div>
          <div className="gradient-patch-2"></div>
          <div className="hero-content">
            <h1 className="hero-headline">Unlock Exponential Growth with Performance-Driven Strategies</h1>
            <p className="hero-subheadline">Where data meets creativity to build brands that last.</p>
            
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">5+ Years</div>
                <div className="stat-label">Industry Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">511+ Brands</div>
                <div className="stat-label">Trusted Partner</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">₹60+ Crore</div>
                <div className="stat-label">Ad Spent Managed</div>
              </div>
            </div>
            
            <p className="description">
              A dedicated team of specialists, delivering remarkable work to our clients worldwide!
            </p>
            
            <Button 
              variant="primary"
              size="lg"
              className="cta-btn"
              onClick={() => console.log('Book strategy call clicked')}
            >
              Book a Strategy Call
            </Button>
            
            <p className="certification">Our Performance Marketing Services are Certified by</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;