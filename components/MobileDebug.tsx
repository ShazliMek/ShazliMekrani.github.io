"use client";

import { useEffect, useState } from "react";

const MobileDebug = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    const updateInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ua = navigator.userAgent;
      const isMobileDevice = width < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      
      setWindowSize({ width, height });
      setUserAgent(ua);
      setIsMobile(isMobileDevice);
    };
    
    updateInfo();
    window.addEventListener('resize', updateInfo);
    return () => window.removeEventListener('resize', updateInfo);
  }, []);

  return (
    <div className="fixed top-0 right-0 bg-black/80 text-white p-4 text-xs z-50 max-w-xs">
      <div>Mobile: {isMobile ? "Yes" : "No"}</div>
      <div>Width: {windowSize.width}px</div>
      <div>Height: {windowSize.height}px</div>
      <div>UA: {userAgent.slice(0, 50)}...</div>
    </div>
  );
};

export default MobileDebug;
