'use client';

import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  backgroundImage,
  height = 'h-screen' 
}: HeroSectionProps) {
  return (
    <section 
      className={`relative ${height} w-screen ml-[calc(-50vw+50%)] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat`}
      style={{
        height: '90vh',
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
