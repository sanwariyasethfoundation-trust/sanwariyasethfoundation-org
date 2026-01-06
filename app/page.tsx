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
