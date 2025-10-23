'use client';

import React from 'react';
import Image from 'next/image';

export default function ParallaxSection() {
  return (
    <section className="relative">
      {/* First set */}
      <div className="relative h-screen w-full">
        {/* Background large image */}
        <Image
          src="/slide1.jpeg"
          alt="Blueberry Hill ADU"
          fill
          className="object-cover"
          priority
        />
        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 md:p-12 lg:p-16">
          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-4">Blueberry Hill ADU</h3>
          <div className="flex flex-wrap gap-3 text-white text-sm md:text-base">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">ADU</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Sleeping Loft</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">1 Bath</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">+500 Sqft</span>
          </div>
        </div>
        {/* Small overlay image on right */}
        <div 
          className="absolute top-1/2 right-8 md:right-16 lg:right-24 transform -translate-y-1/2 z-10"
          style={{
            width: '280px',
            height: '350px',
            maxWidth: '40vw',
            maxHeight: '50vh'
          }}
        >
          <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/over2.jpeg"
              alt="Interior Detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Second set */}
      <div className="relative h-screen w-full">
        {/* Background large image */}
        <Image
          src="/slide6.jpeg"
          alt="Break House"
          fill
          className="object-cover"
        />
        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 md:p-12 lg:p-16">
          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-4">Break House</h3>
          <div className="flex flex-wrap gap-3 text-white text-sm md:text-base">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Big Bar</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">2 Bed</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">3 Bath</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">1000-1500 Sqft</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Hybrid Home</span>
          </div>
        </div>
        {/* Small overlay image on right */}
        <div 
          className="absolute top-1/2 right-8 md:right-16 lg:right-24 transform -translate-y-1/2 z-10"
          style={{
            width: '280px',
            height: '350px',
            maxWidth: '40vw',
            maxHeight: '50vh'
          }}
        >
          <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/slide4.jpeg"
              alt="Architectural Detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
