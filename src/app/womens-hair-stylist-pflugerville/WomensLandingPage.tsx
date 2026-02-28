"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, MapPin, Heart, Scissors, Wind, Crown, Star, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const SERVICES = [
  {
    title: "Women's Haircuts",
    description: "Precision cuts tailored to your face shape, lifestyle, and personal style. From bold transformations to subtle refreshes.",
    icon: <Scissors className="w-6 h-6" />,
    price: "From $55",
  },
  {
    title: "Blowouts",
    description: "Salon-perfect blowouts that leave your hair smooth, voluminous, and ready to turn heads. Long-lasting, professional results.",
    icon: <Wind className="w-6 h-6" />,
    price: "From $45",
  },
  {
    title: "Silk Press",
    description: "Luxurious silk press for silky, smooth, straight hair with stunning shine. Gentle heat protection and expert styling.",
    icon: <Sparkles className="w-6 h-6" />,
    price: "From $75",
  },
  {
    title: "Trim & Style",
    description: "Keep your look fresh with precision trims and expert styling. Maintain healthy ends while elevating your everyday style.",
    icon: <Scissors className="w-6 h-6" />,
    price: "From $40",
  },
  {
    title: "Natural Hair Care",
    description: "Specialized care for natural hair including moisturizing treatments, protective styles, and personalized consultations.",
    icon: <Crown className="w-6 h-6" />,
    price: "From $60",
  },
  {
    title: "Specialty Styling",
    description: "Event styling, braiding, and custom looks for special occasions. Let us create the perfect style for your moment.",
    icon: <Star className="w-6 h-6" />,
    price: "From $65",
  },
];

const STYLIST_HIGHLIGHTS = [
  {
    title: "Personalized Consultations",
    description: "Every appointment begins with understanding your hair goals, lifestyle, and preferences. We listen first, then create.",
    icon: <Heart className="w-7 h-7" />,
  },
  {
    title: "Healthy Hair Focus",
    description: "We believe beautiful hair starts with healthy hair. Every service includes scalp and hair health assessment.",
    icon: <Sparkles className="w-7 h-7" />,
  },
  {
    title: "Expert Skill & Artistry",
    description: "Our stylists bring years of experience, continuous training, and genuine passion for women's hair care.",
    icon: <Crown className="w-7 h-7" />,
  },
];

export default function WomensLandingPage() {
  const bookingUrl = "https://www.biggerthan-business.com/";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-amber-300 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
              BTB
            </div>
            <span className="text-xl font-serif font-semibold text-stone-800">
              Bigger Than Business
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-stone-600 hover:text-rose-600 transition-colors hidden sm:block">
              Services
            </a>
            <a href="#stylists" className="text-sm font-medium text-stone-600 hover:text-rose-600 transition-colors hidden sm:block">
              Our Stylists
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              Book Now <Calendar className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-stone-100">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur text-stone-700 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm border border-rose-100">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                Pflugerville, TX
              </div>

              {/* Main headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-semibold leading-tight mb-6 text-stone-800">
                Your Go-To{" "}
                <span className="text-rose-600 italic">Women's Hair Stylist</span>{" "}
                in Pflugerville
              </h1>

              {/* Supporting paragraph */}
              <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-10 leading-relaxed max-w-2xl font-light">
                Experience personalized hair care in a welcoming atmosphere.
                From silk press to natural hair care, we celebrate your unique beauty.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={bookingUrl}
                  target="_blank"
                  className="px-10 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-base sm:text-lg font-medium rounded-full hover:shadow-xl hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
                >
                  Book Your Appointment <Calendar className="w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="px-10 py-4 bg-white text-stone-700 text-base sm:text-lg font-medium rounded-full hover:shadow-lg border border-stone-200 hover:border-rose-200 transition-all text-center"
                >
                  Explore Services
                </a>
              </div>

              {/* Trust line */}
              <p className="text-stone-500 text-sm flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>5.0 rated by women in Pflugerville</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Hero image placeholder - client should replace with actual image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block">
          {/* Alt text suggestion: Woman with beautiful styled hair smiling confidently at salon */}
          <div className="absolute inset-0 bg-gradient-to-l from-rose-100/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-stone-400">
              <Sparkles className="w-20 h-20 mx-auto mb-4 opacity-50" />
              <p className="font-serif text-xl">Your Image Here</p>
              <p className="text-sm mt-2">Replace with salon photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-center mb-16 text-stone-800">
              Created For You
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {/* Busy Professionals */}
              <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-rose-50 to-amber-50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-stone-800">
                  Busy Professionals
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Your time is valuable. We provide efficient, high-quality services that fit your schedule without compromising on results.
                </p>
              </div>

              {/* Moms */}
              <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-stone-50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-stone-800">
                  Moms Who Deserve a Moment
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Carve out time for yourself in a calm, welcoming space. Relax and let us pamper you while you recharge.
                </p>
              </div>

              {/* Consistency Seekers */}
              <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-stone-50 to-rose-50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Crown className="w-8 h-8 text-stone-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-stone-800">
                  Women Who Want Consistency
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Say goodbye to unpredictable results. Our experienced stylists deliver beautiful, consistent outcomes every visit.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-stone-100 via-rose-50 to-amber-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4 text-stone-800">
              Premium Women's Hair Services
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Expert care for every hair type and style. Every service is tailored to you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center mb-6 text-rose-600 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-stone-800">
                  {service.title}
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="text-lg font-semibold text-rose-600">
                  {service.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Stylists Section */}
      <section id="stylists" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-center mb-6 text-stone-800">
              Meet Our Stylists
            </h2>
            <p className="text-lg text-stone-600 text-center mb-16 max-w-2xl mx-auto">
              Passionate professionals dedicated to helping you look and feel your best.
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              {STYLIST_HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center mx-auto mb-6 text-rose-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-4 text-stone-800">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stylist image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-16 relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50 p-16 text-center"
            >
              {/* Alt text suggestion: Professional woman hair stylist consulting with client in modern salon */}
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-rose-300" />
              <p className="font-serif text-xl text-stone-600 mb-2">Our Team</p>
              <p className="text-stone-500 text-sm">Replace with stylist team photo</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-rose-500 via-rose-600 to-amber-500 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold mb-6">
              Your Best Hair Awaits
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed text-white/90 max-w-2xl mx-auto">
              Ready to experience the difference a professional women's hair stylist in Pflugerville can make?
              Book your appointment today and let us help you shine.
            </p>

            <a
              href={bookingUrl}
              target="_blank"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-rose-600 text-lg sm:text-xl font-medium rounded-full hover:shadow-2xl hover:scale-105 transition-all"
            >
              Book Your Appointment <Calendar className="w-5 h-5" />
            </a>

            <p className="mt-8 text-white/70 text-sm">
              Appointments recommended. Walk-ins welcome based on availability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-stone-900 text-stone-400">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="font-serif text-xl text-white mb-2">Bigger Than Business</p>
              <p className="text-sm">Women's Hair Services in Pflugerville, TX</p>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2700+W+Pecan+St+Suite+101,+Pflugerville,+TX+78660"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors text-center"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">2700 W Pecan St Suite 101, Pflugerville, TX 78660</span>
            </a>

            <div className="text-center md:text-right">
              <p className="text-sm">© {new Date().getFullYear()} Bigger Than Business</p>
              <a href={`tel:5125905235`} className="text-stone-300 hover:text-white transition-colors text-sm">
                512-590-5235
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
