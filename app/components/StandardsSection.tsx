'use client';

import React from 'react';
import Image from 'next/image';

interface CardData {
  id: number;
  image: string;
  title: string;
}

export default function StandardsSection() {
  const cards: CardData[] = [
    {
      id: 1,
      image: '/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.34.40%20PM.jpeg',
      title: 'Luxury Stays'
    },
    {
      id: 2,
      image: '/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.35.41%20PM.jpeg',
      title: 'Comfortable Living'
    },
    {
      id: 3,
      image: '/property_exteriros/WhatsApp%20Image%202026-03-10%20at%2012.38.20%20PM%20(2).jpeg',
      title: 'Private Pool'
    },
    {
      id: 4,
      image: '/property_exteriros/WhatsApp%20Image%202026-03-10%20at%2012.37.09%20PM.jpeg',
      title: 'Outdoor Dining'
    },
    {
      id: 5,
      image: '/property_exteriros/WhatsApp%20Image%202026-03-10%20at%2012.38.25%20PM%20(1).jpeg',
      title: 'Open Spaces'
    },
    {
      id: 6,
      image: '/property_exteriros/WhatsApp%20Image%202026-03-10%20at%2012.38.22%20PM%20(2).jpeg',
      title: 'Tranquil Ambience'
    },
    {
      id: 7,
      image: '/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.34.55%20PM.jpeg',
      title: 'Exquisite Decor'
    },
    {
      id: 8,
      image: '/property_exteriros/propertynight.jpeg',
      title: 'Modern Aesthetics'
    },
    {
      id: 9,
      image: '/property_exteriros/WhatsApp%20Image%202026-03-10%20at%2012.38.21%20PM%20(2).jpeg',
      title: 'Scenic Views'
    }
  ];

  return (
    <section className="relative bg-[#faf7ed] py-20">
      <div className="flex flex-col justify-center">
        {/* Section Header */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-4">
            World-class Amenities...
          </h2>
        </div>

        {/* Cards Container */}
        <div 
          className="cards-container flex gap-8 px-8 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] h-[500px] rounded-2xl overflow-hidden shadow-2xl snap-center"
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
      </div>
    </section>
  );
}
