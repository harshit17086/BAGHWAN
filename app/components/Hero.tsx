'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-[90px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/homeroots.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="container mt-104 mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
        {/* <h2 className="text-white font-black text-6xl md:text-8xl lg:text-9xl mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>BUILDING THE FUTURE</h2> */}
        <p className="text-white  text-base md:text-lg lg:text-xl mb-8 max-w-4xl mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
          HRC is a leading Indian construction company distinguished by innovation, quality and sustainability.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center items-center mt-6">
          <Link href="/contact">
            <button className="bg-[#C8E86C] text-[#2F3D24] cursor-pointer font-serif font-medium text-lg px-8 py-4 rounded-full hover:bg-[#3d5320] hover:text-[#C8E86C] transition-colors duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
