"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Info, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        address: "",
        message: "",
    })

    // We are not submitting to DB as per instruction, just logging.
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Contact Form Submitted:", formData)
        alert("Thank you for contacting us! We will get back to you shortly.")
        setFormData({ name: "", email: "", phone: "", subject: "", address: "", message: "" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            {/* Spacer for fixed header */}
            <div className="h-24 md:h-32"></div>

            <div className="flex-grow container mx-auto px-4 py-12 max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions or want to get involved? We'd love to hear from you. Reach out to our team directly or fill out the form below.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Information Table/Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-4">Get in Touch</h2>

                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Our Office</h3>
                                <p className="text-gray-600 mt-1">
                                    123 Foundation Lane, <br />
                                    Jhansi, Uttar Pradesh, India
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Phone</h3>
                                <p className="text-gray-600 mt-1">
                                    <a href="tel:+919621515197" className="hover:text-red-600 transition-colors">+91 96215 15197</a>
                                </p>
                                <p className="text-gray-600">
                                    <a href="tel:+917007913121" className="hover:text-red-600 transition-colors">+91 70079 13121</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-cyan-100 p-3 rounded-full text-cyan-600 shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Email</h3>
                                <p className="text-gray-600 mt-1">
                                    <a href="mailto:sanwariyaseth2025@gmail.com" className="hover:text-cyan-600 transition-colors">sanwariyaseth2025@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                                <Info className="w-5 h-5 text-gray-400" />
                                <p>
                                    By submitting this form, you agree to our <Link href="/terms-and-conditions" className="text-blue-600 hover:underline font-medium">Terms & Conditions</Link>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="focus:ring-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id="address"
                                    name="address"
                                    placeholder="Your City / Location"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="How can we help?"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="resize-none"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
