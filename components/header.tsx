"use client"

import { useState, useEffect } from "react"
import { Menu, X, Facebook, Instagram, Twitter } from "lucide-react"
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
    { label: "Gallery", href: "#gallery" },
    { label: "Volunteer", href: "#volunteer" },
  ]

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Bar with IDs */}
      <div className="bg-white py-2 border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-8 text-sm font-medium text-blue-900">
          <span>Niti Aayog Darpan ID: UP/2025/0892977</span>
          <span>80G Number: AAHAG4930BF20241</span>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 relative shrink-0">
                <Image src="/logo.png" alt="Sanwariya Seth Foundation Logo" fill className="object-contain" priority />
              </div>
            </div>

            {/* Actions Container (Socials + Donate + Menu) */}
            <div className="flex items-center gap-2 sm:gap-4 md:gap-8">

              {/* Social Icons (Visible on Mobile & Desktop) */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Logo Box (Hidden on small mobile if needed, but keeping for now) */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-900 rounded-lg flex items-center justify-center transform rotate-45 hover:rotate-0 transition-all duration-300 hidden xs:flex">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white transform -rotate-45"></div>
                </div>

                <a href="https://twitter.com/Sanwariyas57791" target="_blank" rel="noreferrer" className="bg-sky-500 p-1.5 sm:p-2 rounded-lg text-white hover:scale-110 transition-transform">
                  <Twitter className="w-4 h-4 sm:w-6 sm:h-6" />
                </a>
                <a href="https://instagram.com/sanwariya_sethfoundation" target="_blank" rel="noreferrer" className="bg-linear-to-tr from-yellow-400 via-red-500 to-purple-500 p-1.5 sm:p-2 rounded-lg text-white hover:scale-110 transition-transform">
                  <Instagram className="w-4 h-4 sm:w-6 sm:h-6" />
                </a>
                <a href="https://facebook.com/Sanwariya Seth Foundation Trust" target="_blank" rel="noreferrer" className="bg-blue-600 p-1.5 sm:p-2 rounded-lg text-white hover:scale-110 transition-transform">
                  <Facebook className="w-4 h-4 sm:w-6 sm:h-6" />
                </a>
              </div>

              {/* Desktop Navigation (Hidden on Mobile) */}
              <nav className="hidden lg:flex items-center gap-6">
                {/* Can put nav items here if we want them next to icons, or keep them hidden solely in hamburger? 
                     The original design had them separate. Let's keep them hidden on mobile/tablet and use hamburger. 
                     For desktop, we previously had them in a separate block. 
                     Wait, the prompt asks to make icons visible. 
                     Let's keep navItems hidden on md/mobile and show only on lg.
                 */}
              </nav>

              {/* Donate Button (Visible on Mobile & Desktop) */}
              <Button
                className="bg-pink-400 hover:bg-pink-500 text-white rounded-full w-14 h-14 sm:w-24 sm:h-24 flex flex-col items-center justify-center gap-0 sm:gap-1 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 shrink-0"
              >
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-none">Donate</span>
                <span className="text-[10px] sm:text-sm font-bold leading-none">NOW</span>
              </Button>

              {/* Hamburger Menu Button */}
              <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X className="w-6 h-6 sm:w-8 sm:h-8 text-blue-900" /> : <Menu className="w-6 h-6 sm:w-8 sm:h-8 text-blue-900" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isOpen && (
            <nav className="border-t border-gray-100 mt-4 pb-4 space-y-3 animate-in slide-in-from-top-2">
              {/* Mobile IDs */}
              <div className="text-xs text-center text-gray-500 my-4 space-y-1 bg-gray-50 py-2">
                <p>REG: 185/2025</p>
                <p>80G Number: AAHAG4930BF20241</p>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-cyan-500 py-2 text-sm font-medium text-center hover:bg-gray-50 bg-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
