'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const supabase = createClient();

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        let query = supabase
          .from('projects')
          .select(`
            id,
            title,
            description,
            location,
            status,
            project_images!project_images_project_id_fkey(image_url, is_cover)
          `)
          .in('status', ['active', 'completed'])
          .order('display_order', { ascending: true });

        if (filter !== 'all') {
          query = query.eq('status', filter);
        }

        const { data, error } = await query;

        if (error) throw error;

        const projectsWithImages = data?.map((project: any) => {
          const coverImage = project.project_images?.find((img: any) => img.is_cover);
          return {
            id: project.id,
            title: project.title,
            description: project.description || '',
            location: project.location || '',
            status: project.status,
            cover_image: coverImage?.image_url || project.project_images?.[0]?.image_url,
            image_count: project.project_images?.length || 0,
          };
        }) || [];

        setProjects(projectsWithImages);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [filter, supabase]);

  return (
    <div className="min-h-screen bg-[#faf7ed]">
      <Header />
      
      <div className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-4">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-[#3d5320] font-serif max-w-2xl mx-auto">
            Explore our portfolio of exceptional construction projects that showcase our commitment to quality and innovation.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === 'all'
                ? 'bg-[#3d5320] text-white'
                : 'bg-white text-[#3d5320] hover:bg-gray-100'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === 'active'
                ? 'bg-[#3d5320] text-white'
                : 'bg-white text-[#3d5320] hover:bg-gray-100'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === 'completed'
                ? 'bg-[#3d5320] text-white'
                : 'bg-white text-[#3d5320] hover:bg-gray-100'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏗️</div>
            <h3 className="text-2xl font-serif font-bold text-[#2F3D24] mb-2">
              No Projects Yet
            </h3>
            <p className="text-[#3d5320]">
              Check back soon to see our amazing construction projects!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  {project.cover_image ? (
                    <Image
                      src={project.cover_image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {/* Image Count Badge */}
                  {project.image_count && project.image_count > 0 && (
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      📷 {project.image_count}
                    </div>
                  )}
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === 'active' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {project.status === 'active' ? 'In Progress' : 'Completed'}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-[#2F3D24] mb-2 group-hover:text-[#3d5320] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#3d5320] mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  {project.location && (
                    <div className="flex items-center gap-2 text-[#3d5320]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{project.location}</span>
                    </div>
                  )}
                  
                  <div className="mt-4 flex items-center text-[#3d5320] group-hover:text-[#2F3D24] font-medium">
                    View Project Details
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
