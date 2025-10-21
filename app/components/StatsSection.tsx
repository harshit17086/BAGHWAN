'use client';

import React from 'react';

export default function StatsSection() {
  return (
    <section className="relative bg-[#faf7ed] py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#6B7555] mb-12">
            Still don&apos;t believe it?
          </h2>
        </div>

        {/* Stats Grid - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Larger Stats */}
          <div className="space-y-16">
            {/* Stat 1 */}
            <div className="border-b border-[#3d5320]/20 pb-12">
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2F3D24] mb-4">
                200K+
              </h3>
              <p className="text-base md:text-lg text-[#6B7555]">
                square feet currently under construction
              </p>
            </div>

            {/* Stat 2 */}
            <div className="border-b border-[#3d5320]/20 pb-12">
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2F3D24] mb-4">
                5.0%
              </h3>
              <p className="text-base md:text-lg text-[#6B7555]">
                Average build costs are within 5% of our pre-design estimates
              </p>
            </div>
          </div>

          {/* Right Column - Smaller Stats with Icons */}
          <div className="space-y-16">
            {/* Stat 3 */}
            <div className="border-b border-[#3d5320]/20 pb-12">
              <div className="flex items-start gap-4 mb-4">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2F3D24]">
                  18
                </h3>
                {/* Decorative stars */}
                
              </div>
              <p className="text-base md:text-lg text-[#6B7555]">
                States with active home design & development projects
              </p>
            </div>

            {/* Stat 4 */}
            <div className="border-b border-[#3d5320]/20 pb-12">
              <div className="flex items-start gap-4 mb-4">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2F3D24]">
                  5,000+
                </h3>
                
                
              </div>
              <p className="text-base md:text-lg text-[#6B7555]">
                land parcels evaluated
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
