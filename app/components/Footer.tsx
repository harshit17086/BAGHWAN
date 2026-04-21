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
                src="/finallogo9.png"
                alt="Baghvan Resort"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a2817] max-w-2xl">
              Ready to plan your perfect resort getaway?
            </h2>
          </div>
          <Link
            href="/contact"
            className="bg-[#1a2817] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2F3D24] transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            Book Now
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
              Baghvan
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-3">
              <li><a href="https://www.instagram.com/thebaghvan?igsh=MTVremkxbTczMGRzbA==" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8E86C] transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resort Experiences</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:text-[#C8E86C] transition-colors">Our Amenities</Link></li>
              <li><Link href="/services" className="hover:text-[#C8E86C] transition-colors">Luxury Stays</Link></li>
              <li><Link href="/services" className="hover:text-[#C8E86C] transition-colors">Fine Dining</Link></li>
              <li><Link href="/services" className="hover:text-[#C8E86C] transition-colors">Wildlife Safaris</Link></li>
            </ul>
          </div>


          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About Baghvan</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-[#C8E86C] transition-colors">Our Story</Link></li>
              <li><Link href="/projects" className="hover:text-[#C8E86C] transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:thebaghvanriver@gmail.com" className="hover:text-[#C8E86C] transition-colors">thebaghvanriver@gmail.com</a></li>
              <li><a href="tel:+918171736969" className="hover:text-[#C8E86C] transition-colors">+91 81717 36969</a></li>
              <li><a href="https://wa.me/918171736969" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8E86C] transition-colors">WhatsApp: +91 81717 36969</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
              <p>©{new Date().getFullYear()} Baghvan Resort</p>
              <Link href="/privacy" className="hover:text-[#C8E86C] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#C8E86C] transition-colors">Terms of Use</Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/thebaghvan?igsh=MTVremkxbTczMGRzbA==" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8E86C] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
