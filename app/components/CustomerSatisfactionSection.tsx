'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Certificate {
  id: number;
  type: 'image' | 'pdf';
  title: string;
  description: string;
  thumbnail: string;
  filePath?: string;
}

export default function CustomerSatisfactionSection() {
  const [selectedItem, setSelectedItem] = useState<Certificate | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'certificates' | 'photos'>('all');

  // Sample data - replace with your actual certificates and photos
  const certificates: Certificate[] = [
    {
      id: 1,
      type: 'pdf',
      title: 'ISO 9001:2015 Certification',
      description: 'Quality Management System Certification',
      thumbnail: '/certificates/iso-cert.jpg',
      filePath: '/certificates/iso-9001.pdf'
    },
    {
      id: 2,
      type: 'image',
      title: 'Customer Review - Project Alpha',
      description: 'Residential Complex - Delhi',
      thumbnail: '/satisfaction/review-1.jpg'
    },
    {
      id: 3,
      type: 'pdf',
      title: 'Excellence Award 2024',
      description: 'Construction Industry Excellence',
      thumbnail: '/certificates/award-2024.jpg',
      filePath: '/certificates/excellence-2024.pdf'
    },
    {
      id: 4,
      type: 'image',
      title: 'Customer Testimonial',
      description: 'Villa Project - Mumbai',
      thumbnail: '/satisfaction/testimonial-1.jpg'
    },
    {
      id: 5,
      type: 'pdf',
      title: 'Safety Compliance Certificate',
      description: 'Workplace Safety Standards',
      thumbnail: '/certificates/safety-cert.jpg',
      filePath: '/certificates/safety-compliance.pdf'
    },
    {
      id: 6,
      type: 'image',
      title: 'Project Completion Photo',
      description: 'Commercial Building - Bangalore',
      thumbnail: '/satisfaction/completion-1.jpg'
    },
    {
      id: 7,
      type: 'image',
      title: 'Client Appreciation',
      description: 'Luxury Apartment - Pune',
      thumbnail: '/satisfaction/appreciation-1.jpg'
    },
    {
      id: 8,
      type: 'pdf',
      title: 'Green Building Certification',
      description: 'Sustainable Construction Award',
      thumbnail: '/certificates/green-cert.jpg',
      filePath: '/certificates/green-building.pdf'
    }
  ];

  const filteredCertificates = certificates.filter(cert => {
    if (activeTab === 'all') return true;
    if (activeTab === 'certificates') return cert.type === 'pdf';
    if (activeTab === 'photos') return cert.type === 'image';
    return true;
  });

  const handleViewItem = (cert: Certificate) => {
    setSelectedItem(cert);
    if (cert.type === 'pdf' && cert.filePath) {
      // Open PDF in new tab
      window.open(cert.filePath, '_blank');
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="relative bg-[#faf7ed] py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
            Customer Satisfaction
          </h2>
          <p className="text-lg md:text-xl text-[#6B7555] max-w-3xl mx-auto mb-8">
            Our commitment to excellence is reflected in the trust our clients place in us. 
            Explore our certifications, awards, and customer testimonials.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-full font-serif transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-[#3d5320] text-white'
                  : 'bg-white text-[#3d5320] hover:bg-[#C8E86C]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-6 py-3 rounded-full font-serif transition-all duration-300 ${
                activeTab === 'certificates'
                  ? 'bg-[#3d5320] text-white'
                  : 'bg-white text-[#3d5320] hover:bg-[#C8E86C]'
              }`}
            >
              Certificates & PDFs
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-full font-serif transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'bg-[#3d5320] text-white'
                  : 'bg-white text-[#3d5320] hover:bg-[#C8E86C]'
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
                <Image
                  src={cert.thumbnail}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#3d5320]/0 group-hover:bg-[#3d5320]/80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    {cert.type === 'pdf' ? (
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
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.type === 'pdf'
                        ? 'bg-[#C8E86C] text-[#2F3D24]'
                        : 'bg-[#3d5320] text-white'
                    }`}
                  >
                    {cert.type === 'pdf' ? 'PDF' : 'Photo'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-serif font-semibold text-[#2F3D24] mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-[#6B7555]">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#3d5320]/20">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-serif text-[#2F3D24] mb-2">
              98%
            </h3>
            <p className="text-sm md:text-base text-[#6B7555]">
              Customer Satisfaction
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-serif text-[#2F3D24] mb-2">
              25+
            </h3>
            <p className="text-sm md:text-base text-[#6B7555]">
              Industry Certifications
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-serif text-[#2F3D24] mb-2">
              500+
            </h3>
            <p className="text-sm md:text-base text-[#6B7555]">
              Happy Clients
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-serif text-[#2F3D24] mb-2">
              15+
            </h3>
            <p className="text-sm md:text-base text-[#6B7555]">
              Awards & Recognition
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Image View */}
      {selectedItem && selectedItem.type === 'image' && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-[#3d5320] text-white p-2 rounded-full hover:bg-[#2F3D24] transition-colors"
            >
              <svg
                className="w-6 h-6"
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

            {/* Image */}
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedItem.thumbnail}
                alt={selectedItem.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="p-6 bg-[#faf7ed]">
              <h3 className="text-2xl font-serif font-semibold text-[#2F3D24] mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-[#6B7555]">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
