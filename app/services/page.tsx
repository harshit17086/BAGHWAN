'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Service {
  id: string;
  name: string;
  description: string;
  image_url: string;
  display_order: number;
  status: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  // Fallback services if database is empty
  const fallbackServices = useMemo(() => [
    {
      id: '1',
      name: 'Residential Construction',
      description: 'Custom home building with premium materials and modern design principles. From concept to completion, we create dream homes that reflect your lifestyle.',
      image_url: '/slide1.jpeg',
      display_order: 1,
      status: 'active'
    },
    {
      id: '2',
      name: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and commercial facilities built to the highest standards. We ensure functionality meets aesthetic excellence.',
      image_url: '/slide2.jpeg',
      display_order: 2,
      status: 'active'
    },
    {
      id: '3',
      name: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation services. Modern upgrades, structural improvements, and aesthetic enhancements.',
      image_url: '/ppp.jpeg',
      display_order: 3,
      status: 'active'
    },
    {
      id: '4',
      name: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including roads, bridges, and public facilities. Engineering excellence with community impact.',
      image_url: '/slide4.jpeg',
      display_order: 4,
      status: 'active'
    },
    {
      id: '5',
      name: 'Sustainable Building',
      description: 'Eco-friendly construction using green materials and energy-efficient designs. Building for the future with environmental responsibility.',
      image_url: '/slide5.jpeg',
      display_order: 5,
      status: 'active'
    },
    {
      id: '6',
      name: 'Project Management',
      description: 'Comprehensive project management services ensuring timelines, budgets, and quality standards are met. Your peace of mind guaranteed.',
      image_url: '/slide6.jpeg',
      display_order: 6,
      status: 'active'
    }
  ], []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log('Fetching services from database...');
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('status', 'active')
          .order('display_order', { ascending: true });

        if (error) {
          console.error('Error fetching services from database:', error);
          console.log('Falling back to default services...');
          setServices(fallbackServices);
        } else if (data && data.length > 0) {
          console.log(`Successfully fetched ${data.length} services from database:`, data);
          setServices(data);
        } else {
          console.log('No services found in database, using fallback services...');
          setServices(fallbackServices);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        console.log('Falling back to default services...');
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [supabase, fallbackServices]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf7ed]">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#2F3D24] mx-auto"></div>
            <p className="mt-4 text-[#6B7555] text-lg">Loading services...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf7ed]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-[#faf7ed]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2F3D24] mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-[#6B7555] leading-relaxed">
              From residential homes to commercial complexes, we deliver excellence in every project.
              Discover our comprehensive range of construction services designed to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#faf7ed]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#C8E86C]/20 hover:border-[#C8E86C]/40 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image_url}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-[#2F3D24] mb-3 group-hover:text-[#6B7555] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-[#6B7555] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-[#6B7555]">
                      <svg className="w-4 h-4 text-[#C8E86C] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Professional craftsmanship
                    </div>
                    <div className="flex items-center text-sm text-[#6B7555]">
                      <svg className="w-4 h-4 text-[#C8E86C] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Quality materials
                    </div>
                    <div className="flex items-center text-sm text-[#6B7555]">
                      <svg className="w-4 h-4 text-[#C8E86C] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Timely delivery
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-[#2F3D24] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#6B7555] hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
