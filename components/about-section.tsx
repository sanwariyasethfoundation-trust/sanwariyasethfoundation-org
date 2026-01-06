"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Sanwariya Seth Foundation</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Founded with a mission to create lasting social change, Sanwariya Seth Foundation works tirelessly to
              uplift underprivileged communities across the region.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our vision is a society where every individual has access to quality education, healthcare, and dignity,
              regardless of their economic background.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-600 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower communities through education, healthcare, and compassionate aid programs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-600 mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Transparency, integrity, inclusivity, and impact-driven work define everything we do.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-0 p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-cyan-600 mb-2">50K+</div>
              <p className="text-gray-700 font-medium">Lives Impacted</p>
            </Card>
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
              <p className="text-gray-700 font-medium">Active Volunteers</p>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-0 p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-cyan-600 mb-2">15+</div>
              <p className="text-gray-700 font-medium">Years of Service</p>
            </Card>
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-red-600 mb-2">30+</div>
              <p className="text-gray-700 font-medium">Projects Running</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
