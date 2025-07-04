"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
      console.log('Hero - Mobile detection:', isMobileDevice, 'Width:', window.innerWidth);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={!isClient || isMobile ? { opacity: 1 } : { opacity: 0, x: -50 }}
            animate={!isClient || isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={!isClient || isMobile ? { duration: 0 } : { duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="h-1 w-12 bg-primary-500"></div>
              <p className="text-lg text-primary-500">Hello, I&apos;m</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="block">Shazli Mekrani</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-500 to-violet-500 bg-clip-text text-transparent">
                {!isClient ? (
                  <span>Software Engineer</span>
                ) : isMobile ? (
                  <span>Software Engineer</span>
                ) : (
                  <TypeAnimation
                    sequence={[
                      'Creative Developer',
                      1000,
                      'Data Scientist',
                      1000,
                      'Software Engineer',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                    style={{ display: 'inline-block' }}
                  />
                )}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              I build exceptional digital experiences that inspire and engage. Specializing in modern web development and creative solutions.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={!isClient || isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={!isClient || isMobile ? { opacity: 1 } : { opacity: 1 }}
              transition={!isClient || isMobile ? { duration: 0 } : { delay: 0.2, duration: 0.3 }}
            >
              <a 
                href="#projects" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover-glow flex items-center justify-center"
              >
                View My Work
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="border border-primary-500 text-primary-500 hover:bg-primary-500/10 px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={!isClient || isMobile ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            animate={!isClient || isMobile ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={!isClient || isMobile ? { duration: 0 } : { duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-violet-500/20 ${isMobile ? '' : 'animate-pulse'}`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Replace with your own image */}
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-88 lg:h-88 rounded-full bg-primary-500/30 flex items-center justify-center">
                  <p className="text-center font-bold"></p>
                </div>
              </div>
              
              {/* Floating elements - disabled on mobile */}
              {!isMobile && (
                <>
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-3 z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <svg className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-3 z-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  >
                    <svg className="w-8 h-8 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                    </svg>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator - simplified on mobile */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-sm mb-2 text-gray-500 dark:text-gray-400">Scroll Down</p>
        {isMobile ? (
          <svg 
            className="w-6 h-6 text-primary-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        ) : (
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg 
              className="w-6 h-6 text-primary-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
