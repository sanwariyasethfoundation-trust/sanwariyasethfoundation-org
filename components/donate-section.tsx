"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"

export default function DonateSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(500)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("once")
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

  const presetAmounts = [100, 500, 1000, 5000, 10000]
  const finalAmount = customAmount ? Number.parseInt(customAmount) : selectedAmount

  return (
    <section id="donate" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-red-50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Make a Difference Today</h2>
          <p className="text-xl text-gray-600">
            Your contribution helps us serve more people and create lasting impact
          </p>
        </div>

        <Card
          className={`border-0 bg-white shadow-2xl p-8 sm:p-12 rounded-2xl transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Donation Type */}
          <div className="mb-8">
            <p className="text-gray-700 font-semibold mb-4">Donation Type</p>
            <div className="flex gap-4">
              <button
                onClick={() => setDonationType("once")}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${donationType === "once"
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                One-Time Donation
              </button>
              <button
                onClick={() => setDonationType("monthly")}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${donationType === "monthly"
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                Monthly Support
              </button>
            </div>
          </div>

          {/* Preset Amounts */}
          <div className="mb-8">
            <p className="text-gray-700 font-semibold mb-4">Choose Amount</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount)
                    setCustomAmount("")
                  }}
                  className={`py-3 px-2 rounded-lg font-bold transition-all ${selectedAmount === amount && !customAmount
                      ? "bg-cyan-500 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-600 font-semibold">₹</span>
              <Input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  if (e.target.value) setSelectedAmount(0)
                }}
                className="pl-8 text-lg"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-cyan-50 to-red-50 p-6 rounded-lg mb-8 border border-cyan-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Your {donationType === "once" ? "Donation" : "Monthly Donation"}:</span>
              <span className="text-3xl font-bold text-red-600">₹{finalAmount}</span>
            </div>
            {donationType === "monthly" && (
              <p className="text-sm text-gray-600">You will be charged ₹{finalAmount} every month</p>
            )}
          </div>

          {/* CTA Button */}
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg py-6 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Heart className="w-5 h-5 mr-2" fill="currentColor" />
            Donate Now with Secure Payment
          </Button>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-4">Your donation is secure and 100% tax-deductible</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-700">
              <span className="flex items-center gap-1">🔒 SSL Encrypted</span>
              <span className="flex items-center gap-1">✓ NGO Certified</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
