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
    <section className="relative h-[50vh] sm:h-screen min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900 mt-22">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Red and Yellow Modern International Human Rights Day Instagram Story-1~2.jpg"
          alt="Sanwariya Seth Foundation Team"
          fill
          className="object-contain sm:object-cover sm:object-center object-top"
          priority
        />
        {/* Overlay - Lighter on mobile to see faces, darker on desktop if needed */}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-wide drop-shadow-2xl leading-snug">
            <span className="block text-pink-300 mb-2 uppercase drop-shadow-md">Sanwariya Seth Foundation</span>
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl font-medium mb-12 drop-shadow-md text-gray-200">
            Sabse Pehle Desh Seva
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  )
}
