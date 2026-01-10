"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-red-50 pt-20 mt-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8 relative w-32 h-32 mx-auto sm:w-48 sm:h-48 animate-bounce duration-[3000ms]">
            <Image src="/logo.png" alt="Sanwariya Seth Foundation Logo" fill className="object-contain" priority />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-wide text-gray-900 leading-snug">
            <span className="block text-red-600 mb-2 uppercase drop-shadow-sm">Sanwariya Seth Foundation</span>
            <span className="text-cyan-600">Give a Hand,</span> <span className="text-gray-800">Change a Life</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-10 text-gray-600 max-w-3xl mx-auto">
            "Sabse Pehle Lok Seva"
          </p>

          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            Donate Now
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-gray-800" />
      </div>
    </section>
  )
}
