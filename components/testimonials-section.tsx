"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
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

  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "Beneficiary",
      quote:
        "Sanwariya Seth Foundation helped me pursue my education. I am now a software engineer and give back to the community.",
      avatar: "👨‍💼",
    },
    {
      name: "Priya Sharma",
      role: "Healthcare Beneficiary",
      quote: "The free medical camp saved my mother's life. I am forever grateful to this wonderful foundation.",
      avatar: "👩‍⚕️",
    },
    {
      name: "Anil Singh",
      role: "Volunteer",
      quote: "Volunteering here has been the most rewarding experience. The team's dedication is truly inspiring.",
      avatar: "👨‍🤝‍👨",
    },
    {
      name: "Meera Patel",
      role: "Donor",
      quote: "Every rupee donated goes directly to help those in need. The transparency and impact are remarkable.",
      avatar: "👩‍💼",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Voices of Impact</h2>
          <p className="text-xl text-gray-600">Stories from those whose lives have been transformed</p>
        </div>

        <div
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="relative">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, idx) => (
                <Card
                  key={idx}
                  className={`flex-shrink-0 w-full bg-white border-0 shadow-lg p-8 sm:p-12 rounded-xl transform transition-all duration-500 ${
                    idx === currentSlide ? "opacity-100 translate-x-0" : "absolute opacity-0"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{testimonial.avatar}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-cyan-600 font-semibold text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:translate-x-0 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all hover:shadow-xl z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-0 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all hover:shadow-xl z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all ${
                  idx === currentSlide ? "bg-cyan-500 w-8" : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
