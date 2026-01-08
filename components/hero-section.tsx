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
    <section className="mt-10 min-h-screen bg-gradient-to-br from-cyan-50 via-white to-red-50 flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Logo Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 animate-bounce hover:animate-none transition-all hover:scale-110 hover:rotate-3">
              <Image src="/logo.png" alt="Sanwariya Seth Foundation" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Give a Hand,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600">
              Change a Life
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sanwariya Seth Foundation is committed to empowering communities through education, healthcare, and
            compassionate support. Together, we can make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 text-lg px-8 py-6 h-auto rounded-lg bg-transparent transition-all hover:scale-105"
            >
              Join as Volunteer
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-12 text-sm text-gray-600">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">✓</div>
              <span>100% Transparent</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">✓</div>
              <span>Secure Donations</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">✓</div>
              <span>NGO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cyan-500" />
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}
