"use client"

import { Calendar, Clock, Trophy, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function JGPLMatchSchedule() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const schedule = [
    {
      type: "Opening Match",
      date: "Sunday, 08 February 2026",
      time: "05:00 PM",
      highlight: false,
    },
    {
      type: "League Matches",
      date: "09 to 14 February 2026",
      time: "01:00 PM",
      highlight: false,
    },
    {
      type: "Girls Special Match",
      date: "Sunday, 15 February 2026",
      time: "05:00 PM",
      highlight: true,
      color: "pink",
    },
    {
      type: "League Matches",
      date: "16 to 20 February 2026",
      time: "01:00 PM",
      highlight: false,
    },
    {
      type: "League Match",
      date: "Sunday, 22 February 2026",
      time: "05:00 PM",
      highlight: false,
    },
    {
      type: "1st Semi Final",
      date: "Tuesday, 24 February 2026",
      time: "01:00 PM",
      highlight: true,
      color: "blue",
    },
    {
      type: "2nd Semi Final",
      date: "Thursday, 26 February 2026",
      time: "01:00 PM",
      highlight: true,
      color: "blue",
    },
    {
      type: "Grand Final Match",
      date: "Sunday, 01 March 2026",
      time: "05:00 PM",
      highlight: true,
      color: "gold",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-linear-to-b from-slate-50 to-white relative overflow-hidden min-h-screen">
       {/* Background Decoration */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[10%] top-[20%] w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute right-[10%] bottom-[20%] w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
       </div>

       <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
              <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Tournament Timeline</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Match <span className="text-cyan-500">Schedule</span></h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto relative">
             <div className="space-y-8 relative">
               {schedule.map((match, idx) => (
                  <div 
                    key={idx} 
                    className={`
                      relative flex flex-col items-center
                    `}
                  >
                     {/* Timeline Line Segment connecting to next */}
                     {idx !== schedule.length - 1 && (
                        <div className={`
                           absolute top-1/2 left-1/2 w-1 bg-slate-200 -z-10
                           transition-all duration-1000 ease-out origin-top
                           ${isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'}
                        `} style={{ transitionDelay: `${idx * 200}ms`, height: "calc(100% + 2rem)", transform: "translateX(-50%)" }}></div>
                     )}

                     {/* Content Card with integrated dot */}
                     <div className="w-full max-w-4xl relative"> 
                        <div 
                           className={`
                              bg-white p-6 md:p-8 rounded-2xl border transition-all duration-500 group relative mx-auto
                              ${match.color === 'gold' ? 'border-yellow-200 shadow-lg shadow-yellow-100/50 bg-linear-to-br from-yellow-50 to-white' : 
                                match.color === 'pink' ? 'border-pink-200 shadow-md shadow-pink-100/50' :
                                'border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200'}
                              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                              flex flex-col md:flex-row gap-6 items-center
                           `}
                           style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                           {/* Serial Number / Dot Badge */}
                           <div className={`
                             w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 text-xl font-bold border-4 border-white shadow-md
                             ${match.color === 'gold' ? 'bg-yellow-500 text-white ring-4 ring-yellow-50' : 
                               match.color === 'pink' ? 'bg-pink-500 text-white ring-4 ring-pink-50' :
                               match.color === 'blue' ? 'bg-blue-500 text-white ring-4 ring-blue-50' :
                               'bg-blue-600 text-white ring-4 ring-blue-50'}
                             absolute -top-6 left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mr-4
                           `}>
                             {idx + 1}
                           </div>

                           <div className="flex-1 text-center md:text-left mt-4 md:mt-0 w-full">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                     {match.highlight && (
                                       <span className={`
                                         inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2
                                         ${match.color === 'gold' ? 'bg-yellow-100 text-yellow-700' : 
                                           match.color === 'pink' ? 'bg-pink-100 text-pink-700' :
                                           match.color === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                                       `}>
                                         Feature Event
                                       </span>
                                     )}
                                     <h3 className={`font-bold text-slate-900 ${match.type.includes('Final') ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>{match.type}</h3>
                                </div>
                                <div className={`
                                   hidden md:flex w-12 h-12 rounded-full items-center justify-center shrink-0
                                   ${match.color === 'gold' ? 'bg-yellow-100 text-yellow-600' : 
                                     match.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                                     'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'}
                                   transition-colors
                                `}>
                                   {match.type.includes('Final') ? <Trophy className="w-6 h-6" /> : <Calendar className="w-6 h-6" />}
                                </div>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-8 mt-4 pt-4 border-t border-slate-100/50">
                                   <div className="flex items-center gap-2 text-slate-600">
                                      <Calendar className="w-5 h-5 text-blue-500" />
                                      <span className="font-medium text-lg">{match.date}</span>
                                   </div>
                                   <div className="flex items-center gap-2 text-slate-500">
                                      <Clock className="w-5 h-5 text-blue-500" />
                                      <span className="font-medium">{match.time}</span>
                                   </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
             </div>
          </div>
       </div>
    </section>
  )
}
