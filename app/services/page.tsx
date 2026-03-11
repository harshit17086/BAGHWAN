'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function ServicesPage() {

  // Fallback services if database is empty
  const fallbackServices = useMemo(() => [
    {
      id: '1',
      name: 'Luxury Villas',
      description: 'Stay in our exquisite private villas with premium amenities, private pools, and breathtaking views of nature.',
      image_url: '/property_exteriros/WhatsApp Image 2026-03-10 at 12.36.21 PM.jpeg',
      display_order: 1,
      status: 'active'
    },
    {
      id: '2',
      name: 'Fine Dining',
      description: 'Savour gourmet cuisine crafted by expert chefs using locally sourced ingredients in our elegant dining spaces.',
      image_url: '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.39 PM.jpeg',
      display_order: 2,
      status: 'active'
    },
    {
      id: '3',
      name: 'Spa & Wellness',
      description: 'Rejuvenate your body and mind with our holistic spa treatments, yoga sessions, and wellness programs.',
      image_url: '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.55 PM.jpeg',
      display_order: 3,
      status: 'active'
    },
    {
      id: '4',
      name: 'Nature Trails',
      description: 'Explore guided nature walks through lush forests, discover local wildlife, and absorb the beauty of the outdoors.',
      image_url: '/property_random/WhatsApp Image 2026-03-10 at 12.36.48 PM.jpeg',
      display_order: 4,
      status: 'active'
    },
    {
      id: '5',
      name: 'Private Pools',
      description: 'Relax and unwind at our private and infinity pools surrounded by panoramic greenery and tranquil ambiance.',
      image_url: '/property_random/WhatsApp Image 2026-03-10 at 12.36.35 PM.jpeg',
      display_order: 5,
      status: 'active'
    },
    {
      id: '6',
      name: 'Event Hosting',
      description: 'Host unforgettable weddings, retreats, and celebrations in our elegant banquet halls and outdoor venues.',
      image_url: '/property_exteriros/WhatsApp Image 2026-03-10 at 12.36.30 PM.jpeg',
      display_order: 6,
      status: 'active'
    }
  ], []);

  const services = fallbackServices;

  return (
    <div className="min-h-screen bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-[#faf7ed]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2F3D24] mb-6 leading-tight">
              Our Experiences
            </h1>
            <p className="text-xl text-[#6B7555] leading-relaxed">
              From luxury stays to curated adventures, we offer a world of experiences.
              Discover everything Baghvan Resort has to offer for an unforgettable getaway.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#faf7ed]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#C8E86C]/20 hover:border-[#C8E86C]/40 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image_url}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-[#2F3D24] mb-3 group-hover:text-[#6B7555] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-[#6B7555] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-[#6B7555]">
                      <svg className="w-4 h-4 text-[#C8E86C] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Professional craftsmanship
                    </div>
                    <div className="flex items-center text-sm text-[#6B7555]">
                      <svg className="w-4 h-4 text-[#C8E86C] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Quality materials
                    </div>
                    <div className="flex items-center text-sm text-[#6B7555]">
                      <svg className="w-4 h-4 text-[#C8E86C] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Timely delivery
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-[#2F3D24] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#6B7555] hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
