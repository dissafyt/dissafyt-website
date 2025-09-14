"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Dissafyt</span>
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
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/get-started">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
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
              <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">Get Started</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
