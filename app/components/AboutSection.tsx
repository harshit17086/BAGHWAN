'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="bg-[#F5F1E8] py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content - Sticky on Desktop, Normal on Mobile */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 self-start mb-12 lg:mb-0">
            <h3 className="text-[#6B5F4F] uppercase tracking-[0.2em] text-sm md:text-base font-semibold mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#6B5F4F]"></span>
              The Estate
            </h3>

            <h2 className="text-[#2F3D24] text-4xl md:text-5xl lg:text-5xl font-serif leading-tight mb-6">
              Corbett Adventure Resort
            </h2>

            <p className="text-[#6B5F4F] text-base md:text-lg leading-relaxed mb-6 font-serif">
              Welcome to Corbett Adventure Resort, your serene escape nestled in the lush greenery of Ramnagar, Uttarakhand. Conveniently located near the renowned Corbett National Park and the sacred Garjiya Temple, our resort is a haven for leisure travellers who cherish wildlife and nature. Experience home-like hospitality, as our dedicated team ensures your stay is memorable.
            </p>

            <p className="text-[#6B5F4F] text-base md:text-lg leading-relaxed mb-6">
              Our resort is a playground for all ages, boasting an array of activities. Dive into adventure with our in-house adventure park, unwind in our expansive lush lawns, or challenge friends at the paintball arena. Savour delicious cuisine, relax in our swimming pool and find your perfect stay in family-themed rooms. Whether you're seeking a peaceful retreat or an adventure-filled holiday, Corbett Adventure Resort is your ideal destination.
            </p>

            <h3 className="text-[#2F3D24] text-xl font-serif font-semibold mt-8 mb-4">
              Lush Stays & Heartfelt Hospitality
            </h3>

            <p className="text-[#6B5F4F] text-base md:text-lg leading-relaxed mb-8">
              At Corbett Adventure Resort, comfort meets elegance. Choose from our three distinct accommodations: the luxurious Premium Rooms, the rustic charm of Deluxe Village Cottages, or the spacious Family Luxury Cottages. Each category is designed to provide a unique experience, blending modern amenities with nature's tranquillity. Immerse yourself in comfort as you create unforgettable memories.
            </p>

            {/* Subtle interactive explore button */}
            <button className="group flex items-center gap-4 text-[#2F3D24] font-medium hover:opacity-80 transition-opacity">
              <span className="uppercase tracking-widest text-sm">Discover Our Story</span>
              <span className="w-10 h-10 rounded-full border border-[#2F3D24] flex items-center justify-center group-hover:bg-[#2F3D24] group-hover:text-[#F5F1E8] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right Content - Parallax Image Gallery */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[600px] lg:min-h-[800px] flex gap-4 md:gap-6">

            {/* Left Column of Parallax (moves up on desktop scroll, normal on mobile) */}
            <motion.div
              style={{ y: typeof window !== 'undefined' && window.innerWidth >= 1024 ? y1 : 0 }}
              className="w-1/2 flex flex-col gap-4 md:gap-6 pt-0 lg:pt-24"
            >
              <div className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl">
                <Image
                  src="/property_exteriros/nightswimmingpool.jpeg"
                  alt="Night Swimming Pool"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/property_exteriros/WhatsApp%20Image%202026-03-10%20at%2012.38.25%20PM%20(1).jpeg"
                  alt="Exterior Property Day"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column of Parallax (moves down on desktop scroll, normal on mobile) */}
            <motion.div
              style={{ y: typeof window !== 'undefined' && window.innerWidth >= 1024 ? y2 : 0 }}
              className="w-1/2 flex flex-col gap-4 md:gap-6 pt-12 lg:pt-0"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/property_exteriros/roomniterior.jpeg"
                  alt="Room Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[3/4] rounded-b-full overflow-hidden shadow-2xl">
                <Image
                  src="/property_exteriros/propertynight.jpeg"
                  alt="Property at Night"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}