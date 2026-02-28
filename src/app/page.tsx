"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Scissors, Star, Users, Clock, ShieldCheck, MapPin, ChevronRight, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "The Experience", href: "#why-us" },
  { name: "Style Guide", href: "#blog" },
  { name: "FAQ", href: "#faq" },
];

const SERVICES = [
  {
    title: "Surgical Fade Haircuts",
    description: "The cleanest blends in Pflugerville. Skin fades, tapers, and drop fades engineered for perfection.",
    icon: <Scissors className="w-6 h-6" />,
    price: "From $35",
    color: "bg-blue-600",
  },
  {
    title: "Young Legends (Kids)",
    description: "Patient, expert grooming for our youngest clients in a high-energy, friendly environment.",
    icon: <Users className="w-6 h-6" />,
    price: "From $25",
    color: "bg-yellow-500",
  },
  {
    title: "Master Beard Sculpting",
    description: "Sharp outlines and volume balancing to emphasize your jawline and facial geometry.",
    icon: <Scissors className="w-6 h-6" />,
    price: "From $25",
    color: "bg-red-500",
  },
];

const DIFFERENTIATORS = [
  {
    title: "High-Output: 8 Chairs",
    description: "Speed meets precision. Minimum wait times with our full team of professional specialists.",
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: "Elite 5.0⭐ Status",
    description: "Pflugerville's top-rated destination based on 280+ verified mastercraft cuts.",
    icon: <Star className="w-8 h-8" />,
  },
  {
    title: "Next-Gen Atmosphere",
    description: "Vibrant, professional, and built for the community. Where culture and craft collide.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
];

const FAQS = [
  {
    question: "Do you accept walk-ins?",
    answer: "We primarily operate by appointment to ensure every client receives our full attention and a high-quality experience. However, when availability allows across our eight chairs, we are happy to accommodate walk-in clients in Pflugerville.",
  },
  {
    question: "Cost for a premium fade?",
    answer: "Our master-tier fade haircuts start at $35, including a shape-up and precision finish.",
  },
  {
    question: "Best barbershop near 78660?",
    answer: "Bigger Than Business is the highest-rated shop serving the 78660, Stone Hill, and Falcon Pointe areas.",
  },
  {
    question: "Is it kid-friendly?",
    answer: "Absolutely. We pride ourselves on being a family-centric shop where kids feel like legends.",
  },
];

export default function LandingPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-primary/20 overflow-x-hidden">
      {/* Sticky Call Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden scale-animate">
        <a
          href="tel:5125905235"
          className="flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass border-b border-black/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-28 h-28 transition-transform group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Bigger Than Business Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-serif font-black tracking-tighter text-primary italic">
              BTB
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2">
                {link.name}
              </a>
            ))}
            <a
              href="https://www.biggerthan-business.com/"
              target="_blank"
              className="px-8 py-3 bg-primary text-white text-sm font-black rounded-full hover:shadow-xl hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              BOOK NOW <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Vibrant Vibe */}
      <section ref={targetRef} className="relative h-screen flex items-center pt-20 overflow-hidden">
        <motion.div style={{ opacity, scale, y }} className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Bigger Than Business Barbershop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* BTB Wings Logo - Hero Section Top Left */}
          <div className="mb-3 sm:mb-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
              <Image
                src="/logo-new.png"
                alt="Bigger Than Business - BTB Wings Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary text-foreground text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 sm:mb-8 shadow-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" /> Pflugerville's #1 Destination
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-tight mb-6 sm:mb-8">
                Bigger Than <br />
                <span className="text-primary italic animate-pulse">Business.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-medium mb-8 sm:mb-12 leading-relaxed max-w-xl border-l-4 border-primary pl-4 sm:pl-6">
                Not just a cut, a connection. Experience the most vibrant grooming atmosphere in Pflugerville, TX.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="https://www.biggerthan-business.com/"
                  className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-primary text-white text-base sm:text-lg md:text-xl font-black rounded-full hover:shadow-2xl hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
                >
                  SECURE YOUR CHAIR <Scissors className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#services"
                  className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-secondary text-foreground text-base sm:text-lg md:text-xl font-black rounded-full hover:shadow-xl hover:scale-105 transition-all text-center"
                >
                  EXPLORE STYLES
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Accent Shapes */}
        <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce duration-[3s]">
          <div className="w-32 h-32 rounded-3xl bg-secondary rotate-12 flex items-center justify-center text-primary font-black text-2xl shadow-2xl">
            5.0 ⭐
          </div>
        </div>
      </section>

      {/* Services Section - Popping Blocks */}
      <section id="services" className="py-16 sm:py-20 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">
            <div className="max-w-2xl w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-4 sm:mb-6">Elite Grooming Services</h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground/60 border-t-2 border-primary pt-4 sm:pt-6 inline-block">Tailored precision for the modern gentleman.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] bg-white shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className={cn("w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-white shadow-lg transition-transform group-hover:rotate-12", service.color)}>
                  <div className="scale-75 sm:scale-90 md:scale-100">{service.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8 leading-relaxed font-medium">{service.description}</p>
                <div className="text-xl sm:text-2xl font-black text-primary">{service.price}</div>
                <div className="absolute top-0 right-0 p-4 sm:p-6 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Scissors className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rotate-[135deg]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section - "What Makes Us Best" */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-serif font-black mb-12 italic"
          >
            Pflugerville's <span className="text-primary not-italic underline decoration-secondary decoration-8">Gold Standard</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 text-left items-center">
            <div className="space-y-8 text-xl font-medium leading-relaxed">
              <p className="text-foreground">
                Being the <span className="font-black text-primary">best barbershop in Pflugerville</span> isn't just about cutting hair—it's about building a legacy.
                Our 8-chair facility ensures that excellence is always available when you need it most.
              </p>
              <p className="text-foreground/60">
                From Stone Hill to Falcon Pointe, our reputation is forged in every lineup and every fade.
                We've built a space where professionalism meets the vibrancy of our local culture.
              </p>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <Image src="/barber-work.png" alt="What Makes Us Best" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section id="why-us" className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container mx-auto px-6 text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-4">The BTB Difference</h2>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-16">
            {DIFFERENTIATORS.map((item) => (
              <motion.div
                key={item.title}
                className="text-center"
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex items-center justify-center mb-8 p-6 rounded-full bg-white/10 text-secondary">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black mb-6">{item.title}</h3>
                <p className="text-white/70 text-lg font-medium max-w-xs mx-auto leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser / Face Shape Guide - PHENOMENAL VIBRANT BACKGROUND */}
      <section id="blog" className="relative py-48 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <Image src="/face-shape-bg.jpg" alt="Vibrant Barbershop Work" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-vibrant-gradient opacity-90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/20 to-primary/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black mb-8 sm:mb-10 md:mb-12 leading-tight tracking-tighter"
            >
              Master Your <br />
              <span className="text-secondary italic underline decoration-white">Face Shape</span>
            </motion.h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-10 sm:mb-12 md:mb-16 leading-relaxed text-white/90">
              Stop guessing. Start styling. Our exclusive guide reveals the surgical precision behind
              matching the perfect haircut and fade with your unique facial geometry.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <a href="/blog/face-shape-guide" className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white text-primary rounded-full font-black text-lg sm:text-xl md:text-2xl shadow-2xl hover:bg-secondary hover:text-foreground transition-all">
                ACCESS THE STYLE GUIDE <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-4 sm:mb-6">Expert Insights</h2>
            <div className="w-16 sm:w-20 md:w-24 h-2 bg-primary mx-auto" />
          </div>
          <div className="space-y-6 sm:space-y-8">
            {FAQS.map((faq) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-primary">{faq.question}</h3>
                <p className="text-foreground/70 text-base sm:text-lg leading-relaxed font-medium">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-white/50 border-t border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6 md:px-8 text-base sm:text-xl md:text-2xl font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] items-center">
              <span className="hidden sm:inline">Pflugerville</span><span className="sm:hidden">PFLUGERVILLE</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full flex-shrink-0" />
              <span>78660</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full flex-shrink-0" />
              <span className="hidden sm:inline">Stone Hill</span><span className="sm:hidden">STONE HILL</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full flex-shrink-0" />
              <span className="hidden sm:inline">Falcon Pointe</span><span className="sm:hidden">FALCON POINTE</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full flex-shrink-0" />
              <span className="hidden lg:inline">Blackhawk</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full flex-shrink-0" />
              <span className="hidden md:inline">Round Rock</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full flex-shrink-0" />
              <span className="hidden sm:inline">North Austin</span><span className="sm:hidden">N AUSTIN</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="py-20 sm:py-28 md:py-32 lg:py-40 text-center bg-white text-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black mb-8 sm:mb-10 md:mb-12 tracking-tight sm:tracking-tighter">Your Best Self <br /><span className="text-primary italic animate-pulse">Starts Here.</span></h2>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto border-y-2 border-slate-100 py-6 sm:py-8 px-4">
              Join the legends at Bigger Than Business. Book your master-craft cut today and elevate your entire presence.
            </p>
            <a
              href="https://www.biggerthan-business.com/"
              className="inline-block px-10 sm:px-12 md:px-14 lg:px-16 py-4 sm:py-6 md:py-8 bg-primary text-white text-xl sm:text-2xl md:text-3xl font-black rounded-full hover:shadow-[0_20px_50px_rgba(30,64,175,0.3)] hover:scale-105 transition-all"
            >
              BOOK NOW!!!
            </a>
          </motion.div>

          <div className="mt-20 sm:mt-32 md:mt-40 pt-10 sm:pt-16 md:pt-20 border-t-2 border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-12 text-foreground/40 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">
            <p className="text-center md:text-left">© {new Date().getFullYear()} Bigger Than Business Barbershop</p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2700+W+Pecan+St+Suite+101,+Pflugerville,+TX+78660"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 text-primary font-black hover:text-accent transition-colors cursor-pointer text-center max-w-xs sm:max-w-none px-4"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /> <span className="truncate">2700 W Pecan St Suite 101, Pflugerville, TX 78660</span>
            </a>
            <p>Built for Legends</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
