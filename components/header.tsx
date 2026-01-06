"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Causes", href: "#causes" },
    { label: "Impact", href: "#impact" },
    { label: "Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Donate", href: "#donate" },
    { label: "Gallery", href: "#gallery" },
    { label: "Volunteer", href: "#volunteer" },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 relative flex-shrink-0">
              <Image src="/logo.png" alt="Sanwariya Seth Foundation Logo" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm text-red-600">SANWARIYA SETH</span>
              <span className="text-xs text-cyan-600">Foundation</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-cyan-500 transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <Button variant="outline" className="border-cyan-500 text-cyan-600 hover:bg-cyan-50 bg-transparent">
              Volunteer
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white">Donate Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3 animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-cyan-500 py-2 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full border-cyan-500 text-cyan-600 bg-transparent">
                Volunteer
              </Button>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Donate Now</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
