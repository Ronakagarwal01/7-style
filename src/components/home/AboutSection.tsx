import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { SALON_INFO } from '@/data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-36 bg-[#0E0C0A] text-[#FBF8F3] overflow-hidden border-t border-[#C59D5F]/15">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C59D5F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Typography & Counter Badge */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59D5F]/30 bg-[#161210] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-6">
                <Sparkles className="w-3 h-3" />
                HERITAGE & VISION
              </div>

              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] tracking-tight text-[#FBF8F3]">
                BEAUTY,<br />
                <span className="italic font-light text-[#E5C384]">WITH A</span><br />
                SIGNATURE.
              </h2>
            </div>

            {/* EST. 2016 Graphic Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 p-6 rounded-2xl bg-[#171311] border border-[#C59D5F]/25 flex items-center justify-between max-w-xs shadow-xl"
            >
              <div>
                <span className="font-editorial text-4xl font-bold text-gold-gradient block">
                  2016
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] text-[#9E948C] uppercase font-semibold">
                  ESTABLISHED IN BHOPAL
                </span>
              </div>
              <div className="w-12 h-12 rounded-full border border-[#C59D5F]/40 flex items-center justify-center bg-[#201B18] text-[#C59D5F]">
                <Award className="w-5 h-5" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="font-editorial text-xl sm:text-2xl text-[#EADCC9] leading-relaxed mb-6 font-light">
              "We believe looking and feeling your best go hand in hand. Every cut, tint, and touch is tailored to honor your individual beauty."
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#9E948C] leading-relaxed font-sans font-light mb-8">
              <p>
                Founded in 2016, <strong className="text-[#FBF8F3] font-medium">7 Styles Unisex Salon</strong> stands as Bhopal's pioneer luxury salon sanctuary at Arera Colony. Our team was brought together by a shared dedication to elevated aesthetic craftsmanship and sincere client relaxation.
              </p>
              <p>
                Whether you visit us for a bespoke razor-finished fade, an intensive Keratin repair, an oxygenating facial, or your dream matrimonial bridal makeover, our specialists take the time to listen, assess your personal nuances, and execute with perfection.
              </p>
            </div>

            {/* The 4 Core Disciplines */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#C59D5F]/15 mb-8">
              <div className="flex flex-col">
                <span className="font-editorial text-lg text-[#C59D5F] font-semibold">HAIR</span>
                <span className="text-[11px] text-[#9E948C]">Precision & Balayage</span>
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-lg text-[#C59D5F] font-semibold">BEAUTY</span>
                <span className="text-[11px] text-[#9E948C]">O3+ & Gold Facials</span>
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-lg text-[#C59D5F] font-semibold">GROOMING</span>
                <span className="text-[11px] text-[#9E948C]">Shave & Beard Sculpt</span>
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-lg text-[#C59D5F] font-semibold">BRIDAL</span>
                <span className="text-[11px] text-[#9E948C]">Airbrush & HD MAC</span>
              </div>
            </div>

            {/* Link to full About page */}
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.2em] text-[#C59D5F] hover:text-[#FBF8F3] uppercase transition-colors group"
              >
                <span>READ THE COMPLETE BRAND STORY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
