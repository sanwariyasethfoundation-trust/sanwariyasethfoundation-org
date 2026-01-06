"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
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

  // Gallery images - replace with actual images
  const galleryItems = [
    {
      id: 1,
      title: "Education Program",
      description: "Children learning in our community center",
      image: "/children-education-classroom.jpg",
      category: "Education",
    },
    {
      id: 2,
      title: "Healthcare Camp",
      description: "Free medical checkup for rural communities",
      image: "/healthcare-medical-camp.jpg",
      category: "Healthcare",
    },
    {
      id: 3,
      title: "Food Distribution",
      description: "Daily meal program for underprivileged children",
      image: "/food-distribution-meal.jpg",
      category: "Food",
    },
    {
      id: 4,
      title: "Skill Training",
      description: "Women learning vocational skills",
      image: "/women-skill-training.jpg",
      category: "Women Empowerment",
    },
    {
      id: 5,
      title: "Community Work",
      description: "Volunteers helping in community development",
      image: "/volunteers-community-work.jpg",
      category: "Community",
    },
    {
      id: 6,
      title: "Disaster Relief",
      description: "Relief materials distribution during emergencies",
      image: "/disaster-relief-supplies.jpg",
      category: "Relief",
    },
  ]

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Gallery & Stories</h2>
          <p className="text-xl text-gray-600">See the real impact of your support</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <Card
              key={item.id}
              className={`overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${idx * 80}ms` : "0ms" }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-xs font-semibold text-cyan-300 mb-1">{item.category}</p>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for full image view */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <Card className="max-w-4xl w-full border-0 overflow-hidden">
              <Image
                src={galleryItems.find((i) => i.id === selectedImage)?.image || ""}
                alt="Full view"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
