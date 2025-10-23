-- ============================================================================
-- CONSTRUCTION WEBSITE DATABASE SCHEMA
-- ============================================================================
-- This schema supports:
-- 1. Projects management with images
-- 2. Contact form submissions
-- 3. Admin authentication (handled by Supabase Auth)
-- ============================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- PROJECTS TABLE
-- ============================================================================
-- Stores information about construction projects
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255),
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived', 'draft')),
  featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);

-- ============================================================================
-- PROJECT IMAGES TABLE
-- ============================================================================
-- Stores images associated with projects
CREATE TABLE IF NOT EXISTS project_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  caption TEXT,
  display_order INTEGER DEFAULT 0,
  is_cover BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_project_images_project_id ON project_images(project_id);
CREATE INDEX IF NOT EXISTS idx_project_images_display_order ON project_images(display_order);
CREATE INDEX IF NOT EXISTS idx_project_images_is_cover ON project_images(is_cover);

-- ============================================================================
-- CONTACT SUBMISSIONS TABLE
-- ============================================================================
-- Stores contact form submissions from the website
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(255),
  phone VARCHAR(50),
  service VARCHAR(100),
  query_type VARCHAR(100),
  budget VARCHAR(100),
  location VARCHAR(255),
  message TEXT,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'resolved', 'archived')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- ============================================================================
-- AUTOMATIC TIMESTAMP UPDATES
-- ============================================================================
-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for projects table
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger for contact_submissions table
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================
-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- RLS POLICIES - Public Read Access
-- ============================================================================
-- Allow anyone to read active projects (for public website)
CREATE POLICY "Public can view active projects"
  ON projects FOR SELECT
  USING (status = 'active' OR status = 'completed');

-- Allow anyone to read images for active projects
CREATE POLICY "Public can view project images"
  ON project_images FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = project_images.project_id
      AND (projects.status = 'active' OR projects.status = 'completed')
    )
  );

-- ============================================================================
-- RLS POLICIES - Authenticated Admin Access
-- ============================================================================
-- Admins can do everything with projects
CREATE POLICY "Authenticated users can manage projects"
  ON projects FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Admins can do everything with project images
CREATE POLICY "Authenticated users can manage project images"
  ON project_images FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Admins can view and manage contact submissions
CREATE POLICY "Authenticated users can manage contact submissions"
  ON contact_submissions FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Allow anyone to insert contact submissions (from contact form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- ============================================================================
-- STORAGE BUCKETS (Run these in Supabase Storage section)
-- ============================================================================
-- You'll need to create these buckets in the Supabase Dashboard:
-- 1. 'project-images' bucket (public)
-- 2. 'project-videos' bucket (public)

-- Note: After creating buckets, set them to public and configure policies:
-- Storage Policy for project-images:
--   - Allow public SELECT
--   - Allow authenticated INSERT, UPDATE, DELETE

-- ============================================================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================================================
-- Uncomment to insert sample data

-- INSERT INTO projects (title, description, location, status, featured, display_order) VALUES
-- ('Modern Residential Complex', 'A stunning 50-unit residential development featuring sustainable materials and contemporary design principles.', 'Downtown District', 'active', true, 1),
-- ('Luxury Villa Project', 'Exclusive villa construction with premium finishes, smart home integration, and breathtaking views.', 'Hillside Estate', 'active', true, 2),
-- ('Commercial Office Space', 'State-of-the-art office building with flexible workspaces and energy-efficient systems.', 'Business Park', 'completed', false, 3);

-- ============================================================================
-- HELPFUL QUERIES
-- ============================================================================
-- Get all active projects with their cover image
-- SELECT 
--   p.*,
--   pi.image_url as cover_image
-- FROM projects p
-- LEFT JOIN project_images pi ON p.id = pi.project_id AND pi.is_cover = true
-- WHERE p.status = 'active'
-- ORDER BY p.display_order;

-- Get project with all its images
-- SELECT 
--   p.*,
--   json_agg(
--     json_build_object(
--       'id', pi.id,
--       'image_url', pi.image_url,
--       'caption', pi.caption,
--       'display_order', pi.display_order
--     ) ORDER BY pi.display_order
--   ) as images
-- FROM projects p
-- LEFT JOIN project_images pi ON p.id = pi.project_id
-- WHERE p.id = 'YOUR-PROJECT-ID'
-- GROUP BY p.id;
