'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  status: string;
  cover_image?: string;
  image_count?: number;
}


export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');

  const allProjects: Project[] = [
    {
      id: '1',
      title: 'Luxury Villa Stays',
      description: 'Experience unparalleled comfort in our thoughtfully designed private villas, surrounded by nature.',
      location: 'Baghvan Resort',
      status: 'completed',
      cover_image: '/property_exteriros/WhatsApp Image 2026-03-10 at 12.36.21 PM.jpeg',
      image_count: 5
    },
    {
      id: '2',
      title: 'Elegant Interiors',
      description: 'Relax in our premium rooms featuring contemporary amenities seamlessly blended with rustic charm.',
      location: 'Baghvan Accommodations',
      status: 'active',
      cover_image: '/property_interiors/WhatsApp Image 2026-03-10 at 12.34.45 PM.jpeg',
      image_count: 3
    },
    {
      id: '3',
      title: 'Serene Landscapes',
      description: 'Immerse yourself in lush greenery, scenic views, and the tranquil atmosphere of our outdoor spaces.',
      location: 'Resort Grounds',
      status: 'completed',
      cover_image: '/property_random/WhatsApp Image 2026-03-10 at 12.36.57 PM.jpeg',
      image_count: 8
    }
  ];

  const projects = allProjects.filter(project => filter === 'all' || project.status === filter);

  // Removed Supabase fetching

  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Our Gallery"
        subtitle="Explore our resort through stunning images that capture the essence of Baghvan."
        backgroundImage="/property_exteriros/WhatsApp Image 2026-03-10 at 12.38.20 PM (2).jpeg"
        height="h-96"
      />

      {/* Filters Section */}
      <section className="relative bg-[#faf7ed] pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            {/* Filters */}
            <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-serif text-sm md:text-base font-medium transition-all duration-300 ${filter === 'all'
                  ? 'bg-[#3d5320] text-white shadow-lg'
                  : 'bg-white text-[#2F3D24] hover:bg-[#3d5320] hover:text-white border border-[#3d5320]/20'
                  }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-serif text-sm md:text-base font-medium transition-all duration-300 ${filter === 'active'
                  ? 'bg-[#3d5320] text-white shadow-lg'
                  : 'bg-white text-[#2F3D24] hover:bg-[#3d5320] hover:text-white border border-[#3d5320]/20'
                  }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-serif text-sm md:text-base font-medium transition-all duration-300 ${filter === 'completed'
                  ? 'bg-[#3d5320] text-white shadow-lg'
                  : 'bg-white text-[#2F3D24] hover:bg-[#3d5320] hover:text-white border border-[#3d5320]/20'
                  }`}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative bg-[#faf7ed] py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Projects Grid */}
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-20 h-20 mx-auto mb-4 text-[#6B7555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2F3D24] mb-3">
                No Projects Found
              </h3>
              <p className="text-base md:text-lg text-[#6B7555]">
                Check back soon to see our amazing construction projects!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Project Image */}
                  <div className="relative h-80 bg-gray-200 overflow-hidden">
                    {project.cover_image ? (
                      <Image
                        src={project.cover_image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-400">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Image Count Badge */}
                    {project.image_count && project.image_count > 0 && (
                      <div className="absolute top-4 right-4 bg-white text-[#2F3D24] px-3 py-1.5 rounded-full text-xs font-semibold font-serif flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        {project.image_count}
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold font-serif ${project.status === 'active'
                        ? 'bg-[#3d5320] text-white'
                        : 'bg-[#2F3D24] text-white'
                        }`}>
                        {project.status === 'active' ? 'In Progress' : 'Completed'}
                      </span>
                    </div>

                    {/* Location on Image */}
                    {project.location && (
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{project.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-[#2F3D24] mb-3 leading-tight group-hover:text-[#3d5320] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#6B7555] mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* View Details Link */}
                    <div className="inline-flex items-center gap-2 text-[#3d5320] font-semibold font-serif hover:gap-3 transition-all duration-300">
                      View Project Details
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
