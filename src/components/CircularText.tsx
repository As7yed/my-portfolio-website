'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./CircularText.css";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "speedUp" | "slowDown" | "pause" | "goBonkers" | null;
  className?: string;
  radius?: number;
}

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  radius = 80,
}: CircularTextProps) => {
  const letters = Array.from(text);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const currentSpeedRef = useRef(-360 / (spinDuration * 1000)); // NEGATIVE for counterclockwise
  const isPausedRef = useRef(false);

  useEffect(() => {
    console.log("CircularText mounted with text:", text);
    currentSpeedRef.current = -360 / (spinDuration * 1000); // NEGATIVE for counterclockwise
    startAnimation();
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [spinDuration]);

  const startAnimation = () => {
    const animate = (currentTime: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      if (!isPausedRef.current) {
        setRotation(prev => (prev + (currentSpeedRef.current * deltaTime)) % 360);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // Function to determine word class for gradient colors
  const getWordClass = (letter: string, wordIndex: number) => {
    const words = ['develop', 'refactor', 'test', 'amaze'];
    if (letter === '*') return 'word-separator';
    const safeWordIndex = Math.min(wordIndex, words.length - 1);
    return `word-${words[safeWordIndex]}`;
  };

  const handleHoverStart = () => {
    if (!onHover) return;

    let newSpeed = -360 / (spinDuration * 1000); // Keep negative base
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        newSpeed = -360 / ((spinDuration * 2) * 1000); // Slower counterclockwise
        break;
      case "speedUp":
        newSpeed = -360 / ((spinDuration / 4) * 1000); // Faster counterclockwise
        break;
      case "pause":
        isPausedRef.current = true;
        setScale(1.1);
        return;
      case "goBonkers":
        newSpeed = -360 / ((spinDuration / 20) * 1000); // Much faster counterclockwise
        scaleVal = 0.8;
        break;
    }

    currentSpeedRef.current = newSpeed;
    setScale(scaleVal);
  };

  const handleHoverEnd = () => {
    if (onHover === "pause") {
      isPausedRef.current = false;
    }
    
    // Return to normal speed and scale (keeping counterclockwise direction)
    currentSpeedRef.current = -360 / (spinDuration * 1000);
    setScale(1);
  };

  return (
    <div className="circular-text-container">
      <motion.div
        className={`circular-text ${className}`}
        style={{ 
          rotate: rotation,
          width: radius * 2,
          height: radius * 2,
        }}
        animate={{ scale }}
        transition={{
          scale: {
            type: "spring",
            damping: 20,
            stiffness: 300,
          },
        }}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {letters.map((letter, i) => {
          // Calculate proper circular positioning
          const angle = (360 / letters.length) * i;
          const angleRad = (angle * Math.PI) / 180;
          
          // Calculate x, y coordinates on the circle
          const x = Math.cos(angleRad - Math.PI / 2) * radius;
          const y = Math.sin(angleRad - Math.PI / 2) * radius;

          // Determine which word this letter belongs to
          const textBeforeCurrent = text.substring(0, i);
          const wordIndex = (textBeforeCurrent.match(/\*/g) || []).length;
          
          return (
            <span
              key={i}
              className={`circular-letter ${getWordClass(letter, wordIndex)}`}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
                transformOrigin: 'center center',
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;