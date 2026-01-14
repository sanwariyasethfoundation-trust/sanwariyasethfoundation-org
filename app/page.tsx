"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CausesSection from "@/components/causes-section"
import ImpactSection from "@/components/impact-section"
import DonateSection from "@/components/donate-section"
import GallerySection from "@/components/gallery-section"
import VolunteerSection from "@/components/volunteer-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import TeamSection from "@/components/team-section"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Registration Details Banner */}
      <div className="bg-blue-900 text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-center sm:text-left text-sm sm:text-base font-semibold tracking-wide">
          <span>REG: 185/2025</span>
          <span className="hidden sm:block text-cyan-400">|</span>
          <span>DARPAN ID: UP/2025/0892977</span>
        </div>
      </div>

      <AboutSection />
      <CausesSection />
      <ImpactSection />
      <TeamSection />
      <DonateSection />
      <GallerySection />
      <VolunteerSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
