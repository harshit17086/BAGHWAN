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
            Still don&apos;t believe it?
          </h2>
        </div>

        {/* Stats Grid - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Larger Stats */}
          <div className="space-y-16">
            {/* Stat 1 */}
            <div className="border-b border-[#3d5320]/20 pb-12">
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2F3D24] mb-4">
                <AnimatedStat end={200} suffix="K+" />
              </h3>
              <p className="text-base md:text-lg text-[#6B7555]">
                square feet currently under construction
              </p>
            </div>

            {/* Stat 2 */}
            <div className="border-b border-[#3d5320]/20 pb-12">
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2F3D24] mb-4">
                <AnimatedStat end={5} suffix=".0%" duration={2000} />
              </h3>
              <p className="text-base md:text-lg text-[#6B7555]">
                Average build costs are within 5% of our pre-design estimates
              </p>
            </div>
          </div>

          {/* Right Column - Smaller Stats with Icons */}
          <div className="space-y-16">
            {/* Stat 3 */}
            <div className="border-b border-[#3d5320]/20 pb-12">
              <div className="flex items-start gap-4 mb-4">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2F3D24]">
                  <AnimatedStat end={18} duration={1500} />
                </h3>
                {/* Decorative stars */}
                
              </div>
              <p className="text-base md:text-lg text-[#6B7555]">
                States with active home design & development projects
              </p>
            </div>

            {/* Stat 4 */}
            <div className="border-b border-[#3d5320]/20 pb-12">
              <div className="flex items-start gap-4 mb-4">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2F3D24]">
                  <AnimatedStat end={5000} suffix="+" duration={2500} />
                </h3>
                
                
              </div>
              <p className="text-base md:text-lg text-[#6B7555]">
                land parcels evaluated
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
