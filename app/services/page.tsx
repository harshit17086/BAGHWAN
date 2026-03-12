'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const services = [
    { title: "Luxury Stays", desc: "Premium wildlife-facing suites with private plunge pools." },
    { title: "Fine Dining", desc: "Curated farm-to-table culinary experiences beside the riverbed." },
    { title: "Spa & Wellness", desc: "Rejuvenating nature-inspired spa therapies." },
    { title: "Nature Trails", desc: "Guided serene walks through the Corbett buffer zones." },
    { title: "Private Pools", desc: "Temperature-controlled exclusive pools for pure relaxation." },
    { title: "Event Hosting", desc: "Spectacular venues for intimate weddings and corporate retreats." },
    { title: "Wildlife Safaris", desc: "Expert-led tiger safaris deep into the jungle." },
    { title: "Yoga & Meditation", desc: "Sunrise yoga sessions to recenter your soul." }
  ];

  return (
    <div className="bg-[#F5F1E8] min-h-screen flex flex-col">
      <Header />

      <section className="pt-40 pb-20 px-4 md:px-8 text-center bg-[#2F3D24] text-[#F5F1E8]">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Resort Experiences</h1>
        <p className="text-xl max-w-2xl mx-auto font-serif text-[#C8E86C]">
          Immerse yourself in a collection of curated experiences designed to harmonize your spirit with the wild.
        </p>
      </section>

      <section className="flex-1 container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="group border-b border-[#6B5F4F]/30 pb-8">
              <span className="text-sm font-semibold tracking-widest text-[#6B5F4F] uppercase mb-4 block">0{idx + 1}</span>
              <h3 className="text-3xl font-serif text-[#2F3D24] mb-4 group-hover:text-[#6B5F4F] transition-colors">{service.title}</h3>
              <p className="text-[#6B5F4F] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
