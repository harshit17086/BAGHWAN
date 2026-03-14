'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Use require.context or a hardcoded list to pull images, since we have the list from terminal:
const galleryImages = [
  '/property_exteriros/nightswimmingpool.jpeg',
  '/property_exteriros/propertynight.jpeg',
  '/property_exteriros/roomniterior.jpeg',
  '/property_exteriros/WhatsApp Image 2026-03-10 at 12.36.30 PM.jpeg',
  '/property_exteriros/WhatsApp Image 2026-03-10 at 12.36.27 PM.jpeg',
  '/property_exteriros/WhatsApp Image 2026-03-10 at 12.36.31 PM.jpeg',
  '/property_exteriros/WhatsApp Image 2026-03-10 at 12.37.09 PM.jpeg',
  '/property_exteriros/WhatsApp Image 2026-03-10 at 12.38.20 PM (2).jpeg',
  '/property_exteriros/WhatsApp Image 2026-03-10 at 12.38.21 PM (2).jpeg',
  '/property_exteriros/WhatsApp Image 2026-03-10 at 12.38.22 PM (2).jpeg',
  '/property_exteriros/WhatsApp Image 2026-03-10 at 12.38.25 PM (1).jpeg',
  '/property_exteriros/WhatsApp Image 2026-03-10 at 12.38.25 PM.jpeg',
  '/property_exteriros/WhatsApp Image 2026-03-10 at 12.38.26 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.39 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.40 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.41 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.43 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.45 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.47 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.54 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.55 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.58 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.35.03 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.35.05 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.35.07 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.35.18 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.35.41 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.35.44 PM.jpeg',
  '/property_interiors/WhatsApp Image 2026-03-10 at 12.36.07 PM.jpeg'
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[#F5F1E8] min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-[#2F3D24] mb-6">Visual Journey</h1>
        <p className="text-xl text-[#6B5F4F] max-w-2xl mx-auto font-serif">
          Glimpse into the unparalleled luxury and wild serenity of The Baghvan River Corbett Retreat.
        </p>
      </section>

      {/* Editorial Bento Box Gallery Grid */}
      <section className="flex-1 container mx-auto px-4 md:px-8 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px] grid-flow-dense">
          {galleryImages.map((src, index) => {
            // Encode the URL spaces so Next.js Image doesn't throw a 400 error
            const encodedSrc = src.replace(/ /g, '%20');

            // Dynamic grid span pattern for an editorial/bento-box layout
            let spanClass = "col-span-1 row-span-1";

            // Pattern logic to vary the image sizes
            if (index % 11 === 0) {
              spanClass = "col-span-2 row-span-2"; // Large feature square
            } else if (index % 7 === 0) {
              spanClass = "col-span-2 row-span-1"; // Wide landscape
            } else if (index % 5 === 0) {
              spanClass = "col-span-1 row-span-2"; // Tall portrait
            }

            return (
              <div
                key={index}
                className={`${spanClass} relative overflow-hidden rounded-xl cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-500`}
                onClick={() => setSelectedImage(encodedSrc)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={encodedSrc}
                    alt={`Baghvan Gallery Photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Subtle luxury overlay on hover */}
                  <div className="absolute inset-0 bg-[#2F3D24]/0 group-hover:bg-[#2F3D24]/30 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif tracking-widest uppercase text-sm border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
                      View
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/70 hover:text-white bg-black/50 p-3 rounded-full backdrop-blur-md transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl aspect-[16/9] md:aspect-video rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Enlarged gallery photo"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
