'use client';

import React from 'react';

export default function MapSection() {
    return (
        <section className="bg-[#F5F1E8] py-12 md:py-24 relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[#6B5F4F] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
                        Location
                    </h2>
                    <h3 className="text-[#2F3D24] text-4xl md:text-5xl font-serif max-w-4xl mx-auto leading-tight">
                        Find Us In The Wild
                    </h3>
                </div>

                {/* Map Container */}
                <div className="w-full max-w-6xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative border border-[#6B5F4F]/20">
                    <iframe
                        src="https://maps.google.com/maps?q=29°17'55.5%22N+79°12'21.5%22E&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Baghvan Resort Location"
                        className="absolute inset-0 w-full h-full grayscale-[50%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    ></iframe>
                </div>

                {/* Action Button */}
                <div className="mt-12 text-center">
                    <a
                        href="https://maps.app.goo.gl/AAibc9ZeEUfBheLr9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-transparent border-2 border-[#2F3D24] text-[#2F3D24] px-10 py-4 rounded-full font-semibold hover:bg-[#2F3D24] hover:text-[#F5F1E8] transition-colors duration-300 uppercase tracking-widest text-sm"
                    >
                        Get Directions
                    </a>
                </div>
            </div>
        </section>
    );
}
