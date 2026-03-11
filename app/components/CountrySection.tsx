'use client';

import React from 'react';
import Stack from './Stack';

const images = [
  { id: 1, img: "/property_random/WhatsApp Image 2026-03-10 at 12.36.42 PM.jpeg" },
  { id: 2, img: "/property_random/WhatsApp Image 2026-03-10 at 12.36.43 PM.jpeg" },
  { id: 3, img: "/property_random/WhatsApp Image 2026-03-10 at 12.36.48 PM.jpeg" },
  { id: 4, img: "/property_random/WhatsApp Image 2026-03-10 at 12.36.50 PM.jpeg" },
  { id: 5, img: "/property_random/WhatsApp Image 2026-03-10 at 12.36.51 PM.jpeg" },
  { id: 6, img: "/property_random/WhatsApp Image 2026-03-10 at 12.36.52 PM.jpeg" },
  { id: 7, img: "/property_random/WhatsApp Image 2026-03-10 at 12.36.55 PM.jpeg" }
];

export default function CountrySection() {
  return (
    <section className="bg-[#F5F1E8] py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left side - Stack of images */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            {/* Mobile Stack */}
            <div className="block lg:hidden">
              <Stack
                randomRotation={false}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 260, height: 260 }}
                cardsData={images}
              />
            </div>
            {/* Desktop Stack */}
            <div className="hidden lg:block">
              <Stack
                randomRotation={false}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 600, height: 600 }}
                cardsData={images}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-[#2F3D24] text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              A Destination Like No Other
            </h2>

            <p className="text-[#6B5F4F] text-base md:text-lg leading-relaxed max-w-2xl">
              Tucked away from the bustling city, Baghvan Resort offers a peaceful escape surrounded by nature. Experience the perfect blend of wildlife, luxury, and tranquility.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-transparent border-2 border-[#2F3D24] text-[#2F3D24] font-medium text-base md:text-lg px-8 py-3 rounded-full hover:bg-[#2F3D24] hover:text-white transition-all duration-300">
                Explore The Resort
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
