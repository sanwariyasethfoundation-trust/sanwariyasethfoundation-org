"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-white to-transparent relative overflow-hidden"
    >
      {/* Animated background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Meet Our <span className="text-cyan-500">Core Team</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Dedicated individuals committed to making a real difference in communities
          </p>
        </div>

        {/* Team Member Card */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* President Card */}
          <div
            className={`group transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-[402px] w-full overflow-hidden bg-gradient-to-br from-cyan-100 to-red-50">
                <Image
                  src="/pratham-singh.png"
                  alt="Pratham Singh Kashyap - President"
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info Section */}
              <div className="p-8 relative">
                {/* Badge */}
                <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  President & Founder
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pratham Singh Kashyap</h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  A visionary leader with deep roots in community development. Pratham Singh founded Sanwariya Seth
                  Foundation with a mission to empower underprivileged communities through education, healthcare, and
                  sustainable initiatives. His dedication and compassionate approach have touched countless lives and
                  transformed communities across the region.
                </p>

                {/* Quote */}
                <div className="border-l-4 border-cyan-500 pl-4 text-gray-700 italic">
                  "When we give a hand to someone in need, we not only change their life but also enrich our own. That's
                  the philosophy behind Sanwariya Seth Foundation."
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/pratham-singh-kashyap-04b890267"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-600 font-semibold transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a href="tel:+919621515197" className="text-red-500 hover:text-red-600 font-semibold transition-colors">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h4>
                    <p className="text-gray-600">
                      To create a society where every individual has equal access to education, healthcare, and
                      opportunities for growth, regardless of their economic background.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Core Values</h4>
                    <p className="text-gray-600">
                      Compassion, integrity, transparency, and accountability guide every action we take. We believe in
                      sustainable change and community empowerment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Our Commitment</h4>
                    <p className="text-gray-600">
                      100% of donations go directly to community programs. We maintain complete transparency in all
                      operations and financial reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extended Core Team */}
      <div
        className={`mt-20 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Vice President */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="relative h-80 overflow-hidden">
            <Image
              src="/Screenshot_20251231-153913.Instagram.png"
              alt="Vice-President"
              fill
              className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-cyan-400 font-semibold transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Vice President</h3>
            <p className="text-cyan-600 font-medium mb-3">Leadership & Strategy</p>
            <p className="text-gray-600 text-sm">
              Playing a pivotal role in shaping the strategic direction and ensuring operational excellence.
            </p>
          </div>
        </div>

        {/* Director */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="relative h-80 overflow-hidden">
            <Image
              src="/IMG_20250825_230852_341_1.webp"
              alt="Director"
              fill
              className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <div className="flex gap-4">
                <a href="tel:7007913121" className="text-white hover:text-cyan-400 font-semibold transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Rakesh Kumar Raikwar</h3>
            <p className="text-cyan-600 font-medium mb-3">Director & Senior Advocate</p>
            <p className="text-gray-600 text-sm">
              Overseeing project implementation and ensuring our initiatives reach those who need them most.
            </p>
          </div>
        </div>

        {/* Secretary */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="relative h-80 overflow-hidden">
            <Image
              src="/IMG-20251227-WA0031.jpg"
              alt="Secretary"
              fill
              className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-cyan-400 font-semibold transition-colors">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Secretary</h3>
            <p className="text-cyan-600 font-medium mb-3">Administration & Coordination</p>
            <p className="text-gray-600 text-sm">
              Facilitating smooth communication and efficient administrative workflows for the foundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
