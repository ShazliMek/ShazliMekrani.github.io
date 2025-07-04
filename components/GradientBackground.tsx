"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile to disable expensive animations
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only add mouse tracking on desktop devices
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      }
    };
    
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="gradient-bg">
      {/* Interactive gradient that follows cursor - disabled on mobile */}
      {!isMobile && (
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full bg-primary-500/10 dark:bg-primary-500/20 blur-[100px] opacity-70"
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "spring", damping: 50 }}
        />
      )}
      
      {/* Static gradients - simplified on mobile */}
      <div className={`absolute top-0 right-0 ${isMobile ? 'w-[300px] h-[300px] blur-[50px]' : 'w-[600px] h-[600px] blur-[100px]'} rounded-full bg-violet-500/10 dark:bg-violet-500/20 opacity-60`} />
      <div className={`absolute bottom-0 left-0 ${isMobile ? 'w-[250px] h-[250px] blur-[50px]' : 'w-[500px] h-[500px] blur-[100px]'} rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 opacity-50`} />
      
      {/* Moving gradient orbs - reduced on mobile */}
      {!isMobile && (
        <>
          <motion.div 
            className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary-500/5 dark:bg-primary-500/10 blur-[80px]"
            animate={{
              y: [0, 40, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-[80px]"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

export default GradientBackground;
