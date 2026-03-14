'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function TestimonialsSection() {
    const reviews = [
        {
            name: "Anjali Desai",
            role: "Luxury Traveler",
            text: "The Baghvan River Corbett Retreat is hands down the best luxury resort in Jim Corbett. The family cottages and hospitality were unmatched.",
            rating: 5
        },
        {
            name: "Rohan Sharma",
            role: "Wildlife Photographer",
            text: "If you're looking for an adventure-filled holiday near Garjiya Temple with premium forest views, this Ramnagar resort is exceptional.",
            rating: 5
        },
        {
            name: "Priya & Siddharth",
            role: "Honeymoon Couple",
            text: "From the serene swimming pool to the luxurious premium rooms, Corbett Adventure Resort provided the perfect romantic escape.",
            rating: 5
        },
        {
            name: "Dr. Vikram Singh",
            role: "Nature Enthusiast",
            text: "A truly immersive jungle experience without sacrificing an ounce of comfort. The bespoke safari tours were the highlight of our stay.",
            rating: 5
        },
        {
            name: "Meera Kapoor",
            role: "Event Planner",
            text: "We hosted an intimate family gathering here, and the lush lawns paired with the stellar culinary team made it an unforgettable night.",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    return (
        <section className="relative py-20 md:py-32 overflow-hidden border-t border-[#6B5F4F]/10">
            {/* Background Image Setup */}
            <Image
                src="/property_interiors/WhatsApp%20Image%202026-03-10%20at%2012.35.41%20PM.jpeg"
                alt="Baghvan Interior Background"
                fill
                className="object-cover object-center z-0"
                priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* SEO Optimized Headings (Light theme for dark bg) */}
                <div className="text-center mb-16">
                    <h2 className="text-[#C8E86C] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
                        Guest Feedback & Reviews
                    </h2>
                    <h3 className="text-[#F5F1E8] text-3xl md:text-4xl lg:text-5xl font-serif max-w-3xl mx-auto leading-tight">
                        What People Say About the Best Luxury Resort in Jim Corbett
                    </h3>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-4xl mx-auto h-[350px] md:h-[280px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <div className="bg-white/60 p-10 md:p-12 rounded-3xl shadow-sm border border-[#6B5F4F]/10 h-full flex flex-col justify-between backdrop-blur-md">
                                <div>
                                    <div className="flex text-[#2F3D24] mb-6 gap-1">
                                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-[#6B5F4F] text-xl md:text-2xl leading-relaxed mb-6 font-serif italic">
                                        "{reviews[currentIndex].text}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#2F3D24]/10 rounded-full flex items-center justify-center text-[#2F3D24] font-serif font-bold text-xl">
                                        {reviews[currentIndex].name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-[#2F3D24] font-bold tracking-wide font-serif">{reviews[currentIndex].name}</p>
                                        <p className="text-[#6B5F4F] text-xs uppercase tracking-widest mt-1">{reviews[currentIndex].role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Manual Controls */}
                    <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-3">
                        {reviews.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-8 h-2 bg-[#C8E86C]' : 'w-2 h-2 bg-white/40 hover:bg-white/80'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
