"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function VolunteerSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "weekends",
  })
  const [submitted, setSubmitted] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", availability: "weekends" })
        setTimeout(() => setSubmitted(false), 3000)
      } else if (res.status === 409) {
        alert("This phone number is already registered.")
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("Error submitting form.")
    }
  }

  return (
    <section id="volunteer" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Join as a Volunteer</h2>
          <p className="text-xl text-gray-600">Be part of the change. Contribute your time and skills.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <Card
            className={`border-0 bg-white shadow-xl p-8 rounded-xl transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We'll contact you soon with more details about volunteering opportunities.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Availability</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="weekends">Weekends Only</option>
                    <option value="weekdays">Weekdays Only</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 h-auto rounded-lg font-semibold"
                >
                  Join Now
                </Button>
              </form>
            )}
          </Card>

          {/* Benefits */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Volunteer With Us?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Make a Real Impact</h4>
                  <p className="text-gray-600">Your contributions directly help communities in need.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🌱</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Personal Growth</h4>
                  <p className="text-gray-600">Learn new skills and gain meaningful life experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">👥</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Join a Community</h4>
                  <p className="text-gray-600">Connect with passionate individuals who share your values.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">📜</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Recognition</h4>
                  <p className="text-gray-600">Receive certificates and recognition for your service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
