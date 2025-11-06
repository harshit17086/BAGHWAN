'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { href: '#', label: 'Instagram' },
    { href: '#', label: 'YouTube' },
    // { href: '#', label: 'How it Works' },
    { href: '/projects', label: 'Portfolio' },
    { href: '/reviews', label: 'Reviews' },
  ];

  // Define color classes for easier management
  const headerScrollBg = 'bg-[#faf7ed]'; 
  const textScroll = 'text-[#2F3D24]'; 
  const buttonScrollBg = 'bg-[#3d5320]'; // Dark green button on beige
  const buttonScrollText = 'text-white'; // White text on dark button

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${headerScrollBg}`}
    >
      <nav className="container mx-auto px-2 md:px-4 lg:pl-0 lg:pr-2">
        <div className="flex justify-between items-center min-h-[70px]  lg:min-h-[90px]"> {/* Increased responsive min-height for larger logo */}
          {/* Logo */}
            <Link href="/" className="flex items-center -ml-2 md:-ml-8 lg:-ml-16"> {/* Reduced responsive left margin to prevent hiding on zoom */}
            <div className="relative h-16 w-32 md:h-20 md:w-40 lg:h-24 lg:w-54 mt-1 mb-1"> {/* Increased responsive logo size */}
              <Image 
              src="/logo12.png" 
              alt="HRs Logo" 
              fill
              className="object-contain transition-all duration-300"
              />
            </div>
            </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-6 md:space-x-8 lg:space-x-10 pr-4"> {/* Responsive spacing */}
            {navLinks.map((link, index) => (
              <li key={`${link.label}-${index}`}>
                <a
                  href={link.href}
                  className={`transition-colors duration-300 font-medium font-serif text-lg flex items-center gap-1 ${textScroll} hover:opacity-75`}
                >
                  {link.label}
                  <span className="font-light">+</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <a
            href="/contact"
            className={`hidden lg:block px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-full transition-colors duration-300 font-medium font-serif text-lg ${buttonScrollBg} ${buttonScrollText}`}
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 bg-gray-800 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-opacity duration-300 bg-gray-800 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 bg-gray-800 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <a
                    href={link.href}
                    className={`block transition-colors duration-300 font-medium font-serif text-lg flex items-center gap-1 ${textScroll}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    <span className="font-light">+</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/contact"
                  className={`block px-8 py-3 mt-4 rounded-full transition-colors duration-300 text-center font-medium font-serif text-lg ${buttonScrollBg} ${buttonScrollText}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

