"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-bg">
      {/* Interactive gradient that follows cursor */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full bg-primary-500/10 dark:bg-primary-500/20 blur-[100px] opacity-70"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "spring", damping: 50 }}
      />
      
      {/* Static gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-500/10 dark:bg-violet-500/20 blur-[100px] opacity-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-[100px] opacity-50" />
      
      {/* Moving gradient orbs */}
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
    </div>
  );
};

export default GradientBackground;
