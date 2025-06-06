import React from 'react';
import '../styles/ServicesSection.css';
 
const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Comprehensive Business Solutions",
      description: "Our premium service offers end-to-end solutions tailored to your business needs.",
      icon: "📊",
      className: "service-box-1"
    },
    {
      title: "Business Strategy",
      description: "Data-driven strategies to maximize your growth potential.",
      icon: "🚀",
      className: "service-box-2"
    },
    {
      title: "Web Development",
      description: "Custom-built websites and applications for your needs.",
      icon: "💻",
      className: "service-box-3"
    },
    {
      title: "Digital Marketing",
      description: "Targeted campaigns to increase your online visibility.",
      icon: "📈",
      className: "service-box-4"
    },
    {
      title: "Data Analytics",
      description: "Powerful insights to drive your business decisions.",
      icon: "🔍",
      className: "service-box-5"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions for your infrastructure needs.",
      icon: "☁️",
      className: "service-box-6"
    }
  ];
 
  return (
    <section id="services" className="services-section py-20">
      <div className="services-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our categorised services
          </p>
        </div>
 
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-box ${service.className}`}>
              <div className="service-content">
                <div className="service-icon text-3xl mb-2">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="text-white max-w-2xl mx-auto">
                  {service.description}
                </p>
              </div>
              <div className="glow-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default ServicesSection;