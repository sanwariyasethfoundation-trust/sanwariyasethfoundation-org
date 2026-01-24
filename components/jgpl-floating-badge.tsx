"use client"

import Link from "next/link"
import { Trophy } from "lucide-react"

export default function JGPLFloatingBadge() {
  return (
    <div className="fixed right-4 bottom-8 z-50 flex flex-col gap-2 pointer-events-none">
      <Link 
        href="/events/jgpl-2026"
        className="pointer-events-auto group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-red-600 to-red-800 text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] hover:scale-110 transition-all duration-300 animate-float border-4 border-white/20"
      >
        {/* Seam of the ball effect */}
        <div className="absolute inset-0 border-2 border-dashed border-white/30 rounded-full opacity-50 animate-[spin_8s_linear_infinite]"></div>

        <div className="relative z-10 flex flex-col items-center justify-center">
           <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 drop-shadow-md" />
           <span className="text-[10px] sm:text-xs font-black tracking-tighter leading-none mt-1">JGPL</span>
           <span className="text-[8px] sm:text-[10px] font-bold leading-none">2026</span>
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-blue-900 px-3 py-1.5 rounded-xl font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-x-2 group-hover:translate-x-0">
          Register Now!
          <div className="absolute right-[-6px] top-1/2 -transtext-y-1/2 w-3 h-3 bg-white transform rotate-45"></div>
        </div>
      </Link>
    </div>
  )
}
