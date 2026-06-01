import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const colorSequence = ["#e1b054", "#d24a8a", "#ee3444", "#75b0d2", "#7361a7", "#f1574d"];

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  // Mouse Coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-smooth lag adjustment for luxury feel
  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Color sequence rotator loop
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorSequence.length);
    }, 1500); // Har 1.5 seconds baad rang badlega bina jhatke ke

    // 2. Mouse position tracker
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const addHoverEvents = () => {
      const targets = document.querySelectorAll('a, button, [role="button"], .hover-target');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', () => setIsHovered(true));
        target.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    addHoverEvents();

    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearInterval(colorInterval);
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const currentColor = colorSequence[colorIndex];

  return (
    <>
      {/* 1. Main Outer Liquid Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        animate={{
          width: isHovered ? "64px" : "44px",
          height: isHovered ? "64px" : "44px",
          borderColor: currentColor,
          // Premium soft neon glow filter rather than harsh shadows
          boxShadow: `0 0 20px ${currentColor}33, inset 0 0 10px ${currentColor}1a`,
        }}
        transition={{
          borderColor: { duration: 1.2, ease: "linear" }, // Colors mix smoothly like liquid
          width: { type: "spring", stiffness: 300, damping: 25 },
          height: { type: "spring", stiffness: 300, damping: 25 },
          boxShadow: { duration: 1.2 }
        }}
        style={{
          x: ringX,
          y: ringY,
          borderWidth: "1.5px",
          borderStyle: "solid",
        }}
      />

      {/* 2. Center Core Match Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        animate={{
          backgroundColor: currentColor,
          scale: isHovered ? 0.5 : 1,
          boxShadow: `0 0 10px ${currentColor}`
        }}
        transition={{
          backgroundColor: { duration: 1.2, ease: "linear" },
          boxShadow: { duration: 1.2 }
        }}
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
    </>
  );
};

export default CustomCursor;