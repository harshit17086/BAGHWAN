'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const navLinks = [
    { href: '#', label: 'Housing Solutions' },
    { href: '#', label: 'Standards' },
    { href: '#', label: 'How it Works' },
    { href: '#', label: 'Portfolio' },
    { href: '#', label: 'Resources' },
  ];

  // Define color classes for easier management
  const headerDefaultBg = 'bg-[#F5F3ED]';
  const headerHoverBg = 'bg-[#4A5C38]';
  const textDefault = 'text-[#2F3D24]';
  const textHover = 'text-white';
  const buttonDefaultBg = 'bg-[#2F3D24]';
  const buttonHoverBg = 'bg-[#C8E86C]';
  const buttonDefaultText = 'text-white';
  const buttonHoverText = 'text-[#2F3D24]';


  return (
    <header 
      className={`fixed top-0 w-full z-50 shadow-sm transition-colors duration-300 ease-in-out ${isHeaderHovered ? headerHoverBg : headerDefaultBg}`}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
    >
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center min-h-[80px]"> {/* Increased min-height for better spacing */}
          {/* Logo */}
            <a href="#" className="flex items-center">
            <div className="relative h-16 w-48"> {/* Increased container size for better logo visibility */}
              <Image 
              src="/logop.png" 
              alt="HRs Logo" 
              width={200} 
              height={80} 
              className={`w-full h-full object-contain transition-all duration-300 ${isHeaderHovered ? 'filter invert brightness-0' : ''}`}
              />
            </div>
            </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors duration-300 font-medium text-sm flex items-center gap-1 ${isHeaderHovered ? textHover : textDefault} hover:opacity-75`}
                >
                  {link.label}
                  <span className="font-light">+</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <a
            href="#"
            className={`hidden lg:block px-8 py-3 rounded-full transition-colors duration-300 font-medium text-sm ${isHeaderHovered ? `${buttonHoverBg} ${buttonHoverText}` : `${buttonDefaultBg} ${buttonDefaultText}`}`}
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
              className={`block w-6 h-0.5 transition-all duration-300 ${isHeaderHovered ? 'bg-white' : 'bg-gray-800'} ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-opacity duration-300 ${isHeaderHovered ? 'bg-white' : 'bg-gray-800'} ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isHeaderHovered ? 'bg-white' : 'bg-gray-800'} ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block transition-colors duration-300 font-medium flex items-center gap-1 ${isHeaderHovered ? textHover : textDefault}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    <span className="font-light">+</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className={`block px-8 py-3 mt-4 rounded-full transition-colors duration-300 text-center font-medium ${isHeaderHovered ? `${buttonHoverBg} ${buttonHoverText}` : `${buttonDefaultBg} ${buttonDefaultText}`}`}
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

