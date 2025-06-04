import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ProcessSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals and requirements to create a comprehensive project plan.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Design & Development",
      description: "Our team creates beautiful, functional designs and implements them with clean, efficient code.",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Testing & Launch",
      description: "We rigorously test all components before deploying your solution to ensure flawless performance.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="process" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured approach to delivering exceptional results
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="w-full max-w-4xl"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image container with zoom effect */}
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <div className="w-full h-full transform transition-transform duration-500 hover:scale-110">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Content container */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mr-4">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;