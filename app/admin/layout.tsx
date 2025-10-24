'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { User } from '@supabase/supabase-js';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  // Skip auth check for login page
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    // Don't check auth on login page
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);

      if (!user) {
        router.push('/admin/login');
      }
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        router.push('/admin/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [router, supabase, isLoginPage]);

  // For login page, just render children without layout
  if (isLoginPage) {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf7ed] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2F3D24] mx-auto"></div>
          <p className="mt-4 text-[#6B7555]">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render admin content if no user (will redirect)
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#faf7ed]">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-[#C8E86C] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="relative h-10 w-20">
                <Image
                  src="/logop.png"
                  alt="HRC"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-serif font-bold text-[#2F3D24]">
                Admin Panel
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-[#6B7555]">
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-[#2F3D24] text-white rounded-lg hover:bg-[#6B7555] transition-colors text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar and Content */}
      <div className="relative">
        {/* Sidebar Trigger Area */}
        <div className="fixed left-0 top-16 h-[calc(100vh-64px)] w-16 hover:w-64 bg-white border-r border-[#C8E86C] shadow-sm z-40 transition-all duration-300 group/sidebar overflow-hidden peer">
          {/* Collapsed Sidebar (Icons Only) */}
          <nav className="p-2 space-y-2 group-hover/sidebar:opacity-0 group-hover/sidebar:pointer-events-none transition-opacity duration-300">
            <Link
              href="/admin/dashboard"
              className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
              title="Dashboard"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>

            <Link
              href="/admin/projects"
              className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
              title="Projects"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </Link>

            <Link
              href="/admin/contacts"
              className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
              title="Contact Submissions"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>

            <Link
              href="/admin/satisfaction"
              className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
              title="Customer Satisfaction"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </Link>

            <Link
              href="/admin/services"
              className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
              title="Services"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>

            <div className="pt-4 mt-4 border-t border-[#C8E86C]">
              <Link
                href="/"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
                title="View Website"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </nav>

          {/* Expanded Sidebar (Full Navigation) */}
          <aside className="opacity-0 group-hover/sidebar:opacity-100 pointer-events-none group-hover/sidebar:pointer-events-auto absolute left-0 top-0 w-64 bg-white border-r border-[#C8E86C] min-h-[calc(100vh-64px)] shadow-sm transition-opacity duration-300">
            <nav className="p-4 space-y-2">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-medium">Dashboard</span>
              </Link>

              <Link
                href="/admin/projects"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-medium">Projects</span>
              </Link>

              <Link
                href="/admin/contacts"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Contact Submissions</span>
              </Link>

              <Link
                href="/admin/satisfaction"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="font-medium">Customer Satisfaction</span>
              </Link>

              <Link
                href="/admin/services"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">Services</span>
              </Link>

              <div className="pt-4 mt-4 border-t border-[#C8E86C]">
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#C8E86C] hover:text-[#2F3D24] transition-all duration-200 text-[#6B7555] group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="font-medium">View Website</span>
                </Link>
              </div>
            </nav>
          </aside>
        </div>

        {/* Main Content */}
        <main className="ml-16 peer-hover:ml-64 p-8 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}
