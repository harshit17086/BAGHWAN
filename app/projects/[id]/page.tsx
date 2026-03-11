'use client';

import { useEffect, useState } from 'react';
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
  const fetchProject = async () => {
    try {
      // Hardcoded data substitution
      const allProjects = [
        {
          id: '1',
          title: 'Modern Residential Complex',
          description: 'A stunning 50-unit residential development featuring sustainable materials and contemporary design principles. This project incorporated state-of-the-art energy-efficient systems and premium finishes throughout.',
          location: 'Downtown District',
          status: 'completed',
          created_at: new Date().toISOString(),
          images: [
            { id: 'img1', image_url: '/slide1.jpeg', caption: 'Front Elevation', display_order: 1 },
            { id: 'img2', image_url: '/image2.jpeg', caption: 'Interior View', display_order: 2 }
          ]
        },
        {
          id: '2',
          title: 'Commercial Office Tower',
          description: 'A 25-story commercial building with state-of-the-art facilities and energy-efficient systems. Designed for modern businesses requiring flexible workspaces.',
          location: 'Business District',
          status: 'active',
          created_at: new Date().toISOString(),
          images: [
            { id: 'img3', image_url: '/slide2.jpeg', caption: 'Exterior View', display_order: 1 }
          ]
        },
        {
          id: '3',
          title: 'Luxury Villa Estate',
          description: 'Exclusive residential villas with premium finishes and panoramic views of the city. Each villa is uniquely designed to maximize natural light and space.',
          location: 'Hillside Area',
          status: 'completed',
          created_at: new Date().toISOString(),
          images: [
            { id: 'img4', image_url: '/slide3.jpeg', caption: 'Main Entrance', display_order: 1 },
            { id: 'img5', image_url: '/slide4.jpeg', caption: 'Living Area', display_order: 2 }
          ]
        }
      ];

      const foundProject = allProjects.find(p => p.id === projectId);

      if (!foundProject) {
        throw new Error('Project not found');
      }

      setProject(foundProject);
    } catch (error) {
      console.error('Error fetching project:', error);
      alert('Project not found');
      router.push('/projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (projectId) {
      fetchProject();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf7ed]">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh] pt-32">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#3d5320]/20 border-t-[#3d5320] mx-auto"></div>
            <p className="mt-6 text-[#6B7555] font-serif text-lg">Loading project details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="bg-[#faf7ed]">
      <Header />

      {/* Hero Section with Project Title */}
      <section className="relative bg-[#faf7ed] pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#3d5320] hover:text-[#2F3D24] mb-8 font-medium font-serif transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="max-w-5xl">
            <div className="flex items-start justify-between flex-wrap gap-6 mb-6">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2F3D24] mb-4 leading-tight">
                  {project.title}
                </h1>
                {project.location && (
                  <div className="flex items-center gap-2 text-[#6B7555] text-base md:text-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{project.location}</span>
                  </div>
                )}
              </div>
              <div>
                <span className={`px-6 py-2.5 rounded-full text-sm font-semibold font-serif ${project.status === 'active'
                  ? 'bg-[#3d5320] text-white'
                  : 'bg-[#2F3D24] text-white'
                  }`}>
                  {project.status === 'active' ? 'In Progress' : 'Completed'}
                </span>
              </div>
            </div>

            {project.description && (
              <p className="text-base md:text-lg text-[#6B7555] leading-relaxed">
                {project.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Project Images Gallery Section */}
      <section className="relative bg-[#faf7ed] py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          {project.images.length > 0 ? (
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2F3D24] mb-8 md:mb-12">
                Project Gallery
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {project.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image.image_url)}
                    className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <Image
                      src={image.image_url}
                      alt={image.caption || `${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
              <svg className="w-20 h-20 mx-auto mb-4 text-[#6B7555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-serif font-bold text-[#2F3D24] mb-2">No Images Yet</h3>
              <p className="text-[#6B7555] text-lg">Gallery images will be added soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-[#3d5320] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Interested in a Similar Project?
            </h2>
            <p className="text-base md:text-lg mb-8 leading-relaxed opacity-90">
              Let&apos;s discuss how we can bring your construction vision to life with the same quality and dedication.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-white text-[#2F3D24] rounded-full font-semibold font-serif text-lg hover:bg-[#faf7ed] transition-colors duration-300 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-[#3d5320] text-white p-3 rounded-full hover:bg-[#2F3D24] transition-colors shadow-lg z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-7xl h-full max-h-full flex items-center justify-center">
            <div className="relative w-full h-[90vh]">
              <Image
                src={selectedImage}
                alt="Project image"
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
