"use client";

import { motion } from "framer-motion";
import { Scissors, Star, Users, Clock, ShieldCheck, MapPin, ChevronRight, Phone, Calendar } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Blog", href: "#blog" },
  { name: "FAQ", href: "#faq" },
];

const SERVICES = [
  {
    title: "Professional Fade Haircuts in Pflugerville",
    description: "Precision tapers, skin fades, and drop fades tailored to your head shape and hair texture.",
    icon: <Scissors className="w-6 h-6 text-accent" />,
    price: "From $35",
  },
  {
    title: "Kids Haircuts in Pflugerville, TX",
    description: "Patient, professional grooming for the younger generation in a family-friendly environment.",
    icon: <Users className="w-6 h-6 text-accent" />,
    price: "From $25",
  },
  {
    title: "Premium Beard Trims & Lineups",
    description: "Sharp lines and balanced grooming to complement your facial structure and style.",
    icon: <Scissors className="w-6 h-6 text-accent" />,
    price: "From $25",
  },
];

const DIFFERENTIATORS = [
  {
    title: "8-Chair Availability",
    description: "Less wait time with our experienced team of 8 professional barbers.",
    icon: <Clock className="w-8 h-8 text-accent" />,
  },
  {
    title: "Consistent 5.0⭐ Reputation",
    description: "Over 280 verified reviews from our loyal Pflugerville community.",
    icon: <Star className="w-8 h-8 text-accent" />,
  },
  {
    title: "Professional Atmosphere",
    description: "A clean, modern, and welcoming environment for every client.",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
  },
];

const FAQS = [
  {
    question: "Do you accept walk-ins in Pflugerville?",
    answer: "While we prioritize appointments via Booksy to ensure quality, we do accommodate walk-ins when possible. Booking in advance is recommended for a guaranteed slot.",
  },
  {
    question: "How much does a fade cost in Pflugerville?",
    answer: "Our professional fade haircuts start at $35. This includes a consultation and a precision finish.",
  },
  {
    question: "What is the best barbershop near 78660?",
    answer: "Bigger Than Business is a top-rated choice in the 78660 area, known for our expert barbers and community vibe.",
  },
  {
    question: "Do you cut kids' hair?",
    answer: "Yes, we offer specialized haircuts for kids in Pflugerville, ensuring a comfortable experience for them.",
  },
  {
    question: "How often should I get a haircut?",
    answer: "To maintain a sharp look, we recommend visiting our Pflugerville barbershop every 2-3 weeks.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 overflow-x-hidden">
      {/* Sticky Call Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="tel:5125905235"
          className="flex items-center justify-center w-14 h-14 bg-accent text-primary rounded-full shadow-lg border border-accent/20 hover:scale-110 transition-transform"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-serif font-bold text-gradient">Bigger Than Business</div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}
            <a
              href="https://booksy.com"
              target="_blank"
              className="px-6 py-2.5 bg-accent text-primary text-sm font-bold rounded-full hover:bg-accent/90 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Bigger Than Business Barbershop"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin className="w-3 h-3" /> Pflugerville's Premier Barbershop
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              The <span className="text-gradient">Best Barbershop</span> in Pflugerville
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl">
              Precision grooming meets community connection. Located in Pflugerville, TX, we specialize in high-intent
              styling—from surgical fades to classic gentleman's cuts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://booksy.com"
                className="px-10 py-4 bg-accent text-primary text-lg font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 text-center"
              >
                Book Your Cut
              </a>
              <a
                href="#services"
                className="px-10 py-4 bg-white/5 border border-white/10 text-lg font-bold rounded-full hover:bg-white/10 transition-all text-center"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/barber-work.png" alt="What Makes a Barbershop the Best" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                What Makes a Barbershop the Best in Pflugerville?
              </h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  Being the **best barbershop in Pflugerville** isn't just about the tools—it's about the mastery of the craft.
                  Our experienced barbers combine classical techniques with modern trends to ensure every client leaves
                  feeling like the best version of themselves.
                </p>
                <p>
                  We focus on a family-friendly environment and consistent results that have built our 5.0-star reputation.
                  In a rapidly growing city like Pflugerville, we stand as a cornerstone of quality, providing a clean,
                  professional atmosphere where every chair is manned by a specialist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Mastercrafted Services</h2>
            <p className="text-foreground/60">Specialized grooming designed to highlight your natural features.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl glass border border-white/5 hover:border-accent/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/60 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-accent font-bold">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section id="why-us" className="py-24 bg-accent/5">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Pflugerville Trusts Us</h2>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-foreground/60 max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser / Face Shape Guide */}
      <section id="blog" className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Finding the Best Haircuts for Your Face Shape
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Unlock your signature look with our expert guide on matching haircut geometry with your face shape.
                Whether you have an oval, round, or square face, our Pflugerville barbers specialize in
                cuts that enhance your character.
              </p>
              <a href="/blog/face-shape-guide" className="inline-flex items-center gap-2 group text-accent font-bold text-lg">
                Read the Full Guide <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative aspect-video rounded-3xl overflow-hidden">
                <Image src="/shop-atmosphere.png" alt="Pflugerville Barbershop Atmosphere" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="p-8 rounded-2xl glass border border-white/5">
                <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                <p className="text-foreground/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-8">Proudly Serving Our Neighborhoods</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-foreground/40 font-medium">
            <span>Pflugerville</span>
            <span>78660</span>
            <span>Stone Hill</span>
            <span>Falcon Pointe</span>
            <span>Blackhawk</span>
            <span>Round Rock</span>
            <span>North Austin</span>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready for Your Transformation?</h2>
          <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
            Join the community at Bigger Than Business. Book your consultation today and experience
            the best haircut in Pflugerville.
          </p>
          <a
            href="https://booksy.com"
            className="inline-block px-12 py-5 bg-accent text-primary text-xl font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-xl shadow-accent/20"
          >
            Book Appointment Now
          </a>
          <div className="mt-24 pt-12 border-t border-white/5 text-foreground/40 text-sm">
            <p>© {new Date().getFullYear()} Bigger Than Business Barbershop. All Rights Reserved.</p>
            <p className="mt-2">2700 W Pecan St Suite 101, Pflugerville, TX 78660</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
