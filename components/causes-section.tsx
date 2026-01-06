"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { BookOpen, Stethoscope, Utensils, Users, Heart, Zap } from "lucide-react"

export default function CausesSection() {
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

  const causes = [
    {
      icon: BookOpen,
      title: "Education",
      description: "Providing scholarships and learning resources to underprivileged children.",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Free medical camps and treatment for rural and urban poor communities.",
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Utensils,
      title: "Food Distribution",
      description: "Daily meal programs for children and elderly in need.",
      color: "from-amber-50 to-amber-100",
      iconColor: "text-amber-600",
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Building skills and creating employment opportunities.",
      color: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Heart,
      title: "Women Empowerment",
      description: "Training and support programs for women entrepreneurship.",
      color: "from-pink-50 to-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Zap,
      title: "Disaster Relief",
      description: "Emergency aid and rehabilitation during natural calamities.",
      color: "from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
    },
  ]

  return (
    <section id="causes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Causes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We focus on multiple areas to create comprehensive social impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause, idx) => {
            const Icon = cause.icon
            return (
              <Card
                key={idx}
                className={`bg-gradient-to-br ${cause.color} border-0 p-8 rounded-xl transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isVisible ? `${idx * 100}ms` : "0ms" }}
              >
                <Icon className={`w-12 h-12 ${cause.iconColor} mb-4`} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cause.title}</h3>
                <p className="text-gray-700">{cause.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
