'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="bg-[#F5F1E8] min-h-screen flex flex-col">
      <Header />

      <section className="pt-40 pb-20 px-4 md:px-8 text-center bg-[#2F3D24] text-[#F5F1E8]">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Our Story</h1>
        <p className="text-xl max-w-2xl mx-auto font-serif text-[#C8E86C]">
          A legacy of conservation, luxury, and deeply personalized hospitality.
        </p>
      </section>

      <section className="flex-1 container mx-auto px-4 md:px-8 py-24 max-w-4xl">
        <h2 className="text-4xl font-serif text-[#2F3D24] mb-8">The Birth of Baghvan</h2>
        <p className="text-[#6B5F4F] text-lg leading-relaxed mb-8">
          The name "Baghvan" originates from the Hindi words "Bagh" (Tiger) and "Van" (Forest), perfectly encapsulating our deep-rooted reverence for the majestic creatures that roam the Indian wilderness. What started as a visionary attempt to bridge the gap between untamed nature and human comfort has blossomed into one of the subcontinent's most luxurious safari lodges.
        </p>

        <h2 className="text-4xl font-serif text-[#2F3D24] mb-8 mt-16">Our Philosophy</h2>
        <p className="text-[#6B5F4F] text-lg leading-relaxed mb-8">
          At The Baghvan River Corbett Retreat, we exist where luxury meets responsibility. Our architecture is heavily inspired by traditional Indian villages, utilizing local materials to ensure a negligible ecological footprint. From empowering local communities to leading anti-poaching and forest preservation initiatives, every stay with us directly contributes to the survival of the Jim Corbett biosphere.
        </p>
      </section>

      <Footer />
    </div>
  );
}
