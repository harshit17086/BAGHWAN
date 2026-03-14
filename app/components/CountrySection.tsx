'use client';

import React from 'react';
import Stack from './Stack';
import Link from 'next/link';

const images = [
  { id: 1, img: "/property_exteriros/propertynight.jpeg" },
  { id: 2, img: "/property_exteriros/WhatsApp%20Image%202026-03-10%20at%2012.38.25%20PM%20(1).jpeg" },
  { id: 3, img: "/property_exteriros/nightswimmingpool.jpeg" },
  { id: 4, img: "/property_exteriros/roomniterior.jpeg" },
  { id: 5, img: "/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.34.39%20PM.jpeg" },
  { id: 6, img: "/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.34.40%20PM.jpeg" },
  { id: 7, img: "/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.34.41%20PM.jpeg" },
  { id: 8, img: "/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.34.45%20PM.jpeg" },
  { id: 9, img: "/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.34.47%20PM.jpeg" },
  { id: 10, img: "/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.35.41%20PM.jpeg" }
];

export default function CountrySection() {
  return (
    <section className="bg-[#F5F1E8] py-12 md:py-24">
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

            <p className="text-[#6B5F4F] text-base md:text-lg leading-relaxed max-w-2xl">
              Immerse yourself in carefully curated aesthetic spaces, from rustic village-style cottages to grand premium suites. Discover a visual journey of expansive lawns, glowing evening pools, and bespoke jungle luxury that defines the true essence of Jim Corbett.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <Link href="/projects" className="bg-transparent border-2 border-[#2F3D24] text-[#2F3D24] font-medium text-base md:text-lg px-8 py-3 rounded-full hover:bg-[#2F3D24] hover:text-white transition-all duration-300 flex items-center justify-center">
                Explore The Gallery
              </Link>
              <Link href="/projects" className="bg-transparent border-2 border-[#2F3D24] rounded-full p-3 hover:bg-[#2F3D24] hover:text-white transition-all duration-300 cursor-pointer group flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#2F3D24] group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
