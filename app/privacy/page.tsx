'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="bg-[#F5F1E8] min-h-screen flex flex-col">
      <Header />

      <section className="pt-40 pb-20 px-4 md:px-8 text-center bg-[#2F3D24] text-[#F5F1E8]">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Privacy Policy</h1>
      </section>

      <section className="flex-1 container mx-auto px-4 md:px-8 py-24 max-w-4xl prose prose-lg">
        <h3 className="text-[#2F3D24]">Information Collection</h3>
        <p className="text-[#6B5F4F]">We collect information from you when you book a stay on our site, subscribe to our newsletter, respond to a survey, or fill out a form. The information may include your name, email address, mailing address, or phone number.</p>

        <h3 className="text-[#2F3D24] mt-8">Information Usage</h3>
        <p className="text-[#6B5F4F]">Any of the information we collect from you may be used in one of the following ways: To personalize your experience, to improve our website, to improve customer service, to process transactions, or to send periodic emails regarding your stay or future resort offers.</p>

        <h3 className="text-[#2F3D24] mt-8">Data Protection</h3>
        <p className="text-[#6B5F4F]">We implement a variety of security measures to maintain the safety of your personal information when you place a booking or access your personal information.</p>
      </section>

      <Footer />
    </div>
  );
}