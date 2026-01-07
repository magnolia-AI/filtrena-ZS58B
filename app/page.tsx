'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ArrowRight, Droplets, FlaskConical, ShieldCheck, Mail, Phone, MapPin, Search, ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b py-3 shadow-sm" 
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className={cn(
              "text-2xl font-bold tracking-tighter transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}>
              FILTRENA
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Vattenfilter', 'Vattenanalys', 'Support', 'Om oss'].map((item) => (
              <Link 
                key={item}
                href="#" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#256DB5]",
                  isScrolled ? "text-foreground" : "text-white/90"
                )}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className={cn(
              "p-2 transition-colors",
              isScrolled ? "text-foreground hover:text-[#256DB5]" : "text-white hover:text-white/70"
            )}>
              <Search size={20} />
            </button>
            <button className={cn(
              "p-2 transition-colors relative",
              isScrolled ? "text-foreground hover:text-[#256DB5]" : "text-white hover:text-white/70"
            )}>
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-[#256DB5] text-white text-[10px] flex items-center justify-center rounded-full">0</span>
            </button>
            <Button 
                variant={isScrolled ? "default" : "outline"} 
                size="sm" 
                className={cn(
                  "hidden sm:inline-flex rounded-full px-6",
                  !isScrolled && "bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 hover:text-white"
                )}
            >
              Beställ analys
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <Image
            src="/images/hero-water.jpg"
            alt="Pristine water filtration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative mx-auto px-4 pt-20">
            <div className="max-w-2xl text-white">
              <Badge variant="outline" className="text-white border-white/40 mb-6 backdrop-blur-sm bg-white/5 py-1 px-3">
                Marknadsledande i Sverige
              </Badge>
              <h1 className="text-5xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
                Rent vatten direkt från din kran.
              </h1>
              <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
                Vi är en av Sveriges största leverantörer av vattenfilter och vattenanalyser. 
                Expertis och kvalitet för ditt hem eller företag sedan 2003.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#256DB5] hover:bg-[#1e5894] text-white border-none h-14 px-8 rounded-full text-base font-semibold transition-all hover:scale-105 active:scale-95">
                  Utforska våra filter <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 hover:text-white h-14 px-8 rounded-full text-base font-semibold">
                  Beställ vattenanalys
                </Button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-white/50">
            <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>

        {/* Categories / Products Slider */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-[#000000]">Utforska våra produkter</h2>
                <p className="text-[#B0B0B0] mt-4 text-lg max-w-xl">Kvalitetssäkrade lösningar för alla typer av vattenproblem, från hushåll till industriella behov.</p>
              </div>
              <Button variant="link" className="text-[#256DB5] font-bold p-0 flex items-center gap-2 text-lg">
                Visa alla produkter <ArrowRight size={20} />
              </Button>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {[
                  { title: "Vattenanalys", count: "12 produkter", image: "/images/water-analysis.jpg" },
                  { title: "Vattenfilter", count: "85 produkter", image: "/images/water-filter.jpg" },
                  { title: "Magnetitfilter", count: "24 produkter", image: "/images/clean-water-stream.jpg" },
                  { title: "Hydroforer", count: "16 produkter", image: "/images/hero-water.jpg" },
                ].map((item, index) => (
                  <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <Card className="border-none shadow-none group cursor-pointer overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-sm font-medium text-white/80">{item.count}</span>
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-2">
                           <h3 className="text-xl font-bold group-hover:text-[#256DB5] transition-colors">{item.title}</h3>
                           <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-[#256DB5] group-hover:border-[#256DB5] group-hover:text-white transition-all">
                              <ArrowRight size={18} />
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-start gap-4 mt-12">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 border-border" />
                <CarouselNext className="static translate-y-0 h-12 w-12 border-border" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Analysis Preview Section */}
        <section className="py-32 bg-[#E6F0F9]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/50 rounded-full blur-3xl -z-10" />
                <h2 className="text-5xl font-bold tracking-tight mb-8 leading-tight">
                  Hur vet jag om mitt vatten går att dricka?
                </h2>
                <p className="text-xl text-[#000000]/70 mb-10 leading-relaxed max-w-lg">
                  Många vattenproblem varken syns eller luktar, men kan ändå vara skadliga för din hälsa eller fastighet. Ett ackrediterat vattenprov är det enda sättet att få ett garanterat svar.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                   {[
                     { title: "Ackrediterat", desc: "Laboratorieprov enligt högsta standard" },
                     { title: "Snabba svar", desc: "Resultat inom 7-10 arbetsdagar" },
                     { title: "Expertrådgivning", desc: "Personlig genomgång av provsvar" },
                     { title: "Hela Sverige", desc: "Vi täcker alla regioner och kommuner" }
                   ].map((feature, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="h-6 w-6 shrink-0 rounded-full bg-[#256DB5] flex items-center justify-center text-white mt-1">
                          <Droplets size={12} fill="currentColor" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <Button size="lg" className="bg-[#256DB5] hover:bg-[#1e5894] px-10 h-14 rounded-full text-base font-bold shadow-lg shadow-blue-200">
                  Beställ vattenprov här
                </Button>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-[#256DB5]/5 rounded-[40px] blur-2xl -z-10" />
                <Card className="bg-white border-none shadow-[20px_40px_80px_-15px_rgba(0,0,0,0.1)] rounded-[32px] overflow-hidden">
                  <div className="p-10 border-b bg-gray-50/50 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold uppercase tracking-wider text-xs text-[#256DB5] mb-1">Analysrapport</h3>
                      <p className="text-xl font-bold">Laboratoriesvar #49221</p>
                    </div>
                    <Badge className="bg-red-50 text-red-600 hover:bg-red-50 border-red-100 px-4 py-1.5 rounded-full font-bold">Hög järnhalt</Badge>
                  </div>
                  <Table>
                    <TableHeader className="bg-gray-50/50">
                      <TableRow className="border-none">
                        <TableHead className="px-10 py-6 text-[#000000] font-bold">Parameter</TableHead>
                        <TableHead className="text-[#000000] font-bold">Resultat</TableHead>
                        <TableHead className="px-10 text-[#000000] font-bold">Gränsvärde</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { param: "Färg", res: "42", unit: "mg/lPt", limit: "30", alert: false },
                        { param: "pH vid 25°C", res: "7.3", unit: "-", limit: "6.5-9.5", alert: false },
                        { param: "Järn, Fe", res: "0.99", unit: "mg/l", limit: "0.20", alert: true },
                        { param: "Mangan, Mn", res: "0.09", unit: "mg/l", limit: "0.05", alert: false },
                        { param: "Koppar, Cu", res: "0.04", unit: "mg/l", limit: "2.0", alert: false },
                      ].map((row, i) => (
                        <TableRow key={i} className={cn("border-gray-100 transition-colors", row.alert && "bg-red-50/90")}>
                          <TableCell className="px-10 py-5 font-medium">{row.param}</TableCell>
                          <TableCell className={cn("font-bold", row.alert && "text-red-600")}>{row.res} <span className="text-[10px] font-normal text-muted-foreground ml-1">{row.unit}</span></TableCell>
                          <TableCell className="px-10 font-mono text-[11px] text-muted-foreground">{row.limit}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="p-8 bg-gray-50/80 text-center flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck size={16} className="text-[#256DB5]" />
                    <span>Godkänd analys enligt ISO/IEC 17025 standard.</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 relative overflow-hidden bg-[#000000] text-white">
          <div className="absolute inset-0 opacity-40">
             <Image src="/images/clean-water-stream.jpg" alt="Background" fill className="object-cover" />
          </div>
          <div className="container relative mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">Vi hjälper dig hela vägen till rent vatten</h2>
              <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
                Från första analys till installation och service. Våra experter finns här för att svara på dina frågor.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="bg-[#256DB5] hover:bg-[#1e5894] h-16 px-12 rounded-full text-lg font-bold w-full sm:w-auto transition-all hover:scale-105 shadow-xl shadow-blue-600/20">
                  Kontakta support
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-white/90 hover:text-black hover:scale-105 h-16 px-12 rounded-full text-lg font-bold w-full sm:w-auto transition-all flex items-center justify-center gap-3">
                  Hitta återförsäljare
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="mb-8 block">
                <span className="text-3xl font-bold tracking-tighter text-black">FILTRENA</span>
              </Link>
              <p className="text-[#000000]/60 text-lg leading-relaxed max-w-sm mb-10">
                Sveriges ledande expert på vattenrening sedan 2003. Vi tryggar din vattenkvalitet genom vetenskap och service.
              </p>
              <div className="flex gap-2">
                <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#256DB5] hover:text-white transition-all cursor-pointer"><Mail size={18} /></div>
                <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#256DB5] hover:text-white transition-all cursor-pointer"><Phone size={18} /></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8">Kontakt</h4>
              <ul className="space-y-4 text-[#000000]/60">
                <li className="flex gap-3"><MapPin size={18} className="shrink-0 text-[#256DB5]" /> Hammargatan 9, 352 46 Växjö</li>
                <li className="flex gap-3"><Phone size={18} className="shrink-0 text-[#256DB5]" /> 0470-75 99 00</li>
                <li className="flex gap-3"><Mail size={18} className="shrink-0 text-[#256DB5]" /> info@filtrena.se</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8">Filtrena</h4>
              <ul className="space-y-4 text-[#000000]/60">
                <li><Link href="#" className="hover:text-[#256DB5] underline-offset-4 hover:underline transition-all">Om oss</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5] underline-offset-4 hover:underline transition-all">Vattenanalys</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5] underline-offset-4 hover:underline transition-all">Vattenfilter</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5] underline-offset-4 hover:underline transition-all">Karriär</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8">Support</h4>
              <ul className="space-y-4 text-[#000000]/60">
                <li><Link href="#" className="hover:text-[#256DB5] underline-offset-4 hover:underline transition-all">Hitta manualer</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5] underline-offset-4 hover:underline transition-all">Garanti</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5] underline-offset-4 hover:underline transition-all">Vanliga frågor</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5] underline-offset-4 hover:underline transition-all">Logga in</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#B0B0B0]">
            <div className="flex items-center gap-6">
              <p>© Filtrena AB - org.nr 556605-8243</p>
              <div className="flex gap-4">
                <div className="h-6 w-10 bg-gray-100 rounded" />
                <div className="h-6 w-10 bg-gray-100 rounded" />
                <div className="h-6 w-10 bg-gray-100 rounded" />
              </div>
            </div>
            <div className="flex gap-10">
              <Link href="#" className="hover:text-black transition-colors">Integritetspolicy</Link>
              <Link href="#" className="hover:text-black transition-colors">Cookies</Link>
              <Link href="#" className="hover:text-black transition-colors">Villkor</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

