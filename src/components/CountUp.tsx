'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  onComplete?: () => void;
}

export default function CountUp({
  start = 0,
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  onComplete
}: CountUpProps) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset count and start animation when component becomes visible
          setCount(start);
          setIsVisible(true);
        } else {
          // Stop animation and reset when component leaves view
          setIsVisible(false);
          if (animationRef.current) {
            clearInterval(animationRef.current);
            animationRef.current = null;
          }
        }
      },
      { 
        threshold: 0.1,
        // Add some margin to trigger slightly before/after the element is fully visible
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [start]);

  useEffect(() => {
    // Clear any existing animation
    if (animationRef.current) {
      clearInterval(animationRef.current);
      animationRef.current = null;
    }

    if (!isVisible) return;

    // Reset count to start value
    setCount(start);

    const totalSteps = Math.ceil(duration * 60); // 60 FPS
    const increment = (end - start) / totalSteps;
    let currentStep = 0;

    animationRef.current = setInterval(() => {
      currentStep++;
      const nextValue = start + (increment * currentStep);

      if (currentStep >= totalSteps) {
        setCount(end);
        if (animationRef.current) {
          clearInterval(animationRef.current);
          animationRef.current = null;
        }
        onComplete?.();
      } else {
        setCount(Math.floor(nextValue));
      }
    }, duration * 1000 / totalSteps);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isVisible, start, end, duration, onComplete]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}