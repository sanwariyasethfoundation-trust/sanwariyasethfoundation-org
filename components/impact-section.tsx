"use client"

import { useEffect, useRef, useState } from "react"

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const start = Date.now()
    const timer = setInterval(() => {
      const progress = (Date.now() - start) / duration
      if (progress > 1) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(end * progress))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function ImpactSection() {
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

  const stats = [
    { label: "Children Educated", value: 12500, icon: "📚" },
    { label: "Healthcare Beneficiaries", value: 8300, icon: "⚕️" },
    { label: "Meals Distributed", value: 125000, icon: "🍲" },
    { label: "Funds Raised", value: 2500000, format: true, icon: "💰" },
  ]

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600">See the difference we've made together</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center transform transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: isVisible ? `${idx * 150}ms` : "0ms" }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-red-600 mb-2">
                {stat.format ? "₹" : ""}
                {stat.value > 1000 && stat.format
                  ? (stat.value / 100000).toFixed(1) + "M"
                  : stat.value > 1000
                    ? (stat.value / 1000).toFixed(0) + "K"
                    : stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
