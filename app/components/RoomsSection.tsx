'use client';

import React from 'react';
import Image from 'next/image';

export default function RoomsSection() {
    const rooms = [
        {
            title: "Lawn View Standard Room",
            image: "/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.34.40%20PM.jpeg",
            features: [
                { label: "Available", value: "2 Rooms" },
                { label: "Room Size", value: "12 × 17 ft" },
                { label: "Washroom", value: "8 × 5 ft" },
                { label: "Bed Size", value: "6 × 6 ft" }
            ]
        },
        {
            title: "Lawn View Deluxe Room",
            image: "/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.34.54%20PM.jpeg",
            features: [
                { label: "Available", value: "4 Rooms" },
                { label: "Room Size", value: "12 × 16 ft" },
                { label: "Dressing Area", value: "7 × 6 ft" },
                { label: "Washroom", value: "8 × 5 ft" },
                { label: "Bed Size", value: "6 × 6 ft" }
            ]
        },
        {
            title: "Jungle View Deluxe Room",
            image: "/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.35.05%20PM.jpeg",
            features: [
                { label: "Available", value: "6 Rooms" },
                { label: "Room Size", value: "12 × 16 ft" },
                { label: "Balcony", value: "14 × 7 ft" },
                { label: "Dressing Area", value: "7 × 6 ft" },
                { label: "Washroom", value: "8 × 5 ft" },
                { label: "Bed Size", value: "6 × 6 ft" }
            ]
        }
    ];

    return (
        <section id="rooms" className="bg-[#F5F1E8] py-24 md:py-32 relative text-[#2F3D24]">
            <div className="container mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-[#6B5F4F] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
                        Accommodations
                    </h2>
                    <h3 className="text-[#2F3D24] text-4xl md:text-5xl lg:text-6xl font-serif max-w-4xl mx-auto leading-tight">
                        Curated Spaces for Complete Tranquility
                    </h3>
                </div>

                {/* Rooms Rows */}
                <div className="flex flex-col gap-16 md:gap-24 max-w-7xl mx-auto">
                    {rooms.map((room, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-16 items-center group`}>

                            {/* Image Container */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={room.image}
                                        alt={room.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                <h4 className="text-3xl md:text-4xl font-serif text-[#2F3D24] mb-8 leading-tight">
                                    {room.title}
                                </h4>

                                {/* Features List */}
                                <ul className="space-y-4 mb-10 border-t border-[#6B5F4F]/20 pt-6">
                                    {room.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex justify-between items-center border-b border-[#6B5F4F]/20 pb-4">
                                            <span className="text-[#6B5F4F] font-medium text-lg">{feature.label}</span>
                                            <span className="text-[#2F3D24] font-semibold font-serif text-lg">{feature.value}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
