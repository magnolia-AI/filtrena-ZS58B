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
import { ArrowRight, Droplets, FlaskConical, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-primary">FILTRENA</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Vattenfilter</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Vattenanalys</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Support</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Om oss</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="default" size="sm" className="hidden sm:inline-flex">Beställ analys</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <Image
            src="/images/hero-water.jpg"
            alt="Pristine water filtration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-2xl text-white">
              <Badge variant="outline" className="text-white border-white mb-6 backdrop-blur-sm">
                Marknadsledande i Sverige
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                Rent vatten direkt från din kran.
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                Vi är en av Sveriges största leverantörer av vattenfilter och vattenanalyser. 
                Expertis och kvalitet för ditt hem eller företag.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#256DB5] hover:bg-[#1e5894] text-white border-none h-14 px-8">
                  Utforska våra filter <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 h-14 px-8">
                  Beställ vattenanalys
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories / Products Slider */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#000000]">Utforska våra produkter</h2>
                <p className="text-[#B0B0B0] mt-2">Kvalitetssäkrade lösningar för alla typer av vattenproblem.</p>
              </div>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { title: "Vattenanalys", icon: <FlaskConical className="h-6 w-6" />, image: "/images/water-analysis.jpg" },
                  { title: "Vattenfilter", icon: <Droplets className="h-6 w-6" />, image: "/images/water-filter.jpg" },
                  { title: "Magnetitfilter", icon: <ShieldCheck className="h-6 w-6" />, image: "/images/clean-water-stream.jpg" },
                  { title: "Hydroforer", icon: <Droplets className="h-6 w-6" />, image: "/images/hero-water.jpg" },
                ].map((item, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                    <Card className="border-none shadow-none group cursor-pointer overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden rounded-2xl mb-4">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-[#256DB5] transition-colors">{item.title}</h3>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-start gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Analysis Preview Section */}
        <section className="py-24 bg-[#E6F0F9]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  Hur vet jag om vattnet går att dricka?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Många vattenproblem syns eller luktar inte, men kan ändå vara skadliga för hälsan eller din utrustning. 
                  Ett ackrediterat vattenprov är det enda sättet att få svart på vitt vad ditt vatten innehåller.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-primary">✓</div>
                    <span>Ackrediterat laboratorieprov</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-primary">✓</div>
                    <span>Svar inom 7-10 arbetsdagar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-primary">✓</div>
                    <span>Personlig rådgivning av experter</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-[#256DB5]">
                  Beställ din analys här
                </Button>
              </div>

              <Card className="bg-white border-none shadow-2xl rounded-3xl overflow-hidden">
                <div className="p-8 border-b bg-gray-50 flex justify-between items-center">
                  <h3 className="font-bold uppercase tracking-wider text-sm text-gray-500">Exempel på provresultat</h3>
                  <Badge variant="destructive">Hög järnhalt</Badge>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Analys</TableHead>
                      <TableHead>Resultat</TableHead>
                      <TableHead>Enhet</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Färg</TableCell>
                      <TableCell>42</TableCell>
                      <TableCell>mg/lPt</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">pH 25°C</TableCell>
                      <TableCell>7.3</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow className="text-red-600 bg-red-50/50">
                      <TableCell className="font-medium font-bold">Järn, Fe</TableCell>
                      <TableCell className="font-bold">0.99</TableCell>
                      <TableCell>mg/l</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mangan, Mn</TableCell>
                      <TableCell>0.09</TableCell>
                      <TableCell>mg/l</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="p-6 bg-gray-50 text-center text-xs text-muted-foreground italic">
                  * Resultat baserat på SIS 028129 standardmetod.
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden bg-[#000000] text-white">
          <div className="absolute inset-0 opacity-20">
             <Image src="/images/clean-water-stream.jpg" alt="Background" fill className="object-cover" />
          </div>
          <div className="container relative mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Vi hjälper dig från start till renat vatten</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Kontakta oss för fri rådgivning eller boka ett hembesök för vattenanalys.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-[#256DB5] hover:bg-[#1e5894] h-14 px-10 text-lg">
                Kontakta support
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 h-14 px-10 text-lg">
                Hitta återförsäljare
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <span className="text-2xl font-bold tracking-tighter text-black mb-6 block">FILTRENA</span>
              <p className="text-[#B0B0B0] text-sm leading-relaxed">
                Din expert på vattenrening i Sverige. Vi levererar hållbara lösningar för rent vatten.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Kontakt</h4>
              <ul className="space-y-4 text-sm text-[#B0B0B0]">
                <li className="flex items-center gap-2"><MapPin size={16} /> Hammargatan 9, Växjö</li>
                <li className="flex items-center gap-2"><Phone size={16} /> 0470-75 99 00</li>
                <li className="flex items-center gap-2"><Mail size={16} /> info@filtrena.se</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Filtrena</h4>
              <ul className="space-y-4 text-sm text-[#B0B0B0]">
                <li><Link href="#" className="hover:text-[#256DB5]">Om oss</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5]">Karriär</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5]">Manualer</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5]">Hållbarhet</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-[#B0B0B0]">
                <li><Link href="#" className="hover:text-[#256DB5]">Garanti</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5]">Reklamation</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5]">Vanliga frågor</Link></li>
                <li><Link href="#" className="hover:text-[#256DB5]">Mitt konto</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#B0B0B0]">
            <p>© Filtrena AB - org.nr 556605-8243</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-black">Integritetspolicy</Link>
              <Link href="#" className="hover:text-black">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

