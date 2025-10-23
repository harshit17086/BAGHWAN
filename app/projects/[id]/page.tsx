'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface ProjectImage {
  id: string;
  image_url: string;
  caption?: string;
  display_order: number;
}

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  status: string;
  created_at: string;
  images: ProjectImage[];
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params?.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .select('*')
        .eq('id', projectId)
        .single();

      if (projectError) throw projectError;

      const { data: imagesData, error: imagesError } = await supabase
        .from('project_images')
        .select('*')
        .eq('project_id', projectId)
        .order('display_order', { ascending: true });

      if (imagesError) throw imagesError;

      setProject({
        ...projectData,
        images: imagesData || [],
      });
    } catch (error) {
      console.error('Error fetching project:', error);
      alert('Project not found');
      router.push('/projects');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf7ed] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#3d5320] mx-auto"></div>
          <p className="mt-4 text-[#3d5320] font-serif text-lg">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#faf7ed]">
      <Header />

      <div className="container mx-auto px-6 mt-16 py-16">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[#3d5320] hover:text-[#2F3D24] mb-8 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2F3D24] mb-4">
                {project.title}
              </h1>
              {project.location && (
                <div className="flex items-center gap-2 text-[#3d5320] text-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {project.location}
                </div>
              )}
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-bold ${
              project.status === 'active' 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-500 text-white'
            }`}>
              {project.status === 'active' ? 'In Progress' : 'Completed'}
            </span>
          </div>

          {project.description && (
            <p className="text-lg text-[#3d5320] max-w-4xl leading-relaxed">
              {project.description}
            </p>
          )}
        </div>

        {/* Project Images Gallery */}
        {project.images.length > 0 ? (
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#2F3D24] mb-6">
              Project Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image.image_url)}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer bg-gray-200"
                >
                  <Image
                    src={image.image_url}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl">
            <div className="text-6xl mb-4">📷</div>
            <p className="text-[#3d5320] text-lg">No images available for this project yet.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-[#3d5320] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Interested in a Similar Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your construction vision to life with the same quality and dedication.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#C8E86C] text-[#2F3D24] rounded-full font-bold text-lg hover:bg-[#b5d655] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <Footer />

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Project image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
