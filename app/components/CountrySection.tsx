'use client';

import React from 'react';
import Stack from './Stack';

const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];

export default function CountrySection() {
  return (
    <section className="bg-[#F5F1E8] py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left side - Stack of images */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 300, height: 400 }}
              cardsData={images}
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-[#2F3D24] text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              We do it across the country
            </h2>
            
            <p className="text-[#6B5F4F] text-base md:text-lg leading-relaxed max-w-2xl">
              We focused exclusively on delivering in rural locations. Coast-to-coast, HUTS crafts beautiful properties through guidance, intent, and care. Have a specific area or state in mind? We&apos;ve either built there, or will soon.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-transparent border-2 border-[#2F3D24] text-[#2F3D24] font-medium text-base md:text-lg px-8 py-3 rounded-full hover:bg-[#2F3D24] hover:text-white transition-all duration-300">
                See Our Projects
              </button>
              <div className="bg-transparent border-2 border-[#2F3D24] rounded-full p-3 hover:bg-[#2F3D24] hover:text-white transition-all duration-300 cursor-pointer group">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-[#2F3D24] group-hover:text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
