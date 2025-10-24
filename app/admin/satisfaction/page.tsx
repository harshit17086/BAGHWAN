'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import Image from 'next/image';

interface SatisfactionItem {
  id: string;
  title: string;
  description: string;
  type: 'certificate' | 'photo' | 'testimonial';
  file_type: 'image' | 'pdf';
  file_url: string;
  thumbnail_url: string | null;
  display_order: number;
  is_featured: boolean;
  status: 'active' | 'archived' | 'draft';
  created_at: string;
}

export default function SatisfactionManagement() {
  const [items, setItems] = useState<SatisfactionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const supabase = createClient();

  const fetchItems = useCallback(async () => {
    try {
      let query = supabase
        .from('customer_satisfaction')
        .select('*')
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });

      if (filterType !== 'all') {
        query = query.eq('type', filterType);
      }

      if (filterStatus !== 'all') {
        query = query.eq('status', filterStatus);
      }

      const { data, error } = await query;

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching satisfaction items:', error);
      alert('Failed to load items');
    } finally {
      setLoading(false);
    }
  }, [filterType, filterStatus, supabase]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleDelete = async (id: string, fileUrl: string, thumbnailUrl: string | null) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      // Delete files from storage
      const filePath = fileUrl.split('/satisfaction-files/')[1];
      if (filePath) {
        await supabase.storage.from('satisfaction-files').remove([filePath]);
      }

      if (thumbnailUrl) {
        const thumbPath = thumbnailUrl.split('/satisfaction-files/')[1];
        if (thumbPath) {
          await supabase.storage.from('satisfaction-files').remove([thumbPath]);
        }
      }

      // Delete from database
      const { error } = await supabase
        .from('customer_satisfaction')
        .delete()
        .eq('id', id);

      if (error) throw error;

      alert('Item deleted successfully');
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item');
    }
  };

  const toggleFeatured = async (id: string, currentValue: boolean) => {
    try {
      const { error } = await supabase
        .from('customer_satisfaction')
        .update({ is_featured: !currentValue })
        .eq('id', id);

      if (error) throw error;
      fetchItems();
    } catch (error) {
      console.error('Error toggling featured status:', error);
      alert('Failed to update featured status');
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('customer_satisfaction')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
      fetchItems();
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Satisfaction</h1>
          <p className="text-gray-600 mt-2">Manage certificates, photos, and testimonials</p>
        </div>
        <Link
          href="/admin/satisfaction/new"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add New Item
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Type
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="certificate">Certificates</option>
              <option value="photo">Photos</option>
              <option value="testimonial">Testimonials</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-sm text-gray-600">Total Items</div>
          <div className="text-3xl font-bold text-gray-900">{items.length}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-sm text-gray-600">Certificates</div>
          <div className="text-3xl font-bold text-blue-600">
            {items.filter(i => i.type === 'certificate').length}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-sm text-gray-600">Photos</div>
          <div className="text-3xl font-bold text-green-600">
            {items.filter(i => i.type === 'photo').length}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-sm text-gray-600">Testimonials</div>
          <div className="text-3xl font-bold text-purple-600">
            {items.filter(i => i.type === 'testimonial').length}
          </div>
        </div>
      </div>

      {/* Items Grid */}
      {items.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <p className="text-gray-500 text-lg">No items found</p>
          <Link
            href="/admin/satisfaction/new"
            className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
          >
            Add your first item
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gray-100">
                {item.file_type === 'image' ? (
                  <Image
                    src={item.file_url}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-200">
                    <svg
                      className="w-16 h-16 text-gray-400"
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
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.type === 'certificate'
                        ? 'bg-blue-100 text-blue-800'
                        : item.type === 'photo'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {item.type}
                  </span>
                  {item.is_featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <div className="absolute top-2 right-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : item.status === 'draft'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/satisfaction/${item.id}/edit`}
                      className="flex-1 text-center bg-blue-50 text-blue-600 px-3 py-2 rounded hover:bg-blue-100 text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => toggleFeatured(item.id, item.is_featured)}
                      className={`flex-1 px-3 py-2 rounded text-sm ${
                        item.is_featured
                          ? 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.is_featured ? '★ Featured' : '☆ Feature'}
                    </button>
                  </div>
                  
                  <div className="flex gap-2">
                    <select
                      value={item.status}
                      onChange={(e) => updateStatus(item.id, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                    >
                      <option value="active">Active</option>
                      <option value="draft">Draft</option>
                      <option value="archived">Archived</option>
                    </select>
                    <button
                      onClick={() => handleDelete(item.id, item.file_url, item.thumbnail_url)}
                      className="bg-red-50 text-red-600 px-3 py-2 rounded hover:bg-red-100 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
