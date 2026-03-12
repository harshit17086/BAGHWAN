'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="bg-[#F5F1E8] min-h-screen flex flex-col">
      <Header />

      <section className="pt-40 pb-20 px-4 md:px-8 text-center bg-[#2F3D24] text-[#F5F1E8]">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Terms of Use</h1>
      </section>

      <section className="flex-1 container mx-auto px-4 md:px-8 py-24 max-w-4xl prose prose-lg">
        <h3 className="text-[#2F3D24]">Acceptance of Terms</h3>
        <p className="text-[#6B5F4F]">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Any participation in reservations or related services will constitute acceptance of this agreement.</p>

        <h3 className="text-[#2F3D24] mt-8">Booking & Cancellation Policies</h3>
        <p className="text-[#6B5F4F]">Guests must be at least 18 years of age to book a suite. A deposit is required at the time of booking. Cancellations made 14 days prior to the arrival date will receive a full refund. Cancellations made within 14 days are subject to a cancellation fee equal to one night's stay.</p>

        <h3 className="text-[#2F3D24] mt-8">Resort Conduct</h3>
        <p className="text-[#6B5F4F]">To maintain the ecological integrity of the Jim Corbett buffer zone, all guests must adhere to wildlife noise protocols and environmental guidelines provided upon check-in. The Baghvan reserves the right to terminate the stay of any guest violating these protection standards.</p>
      </section>

      <Footer />
    </div>
  );
}