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
  
  // Calculate when small image should become sticky
  // It becomes sticky when its natural scroll position would be above stickyTopPosition
  const shouldBeSticky = relativeScrollY >= (smallImageInitialOffset - stickyTopPosition);
  
  // The reveal should happen when the intersection line crosses the small image
  // Small image height is 350px (or 40vh), so we use its center or range
  const smallImageCenter = shouldBeSticky ? stickyTopPosition + 175 : smallImageInitialOffset - relativeScrollY + 175;
  
  // Progress based on how much the intersection has crossed the small image
  const transitionDuration = 350; // Match the small image height for smooth reveal
  
  // Calculate progress for each transition (4 big images = 3 transitions)
  // Transition 1: at 1vh (first to second)
  const transition1Point = window.innerHeight - smallImageCenter;
  const transition1Start = transition1Point - transitionDuration / 2;
  const progress1 = Math.max(0, Math.min(1, (relativeScrollY - transition1Start) / transitionDuration));
  
  // Transition 2: at 2vh (second to third)
  const transition2Point = (2 * window.innerHeight) - smallImageCenter;
  const transition2Start = transition2Point - transitionDuration / 2;
  const progress2 = Math.max(0, Math.min(1, (relativeScrollY - transition2Start) / transitionDuration));
  
  // Transition 3: at 3vh (third to fourth)
  const transition3Point = (3 * window.innerHeight) - smallImageCenter;
  const transition3Start = transition3Point - transitionDuration / 2;
  const progress3 = Math.max(0, Math.min(1, (relativeScrollY - transition3Start) / transitionDuration));
  
  // Check if the parallax section is in view
  const sectionBottom = sectionTop + 4 * window.innerHeight; // 400vh for 4 sections
  const isSectionInView = scrollY >= sectionTop && scrollY <= sectionBottom;

  // Both images should always be visible when section is in view
  const showImages = isSectionInView;
  
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
          top: shouldBeSticky ? `${stickyTopPosition}px` : `${smallImageInitialOffset}px`,
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
      <div className="relative h-screen w-full">
        <Image
          src="/slide1.jpeg"
          alt="Blueberry Hill ADU"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Second big image section */}
      <div className="relative h-screen w-full">
        <Image
          src="/slide6.jpeg"
          alt="Break House"
          fill
          className="object-cover"
        />
      </div>

      {/* Third big image section */}
      <div className="relative h-screen w-full">
        <Image
          src="/slide2.jpeg"
          alt="Modern Villa"
          fill
          className="object-cover"
        />
      </div>

      {/* Fourth big image section */}
      <div className="relative h-screen w-full">
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
