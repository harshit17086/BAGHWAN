'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionTop = sectionRef.current ? sectionRef.current.offsetTop : 0;
  const relativeScrollY = scrollY - sectionTop;
  
  // Small image positioning - starts within the first big image
  const stickyTopPosition = 100; // Distance from top when sticky
  const smallImageInitialOffset = window.innerHeight * 0.4; // Start position (40vh down in first big image)
  
  // Calculate small image position - it scrolls up with the page
  const smallImageScrolledTop = sectionTop + smallImageInitialOffset - scrollY;
  const isSmallImageSticky = smallImageScrolledTop <= stickyTopPosition;
  
  // Calculate the position of the intersection line on viewport
  // The intersection is at the bottom of first image / top of second image
  // When relativeScrollY = innerHeight, the intersection is at the bottom of viewport
  // We want the transition to happen when the intersection line is at the small image position
  const smallImageActualTop = isSmallImageSticky ? stickyTopPosition : smallImageScrolledTop;
  
  // The reveal should happen when the intersection line crosses the small image
  // Small image height is 350px (or 40vh), so we use its center or range
  const smallImageCenter = smallImageActualTop + 175; // Center of the 350px tall image
  const transitionTriggerPoint = window.innerHeight - smallImageCenter;
  
  // Progress based on how much the intersection has crossed the small image
  const transitionDuration = 350; // Match the small image height for smooth reveal
  const transitionStart = transitionTriggerPoint - transitionDuration / 2;
  
  // Calculate progress for the transition (0 to 1)
  const progress = Math.max(0, Math.min(1, (relativeScrollY - transitionStart) / transitionDuration));
  
  // Check if the parallax section is in view
  const sectionBottom = sectionTop + 2 * window.innerHeight; // 200vh
  const isSectionInView = scrollY >= sectionTop && scrollY <= sectionBottom;

  // Both images should always be visible when section is in view
  const showImages = isSectionInView;
  
  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ height: '200vh' }}
    >
      {/* Container for both small images - they overlap perfectly */}
      <div 
        className={isSmallImageSticky ? "fixed z-20" : "absolute z-20"}
        style={{
          top: isSmallImageSticky ? `${stickyTopPosition}px` : `${smallImageScrolledTop}px`,
          right: '2rem',
          width: '600px',
          height: '350px',
          maxWidth: '70vw',
          maxHeight: '40vh',
          opacity: showImages ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        {/* First small image - base layer */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/over2.jpeg"
            alt="Interior Detail"
            fill
            className="object-cover"
          />
        </div>

        {/* Second small image - reveals from bottom to top */}
        <div 
          className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          style={{
            clipPath: `inset(${100 - progress * 100}% 0 0 0)`,
            transition: 'clip-path 0.05s linear',
          }}
        >
          <Image
            src="/slide4.jpeg"
            alt="Architectural Detail"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* First big image section */}
      <div className="relative h-screen w-full">
        <Image
          src="/slide1.jpeg"
          alt="Blueberry Hill ADU"
          fill
          className="object-cover"
          priority
        />
        {/* Text overlay - fades out during transition */}
        <div 
          className="fixed bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-8 md:p-12 lg:p-16"
          style={{
            opacity: showImages ? 1 - progress : 0,
            transition: 'opacity 0.1s ease-out',
            pointerEvents: progress < 1 ? 'auto' : 'none'
          }}
        >
          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-4">Blueberry Hill ADU</h3>
          <div className="flex flex-wrap gap-3 text-white text-sm md:text-base">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">ADU</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Sleeping Loft</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">1 Bath</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">+500 Sqft</span>
          </div>
        </div>
      </div>

      {/* Second big image section */}
      <div className="relative h-screen w-full">
        <Image
          src="/slide6.jpeg"
          alt="Break House"
          fill
          className="object-cover"
        />
        {/* Text overlay - fades in during transition */}
        <div 
          className="fixed bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-8 md:p-12 lg:p-16"
          style={{
            opacity: showImages ? progress : 0,
            transition: 'opacity 0.1s ease-out',
            pointerEvents: progress > 0 ? 'auto' : 'none'
          }}
        >
          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-4">Break House</h3>
          <div className="flex flex-wrap gap-3 text-white text-sm md:text-base">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Big Bar</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">2 Bed</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">3 Bath</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">1000-1500 Sqft</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Hybrid Home</span>
          </div>
        </div>
      </div>
    </section>
  );
}
