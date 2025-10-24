'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter, useParams } from 'next/navigation';
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
  status: 'active' | 'draft' | 'archived';
}

export default function EditSatisfactionItem() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const supabase = createClient();
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [item, setItem] = useState<SatisfactionItem | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fetchItem = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('customer_satisfaction')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setItem(data);
      setPreviewUrl(data.file_type === 'image' ? data.file_url : null);
    } catch (error) {
      console.error('Error fetching item:', error);
      alert('Failed to load item');
      router.push('/admin/satisfaction');
    } finally {
      setLoading(false);
    }
  }, [id, router, supabase]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && item) {
      setSelectedFile(file);
      
      // Update file_type based on file
      if (file.type === 'application/pdf') {
        setItem({ ...item, file_type: 'pdf' });
        setPreviewUrl(null);
      } else if (file.type.startsWith('image/')) {
        setItem({ ...item, file_type: 'image' });
        // Create preview for images
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!item) return;

    setSaving(true);

    try {
      let fileUrl = item.file_url;
      let thumbnailUrl = item.thumbnail_url;

      // If new file is selected, upload it
      if (selectedFile) {
        // Delete old file
        const oldFilePath = item.file_url.split('/satisfaction-files/')[1];
        if (oldFilePath) {
          await supabase.storage.from('satisfaction-files').remove([oldFilePath]);
        }

        // Upload new file
        const fileExt = selectedFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${item.type}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('satisfaction-files')
          .upload(filePath, selectedFile);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('satisfaction-files')
          .getPublicUrl(filePath);

        fileUrl = publicUrl;
        thumbnailUrl = item.file_type === 'image' ? publicUrl : null;
      }

      // Update database
      const { error: dbError } = await supabase
        .from('customer_satisfaction')
        .update({
          title: item.title,
          description: item.description,
          type: item.type,
          file_type: item.file_type,
          file_url: fileUrl,
          thumbnail_url: thumbnailUrl,
          display_order: item.display_order,
          is_featured: item.is_featured,
          status: item.status,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id);

      if (dbError) throw dbError;

      alert('Item updated successfully!');
      router.push('/admin/satisfaction');
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Failed to update item. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Item not found</div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href="/admin/satisfaction"
          className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
        >
          ← Back to Satisfaction Items
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Item</h1>
        <p className="text-gray-600 mt-2">Update certificate, photo, or testimonial</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            required
            value={item.title}
            onChange={(e) => setItem({ ...item, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={item.description}
            onChange={(e) => setItem({ ...item, description: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type *
          </label>
          <select
            required
            value={item.type}
            onChange={(e) =>
              setItem({
                ...item,
                type: e.target.value as 'certificate' | 'photo' | 'testimonial',
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="certificate">Certificate / PDF</option>
            <option value="photo">Photo</option>
            <option value="testimonial">Testimonial</option>
          </select>
        </div>

        {/* Current File Display */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current File
          </label>
          {item.file_type === 'image' ? (
            <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={item.file_url}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">PDF File</p>
                  <a
                    href={item.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* File Upload (Replace) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Replace File (Optional)
          </label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Leave empty to keep current file
          </p>

          {/* New Preview */}
          {selectedFile && previewUrl && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">New Preview:</p>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={previewUrl}
                  alt="New Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {selectedFile && item.file_type === 'pdf' && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                  <p className="text-xs text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Display Order */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Display Order
            </label>
            <input
              type="number"
              value={item.display_order}
              onChange={(e) =>
                setItem({ ...item, display_order: parseInt(e.target.value) })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={item.status}
              onChange={(e) =>
                setItem({
                  ...item,
                  status: e.target.value as 'active' | 'draft' | 'archived',
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>

        {/* Featured */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="is_featured"
            checked={item.is_featured}
            onChange={(e) => setItem({ ...item, is_featured: e.target.checked })}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="is_featured" className="ml-2 text-sm text-gray-700">
            Mark as Featured
          </label>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            disabled={saving}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <Link
            href="/admin/satisfaction"
            className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 text-center transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
