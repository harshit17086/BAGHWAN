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
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-[#6B5F4F]/10">
          <div className="text-center mb-16">
            <h2 className="text-[#2F3D24] text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Get in Touch</h2>
            <p className="text-[#6B5F4F] text-lg font-serif">We are here to assist you with your reservations and inquiries.</p>
          </div>

          <div className="space-y-12">
            {/* Mobile Numbers */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-[#6B5F4F]/20 pb-8">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-sm font-semibold tracking-widest text-[#6B5F4F] uppercase mb-2">Official Mobile Number</h3>
                <p className="text-2xl md:text-3xl font-serif text-[#2F3D24]">+91 74558 47579 <br className="md:hidden" /> <span className="hidden md:inline">|</span> +91 81717 36969</p>
              </div>
              <a href="tel:+917455847579" className="bg-[#2F3D24] text-white px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-sm hover:bg-[#1a2817] transition-colors w-full md:w-auto text-center">
                Call Now
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-[#6B5F4F]/20 pb-8">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-sm font-semibold tracking-widest text-[#6B5F4F] uppercase mb-2">WhatsApp Number</h3>
                <p className="text-2xl md:text-3xl font-serif text-[#2F3D24]">+91 81717 36969</p>
              </div>
              <a href="https://wa.me/918171736969" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-sm hover:bg-[#1DA851] transition-colors w-full md:w-auto text-center">
                Message Us
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-[#6B5F4F]/20 pb-8">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-sm font-semibold tracking-widest text-[#6B5F4F] uppercase mb-2">Official Email ID</h3>
                <p className="text-xl md:text-2xl lg:text-3xl font-serif text-[#2F3D24]">thebaghvanriver@gmail.com</p>
              </div>
              <a href="mailto:thebaghvanriver@gmail.com" className="bg-[#2F3D24] text-white px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-sm hover:bg-[#1a2817] transition-colors w-full md:w-auto text-center">
                Email Us
              </a>
            </div>

            {/* Website */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-sm font-semibold tracking-widest text-[#6B5F4F] uppercase mb-2">Website Link</h3>
                <p className="text-2xl md:text-3xl font-serif text-[#2F3D24]">www.baghvanresort.com</p>
                <p className="text-[#C8E86C] font-semibold text-sm uppercase tracking-widest mt-2">(Coming Soon)</p>
              </div>
              <button disabled className="bg-[#6B5F4F]/20 text-[#6B5F4F] px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-sm cursor-not-allowed w-full md:w-auto text-center border-2 border-[#6B5F4F]/20">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
