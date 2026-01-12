"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-lg">❤️</span>
              </div>
              <h3 className="font-bold text-white text-lg">Sanwariya Seth</h3>
            </div>
            <p className="text-sm mb-4">
              Empowering communities through education, healthcare, and compassionate care.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>184, Kasai Baba Nainagarh Nagra, Jhansi (U.P)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>+91 9621515197</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>sanwaryasethfoundation@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#causes" className="hover:text-cyan-400 transition-colors">
                  Our Causes
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-cyan-400 transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cyan-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#volunteer" className="hover:text-cyan-400 transition-colors">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Annual Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com/Sanwariya Seth Foundation Trust"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/Sanwariyas57791"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/sanwariya_sethfoundation"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-400">Subscribe to our newsletter for updates</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p>REG: 185/2025</p>
            <p>&copy; {currentYear} Sanwariya Seth Foundation. All rights reserved.</p>
            <p>DARPAN ID: UP/2025/0892977</p>
          </div>
          <p className="mt-2">Built with ❤️ for social impact</p>

          {/* Credits Section */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {/* Designed By */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700">
                <img
                  src="/image.png"
                  alt="Panthar Infohub"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Designed By</p>
                <h5 className="font-semibold text-white">Panthar Infohub</h5>
                <div className="flex gap-2 mt-1">
                  <a
                    href="https://www.pantharinfohub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="sr-only">Website</span>
                    <MapPin className="w-5 h-5" />
                  </a>
                  <a href="mailto:abhay@panthat.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <span className="sr-only">Email</span>
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* Developed By */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700">
                <img
                  src="/image copy.png"
                  alt="Nikhil Raikwar"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Developed By</p>
                <h5 className="font-semibold text-white">Nikhil Raikwar</h5>
                <div className="flex justify-start gap-2 mt-1">
                  <a
                    href="https://in.linkedin.com/in/nikhil-raikwar-102ab636b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:nikhilraikwar846@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <span className="sr-only">Email</span>
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
