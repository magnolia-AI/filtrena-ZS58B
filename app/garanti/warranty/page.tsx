'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck, CheckCircle2, FileText, Droplets, Search, ShoppingCart, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function WarrantyPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation - Reusing the enhanced header pattern */}
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-4 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]" 
            : "bg-transparent py-7"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6",
              isScrolled ? "bg-[#256DB5]" : "bg-white/20 backdrop-blur-md"
            )}>
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <span className={cn(
              "text-xl font-black tracking-[0.2em] transition-all duration-500",
              isScrolled ? "text-black" : "text-white"
            )}>
              FILTRENA
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            {['Vattenfilter', 'Vattenanalys', 'Support', 'Om oss'].map((item) => (
              <Link 
                key={item}
                href="#" 
                className={cn(
                  "text-[13px] uppercase tracking-widest font-bold transition-all duration-300 hover:text-[#256DB5] relative group",
                  isScrolled ? "text-black/70" : "text-white/90"
                )}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#256DB5] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 mr-2">
              <button className={cn(
                "p-2.5 rounded-full transition-all duration-300 hover:bg-black/5",
                isScrolled ? "text-black" : "text-white hover:bg-white/10"
              )}>
                <Search size={19} />
              </button>
              <button className={cn(
                "p-2.5 rounded-full transition-all duration-300 relative group hover:bg-black/5",
                isScrolled ? "text-black" : "text-white hover:bg-white/10"
              )}>
                <ShoppingCart size={19} />
                <span className="absolute top-1.5 right-1.5 h-4 w-4 bg-[#256DB5] text-white text-[9px] font-bold flex items-center justify-center rounded-full ring-2 ring-background group-hover:scale-110 transition-transform">0</span>
              </button>
            </div>
            <Button 
                variant={isScrolled ? "default" : "outline"} 
                size="sm" 
                className={cn(
                  "hidden sm:inline-flex rounded-full px-7 h-11 text-[13px] uppercase tracking-widest font-bold transition-all duration-500 shadow-lg shadow-transparent",
                  isScrolled 
                    ? "bg-[#256DB5] hover:bg-[#1e5894] border-none shadow-[#256DB5]/20" 
                    : "bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-black hover:border-white"
                )}
            >
              Analys
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative h-[60vh] flex items-center overflow-hidden bg-black">
          <Image
            src="/images/hero-water.jpg"
            alt="Warranty and Quality"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="container relative mx-auto px-6 pt-20">
            <div className="max-w-3xl">
              <Badge className="bg-[#256DB5] text-white mb-6 py-1 px-4 rounded-full border-none">
                Trygghet & Kvalitet
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-[0.9]">
                Garantivillkor & <br />Product Warranty
              </h1>
              <p className="text-xl text-white/80 max-w-xl leading-relaxed">
                Vi står för kvaliteten i varje droppe. Upptäck våra marknadsledande garantier som skyddar din investering och ditt vatten.
              </p>
            </div>
          </div>
        </section>

        {/* Warranty Content */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-16">
                <div>
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <ShieldCheck className="text-[#256DB5] h-8 w-8" />
                    Vår Trygghetsgaranti
                  </h2>
                  <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                    <p>
                      Hos Filtrena är vi stolta över våra produkter. Vi erbjuder omfattande garantier på alla våra vattenfilterlösningar för att säkerställa att du får rent vatten under många år framöver.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 my-10">
                      {[
                        { title: "20 års funktionsgaranti", text: "Gäller på våra filtertankar och tryckkärl." },
                        { title: "5 års elektronikgaranti", text: "Gäller på alla styrhuvuden och elektronik." },
                        { title: "Nöjdhetsgaranti", text: "Vi viker oss inte förrän ditt vatten är rent." },
                        { title: "Snabb support", text: "Personlig teknisk rådgivning vid alla behov." },
                      ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-[#E6F0F9]/50 border border-[#E6F0F9]">
                          <CheckCircle2 className="text-[#256DB5] mb-4 h-6 w-6" />
                          <h3 className="text-black font-bold mb-2">{item.title}</h3>
                          <p className="text-sm">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-black">
                    <FileText className="text-[#256DB5] h-8 w-8" />
                    Fullständiga Villkor
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Installation måste utföras av auktoriserad fackman.",
                      "Årliga servicekontroller rekommenderas för optimerad livslängd.",
                      "Garantin omfattar fabrikationsfel och materialbrister.",
                      "Slitagedelar omfattas av specifika användningsperioder."
                    ].map((text, i) => (
                      <div key={i} className="flex gap-4 p-4 border-b border-slate-100 last:border-none">
                        <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-xs font-bold">{i+1}</div>
                        <p className="text-slate-600">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar / CTA */}
              <div className="space-y-8">
                <Card className="bg-black text-white border-none p-8 rounded-[2rem] sticky top-32 transition-transform hover:scale-[1.02]">
                  <h3 className="text-2xl font-bold mb-4">Behöver du hjälp med ett garantiärende?</h3>
                  <p className="text-white/70 mb-8 text-sm leading-relaxed">
                    Vårt supportteam är redo att assistera dig. Ha ditt ordernummer eller serienummer redo för snabbare hantering.
                  </p>
                  <Button className="w-full bg-[#256DB5] hover:bg-[#1e5894] h-12 rounded-full font-bold">
                    Kontakta Support
                  </Button>
                </Card>
                
                <div className="p-8 border border-slate-100 rounded-[2rem] space-y-6">
                  <h3 className="font-bold text-lg">Dokumentation</h3>
                  <div className="space-y-3">
                    {["Produktkatalog.pdf", "Installationsguide.pdf", "Skötselråd.pdf"].map((doc) => (
                      <button key={doc} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium border border-transparent hover:border-slate-200 group">
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-slate-400 group-hover:text-[#256DB5]" />
                          {doc}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#256DB5] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (Simplified) */}
      <footer className="bg-slate-50 border-t py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#256DB5] flex items-center justify-center">
                <Droplets className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-widest">FILTRENA</span>
            </div>
            <p className="text-slate-500 max-w-sm">
              Sveriges ledande expert på vattenrening för hushåll, lantbruk och industri. Vi gör vatten säkert, rent och välsmakande.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Länkar</h4>
                <ul className="text-slate-500 space-y-3 text-sm">
                  <li><Link href="/" className="hover:text-[#256DB5] transition-colors">Vattenfilter</Link></li>
                  <li><Link href="#" className="hover:text-[#256DB5] transition-colors">Vattenanalys</Link></li>
                  <li><Link href="/garanti/warranty" className="hover:text-[#256DB5] transition-colors font-medium text-[#256DB5]">Garantivillkor</Link></li>
                  <li><Link href="#" className="hover:text-[#256DB5] transition-colors">Support</Link></li>
                </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Kontakt</h4>
            <p className="text-slate-500 text-sm">
              Filtrena AB<br />
              Storgatan 1, Stockholm<br />
              info@filtrena.se
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


