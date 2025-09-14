"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Dissafyt
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/software" className="text-gray-700 hover:text-orange-500 transition-colors">
              Software
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
              Contact
            </Link>
            <Link
              href="/get-started"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/software"
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Software
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/get-started"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
