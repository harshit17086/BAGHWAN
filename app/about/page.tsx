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
        <h2 className="text-4xl font-serif text-[#2F3D24] mb-8">Our Brand Vision</h2>
        <p className="text-[#6B5F4F] text-lg leading-relaxed mb-6">
          The Baghvan River Corbett Retreat was born out of a simple vision: to create a sanctuary where untamed wilderness and deeply personalized, home-like hospitality exist in perfect harmony. What started as an attempt to bridge the gap between nature and comfort has blossomed into a luxurious haven in Ramnagar, where every detail is designed to help you disconnect from the hustle and reconnect with the Earth.
        </p>
        <p className="text-[#6B5F4F] text-lg leading-relaxed mb-16">
          Our name, "Baghvan," originates from the Hindi words "Bagh" (Tiger) and "Van" (Forest), perfectly encapsulating our reverence for the majestic creatures that roam our backyard. We believe in providing comfort that meets elegance, blending modern amenities with the innate tranquillity of the forest.
        </p>

        <h2 className="text-4xl font-serif text-[#2F3D24] mb-8">Who We Welcome</h2>
        <p className="text-[#6B5F4F] text-lg leading-relaxed mb-6">
          Our resort is a versatile playground and sanctuary designed for all ages:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-[#6B5F4F] text-lg mb-16">
          <li><strong className="text-[#2F3D24] font-serif">Families:</strong> With safe, family-themed luxury cottages, expansive lawns, and sprawling play areas, families can bond securely in the heart of nature.</li>
          <li><strong className="text-[#2F3D24] font-serif">Couples & Honeymooners:</strong> Seeking a romantic, peaceful retreat? Our premium river-facing rooms and private plunge pools offer unparalleled intimacy.</li>
          <li><strong className="text-[#2F3D24] font-serif">Adventure & Nature Lovers:</strong> From wildlife photography to local paintball arenas and in-house relaxation, thrill-seekers and serenity seekers alike will find exactly what they need.</li>
        </ul>

        <h2 className="text-4xl font-serif text-[#2F3D24] mb-8">Local Wonders & Attractions</h2>
        <p className="text-[#6B5F4F] text-lg leading-relaxed mb-6">
          Conveniently located in Ramnagar, Uttarakhand, our retreat serves as the perfect basecamp for exploration. We are just moments away from some of Northern India’s most prized destinations:
        </p>
        <ul className="space-y-6 text-[#6B5F4F] text-lg">
          <li className="flex gap-4">
            <span className="text-[#C8E86C] mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <strong className="text-[#2F3D24] font-serif block text-xl mb-1">Jim Corbett National Park</strong>
              <p>The oldest national park in India, renowned globally for its Bengal tiger population and incredibly diverse biosphere.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[#C8E86C] mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <strong className="text-[#2F3D24] font-serif block text-xl mb-1">Garjiya Devi Temple</strong>
              <p>A sacred and visually stunning temple situated on a large rock in the Kosi River, deeply holding the spiritual heart of the region.</p>
            </div>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}
