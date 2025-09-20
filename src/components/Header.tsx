'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              VLT Services
            </Link>
            <span className="ml-2 text-sm text-gray-600">Déménagement & Transport</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/tarifs" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tarifs
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-blue-600 transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Menu Mobile Button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-blue-600 hover:border-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Accueil
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/tarifs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Tarifs
              </Link>
              <Link href="/a-propos" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                À propos
              </Link>
              <Link href="/contact" className="block px-3 py-2 bg-blue-600 text-white rounded-lg">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}