'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section className="relative bg-[#faf7ed] py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Company Overview */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2D3748] mb-8 text-center">
              About Our Company
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Founded with a vision to redefine excellence in construction, our company has been at the forefront of building innovative and sustainable structures for over two decades. We specialize in transforming architectural dreams into reality, combining traditional craftsmanship with cutting-edge technology.
              </p>
              <p className="mb-6">
                Our team of experienced professionals brings together expertise in residential construction, commercial development, infrastructure projects, and specialized services. From custom homes and luxury villas to large-scale commercial complexes and infrastructure development, we deliver projects that exceed expectations in quality, timeline, and sustainability.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-[#2D3748] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional construction services that create lasting value for our clients, communities, and the environment. We are committed to building structures that stand the test of time while promoting sustainable practices and innovative solutions.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-[#2D3748] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading construction company recognized for excellence in quality, innovation, and sustainability. We envision a future where our projects contribute positively to communities and set new standards in the industry.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold text-[#2D3748] mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B7555] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">Q</span>
                </div>
                <h4 className="text-xl font-semibold text-[#2D3748] mb-2">Quality</h4>
                <p className="text-gray-600">
                  Uncompromising commitment to the highest standards in every project we undertake.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B7555] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">I</span>
                </div>
                <h4 className="text-xl font-semibold text-[#2D3748] mb-2">Innovation</h4>
                <p className="text-gray-600">
                  Embracing new technologies and methods to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B7555] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">S</span>
                </div>
                <h4 className="text-xl font-semibold text-[#2D3748] mb-2">Sustainability</h4>
                <p className="text-gray-600">
                  Building with the future in mind, using eco-friendly materials and practices.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold text-[#2D3748] mb-8 text-center">
              Our Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#2D3748] mb-2">Residential Construction</h4>
                <p className="text-gray-600 text-sm">
                  Custom homes, luxury villas, and residential complexes built to perfection.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#2D3748] mb-2">Commercial Development</h4>
                <p className="text-gray-600 text-sm">
                  Office towers, retail spaces, and commercial facilities designed for success.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#2D3748] mb-2">Infrastructure Projects</h4>
                <p className="text-gray-600 text-sm">
                  Roads, bridges, and public infrastructure built to last generations.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#2D3748] mb-2">Renovations & Remodeling</h4>
                <p className="text-gray-600 text-sm">
                  Transforming existing spaces into modern, functional environments.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#2D3748] mb-2">Green Building</h4>
                <p className="text-gray-600 text-sm">
                  Sustainable construction using eco-friendly materials and energy-efficient designs.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#2D3748] mb-2">Project Management</h4>
                <p className="text-gray-600 text-sm">
                  End-to-end project coordination ensuring timely delivery and budget control.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-3xl font-serif font-bold text-[#2D3748] mb-6 text-center">
              Why Choose Us
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#6B7555] mr-2">✓</span>
                    Over 20 years of industry experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6B7555] mr-2">✓</span>
                    Licensed and insured professionals
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6B7555] mr-2">✓</span>
                    Commitment to quality and safety
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6B7555] mr-2">✓</span>
                    Sustainable and eco-friendly practices
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#6B7555] mr-2">✓</span>
                    On-time project delivery
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6B7555] mr-2">✓</span>
                    Transparent communication
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6B7555] mr-2">✓</span>
                    Competitive pricing
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6B7555] mr-2">✓</span>
                    Post-construction support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}