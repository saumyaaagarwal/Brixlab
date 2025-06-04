import React, { useEffect, useRef } from 'react';
import '../styles/ServicesSection.css';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Content Creation & Copywriting",
      description: "Crafting compelling content that engages your audience and drives conversions.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
    },
    {
      id: 2,
      title: "Marketing & Advertising",
      description: "Strategic marketing campaigns that deliver measurable results.",
      image: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg"
    },
    {
      id: 3,
      title: "Design & Graphics",
      description: "Eye-catching visuals that strengthen your brand identity.",
      image: "https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg"
    },
    {
      id: 4,
      title: "Social Media Strategy",
      description: "Building and maintaining a strong social media presence.",
      image: "https://images.pexels.com/photos/3182772/pexels-photo-3182772.jpeg"
    },
    {
      id: 5,
      title: "Website Design & Development",
      description: "Creating modern, responsive websites that convert visitors into customers.",
      image: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg"
    },
    {
      id: 6,
      title: "SEO & Digital Marketing",
      description: "Improving your online visibility and driving organic traffic.",
      image: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg"
    }
  ];

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackWidth = track.scrollWidth / 2;
    const duration = 40000;

    track.style.transform = `translateX(0)`;
    
    const animation = track.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${trackWidth}px)` }
      ],
      {
        duration,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    return () => animation.cancel();
  }, []);

  return (
    <section className="services-section">
      <div className="services-overlay"></div>
      
      <div className="services-content">
        <h2 className="services-title">
          Our 
          <span className="services-title-gradient">ServiceS</span>
        </h2>

        <div className="services-track-container">
          <div className="services-track" ref={trackRef}>
            {[...services, ...services].map((service, index) => (
              <div key={`service-${service.id}-${index}`} className="service-box">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="glow-effect"></div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;