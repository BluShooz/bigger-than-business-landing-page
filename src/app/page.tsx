"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Scissors, Star, Users, Clock, ShieldCheck, MapPin, ChevronRight, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              className="text-2xl font-serif font-black tracking-tighter text-primary italic"
            >
              BTB <span className="text-secondary not-italic font-sans font-bold">BARBERSHOP</span>
            </motion.div>
          </div>
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground text-xs font-black uppercase tracking-widest mb-8 shadow-sm">
                <MapPin className="w-4 h-4 text-primary" /> Pflugerville's #1 Destination
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-black leading-tight mb-8">
                Bigger Than <br />
                <span className="text-primary italic animate-pulse">Business.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground font-medium mb-12 leading-relaxed max-w-xl border-l-4 border-primary pl-6">
                Not just a cut, a connection. Experience the most vibrant grooming atmosphere in Pflugerville, TX.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="https://www.biggerthan-business.com/"
                  className="px-12 py-5 bg-primary text-white text-xl font-black rounded-full hover:shadow-2xl hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
                >
                  SECURE YOUR CHAIR <Scissors className="w-6 h-6" />
                </a>
                <a
                  href="#services"
                  className="px-12 py-5 bg-secondary text-foreground text-xl font-black rounded-full hover:shadow-xl hover:scale-105 transition-all text-center"
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
      <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">Elite Grooming Services</h2>
              <p className="text-xl text-foreground/60 border-t-2 border-primary pt-6 inline-block">Tailored precision for the modern gentleman.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg transition-transform group-hover:rotate-12", service.color)}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                <p className="text-foreground/70 mb-8 leading-relaxed font-medium">{service.description}</p>
                <div className="text-2xl font-black text-primary">{service.price}</div>
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Scissors className="w-24 h-24 rotate-[135deg]" />
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
              className="text-5xl md:text-8xl font-serif font-black mb-12 leading-tight tracking-tighter"
            >
              Master Your <br />
              <span className="text-secondary italic underline decoration-white">Face Shape</span>
            </motion.h2>
            <p className="text-xl md:text-3xl font-medium mb-16 leading-relaxed text-white/90">
              Stop guessing. Start styling. Our exclusive guide reveals the surgical precision behind
              matching the perfect haircut and fade with your unique facial geometry.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <a href="/blog/face-shape-guide" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-primary rounded-full font-black text-2xl shadow-2xl hover:bg-secondary hover:text-foreground transition-all">
                ACCESS THE STYLE GUIDE <ChevronRight className="w-8 h-8" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">Expert Insights</h2>
            <div className="w-24 h-2 bg-primary mx-auto" />
          </div>
          <div className="space-y-8">
            {FAQS.map((faq) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-2xl font-black mb-6 text-primary">{faq.question}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed font-medium">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-primary text-white/50 border-t border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8 text-2xl font-black uppercase tracking-[0.3em] items-center">
              <span>Pflugerville</span>
              <div className="w-3 h-3 bg-secondary rounded-full" />
              <span>78660</span>
              <div className="w-3 h-3 bg-white/20 rounded-full" />
              <span>Stone Hill</span>
              <div className="w-3 h-3 bg-secondary rounded-full" />
              <span>Falcon Pointe</span>
              <div className="w-3 h-3 bg-white/20 rounded-full" />
              <span>Blackhawk</span>
              <div className="w-3 h-3 bg-secondary rounded-full" />
              <span>Round Rock</span>
              <div className="w-3 h-3 bg-white/20 rounded-full" />
              <span>North Austin</span>
              <div className="w-3 h-3 bg-secondary rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="py-40 text-center bg-white text-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-6xl md:text-9xl font-serif font-black mb-12 tracking-tighter">Your Best Self <br /><span className="text-primary italic animate-pulse">Starts Here.</span></h2>
            <p className="text-2xl text-foreground font-medium mb-16 max-w-3xl mx-auto border-y-2 border-slate-100 py-8">
              Join the legends at Bigger Than Business. Book your master-craft cut today and elevate your entire presence.
            </p>
            <a
              href="https://www.biggerthan-business.com/"
              className="inline-block px-16 py-8 bg-primary text-white text-3xl font-black rounded-full hover:shadow-[0_20px_50px_rgba(30,64,175,0.3)] hover:scale-105 transition-all"
            >
              BOOK NOW!!!
            </a>
          </motion.div>

          <div className="mt-40 pt-20 border-t-2 border-slate-50 flex flex-col md:flex-row justify-between items-center gap-12 text-foreground/40 font-bold uppercase tracking-widest text-sm">
            <p>© {new Date().getFullYear()} Bigger Than Business Barbershop</p>
            <div className="flex items-center gap-2 text-primary font-black">
              <MapPin className="w-4 h-4" /> 2700 W Pecan St Suite 101, Pflugerville, TX 78660
            </div>
            <p>Built for Legends</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
