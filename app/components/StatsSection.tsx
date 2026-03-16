'use client';

import React, { useState, useEffect, useRef } from 'react';

// Counter animation hook
function useCounter(end: number, duration: number = 2000, shouldStart: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, shouldStart]);

  return count;
}

// Component to handle intersection observer for triggering animation
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AnimatedStat({ end, duration, suffix = '', children }: { end: number; duration?: number; suffix?: string; children?: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(end, duration, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative bg-[#faf7ed] py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#6B7555] mb-12">
            The Baghvan experience in numbers
          </h2>
        </div>

        {/* Stats - Single Highlight */}
        <div className="flex justify-start md:justify-center">
          <div className="border-b border-[#3d5320]/20 pb-12 w-full md:w-auto md:text-center md:px-12">
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2F3D24] mb-4">
              <AnimatedStat end={4} suffix=".9★" duration={2000} />
            </h3>
            <p className="text-base md:text-lg text-[#6B7555]">
              Average guest rating across all platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
