'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(800); // Default fallback
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set mounted state and initial window height
    setMounted(true);
    setWindowHeight(window.innerHeight);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sectionTop = sectionRef.current ? sectionRef.current.offsetTop : 0;
  const relativeScrollY = scrollY - sectionTop;
  
  // Small image positioning - starts within the first big image
  const stickyTopPosition = windowHeight * 0.5 - 175; // Center of screen minus half image height (350px / 2)
  const smallImageInitialOffset = windowHeight * 0.5 - 175; // Start position centered vertically
  
  // Calculate when we're in the last section (4th big image)
  const lastSectionStart = 3 * windowHeight; // Start of 4th section
  const isInLastSection = relativeScrollY >= lastSectionStart;
  
  // Calculate when small image should become sticky
  // It becomes sticky when its natural scroll position would be above stickyTopPosition
  // But NOT sticky in the last section - it should scroll with the page
  const shouldBeSticky = relativeScrollY >= (smallImageInitialOffset - stickyTopPosition) && !isInLastSection;
  
  // The reveal should happen when the intersection line crosses the small image
  // Small image height is 350px (or 40vh), so we use its center or range
  let smallImageCenter;
  if (isInLastSection) {
    // In last section, image scrolls naturally from its last sticky position
    const scrollIntoLastSection = relativeScrollY - lastSectionStart;
    smallImageCenter = stickyTopPosition + 175 - scrollIntoLastSection;
  } else {
    smallImageCenter = shouldBeSticky ? stickyTopPosition + 175 : smallImageInitialOffset - relativeScrollY + 175;
  }
  
  // Progress based on how much the intersection has crossed the small image
  const transitionDuration = 350; // Match the small image height for smooth reveal
  
  // Calculate progress for each transition (4 big images = 3 transitions)
  // Transition 1: at 1vh (first to second)
  const transition1Point = windowHeight - smallImageCenter;
  const transition1Start = transition1Point - transitionDuration / 2;
  const progress1 = Math.max(0, Math.min(1, (relativeScrollY - transition1Start) / transitionDuration));
  
  // Transition 2: at 2vh (second to third)
  const transition2Point = (2 * windowHeight) - smallImageCenter;
  const transition2Start = transition2Point - transitionDuration / 2;
  const progress2 = Math.max(0, Math.min(1, (relativeScrollY - transition2Start) / transitionDuration));
  
  // Transition 3: at 3vh (third to fourth)
  const transition3Point = (3 * windowHeight) - smallImageCenter;
  const transition3Start = transition3Point - transitionDuration / 2;
  const progress3 = Math.max(0, Math.min(1, (relativeScrollY - transition3Start) / transitionDuration));
  
  // Check if the parallax section is in view
  const sectionBottom = sectionTop + 4 * windowHeight; // 400vh for 4 sections
  const isSectionInView = scrollY >= sectionTop && scrollY <= sectionBottom;

  // Both images should always be visible when section is in view
  const showImages = isSectionInView;
  
  // Don't render calculations until mounted
  if (!mounted) {
    return (
      <section className="relative" style={{ height: '400vh' }}>
        <div className="sticky top-0 h-screen w-full">
          <Image
            src="/slide1.jpeg"
            alt="Blueberry Hill ADU"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 1 }}>
          <Image
            src="/slide6.jpeg"
            alt="Break House"
            fill
            className="object-cover"
          />
        </div>
        <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 2 }}>
          <Image
            src="/slide2.jpeg"
            alt="Modern Villa"
            fill
            className="object-cover"
          />
        </div>
        <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 3 }}>
          <Image
            src="/kkk.jpeg"
            alt="Luxury Estate"
            fill
            className="object-cover"
          />
        </div>
      </section>
    );
  }
  
  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ height: '400vh' }} // Changed from 200vh to 400vh for 4 sections
    >
      {/* Container for both small images - they overlap perfectly */}
      <div 
        className={shouldBeSticky ? "fixed z-20" : "absolute z-20"}
        style={{
          top: shouldBeSticky 
            ? `${stickyTopPosition}px` 
            : isInLastSection 
              ? `${lastSectionStart + stickyTopPosition}px`
              : `${smallImageInitialOffset}px`,
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

        {/* Second small image - reveals from bottom to top at transition 1 */}
        <div 
          className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          style={{
            clipPath: `inset(${100 - progress1 * 100}% 0 0 0)`,
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

        {/* Third small image - reveals from bottom to top at transition 2 */}
        <div 
          className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          style={{
            clipPath: `inset(${100 - progress2 * 100}% 0 0 0)`,
            transition: 'clip-path 0.05s linear',
          }}
        >
          <Image
            src="/nnn.jpeg"
            alt="Third Detail"
            fill
            className="object-cover"
          />
        </div>

        {/* Fourth small image - reveals from bottom to top at transition 3 */}
        <div 
          className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          style={{
            clipPath: `inset(${100 - progress3 * 100}% 0 0 0)`,
            transition: 'clip-path 0.05s linear',
          }}
        >
          <Image
            src="/ppp.jpeg"
            alt="Fourth Detail"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* First big image section */}
      <div className="sticky top-0 h-screen w-full">
        <Image
          src="/slide1.jpeg"
          alt="Blueberry Hill ADU"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Second big image section */}
      <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 1 }}>
        <Image
          src="/slide6.jpeg"
          alt="Break House"
          fill
          className="object-cover"
        />
      </div>

      {/* Third big image section */}
      <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 2 }}>
        <Image
          src="/slide2.jpeg"
          alt="Modern Villa"
          fill
          className="object-cover"
        />
      </div>

      {/* Fourth big image section */}
      <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 3 }}>
        <Image
          src="/kkk.jpeg"
          alt="Luxury Estate"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
