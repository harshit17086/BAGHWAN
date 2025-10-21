'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      category: 'residential',
      location: 'Downtown District',
      year: '2024',
      description: '120-unit luxury apartment complex with modern amenities',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      id: 2,
      title: 'Corporate Headquarters',
      category: 'commercial',
      location: 'Business Park',
      year: '2023',
      description: '15-story office building with sustainable design',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
    {
      id: 3,
      title: 'Shopping Center Renovation',
      category: 'renovation',
      location: 'City Center',
      year: '2023',
      description: 'Complete modernization of 50,000 sq ft retail space',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
    {
      id: 4,
      title: 'Highway Bridge Construction',
      category: 'infrastructure',
      location: 'North Highway',
      year: '2024',
      description: 'New 2-lane bridge spanning 500 meters',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
      id: 5,
      title: 'Luxury Villa Estate',
      category: 'residential',
      location: 'Hillside Views',
      year: '2023',
      description: 'Custom 8,000 sq ft villa with pool and gardens',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
    },
    {
      id: 6,
      title: 'Hospital Expansion',
      category: 'commercial',
      location: 'Medical District',
      year: '2024',
      description: 'New wing with 100 beds and modern facilities',
      image: 'bg-gradient-to-br from-teal-400 to-teal-600',
    },
    {
      id: 7,
      title: 'Historic Building Restoration',
      category: 'renovation',
      location: 'Old Town',
      year: '2023',
      description: 'Careful restoration of 1920s landmark building',
      image: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    },
    {
      id: 8,
      title: 'Industrial Warehouse Complex',
      category: 'infrastructure',
      location: 'Industrial Zone',
      year: '2024',
      description: '200,000 sq ft distribution center',
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'renovation', label: 'Renovations' },
    { value: 'infrastructure', label: 'Infrastructure' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-200">Showcasing excellence in construction</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  filter === category.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-64 ${project.image}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-600 uppercase">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                    View Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Project Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">2M+</div>
              <div className="text-gray-600">Square Feet Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'David Thompson',
                project: 'Residential Complex',
                text: 'Outstanding work! BuildPro delivered our project ahead of schedule and exceeded all expectations.',
              },
              {
                name: 'Maria Garcia',
                project: 'Office Building',
                text: 'Professional team, excellent communication, and top-quality construction. Highly recommended!',
              },
              {
                name: 'James Wilson',
                project: 'Shopping Center',
                text: 'The renovation transformed our space completely. BuildPro&apos;s attention to detail is impressive.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Project Today
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trusted us with their construction projects
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
