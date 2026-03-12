'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="bg-[#F5F1E8] min-h-screen flex flex-col">
      <Header />

      <section className="pt-40 pb-20 px-4 md:px-8 text-center bg-[#2F3D24] text-[#F5F1E8]">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Contact Us</h1>
        <p className="text-xl max-w-2xl mx-auto font-serif text-[#C8E86C]">
          Let us help you plan an unforgettable retreat into the wild.
        </p>
      </section>

      <section className="flex-1 container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-[#6B5F4F] uppercase mb-4">Reservations</h3>
              <p className="text-2xl font-serif text-[#2F3D24]">+91 999 999 9999</p>
              <p className="text-lg font-serif text-[#2F3D24]">reservations@baghvanresort.com</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-widest text-[#6B5F4F] uppercase mb-4">The Resort</h3>
              <p className="text-2xl font-serif text-[#2F3D24] leading-relaxed max-w-sm">
                The Baghvan River Corbett Retreat, <br />
                Jim Corbett National Park, <br />
                Uttarakhand, India
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#6B5F4F] uppercase mb-2">Name</label>
                <input type="text" className="w-full border-b border-[#6B5F4F]/30 bg-transparent py-2 focus:outline-none focus:border-[#2F3D24]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#6B5F4F] uppercase mb-2">Email</label>
                <input type="email" className="w-full border-b border-[#6B5F4F]/30 bg-transparent py-2 focus:outline-none focus:border-[#2F3D24]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#6B5F4F] uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full border-b border-[#6B5F4F]/30 bg-transparent py-2 focus:outline-none focus:border-[#2F3D24] resize-none"></textarea>
              </div>
              <button type="button" className="bg-[#2F3D24] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a2817] transition-colors w-full">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
