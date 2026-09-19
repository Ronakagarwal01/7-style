import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { Hero3D } from './Hero3D';
import { SALON_INFO } from '@/data/salonData';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grain-overlay bg-[#0A0807]">
      {/* Cinematic Background Layer with Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
          alt="7 Styles Luxury Salon Bhopal"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.12] scale-105"
        />
        {/* Dark warm editorial gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0807] via-[#0A0807]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0807] via-transparent to-[#0A0807]/70" />
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(10,8,7,0.9)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Editorial Content (Asymmetrical layout) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Small Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C59D5F]/35 bg-[#171311]/80 backdrop-blur-sm text-[#C59D5F] text-[10px] sm:text-xs font-sans font-semibold tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              7 STYLES UNISEX SALON • BHOPAL
            </div>
            <span className="hidden sm:inline-block text-[11px] text-[#9E948C] tracking-widest font-sans">
              EST. 2016
            </span>
          </motion.div>

          {/* Huge Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 sm:mb-6"
          >
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] sm:leading-[1.02] tracking-tight text-[#FBF8F3]">
              <span className="block font-light italic text-[#FBF8F3]/90">
                YOUR STYLE.
              </span>
              <span className="block font-semibold text-gold-gradient tracking-tight mt-1">
                YOUR SIGNATURE.
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-sm sm:text-lg md:text-xl text-[#9E948C] font-sans font-light leading-relaxed max-w-xl mb-8 sm:mb-10"
          >
            Premium hair sculpting, bespoke colour transformations, and high-fashion bridal artistry in Arera Colony, Bhopal — crafted meticulously around you.
          </motion.p>

          {/* CTAs - full width on mobile with large touch targets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6"
          >
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(197,157,95,0.45)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#C59D5F]/40 hover:border-[#C59D5F] text-[#FBF8F3] font-sans font-medium text-xs tracking-[0.18em] uppercase hover:bg-[#C59D5F]/10 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59D5F] group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Quick Verified Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 pt-8 border-t border-[#C59D5F]/15 flex flex-wrap items-center gap-6 text-xs text-[#9E948C]"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#C59D5F] font-semibold text-sm">4.7 ★</span>
              <span>697 Google Reviews</span>
            </div>
            <span className="text-[#C59D5F]/40">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C59D5F]" />
              <span>Arera Colony, Bhopal</span>
            </div>
            <span className="text-[#C59D5F]/40">•</span>
            <span>Unisex Salon & Bridal Studio</span>
          </motion.div>
        </div>

        {/* Right 3D Brand Element Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <Hero3D />
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none text-[10px] tracking-[0.25em] text-[#C59D5F]/70 font-sans uppercase">
        <span>SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-1 h-5 rounded-full bg-[#C59D5F]/40"
        />
      </div>
    </section>
  );
};
