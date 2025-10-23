'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';

interface Certificate {
  id: string;
  type: 'certificate' | 'photo' | 'testimonial';
  file_type: 'image' | 'pdf';
  title: string;
  description: string;
  file_url: string;
  thumbnail_url: string | null;
  display_order: number;
}

export default function CustomerSatisfactionSection() {
  const [selectedItem, setSelectedItem] = useState<Certificate | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'certificates' | 'photos'>('all');
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchCertificates = async () => {
    try {
      const { data, error } = await supabase
        .from('customer_satisfaction')
        .select('*')
        .eq('status', 'active')
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCertificates(data || []);
    } catch (error) {
      console.error('Error fetching satisfaction items:', error);
      // Fallback to sample data if error
      setCertificates([
        {
          id: '1',
          type: 'certificate',
          file_type: 'pdf',
          title: 'ISO 9001:2015 Certification',
          description: 'Quality Management System Certification',
          file_url: '/certificates/iso-cert.jpg',
          thumbnail_url: '/certificates/iso-cert.jpg',
          display_order: 0
        },
        {
          id: '2',
          type: 'photo',
          file_type: 'image',
          title: 'Customer Review - Project Alpha',
          description: 'Residential Complex - Delhi',
          file_url: '/satisfaction/review-1.jpg',
          thumbnail_url: '/satisfaction/review-1.jpg',
          display_order: 1
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredCertificates = certificates.filter(cert => {
    if (activeTab === 'all') return true;
    if (activeTab === 'certificates') return cert.type === 'certificate';
    if (activeTab === 'photos') return cert.type === 'photo' || cert.type === 'testimonial';
    return true;
  });

  const handleViewItem = (cert: Certificate) => {
    setSelectedItem(cert);
    if (cert.file_type === 'pdf') {
      // Open PDF in new tab
      window.open(cert.file_url, '_blank');
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (loading) {
    return (
      <section className="relative bg-[#faf7ed] py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center">
            <div className="text-xl text-[#6B7555]">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#faf7ed] py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
            Customer Satisfaction
          </h2>
          <p className="text-lg md:text-xl text-[#6B7555] max-w-3xl mx-auto mb-12 leading-relaxed">
            Our commitment to excellence is reflected in the trust our clients place in us. 
            Explore our certifications, awards, and customer testimonials.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-8 py-3 rounded-full font-serif text-base md:text-lg font-medium transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-[#3d5320] text-white shadow-lg'
                  : 'bg-white text-[#2F3D24] hover:bg-[#3d5320] hover:text-white border border-[#3d5320]/20'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-8 py-3 rounded-full font-serif text-base md:text-lg font-medium transition-all duration-300 ${
                activeTab === 'certificates'
                  ? 'bg-[#3d5320] text-white shadow-lg'
                  : 'bg-white text-[#2F3D24] hover:bg-[#3d5320] hover:text-white border border-[#3d5320]/20'
              }`}
            >
              Certificates & PDFs
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-full font-serif text-base md:text-lg font-medium transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'bg-[#3d5320] text-white shadow-lg'
                  : 'bg-white text-[#2F3D24] hover:bg-[#3d5320] hover:text-white border border-[#3d5320]/20'
              }`}
            >
              Photos & Testimonials
            </button>
          </div>
        </div>

        {/* Grid of Certificates and Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleViewItem(cert)}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-64 bg-gray-200">
                {cert.file_type === 'image' && cert.thumbnail_url ? (
                  <Image
                    src={cert.thumbnail_url}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-300">
                    <svg
                      className="w-16 h-16 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#3d5320]/0 group-hover:bg-[#3d5320]/80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    {cert.file_type === 'pdf' ? (
                      <div className="text-white">
                        <svg
                          className="w-12 h-12 mx-auto mb-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm font-semibold">View PDF</span>
                      </div>
                    ) : (
                      <div className="text-white">
                        <svg
                          className="w-12 h-12 mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                        <span className="text-sm font-semibold">View Image</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Type Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold font-serif ${
                      cert.file_type === 'pdf'
                        ? 'bg-[#3d5320] text-white'
                        : cert.type === 'testimonial' 
                        ? 'bg-[#2F3D24] text-white'
                        : 'bg-white text-[#2F3D24] border border-[#2F3D24]/30'
                    }`}
                  >
                    {cert.file_type === 'pdf' ? 'PDF' : cert.type === 'testimonial' ? 'Testimonial' : 'Photo'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-serif font-semibold text-[#2F3D24] mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-[#6B7555] leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t-2 border-[#3d5320]/20">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2F3D24] mb-3 font-bold">
              98%
            </h3>
            <p className="text-sm md:text-base text-[#6B7555] font-medium">
              Customer Satisfaction
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2F3D24] mb-3 font-bold">
              25+
            </h3>
            <p className="text-sm md:text-base text-[#6B7555] font-medium">
              Industry Certifications
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2F3D24] mb-3 font-bold">
              500+
            </h3>
            <p className="text-sm md:text-base text-[#6B7555] font-medium">
              Happy Clients
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2F3D24] mb-3 font-bold">
              15+
            </h3>
            <p className="text-sm md:text-base text-[#6B7555] font-medium">
              Awards & Recognition
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Image View */}
      {selectedItem && selectedItem.file_type === 'image' && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-7xl h-full max-h-full bg-transparent rounded-none md:rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-[#3d5320] text-white p-2 md:p-3 rounded-full hover:bg-[#2F3D24] transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image Container - Full screen on mobile, constrained on desktop */}
            <div className="flex-1 relative bg-black/20 min-h-0">
              <Image
                src={selectedItem.file_url}
                alt={selectedItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>

            {/* Image Info - Bottom overlay on mobile, separate section on desktop */}
            <div className="bg-[#faf7ed] p-4 md:p-6 md:bg-[#faf7ed] md:relative">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-[#2F3D24] mb-2 md:mb-3 leading-tight">
                {selectedItem.title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-[#6B7555] leading-relaxed">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
