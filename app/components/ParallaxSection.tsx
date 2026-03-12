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

  // Calculate when we're in the last section (5th big image)
  const lastSectionStart = 4 * windowHeight; // Start of 5th section
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

  // Calculate progress for each transition (5 big images = 4 transitions)
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

  // Transition 4: at 4vh (fourth to fifth)
  const transition4Point = (4 * windowHeight) - smallImageCenter;
  const transition4Start = transition4Point - transitionDuration / 2;
  const progress4 = Math.max(0, Math.min(1, (relativeScrollY - transition4Start) / transitionDuration));

  // Check if the parallax section is in view
  const sectionBottom = sectionTop + 5 * windowHeight; // 500vh for 5 sections
  const isSectionInView = scrollY >= sectionTop && scrollY <= sectionBottom;

  // Both images should always be visible when section is in view
  // Also check that we've scrolled enough for the section to be visible
  // And ensure component is mounted and sectionTop has been calculated to prevent initial flash
  const showImages = mounted && sectionTop > 0 && isSectionInView && scrollY > 0;

  // Don't render calculations until mounted
  if (!mounted) {
    return (
      <section className="relative" style={{ height: '500vh' }}>
        <div className="sticky top-0 h-screen w-full">
          <Image
            src="/property_exteriros/propertynight.jpeg"
            alt="Resort at Night"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 1 }}>
          <Image
            src="/property_exteriros/WhatsApp%20Image%202026-03-10%20at%2012.38.25%20PM%20(1).jpeg"
            alt="Resort Exterior"
            fill
            className="object-cover"
          />
        </div>
        <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 2 }}>
          <Image
            src="/property_exteriros/nightswimmingpool.jpeg"
            alt="Night Swimming Pool"
            fill
            className="object-cover"
          />
        </div>
        <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 3 }}>
          <Image
            src="/property_exteriros/WhatsApp Image 2026-03-10 at 12.36.31 PM.jpeg"
            alt="Resort Pathway"
            fill
            className="object-cover"
          />
        </div>
        <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 4 }}>
          <Image
            src="/property_interiors/WhatsApp Image 2026-03-10 at 12.34.54 PM.jpeg"
            alt="Resort Lounge"
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
      style={{ height: '500vh' }} // 500vh for 5 sections
    >
      {/* Container for small images - they overlap perfectly */}
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
          visibility: showImages ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease-out',
          pointerEvents: 'none',
        }}
      >
        {/* First small image - base layer */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/property_interiors/WhatsApp Image 2026-03-10 at 12.34.54 PM.jpeg"
            alt="Resort Lounge"
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
            src="/property_interiors/WhatsApp Image 2026-03-10 at 12.34.58 PM.jpeg"
            alt="Interior View"
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
            src="/property_interiors/WhatsApp Image 2026-03-10 at 12.36.07 PM.jpeg"
            alt="Suite Interior"
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
            src="/property_interiors/WhatsApp Image 2026-03-10 at 12.35.03 PM.jpeg"
            alt="Room Detail"
            fill
            className="object-cover"
          />
        </div>

        {/* Fifth small image - reveals from bottom to top at transition 4 */}
        <div
          className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          style={{
            clipPath: `inset(${100 - progress4 * 100}% 0 0 0)`,
            transition: 'clip-path 0.05s linear',
          }}
        >
          <Image
            src="/property_interiors/WhatsApp Image 2026-03-10 at 12.35.07 PM.jpeg"
            alt="Living Space"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* First big image section */}
      <div className="sticky top-0 h-screen w-full">
        <Image
          src="/property_exteriros/propertynight.jpeg"
          alt="Resort at Night"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Second big image section */}
      <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 1 }}>
        <Image
          src="/property_exteriros/WhatsApp%20Image%202026-03-10%20at%2012.38.25%20PM%20(1).jpeg"
          alt="Resort Exterior"
          fill
          className="object-cover"
        />
      </div>

      {/* Third big image section */}
      <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 2 }}>
        <Image
          src="/property_exteriros/nightswimmingpool.jpeg"
          alt="Night Swimming Pool"
          fill
          className="object-cover"
        />
      </div>

      {/* Fourth big image section */}
      <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 3 }}>
        <Image
          src="/property_exteriros/WhatsApp Image 2026-03-10 at 12.36.31 PM.jpeg"
          alt="Resort Pathway"
          fill
          className="object-cover"
        />
      </div>

      {/* Fifth big image section */}
      <div className="sticky top-0 h-screen w-full shadow-2xl" style={{ zIndex: 4 }}>
        <Image
          src="/property_interiors/WhatsApp Image 2026-03-10 at 12.34.54 PM.jpeg"
          alt="Resort Lounge"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
