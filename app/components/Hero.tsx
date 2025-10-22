'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-[url('/0f3a0cb0-fc19-45e9-99d4-77f7a96126ff.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center pt-[90px]">
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-white font-black text-6xl md:text-8xl lg:text-9xl mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>BUILDING THE FUTURE</h2>
        <p className="text-white text-base md:text-lg lg:text-xl mb-8 max-w-4xl mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
          HRC is a leading Indian construction company distinguished by innovation, quality and sustainability.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center items-center mt-12">
          <Link href="/contact">
            <button className="bg-[#C8E86C] text-[#2F3D24] font-serif font-medium text-lg px-8 py-4 rounded-full hover:bg-[#3d5320] hover:text-[#C8E86C] transition-colors duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
