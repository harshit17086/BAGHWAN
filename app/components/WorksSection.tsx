'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardData {
  id: string;
  image: string;
  title: string;
  description: string;
  location?: string;
}


export default function WorksSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const projects: CardData[] = useMemo(() => [
    {
      id: '1',
      image: '/property_exteriros/WhatsApp Image 2026-03-10 at 12.36.21 PM.jpeg',
      title: 'Luxury Villa Stays',
      description: 'Experience unparalleled comfort in our thoughtfully designed private villas, surrounded by nature.',
      location: 'Baghvan Resort'
    },
    {
      id: '2',
      image: '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.45 PM.jpeg',
      title: 'Elegant Interiors',
      description: 'Relax in our premium rooms featuring contemporary amenities seamlessly blended with rustic charm.',
      location: 'Baghvan Accommodations'
    },
    {
      id: '3',
      image: '/property_random/WhatsApp Image 2026-03-10 at 12.36.57 PM.jpeg',
      title: 'Serene Landscapes',
      description: 'Immerse yourself in lush greenery, scenic views, and the tranquil atmosphere of our outdoor spaces.',
      location: 'Resort Grounds'
    },
    {
      id: '4',
      image: '/property_exteriros/WhatsApp Image 2026-03-10 at 12.36.30 PM.jpeg',
      title: 'Outdoor Dining',
      description: 'Savour gourmet meals under the open sky with curated menus and a breathtaking ambience.',
      location: 'Baghvan Restaurant'
    },
    {
      id: '5',
      image: '/property_interiors/WhatsApp Image 2026-03-10 at 12.35.03 PM.jpeg',
      title: 'Spa & Wellness',
      description: 'Rejuvenate your body and mind with holistic spa treatments, yoga, and wellness therapies.',
      location: 'Wellness Centre'
    },
    {
      id: '6',
      image: '/property_random/WhatsApp Image 2026-03-10 at 12.36.48 PM.jpeg',
      title: 'Nature Trails',
      description: 'Explore guided walks through lush forests, discover local wildlife, and reconnect with nature.',
      location: 'Forest Reserve'
    },
    {
      id: '7',
      image: '/property_exteriros/WhatsApp Image 2026-03-10 at 12.38.20 PM (2).jpeg',
      title: 'Private Pool Access',
      description: 'Unwind at our stunning private and infinity pools surrounded by panoramic greenery.',
      location: 'Pool Deck'
    }
  ], []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sectionTop = container.offsetTop;
    const sectionHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      const scrolled = window.scrollY - sectionTop;
      const maxScroll = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
      setScrollProgress(progress);

      // Horizontal scroll the cards
      const scrollContainer = container.querySelector('.cards-container') as HTMLElement;
      if (scrollContainer) {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        scrollContainer.style.transform = `translateX(-${progress * maxScrollLeft}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={scrollContainerRef}
      className="relative bg-[#faf7ed]"
      style={{ height: '400vh' }} // Extended height for horizontal scroll effect
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-4">
            Experience Baghvan
          </h2>
          <p className="text-lg md:text-xl text-[#3d5320] font-serif">
            Immerse yourself in nature&apos;s luxury
          </p>
        </div>

        <div className="cards-container flex gap-8 px-8">
          {projects.map((card) => (
            <div
              key={card.id}
              className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] h-[500px] perspective-1000"
            >
              <div className="relative w-full h-full group">
                {/* Card - with flip effect */}
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">

                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative w-full h-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                      {/* Card title on front */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                          {card.title}
                        </h3>
                        {card.location && (
                          <p className="text-sm md:text-base opacity-90 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {card.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl bg-[#3d5320]">
                    <div className="w-full h-full flex flex-col justify-center items-center p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-center">
                        {card.title}
                      </h3>
                      <p className="text-base md:text-lg text-center mb-4 leading-relaxed">
                        {card.description}
                      </p>
                      {card.location && (
                        <div className="flex items-center gap-2 text-[#C8E86C] font-medium mb-4">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {card.location}
                        </div>
                      )}
                      <Link
                        href={`/projects/${card.id}`}
                        className="px-6 py-3 bg-[#C8E86C] text-[#2F3D24] rounded-full font-semibold hover:bg-[#b5d655] transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-[#3d5320] text-sm font-serif mb-2">
            {scrollProgress < 1 ? 'Scroll to explore projects' : 'Continue scrolling'}
          </p>
          <div className="w-48 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#3d5320] transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* CSS for 3D flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
