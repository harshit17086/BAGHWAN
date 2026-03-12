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

          {/* Left Content - Sticky */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 self-start">
            <h3 className="text-[#6B5F4F] uppercase tracking-[0.2em] text-sm md:text-base font-semibold mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#6B5F4F]"></span>
              The Estate
            </h3>

            <h2 className="text-[#2F3D24] text-4xl md:text-6xl font-serif leading-tight mb-8">
              Where Wilderness Meets <span className="italic">Luxury</span>.
            </h2>

            <p className="text-[#6B5F4F] text-lg md:text-xl leading-relaxed mb-8 font-serif">
              Experience the untamed beauty of pristine wilderness without compromising on unparalleled luxury.
              Nestled along the tranquil banks of a winding river in the heart of Jim Corbett,
              The Baghvan offers a sanctuary where modern elegance seamlessly intertwines with the raw, rhythmic pulse of nature.
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
          <div className="w-full lg:w-1/2 relative min-h-[600px] lg:min-h-[800px] flex gap-6">

            <motion.div
              style={{ y: y1 }}
              className="w-1/2 flex flex-col gap-6 pt-12 lg:pt-24"
            >
              <div className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl">
                <Image
                  src="/property_random/WhatsApp%20Image%202026-03-10%20at%2012.36.42%20PM.jpeg"
                  alt="Resort Exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/property_random/WhatsApp%20Image%202026-03-10%20at%2012.36.48%20PM.jpeg"
                  alt="Resort Pool"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="w-1/2 flex flex-col gap-6"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/property_random/WhatsApp%20Image%202026-03-10%20at%2012.36.52%20PM.jpeg"
                  alt="Resort Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[3/4] rounded-b-full overflow-hidden shadow-2xl">
                <Image
                  src="/property_random/WhatsApp%20Image%202026-03-10%20at%2012.36.55%20PM.jpeg"
                  alt="Resort Dining"
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