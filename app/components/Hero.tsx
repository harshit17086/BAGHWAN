'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-[90px] overflow-hidden">
      {/* Video Background - cropped slightly at bottom to hide watermark */}
      <div className="absolute top-0 left-0 w-full h-[105%] overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/new_herohigh.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Content */}
      <div className="container mt-104 mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-lg">
          Welcome to Baghvan
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-serif max-w-2xl mx-auto drop-shadow-md">
          A luxury resort experience naturally nestled in serenity.
        </p>
      </div>
    </section>
  );
}
