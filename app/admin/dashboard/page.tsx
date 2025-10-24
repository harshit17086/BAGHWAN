'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';

interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  totalContacts: number;
  newContacts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    activeProjects: 0,
    totalContacts: 0,
    newContacts: 0,
  });
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch project stats
        const { count: totalProjects } = await supabase
          .from('projects')
          .select('*', { count: 'exact', head: true });

        const { count: activeProjects } = await supabase
          .from('projects')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'active');

        // Fetch contact stats
        const { count: totalContacts } = await supabase
          .from('contact_submissions')
          .select('*', { count: 'exact', head: true });

        const { count: newContacts } = await supabase
          .from('contact_submissions')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'new');

        setStats({
          totalProjects: totalProjects || 0,
          activeProjects: activeProjects || 0,
          totalContacts: totalContacts || 0,
          newContacts: newContacts || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [supabase]);

  const statCards = [
    {
      title: 'Total Projects',
      value: stats.totalProjects,
      icon: '🏗️',
      color: 'bg-blue-50 text-blue-700',
      link: '/admin/projects',
    },
    {
      title: 'Active Projects',
      value: stats.activeProjects,
      icon: '✅',
      color: 'bg-green-50 text-green-700',
      link: '/admin/projects',
    },
    {
      title: 'Total Inquiries',
      value: stats.totalContacts,
      icon: '📧',
      color: 'bg-purple-50 text-purple-700',
      link: '/admin/contacts',
    },
    {
      title: 'New Inquiries',
      value: stats.newContacts,
      icon: '🔔',
      color: 'bg-orange-50 text-orange-700',
      link: '/admin/contacts',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here&apos;s an overview of your construction website.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
              <div className="h-12 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${card.color} text-2xl mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">
                {card.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900">
                {card.value}
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <Link
              href="/admin/projects?action=new"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#3d5320] text-white hover:bg-[#2F3D24] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Project
            </Link>
            <Link
              href="/admin/contacts"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              View Contact Submissions
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Getting Started
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#C8E86C] mt-1">✓</span>
              <span>Set up your Supabase project and configure environment variables</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C8E86C] mt-1">✓</span>
              <span>Run the database migration script in Supabase SQL Editor</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-300 mt-1">○</span>
              <span>Create storage buckets for project images and videos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-300 mt-1">○</span>
              <span>Add your first construction project</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
