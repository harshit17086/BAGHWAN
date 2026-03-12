'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReviewsPage() {
  const reviews = [
    { name: "Sarah L.", loc: "London, UK", text: "The Baghvan was an absolute dream. Seeing a tiger in the wild just miles from our luxury suite was unparalleled." },
    { name: "Arjun M.", loc: "Delhi, India", text: "Impeccable hospitality. The attention to detail in the dining experience made our anniversary truly special." },
    { name: "Dr. Chen", loc: "Singapore", text: "A rare blend of high-end luxury and genuine ecological responsibility. The nature trails were breathtaking." },
    { name: "Emma W.", loc: "Sydney, AU", text: "I've travelled the world, but the serenity at Baghvan is unmatched. The spa therapies reconnected my soul." }
  ];

  return (
    <div className="bg-[#F5F1E8] min-h-screen flex flex-col">
      <Header />

      <section className="pt-40 pb-20 px-4 md:px-8 text-center bg-[#2F3D24] text-[#F5F1E8]">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Guest Reviews</h1>
        <p className="text-xl max-w-2xl mx-auto font-serif text-[#C8E86C]">
          Stories from those who have touched the wild.
        </p>
      </section>

      <section className="flex-1 container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-[#6B5F4F]/10">
              <div className="flex text-[#C8E86C] mb-6">
                {/* 5 Stars */}
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-[#6B5F4F] text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
              <div>
                <p className="text-[#2F3D24] font-bold font-serif">{review.name}</p>
                <p className="text-[#6B5F4F] text-sm uppercase tracking-widest">{review.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
