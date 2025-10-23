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
       
      </div>
    </section>
  );
}
