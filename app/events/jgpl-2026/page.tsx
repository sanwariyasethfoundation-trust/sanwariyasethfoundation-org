import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Trophy, Calendar, MapPin, Users, Award, Phone, Share2, Medal, Target, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import JGPLMatchSchedule from "@/components/jgpl-schedule"

export const metadata: Metadata = {
  title: "JGPL 2026 | Jhansi Gramin Premier League Cricket Tournament",
  description: "Join the excitement of JGPL 2026! 20-20 Cricket Tournament in Jhansi. 16 Teams, Cash Prizes, and more. Organized by Sanwariya Seth Foundation.",
}

export default function JGPLPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
        {/* Main Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/MainImage.png" 
            alt="JGPL Cricket Tournament 2026" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" /> 
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <div className="inline-block animate-bounce mb-4 bg-yellow-500 text-blue-900 px-4 py-1 rounded-full font-bold text-sm tracking-wider uppercase">
            Cricket Tournament 2026
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Jhansi Gramin <span className="text-cyan-400">Premier League</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light max-w-2xl mx-auto">
            Experience the thrill of 20-20 cricket. The battle for glory begins here!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-blue-700">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">08 Feb - 01 Mar 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-blue-700">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">GIC Stadium, Jhansi (U.P.)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Format</h3>
              <p className="text-slate-600">20-20 Cricket Tournament following professional rules and standards.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Entry Fee</h3>
              <p className="text-slate-600">Completely FREE Entry for all selected teams.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Teams</h3>
              <p className="text-slate-600">16 Elite Teams selected to compete for the ultimate championship.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <Medal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Grand Final</h3>
              <p className="text-slate-600">Witness the final showdown on 01 March 2026.</p>
            </div>
          </div>
          
           {/* Event Info Image */}
           <div className="mt-16 relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
             <Image
               src="/EventInfo.png"
               alt="JGPL Event Details and Info"
               width={1200}
               height={600}
               className="w-full h-auto object-cover"
             />
           </div>
        </div>
      </section>

      {/* Match Schedule */}
      <JGPLMatchSchedule />

      {/* Prizes Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Prizes & <span className="text-blue-600">Rewards</span></h2>
            <p className="text-slate-600 max-w-xl mx-auto">Attractive cash prizes and trophies for the top performers of the tournament.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Winner */}
            <div className="bg-linear-to-br from-yellow-100 to-yellow-50 p-8 rounded-3xl border border-yellow-200 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">CHAMPION</div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-700 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <Trophy className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 text-left">Winner Team</h3>
                  <p className="text-4xl font-extrabold text-yellow-600 text-left mt-2">₹21,000</p>
                  <p className="text-sm text-slate-600 text-left mt-1">+ Trophy</p>
                </div>
              </div>
            </div>

            {/* Runner Up */}
            <div className="bg-linear-to-br from-slate-200 to-slate-100 p-8 rounded-3xl border border-slate-300 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-slate-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">2ND PLACE</div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <Award className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 text-left">Runner-Up</h3>
                  <p className="text-4xl font-extrabold text-slate-600 text-left mt-2">₹11,000</p>
                  <p className="text-sm text-slate-500 text-left mt-1">+ Trophy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <h4 className="font-bold text-slate-700 mb-2">Semi Finalists</h4>
              <p className="text-2xl font-bold text-blue-600">₹7,500</p>
              <p className="text-xs text-slate-500 mt-1">Per Team</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <h4 className="font-bold text-slate-700 mb-2">Last 4 Teams</h4>
              <p className="text-2xl font-bold text-blue-600">₹5,000</p>
              <p className="text-xs text-slate-500 mt-1">Per Team</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center sm:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-slate-700 mb-2">Top 8 Teams</h4>
              <p className="text-2xl font-bold text-blue-600">₹2,500</p>
              <p className="text-xs text-slate-500 mt-1">Per Team</p>
            </div>
          </div>

          {/* Secondary Highlight Image */}
          <div className="max-w-5xl mx-auto my-16 rounded-3xl overflow-hidden shadow-xl">
             <Image
               src="/2ndPrimaryImage.png"
               alt="JGPL Tournament Highlights"
               width={1200}
               height={500}
               className="w-full h-auto object-cover"
             />
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {[
               { title: "Man of the Match", desc: "Every Match" },
               { title: "Best Batsman", desc: "Tournament" },
               { title: "Best Bowler", desc: "Tournament" },
               { title: "Best Fielder", desc: "Tournament" },
               { title: "Man of the Series", desc: "Premium Reward" },
             ].map((award, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Medal className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-slate-800 text-sm">{award.title}</h5>
                  <p className="text-xs text-slate-500">{award.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Organizers & Sponsors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Powered By</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Organizers</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Sanwariya Seth Foundation</h3>
                    <p className="text-slate-600">Event Organizer</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">A-1 Property’s</h3>
                    <p className="text-slate-600">Co-Organizer Jhansi (U.P.)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
               <h3 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-widest">Official Sponsors</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
                 <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                   <Image src="/mainSponsor.png" alt="Main Sponsor" width={200} height={100} className="w-full h-auto object-contain" />
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                   <Image src="/sponsor3.png" alt="Sponsor 3" width={200} height={100} className="w-full h-auto object-contain" />
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                   <Image src="/sponsor4.png" alt="Sponsor 4" width={200} height={100} className="w-full h-auto object-contain" />
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                   <Image src="/sponsor5.png" alt="Sponsor 5" width={200} height={100} className="w-full h-auto object-contain" />
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                   <Image src="/sponsor6.png" alt="Sponsor 6" width={200} height={100} className="w-full h-auto object-contain" />
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                   <Image src="/sponsor7.png" alt="Sponsor 7" width={200} height={100} className="w-full h-auto object-contain" />
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                   <Image src="/sponsor9.png" alt="Sponsor 9" width={200} height={100} className="w-full h-auto object-contain" />
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                   <Image src="/sponsor10.png" alt="Sponsor 10" width={200} height={100} className="w-full h-auto object-contain" />
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                   <Image src="/sponsor11.png" alt="Sponsor 11" width={200} height={100} className="w-full h-auto object-contain" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 -transtext-x-1/2 -transtext-y-1/2 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>

             <div className="relative z-10 text-center">
               <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
               
               <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/30 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Office Address</h4>
                      <p className="text-blue-100">184, Kasai Baba Nainagarh,<br/>Nagra, Jhansi (U.P.)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/30 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Contact Us</h4>
                      <div className="flex flex-col gap-1 text-blue-100">
                        <a href="tel:+917007913121" className="hover:text-white transition-colors">+91 7007913121</a>
                        <a href="tel:+918120124318" className="hover:text-white transition-colors">+91 8120124318</a>
                        <a href="tel:+919621515197" className="hover:text-white transition-colors">+91 9621515197</a>
                      </div>
                    </div>
                  </div>
               </div>
             
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
