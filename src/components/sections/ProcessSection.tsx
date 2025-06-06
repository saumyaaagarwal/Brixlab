import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
 
const ProcessSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDots, setShowDots] = useState(false);
 
  // Auto-rotate cards
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % processSteps.length);
      }, 4000);
      return () => clearInterval(interval);
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
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      transition: {
        duration: 0.6
      }
    }
  };
 
  return (
    <section
      id="process"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      ref={ref}
      onMouseEnter={() => setShowDots(true)}
      onMouseLeave={() => setShowDots(false)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Process
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A structured approach to delivering exceptional results
          </motion.p>
        </div>
 
        <div className="relative h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={processSteps[activeIndex].id}
              className="absolute w-full max-w-3xl cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-2xl overflow-hidden h-[450px]">
                <div className="md:w-1/2 h-64 md:h-full overflow-hidden relative">
                  <motion.img
                    src={processSteps[activeIndex].image}
                    alt={processSteps[activeIndex].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-10 mix-blend-multiply" />
                </div>
               
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white relative">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mr-4"
                      initial={{ scale: 0.8 }}
                      animate={{
                        scale: 1,
                        rotate: 360,
                        transition: { type: "spring", stiffness: 500 }
                      }}
                    >
                      {processSteps[activeIndex].id}
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {processSteps[activeIndex].title}
                    </h3>
                  </div>
                  <motion.p
                    className="text-gray-600 text-lg mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {processSteps[activeIndex].description}
                  </motion.p>
                 
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200 overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4, ease: "linear" }}
                  >
                    <div className="h-full bg-primary" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
         
          {/* Navigation dots (hidden by default) */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20"
            initial={{ opacity: 0 }}
            animate={showDots ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {processSteps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to step ${index + 1}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
 
export default ProcessSection; 