# Customer Satisfaction Setup Guide

## 🎯 Overview
The Customer Satisfaction feature allows you to upload and manage:
- **Certificates** (ISO certifications, awards, etc.)
- **Photos** (project photos, completed work)
- **Testimonials** (customer reviews, appreciation letters)

Files can be either **images**dfdf (JPG, PNG) or **PDFs**.

---

## 📋 Quick Setup Steps

### 1. Create Supabase Storage Bucket

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Navigate to **Storage** → **Create a new bucket**
3. Bucket name: `satisfaction-files`
4. Make it **Public**
5. Click **Create bucket**

### 2. Configure Storage Policies

In the Supabase SQL Editor, run:

```sql
-- Allow public read access
CREATE POLICY "Public can view satisfaction files"
ON storage.objects FOR SELECT
USING (bucket_id = 'satisfaction-files');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated can upload satisfaction files"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'satisfaction-files' 
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to update
CREATE POLICY "Authenticated can update satisfaction files"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'satisfaction-files' 
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to delete
CREATE POLICY "Authenticated can delete satisfaction files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'satisfaction-files' 
  AND auth.role() = 'authenticated'
);
```

### 3. Run Database Migration

The schema has already been added to `supabase/schema.sql`. If you haven't run it yet:

1. Go to Supabase Dashboard → **SQL Editor**
2. Copy the content from `supabase/schema.sql`
3. Find the "CUSTOMER SATISFACTION TABLE" section (around line 162)
4. Run that section, or run the entire file if this is a fresh setup

---

## 🚀 Using the Admin Panel

### Access the Feature

1. Login to admin panel: `http://localhost:3000/admin/login`
2. Click **"Customer Satisfaction"** in the sidebar

### Add New Item

1. Click **"Add New Item"** button
2. Fill in the form:
   - **Title**: Name of the certificate/photo (e.g., "ISO 9001:2015 Certification")
   - **Description**: Brief description
   - **Type**: Choose Certificate, Photo, or Testimonial
   - **File Upload**: Select an image or PDF
   - **Display Order**: Lower numbers appear first (default: 0)
   - **Status**: Active (visible on website), Draft (hidden), or Archived
   - **Featured**: Check to mark as featured
3. Click **"Create Item"**

### Edit Existing Items

1. Click **"Edit"** on any item card
2. Update details or upload a new file
3. Click **"Save Changes"**

### Manage Items

- **Filter by Type**: Use the type filter to show only Certificates, Photos, or Testimonials
- **Filter by Status**: Show Active, Draft, or Archived items
- **Toggle Featured**: Click the star button to feature/unfeature items
- **Change Status**: Use the dropdown to change between Active/Draft/Archived
- **Delete**: Click "Delete" button (this removes the file from storage)

---

## 🎨 Frontend Display

The `CustomerSatisfactionSection` component on your homepage will:

1. **Automatically fetch** all active items from Supabase
2. **Display in a grid** with thumbnails
3. **Show filter tabs**: All, Certificates & PDFs, Photos & Testimonials
4. **Handle clicks**:
   - PDFs: Opens in new tab
   - Images: Shows in modal lightbox
5. **Display stats**: Total items, certificates, photos, testimonials

---

## 📊 Database Schema

### `customer_satisfaction` Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | VARCHAR(255) | Item title |
| description | TEXT | Item description |
| type | VARCHAR(50) | 'certificate', 'photo', or 'testimonial' |
| file_type | VARCHAR(50) | 'image' or 'pdf' |
| file_url | TEXT | Public URL to the file |
| thumbnail_url | TEXT | Thumbnail URL (same as file_url for images, null for PDFs) |
| display_order | INTEGER | Order of display (lower first) |
| is_featured | BOOLEAN | Featured flag |
| status | VARCHAR(50) | 'active', 'draft', or 'archived' |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

---

## 🔧 File Structure

```
app/
  admin/
    satisfaction/
      page.tsx              # List/manage satisfaction items
      new/
        page.tsx            # Create new item
      [id]/
        edit/
          page.tsx          # Edit existing item
  components/
    CustomerSatisfactionSection.tsx  # Frontend display component

supabase/
  schema.sql              # Database schema (includes satisfaction table)
```

---

## ✅ Testing Checklist

1. ✅ Storage bucket created and public
2. ✅ Storage policies configured
3. ✅ Database table created
4. ✅ Can access admin panel
5. ✅ Can upload new certificate/photo
6. ✅ Items appear in admin list
7. ✅ Can edit items
8. ✅ Can delete items
9. ✅ Items appear on homepage
10. ✅ Filters work correctly
11. ✅ PDFs open in new tab
12. ✅ Images show in modal

---

## 🐛 Troubleshooting

### Images not loading
- Check that `satisfaction-files` bucket is **public**
- Verify storage policies are configured
- Check browser console for CORS errors

### Can't upload files
- Verify you're logged in as admin
- Check storage policies allow authenticated uploads
- Check file size limits (default: 50MB in Supabase)

### Items not appearing on homepage
- Verify items have **status = 'active'**
- Check browser console for errors
- Clear cache and hard refresh (Cmd+Shift+R)

---

## 🎉 You're Done!

Your customer satisfaction section is now fully functional with:
- ✅ Admin panel for managing certificates and photos
- ✅ Automatic frontend updates
- ✅ Secure file storage
- ✅ Beautiful modal lightbox for images
- ✅ PDF viewer integration

Need help? Check the main README or SUPABASE_SETUP.md files.
