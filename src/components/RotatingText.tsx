'use client';

import { useState, useEffect } from 'react';

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  rotationInterval?: number;
}

export default function RotatingText({ 
  texts, 
  mainClassName = '',
  rotationInterval = 2000 
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [texts.length, rotationInterval]);

  return (
    <span className={`transition-opacity duration-500 ${mainClassName}`}>
      {texts[currentIndex]}
    </span>
  );
}