import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1a2817] text-gray-300">
      {/* CTA Section */}
      <div className="bg-[#C8E86C] py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 relative">
              <Image
                src="/logo12.png"
                alt="HRC Construction"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a2817] max-w-2xl">
              Let&apos;s build that dream home you&apos;ve been planning
            </h2>
          </div>
          <Link 
            href="/contact"
            className="bg-[#1a2817] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2F3D24] transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="text-6xl font-bold text-white mb-4">
              HRC
            </div>
          </div>

          {/* Construction Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Construction Services</h3>
            <ul className="space-y-3">
              <li><Link href="/residential-construction" className="hover:text-[#C8E86C] transition-colors">Residential Construction</Link></li>
              <li><Link href="/commercial-projects" className="hover:text-[#C8E86C] transition-colors">Commercial Projects</Link></li>
              <li><Link href="/custom-homes" className="hover:text-[#C8E86C] transition-colors">Custom Homes</Link></li>
              <li><Link href="/renovations" className="hover:text-[#C8E86C] transition-colors">Renovations</Link></li>
              <li><Link href="/design-build" className="hover:text-[#C8E86C] transition-colors">Design-Build</Link></li>
              <li><Link href="/services" className="hover:text-[#C8E86C] transition-colors">Project Management</Link></li>
              <li><Link href="/green-building" className="hover:text-[#C8E86C] transition-colors">Green Building</Link></li>
              <li><Link href="/infrastructure" className="hover:text-[#C8E86C] transition-colors">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Building Standards */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Building Standards</h3>
            <ul className="space-y-3">
              <li><Link href="/safety-standards" className="hover:text-[#C8E86C] transition-colors">Safety Standards</Link></li>
              <li><Link href="/building-codes" className="hover:text-[#C8E86C] transition-colors">Building Codes</Link></li>
              <li><Link href="/sustainable-materials" className="hover:text-[#C8E86C] transition-colors">Sustainable Materials</Link></li>
              <li><Link href="/energy-efficiency" className="hover:text-[#C8E86C] transition-colors">Energy Efficiency</Link></li>
              <li><Link href="/structural-integrity" className="hover:text-[#C8E86C] transition-colors">Structural Integrity</Link></li>
              <li><Link href="/reviews" className="hover:text-[#C8E86C] transition-colors">Certifications</Link></li>
              <li><Link href="/premium-finishes" className="hover:text-[#C8E86C] transition-colors">Premium Finishes</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/projects" className="hover:text-[#C8E86C] transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-[#C8E86C] transition-colors">About Us</Link></li>
            </ul>
            
            <h3 className="text-white font-semibold text-lg mb-4 mt-8">How it Works</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-[#C8E86C] transition-colors">Our Process</Link></li>
              <li><Link href="/services" className="hover:text-[#C8E86C] transition-colors">Construction Services</Link></li>
            </ul>

            <h3 className="text-white font-semibold text-lg mb-4 mt-8">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/projects" className="hover:text-[#C8E86C] transition-colors">Project Gallery</Link></li>
              <li><Link href="/construction-guides" className="hover:text-[#C8E86C] transition-colors">Construction Guides</Link></li>
              <li><Link href="/contact" className="hover:text-[#C8E86C] transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:hello@hrc.com" className="hover:text-[#C8E86C] transition-colors">hello@hrc.com</a></li>
              <li><Link href="/contact" className="hover:text-[#C8E86C] transition-colors">For Partners</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm">
            <p>©{new Date().getFullYear()} HRC</p>
            <Link href="/privacy" className="hover:text-[#C8E86C] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C8E86C] transition-colors">Terms of Use</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8E86C] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            {/* <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8E86C] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a> */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8E86C] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8E86C] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a> */}
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8E86C] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
            {/* <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8E86C] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
