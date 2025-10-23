# Supabase Setup Guide for HRC Construction Website

This guide will walk you through setting up Supabase for your construction website's backend.

## 📋 Prerequisites

- Node.js and npm installed
- A Supabase account (free tier is fine)

## 🚀 Step 1: Create a Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Fill in the details:
   - **Project Name**: `construction-website` (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest to your users
   - **Pricing Plan**: Free tier is sufficient to start
4. Click "Create new project" and wait ~2 minutes for setup

## 🔑 Step 2: Get Your API Keys

1. In your Supabase project dashboard, click on the **Settings** icon (⚙️) in the left sidebar
2. Go to **API** section
3. You'll see two important values:
   - **Project URL**: Something like `https://xxxxx.supabase.co`
   - **anon public key**: A long string starting with `eyJ...`

## 📝 Step 3: Configure Environment Variables

1. In your project root, create a `.env.local` file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. **Important**: Add `.env.local` to your `.gitignore` (it should already be there)

## 🗄️ Step 4: Run the Database Migration

1. In your Supabase dashboard, click on the **SQL Editor** icon in the left sidebar
2. Click "New query"
3. Open the file `supabase/schema.sql` from this project
4. Copy the entire contents and paste it into the Supabase SQL Editor
5. Click **"Run"** or press `Ctrl/Cmd + Enter`
6. You should see a success message

This will create:
- ✅ `projects` table
- ✅ `project_images` table
- ✅ `contact_submissions` table
- ✅ Row Level Security (RLS) policies
- ✅ Indexes for performance
- ✅ Automatic timestamp triggers

## 📦 Step 5: Create Storage Buckets

1. In your Supabase dashboard, click on **Storage** in the left sidebar
2. Click "Create a new bucket"
3. Create the first bucket:
   - **Name**: `project-images`
   - **Public bucket**: ✅ Check this
   - Click "Create bucket"
4. Repeat to create a second bucket:
   - **Name**: `project-videos`
   - **Public bucket**: ✅ Check this
   - Click "Create bucket"

### Configure Storage Policies

For each bucket (`project-images` and `project-videos`):

1. Click on the bucket name
2. Go to **Policies** tab
3. Click "New Policy"
4. Choose "Custom" policy
5. Create policies for:

   **Policy 1 - Public Read Access:**
   - Policy name: `Public read access`
   - Allowed operations: SELECT
   - Target roles: `public`
   - USING expression: `true`

   **Policy 2 - Authenticated Insert:**
   - Policy name: `Authenticated users can upload`
   - Allowed operations: INSERT
   - Target roles: `authenticated`
   - WITH CHECK expression: `true`

   **Policy 3 - Authenticated Update:**
   - Policy name: `Authenticated users can update`
   - Allowed operations: UPDATE
   - Target roles: `authenticated`
   - WITH CHECK expression: `true`

   **Policy 4 - Authenticated Delete:**
   - Policy name: `Authenticated users can delete`
   - Allowed operations: DELETE
   - Target roles: `authenticated`
   - USING expression: `true`

## 👤 Step 6: Create an Admin User

1. In your Supabase dashboard, click on **Authentication** in the left sidebar
2. Click on **Users** tab
3. Click "Add user" → "Create new user"
4. Fill in:
   - **Email**: Your admin email
   - **Password**: Create a strong password
   - **Auto Confirm User**: ✅ Check this
5. Click "Create user"

**Important**: Save these credentials - you'll use them to login to `/admin/login`

## 🧪 Step 7: Test Your Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/admin/login`

3. Try logging in with your admin credentials

4. If successful, you should see the admin dashboard!

## ✅ Verification Checklist

- [ ] Supabase project created
- [ ] Environment variables configured in `.env.local`
- [ ] Database schema migrated successfully
- [ ] Storage buckets created (`project-images` and `project-videos`)
- [ ] Storage policies configured
- [ ] Admin user created
- [ ] Successfully logged into admin panel
- [ ] Can access `/admin/dashboard`

## 🔧 Troubleshooting

### "Invalid API key" error
- Double-check your `.env.local` file has the correct values
- Make sure there are no extra spaces or quotes
- Restart your dev server after changing `.env.local`

### Can't login to admin panel
- Verify the admin user was created in Supabase Authentication
- Check that "Auto Confirm User" was enabled
- Try resetting the password in Supabase dashboard

### Database tables not created
- Make sure you ran the entire `schema.sql` file
- Check for any error messages in the SQL Editor
- Verify you clicked "Run" after pasting the SQL

### Storage upload not working
- Confirm buckets are set to "Public"
- Verify storage policies are created correctly
- Check browser console for specific error messages

## 📚 Next Steps

After completing setup:

1. **Add your first project** at `/admin/projects`
2. **Upload project images** to Supabase Storage
3. **View projects on homepage** - they'll automatically appear in WorksSection
4. **Test contact form** - submissions will save to database

## 🆘 Need Help?

If you encounter issues:

1. Check the browser console for error messages
2. Check Supabase logs: Dashboard → Logs
3. Verify all environment variables are set correctly
4. Make sure you're using the correct Supabase URL and key

## 🔐 Security Notes

- ✅ `.env.local` is in `.gitignore` - never commit it to Git
- ✅ Row Level Security (RLS) is enabled on all tables
- ✅ Only authenticated users can modify data
- ✅ Public users can only read active projects
- ✅ Storage buckets have proper access policies

---

**That's it!** Your Supabase backend is now ready to power your construction website. 🎉
