'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface CardData {
  id: number;
  image: string;
  title: string;
}

export default function StandardsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const cards: CardData[] = [
    {
      id: 1,
      image: '/slide1.jpeg',
      title: 'HRC Standard 1'
    },
    {
      id: 2,
      image: '/slide2.jpeg',
      title: 'HRC Standard 2'
    },
    {
      id: 3,
      image: '/slide3.jpeg',
      title: 'HRC Standard 3'
    },
    {
      id: 4,
      image: '/slide4.jpeg',
      title: 'HRC Standard 4'
    },
    {
      id: 5,
      image: '/slide5.jpeg',
      title: 'HRC Standard 5'
    },
    {
      id: 6,
      image: '/slide6.jpeg',
      title: 'HRC Standard 6'
    },
    {
      id: 7,
      image: '/slide8.jpeg',
      title: 'HRC Standard 7'
    },
    {
      id: 8,
      image: '/slide1.jpeg',
      title: 'HRC Standard 8'
    },
    {
      id: 9,
      image: '/slide2.jpeg',
      title: 'HRC Standard 9'
    }
  ];

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
            It all starts with our Standards...
          </h2>
          
        </div>

        {/* Cards Container */}
        <div className="cards-container flex gap-8 px-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Card title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-[#3d5320] text-sm font-serif mb-2">
            {scrollProgress < 1 ? 'Scroll to explore standards' : 'Continue scrolling'}
          </p>
          <div className="w-48 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#3d5320] transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
